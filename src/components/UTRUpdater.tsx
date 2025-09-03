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
const API_URL = "https://seb-tennis.vercel.app/"; // <-- Replace with your actual Vercel URL


const UTRUpdater = () => {
  const [utrData, setUtrData] = useState<UTRData>({
    rating: "9.15",
    lastUpdated: new Date().toLocaleDateString(),
    reliability: "100% Reliable"
  });
  const [newUtr, setNewUtr] = useState("");
  const [isUpdating, setIsUpdating] = useState(false);
  const { toast } = useToast();

  // Update UTR value
  const handleUpdate = async () => {
    const res = await fetch(API_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ utr: newUtr }),
    });
    const data = await res.json();
    setUtr(data.utr);
    setNewUtr("");
  };

  return (
    <div>
      <div>Current UTR: {utr}</div>
      <input
        value={newUtr}
        onChange={e => setNewUtr(e.target.value)}
        placeholder="Enter new UTR"
      />
      <button onClick={handleUpdate}>Update UTR</button>
    </div>
  );
};

export default UTRUpdater;
