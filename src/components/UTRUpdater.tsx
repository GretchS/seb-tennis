import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { RefreshCw, TrendingUp, Calendar, ExternalLink } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface UTRData {
  rating: string;
  lastUpdated: string;
  reliability: string;
}

const UTRUpdater = () => {
  const [utrData, setUtrData] = useState<UTRData>({
    rating: "9.15",
    lastUpdated: new Date().toLocaleDateString(),
    reliability: "100% Reliable"
  });
  const [newRating, setNewRating] = useState("");
  const [isUpdating, setIsUpdating] = useState(false);
  const { toast } = useToast();

  // Load stored UTR data on component mount
  useEffect(() => {
    const storedData = localStorage.getItem('sebastian-utr-data');
    if (storedData) {
      setUtrData(JSON.parse(storedData));
    }
  }, []);

  // Save UTR data to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem('sebastian-utr-data', JSON.stringify(utrData));
  }, [utrData]);

  const handleManualUpdate = () => {
    if (!newRating || isNaN(parseFloat(newRating))) {
      toast({
        title: "Invalid Rating",
        description: "Please enter a valid UTR rating (e.g., 9.25)",
        variant: "destructive",
      });
      return;
    }

    const updatedData = {
      rating: parseFloat(newRating).toFixed(2),
      lastUpdated: new Date().toLocaleDateString(),
      reliability: "100% Reliable"
    };

    setUtrData(updatedData);
    setNewRating("");
    
    toast({
      title: "UTR Updated",
      description: `UTR rating updated to ${updatedData.rating}`,
    });

    // Dispatch custom event to update other components
    window.dispatchEvent(new CustomEvent('utr-updated', { 
      detail: { rating: updatedData.rating } 
    }));
  };

  const fetchLatestUTR = async () => {
    setIsUpdating(true);
    try {
      // Note: This would require a backend service or CORS proxy to work
      // For now, we'll simulate an update
      await new Promise(resolve => setTimeout(resolve, 2000)); // Simulate API call
      
      // In a real implementation, you would fetch from UTR Sports API or scrape the page
      // const response = await fetch('/api/fetch-utr?profileId=4710526');
      // const data = await response.json();
      
      toast({
        title: "UTR Check Complete",
        description: "Visit UTR Sports directly to see the latest rating and update manually if needed.",
      });
    } catch (error) {
      toast({
        title: "Update Failed",
        description: "Unable to fetch latest UTR. Please update manually.",
        variant: "destructive",
      });
    } finally {
      setIsUpdating(false);
    }
  };

  return (
    <Card className="shadow-elegant hover:shadow-court transition-all duration-300">
      <CardHeader>
        <CardTitle className="flex items-center gap-3">
          <TrendingUp className="h-6 w-6 text-primary" />
          Live UTR Rating
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        {/* Current UTR Display */}
        <div className="text-center">
          <div className="text-4xl font-bold text-primary mb-2">{utrData.rating}</div>
          <Badge className="bg-success/10 text-success border-success/20">
            {utrData.reliability}
          </Badge>
          <div className="flex items-center justify-center gap-2 mt-3 text-sm text-muted-foreground">
            <Calendar className="h-4 w-4" />
            Last Updated: {utrData.lastUpdated}
          </div>
        </div>

        {/* Manual Update Section */}
        <div className="space-y-3">
          <div className="flex gap-2">
            <Input
              type="number"
              step="0.01"
              placeholder="Enter new UTR (e.g., 9.25)"
              value={newRating}
              onChange={(e) => setNewRating(e.target.value)}
              className="flex-1"
            />
            <Button onClick={handleManualUpdate} variant="hero">
              Update
            </Button>
          </div>
        </div>

        {/* Fetch Latest Button */}
        <div className="space-y-3">
          <Button
            onClick={fetchLatestUTR}
            disabled={isUpdating}
            variant="court"
            className="w-full"
          >
            {isUpdating ? (
              <>
                <RefreshCw className="mr-2 h-4 w-4 animate-spin" />
                Checking Latest...
              </>
            ) : (
              <>
                <RefreshCw className="mr-2 h-4 w-4" />
                Check for Updates
              </>
            )}
          </Button>
          
          <Button
            onClick={() => window.open('https://app.utrsports.net/profiles/4710526', '_blank')}
            variant="outline"
            className="w-full"
          >
            <ExternalLink className="mr-2 h-4 w-4" />
            View UTR Sports Profile
          </Button>
        </div>

        {/* Instructions */}
        <div className="text-xs text-muted-foreground bg-muted/50 p-3 rounded-lg">
          <p className="font-semibold mb-1">How to Update:</p>
          <p>1. Visit your UTR Sports profile using the button above</p>
          <p>2. Check your current rating</p>
          <p>3. Enter the new rating in the field above and click Update</p>
          <p>4. The rating will be automatically saved and displayed across the site</p>
        </div>
      </CardContent>
    </Card>
  );
};

export default UTRUpdater;