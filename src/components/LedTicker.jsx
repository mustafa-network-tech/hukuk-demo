import React from 'react';

const TICKER_TEXT = 'Bu web sitesi gösterim amacıyla hazırlanmış bir demo sayfasıdır — Mustafa Öner | MK Digital Systems';

function LedTicker() {
  return (
    <div
      className="relative overflow-hidden bg-black py-2"
      role="marquee"
      aria-label={TICKER_TEXT}
    >
      <div className="led-ticker-track flex whitespace-nowrap">
        <span className="led-ticker-text text-[#FFD700] font-mono text-sm md:text-base tracking-wider px-4">
          {TICKER_TEXT}
        </span>
        <span className="led-ticker-text text-[#FFD700] font-mono text-sm md:text-base tracking-wider px-4" aria-hidden>
          {TICKER_TEXT}
        </span>
      </div>
      <style>{`
        .led-ticker-track {
          animation: led-ticker-scroll 45s linear infinite;
        }
        @keyframes led-ticker-scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .led-ticker-text {
          text-shadow: 0 0 8px rgba(255, 215, 0, 0.6);
        }
      `}</style>
    </div>
  );
}

export default LedTicker;
