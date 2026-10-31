import React from "react";
import { JELAJAH_ALL_ITEMS } from "../data/jelajahData";
import type { Destination } from "../types/destination";

interface JelajahViewProps {
  onSelectDestination: (dest: Destination) => void;
  onOpenFullCatalog: () => void;
}

export const JelajahView: React.FC<JelajahViewProps> = ({
  onSelectDestination,
  onOpenFullCatalog,
}) => {
  // Cukup 1 item per sub kategori sesuai instruksi USER:
  // "cukup 1 aja per sub, jadi budaya 1 umkm 1 lainnya satu juga."
  const topWisata = JELAJAH_ALL_ITEMS.filter((i) => i.catalogCategory === "PARIWISATA").slice(0, 1);
  const topUmkm = JELAJAH_ALL_ITEMS.filter((i) => i.catalogCategory === "UMKM").slice(0, 1);
  const topBudaya = JELAJAH_ALL_ITEMS.filter((i) => i.catalogCategory === "BUDAYA").slice(0, 1);

  return (
    <div className="px-margin-mobile pt-4 pb-12 flex flex-col gap-6 animate-fadeIn">
      {/* 1. Header Typography */}
      <div className="flex flex-col">
        <span className="text-xs font-bold text-primary uppercase tracking-wider">
          Kurasi Unggulan Daerah
        </span>
        <h1 className="text-2xl font-bold text-on-surface tracking-tight mt-1 leading-tight">
          Jelajah Ikonik Trenggalek
        </h1>
        <p className="text-xs text-on-surface-variant mt-1.5 leading-relaxed">
          Koleksi kurasi terbaik dari pesona alam bahari, sentra kuliner UMKM legendaris, dan warisan seni budaya asli Kabupaten Trenggalek.
        </p>
      </div>

      {/* 2. SECTION 1: PARIWISATA PILIHAN UTAMA */}
      <section className="flex flex-col gap-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-4 bg-[#8f0012] rounded-full" />
            <h2 className="text-sm font-bold text-on-surface tracking-tight">
              Pariwisata Utama Pilihan
            </h2>
          </div>
          <span className="text-[11px] text-[#8f0012] font-semibold">Ikon Bahari & Karst</span>
        </div>

        <div className="flex flex-col gap-3.5">
          {topWisata.map((item) => (
            <div
              key={item.id}
              onClick={() => onSelectDestination(item)}
              className="group rounded-2xl bg-surface-container-lowest border border-surface-variant/60 hover:border-[#8f0012]/60 shadow-sm hover:shadow-md transition-all overflow-hidden cursor-pointer flex flex-col"
            >
              {/* Foto Di Atas (Tinggi Pasti & Responsif) */}
              <div className="relative w-full h-44 sm:h-48 overflow-hidden bg-surface-container shrink-0">
                <img
                  src={item.imageUrl}
                  alt={item.name}
                  loading="lazy"
                  onError={(e) => {
                    e.currentTarget.src = "/images/vr_alun_alun_360.png";
                  }}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                
                <div className="absolute bottom-2.5 left-3 right-3 flex items-center justify-between text-white text-[11px]">
                  <span className="px-2 py-0.5 rounded-md bg-black/60 backdrop-blur-md font-semibold">
                    {item.location}
                  </span>
                  <span className="px-2 py-0.5 rounded-md bg-primary text-white font-bold">
                    {item.ticketPrice}
                  </span>
                </div>
              </div>

              {/* Judul Di Bawah */}
              <div className="p-3.5 flex flex-col">
                <div className="flex items-start justify-between gap-2">
                  <h3 className="font-bold text-sm text-on-surface group-hover:text-primary transition-colors leading-snug">
                    {item.name}
                  </h3>
                  <div className="flex items-center gap-1 text-amber-500 shrink-0">
                    <span className="material-symbols-outlined text-[15px] fill-current">star</span>
                    <span className="text-[11px] font-bold text-on-surface">{item.rating}</span>
                  </div>
                </div>
                <p className="text-xs text-on-surface-variant line-clamp-2 mt-1 leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 3. SECTION 2: SENTRA UMKM UTAMA */}
      <section className="flex flex-col gap-3 pt-2">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-4 bg-[#b45309] rounded-full" />
            <h2 className="text-sm font-bold text-on-surface tracking-tight">
              Sentra UMKM Legendaris
            </h2>
          </div>
          <span className="text-[11px] text-[#b45309] font-semibold">Cita Rasa & Oleh-Oleh</span>
        </div>

        <div className="flex flex-col gap-3.5">
          {topUmkm.map((item) => (
            <div
              key={item.id}
              onClick={() => onSelectDestination(item)}
              className="group rounded-2xl bg-surface-container-lowest border border-surface-variant/60 hover:border-[#b45309]/60 shadow-sm hover:shadow-md transition-all overflow-hidden cursor-pointer flex flex-col"
            >
              {/* Foto Di Atas (Tinggi Pasti & Responsif) */}
              <div className="relative w-full h-44 sm:h-48 overflow-hidden bg-surface-container shrink-0">
                <img
                  src={item.imageUrl}
                  alt={item.name}
                  loading="lazy"
                  onError={(e) => {
                    e.currentTarget.src = "/images/vr_alun_alun_360.png";
                  }}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                
                <div className="absolute bottom-2.5 left-3 right-3 flex items-center justify-between text-white text-[11px]">
                  <span className="px-2 py-0.5 rounded-md bg-black/60 backdrop-blur-md font-semibold">
                    {item.location}
                  </span>
                  <span className="px-2 py-0.5 rounded-md bg-amber-600 text-white font-bold">
                    {item.ticketPrice}
                  </span>
                </div>
              </div>

              {/* Judul Di Bawah */}
              <div className="p-3.5 flex flex-col">
                <div className="flex items-start justify-between gap-2">
                  <h3 className="font-bold text-sm text-on-surface group-hover:text-amber-600 transition-colors leading-snug">
                    {item.name}
                  </h3>
                  <div className="flex items-center gap-1 text-amber-500 shrink-0">
                    <span className="material-symbols-outlined text-[15px] fill-current">star</span>
                    <span className="text-[11px] font-bold text-on-surface">{item.rating}</span>
                  </div>
                </div>
                <p className="text-xs text-on-surface-variant line-clamp-2 mt-1 leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 4. SECTION 3: SENI & BUDAYA ADILUHUNG */}
      <section className="flex flex-col gap-3 pt-2">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-4 bg-[#7e22ce] rounded-full" />
            <h2 className="text-sm font-bold text-on-surface tracking-tight">
              Seni & Budaya Adiluhung
            </h2>
          </div>
          <span className="text-[11px] text-[#7e22ce] font-semibold">Pusaka Tradisi</span>
        </div>

        <div className="flex flex-col gap-3.5">
          {topBudaya.map((item) => (
            <div
              key={item.id}
              onClick={() => onSelectDestination(item)}
              className="group rounded-2xl bg-surface-container-lowest border border-surface-variant/60 hover:border-[#7e22ce]/60 shadow-sm hover:shadow-md transition-all overflow-hidden cursor-pointer flex flex-col"
            >
              {/* Foto Di Atas (Tinggi Pasti & Responsif) */}
              <div className="relative w-full h-44 sm:h-48 overflow-hidden bg-surface-container shrink-0">
                <img
                  src={item.imageUrl}
                  alt={item.name}
                  loading="lazy"
                  onError={(e) => {
                    e.currentTarget.src = "/images/vr_alun_alun_360.png";
                  }}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                
                <div className="absolute bottom-2.5 left-3 right-3 flex items-center justify-between text-white text-[11px]">
                  <span className="px-2 py-0.5 rounded-md bg-black/60 backdrop-blur-md font-semibold">
                    {item.location}
                  </span>
                  <span className="px-2 py-0.5 rounded-md bg-purple-700 text-white font-bold">
                    {item.ticketPrice}
                  </span>
                </div>
              </div>

              <div className="p-3.5 flex flex-col">
                <div className="flex items-start justify-between gap-2">
                  <h3 className="font-bold text-sm text-on-surface group-hover:text-purple-700 transition-colors leading-snug">
                    {item.name}
                  </h3>
                  <div className="flex items-center gap-1 text-amber-500 shrink-0">
                    <span className="material-symbols-outlined text-[15px] fill-current">star</span>
                    <span className="text-[11px] font-bold text-on-surface">{item.rating}</span>
                  </div>
                </div>
                <p className="text-xs text-on-surface-variant line-clamp-2 mt-1 leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/*
        5. TOMBOL SHOW MORE DI PALING BAWAH
        Sesuai arahan USER:
        "lalu di paling bawah di page jelajah nanti akan di berikan button : show moore yang pindah ke detail page jelajah yang memuat seluruh pariwisaa, budaya, umkm dengan card card gitu. Maksimal satu baris ada 3 card ya."
      */}
      <div className="pt-4 pb-2 flex flex-col gap-2">
        <button
          type="button"
          onClick={onOpenFullCatalog}
          className="w-full py-3.5 px-5 rounded-2xl bg-gradient-to-r from-primary via-[#b32025] to-[#d44321] text-white font-bold text-xs sm:text-sm shadow-[0_4px_20px_rgba(189,45,0,0.35)] hover:shadow-[0_6px_24px_rgba(189,45,0,0.5)] active:scale-98 transition-all flex items-center justify-center gap-2 cursor-pointer"
        >
          <span className="material-symbols-outlined text-[20px]">grid_view</span>
          <span>Buka Semua Katalog Jelajah (Show More)</span>
          <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
        </button>
        <span className="text-[11px] text-center text-on-surface-variant">
          Menampilkan seluruh {JELAJAH_ALL_ITEMS.length} data pariwisata, UMKM, & budaya dalam layout 3x3
        </span>
      </div>
    </div>
  );
};
