import { useState, useEffect } from 'react';

interface UTRData {
  rating: string;
  lastUpdated: string;
  reliability: string;
}

export const useUTR = () => {
  const [utrData, setUtrData] = useState<UTRData>({
    rating: "9.15",
    lastUpdated: new Date().toLocaleDateString(),
    reliability: "100% Reliable"
  });

  useEffect(() => {
    // Load stored UTR data on mount
    const storedData = localStorage.getItem('sebastian-utr-data');
    if (storedData) {
      setUtrData(JSON.parse(storedData));
    }

    // Listen for UTR updates from other components
    const handleUTRUpdate = (event: CustomEvent) => {
      const storedData = localStorage.getItem('sebastian-utr-data');
      if (storedData) {
        setUtrData(JSON.parse(storedData));
      }
    };

    window.addEventListener('utr-updated', handleUTRUpdate as EventListener);

    return () => {
      window.removeEventListener('utr-updated', handleUTRUpdate as EventListener);
    };
  }, []);

  return utrData;
};

export default useUTR;