import React from 'react';

function HeatMap() {
  return (
    <div>
      <iframe
        src="https://widgets.coingecko.com/coingecko-coin-heatmap-widget.js"
        height="400"
        loading="lazy"
      />
    </div>
  );
}

export default HeatMap;