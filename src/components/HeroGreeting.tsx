import React from "react";

interface HeroGreetingProps {
  userName?: string;
  onEditName?: () => void;
}

export const HeroGreeting: React.FC<HeroGreetingProps> = ({ userName = "Sobat Wisata", onEditName }) => {
  return (
    <section className="px-5 pt-4 pb-2">
      <div className="flex items-start justify-between gap-3">
        <div className="flex flex-col">
          {/* Eyebrow Label */}
          <span className="text-xs font-bold text-primary uppercase tracking-wider">
            Selamat datang, {userName}
          </span>
          {/* H1 Headline: space-y 4px (mt-1) */}
          <h1 className="text-2xl font-bold text-on-surface tracking-tight mt-1 leading-tight">
            Mau jalan-jalan ke mana?
          </h1>
          {/* Deskripsi: space-y 8px (mt-2) */}
          <p className="text-sm text-on-surface-variant mt-2 leading-relaxed">
            Temukan destinasi & kebudayaan terbaik di Trenggalek.
          </p>
        </div>

        {/* Profile Avatar Button: 40px (10 * 4px) */}
        <button
          onClick={onEditName}
          title="Ubah Nama Pengguna"
          aria-label="Profil Pengguna"
          className="relative w-10 h-10 rounded-full bg-surface-container-high flex items-center justify-center text-on-surface shadow-sm active:scale-95 transition-transform cursor-pointer shrink-0 mt-0.5"
          type="button"
        >
          <span className="material-symbols-outlined text-[20px]">person</span>
          <span className="absolute top-1 right-1 w-2.5 h-2.5 bg-primary rounded-full ring-2 ring-surface"></span>
        </button>
      </div>
    </section>
  );
};
