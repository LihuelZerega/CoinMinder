import React, { useEffect, useState } from 'react';
import axios from 'axios';

function VolumeH() {
  const [VolumeH, setH24Volume] = useState(0);

  useEffect(() => {
    const fetch24hVolume = async () => {
      try {
        const response = await axios.get(
          'https://api.coingecko.com/api/v3/global'
        );
        setH24Volume(response.data.data.total_volume.usd);
      } catch (error) {
        console.error('Error fetching 24h volume:', error);
      }
    };

    fetch24hVolume();
  }, []);

  return (
    <div>
      <h2>24h Trading Volume</h2>
      <p>Total 24h Trading Volume: ${VolumeH.toLocaleString()}</p>
    </div>
  );
}

export default VolumeH;
