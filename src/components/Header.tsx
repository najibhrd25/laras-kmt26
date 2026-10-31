import React from "react";

export const Header: React.FC = () => {
  return (
    <header className="fixed top-0 left-0 right-0 w-full z-40 pt-safe bg-surface/90 backdrop-blur-xl shadow-[0_1px_8px_rgba(0,0,0,0.03)] border-b border-surface-variant/40">
      <div className="max-w-md mx-auto h-16 px-margin-mobile flex items-center justify-between">
        <div className="flex items-center gap-2">
          {/* Authentic Javanese Batik Logo */}
          <div className="w-9 h-9 rounded-full overflow-hidden shadow-sm border border-secondary/30">
            <img
              src="/images/laras_logo.jpg"
              alt="Logo LARAS Trenggalek"
              className="w-full h-full object-cover"
            />
          </div>
          <span className="font-headline-sm text-headline-sm text-on-surface tracking-tight font-bold">
            LARAS
          </span>
        </div>
        <button
          aria-label="Profil Pengguna"
          className="w-11 h-11 flex items-center justify-center rounded-full hover:bg-surface-container transition-colors touch-manipulation cursor-pointer"
          type="button"
        >
          <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center shadow-sm">
            <span className="material-symbols-outlined text-on-primary text-[18px]">
              person
            </span>
          </div>
        </button>
      </div>
    </header>
  );
};
