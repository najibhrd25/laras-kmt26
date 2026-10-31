import React, { useState } from "react";
import type { Destination } from "../types/destination";

interface DestinationDetailPageProps {
  destination: Destination;
  onBack: () => void;
}

export const DestinationDetailPage: React.FC<DestinationDetailPageProps> = ({
  destination,
  onBack,
}) => {
  const [activeTab, setActiveTab] = useState<"detail" | "ar" | "audio">("detail");
  const [isPlayingAudio, setIsPlayingAudio] = useState(false);
  const [selectedPoi, setSelectedPoi] = useState<number | null>(null);

  return (
    <div className="w-full min-h-screen bg-surface flex flex-col items-center animate-fadeIn">
      {/* Mobile containment page wrapper */}
      <div className="w-full max-w-md min-h-screen flex flex-col relative bg-surface shadow-2xl pb-safe">
        {/* Sticky Top Bar Navigasi */}
        <header className="sticky top-0 z-40 bg-surface/90 backdrop-blur-xl px-4 h-14 flex items-center justify-between border-b border-surface-variant/40">
          <div className="flex items-center gap-2">
            <button
              onClick={onBack}
              className="w-10 h-10 rounded-full bg-surface-container flex items-center justify-center text-on-surface hover:bg-surface-container-high transition-transform active:scale-95 cursor-pointer"
              type="button"
              aria-label="Kembali ke Beranda"
            >
              <span className="material-symbols-outlined text-[20px]">arrow_back</span>
            </button>
            <span className="font-headline-sm text-sm font-bold text-on-surface line-clamp-1">
              {destination.name}
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => setActiveTab("ar")}
              className={`px-3 py-1.5 rounded-full text-xs font-bold flex items-center gap-1 transition-all cursor-pointer ${
                activeTab === "ar"
                  ? "bg-primary text-on-primary shadow-sm"
                  : "bg-surface-container text-on-surface hover:bg-surface-container-high"
              }`}
              type="button"
            >
              <span className="material-symbols-outlined text-[16px]">view_in_ar</span>
              <span>Buka AR</span>
            </button>
          </div>
        </header>

        {/* Hero Cover Photography */}
        <div className="relative w-full aspect-[16/10] overflow-hidden bg-surface-container">
          <img
            src={destination.imageUrl}
            alt={destination.name}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20" />
          
          <div className="absolute top-3 left-3 bg-surface-container-lowest/90 backdrop-blur-md px-2.5 py-1 rounded-sm shadow-sm">
            <span className="font-label-tag text-label-tag text-primary font-bold uppercase tracking-wider">
              {destination.category}
            </span>
          </div>

          <div className="absolute bottom-3 left-4 right-4 flex items-end justify-between text-white">
            <div className="flex flex-col">
              <h1 className="font-display-hero-mobile text-2xl font-bold tracking-tight text-white drop-shadow">
                {destination.name}
              </h1>
              <div className="flex items-center gap-1 text-xs text-white/90 mt-0.5">
                <span className="material-symbols-outlined text-[14px]">location_on</span>
                <span>{destination.location}</span>
                <span>•</span>
                <span>{destination.distance}</span>
              </div>
            </div>
            <div className="flex items-center gap-1 bg-black/40 backdrop-blur-md px-2.5 py-1 rounded-md text-xs font-bold text-secondary-fixed">
              <span className="material-symbols-outlined text-[15px] text-[#D6A01D]">star</span>
              <span>{destination.rating}</span>
            </div>
          </div>
        </div>

        {/* Interactive Action Hub Bar: 3 Main Feature Modes */}
        <div className="grid grid-cols-3 border-b border-surface-variant/40 bg-surface-container-lowest shadow-sm">
          <button
            type="button"
            onClick={() => setActiveTab("detail")}
            className={`py-3 flex flex-col items-center justify-center gap-1 border-b-2 transition-all cursor-pointer ${
              activeTab === "detail"
                ? "border-primary text-primary font-bold"
                : "border-transparent text-on-surface-variant hover:text-on-surface font-medium"
            }`}
          >
            <span className="material-symbols-outlined text-[20px]">description</span>
            <span className="text-[11px] font-label-md">Detail Wisata</span>
          </button>

          <button
            type="button"
            onClick={() => setActiveTab("ar")}
            className={`py-3 flex flex-col items-center justify-center gap-1 border-b-2 transition-all cursor-pointer ${
              activeTab === "ar"
                ? "border-primary text-primary font-bold"
                : "border-transparent text-on-surface-variant hover:text-on-surface font-medium"
            }`}
          >
            <span className="material-symbols-outlined text-[20px]">view_in_ar</span>
            <span className="text-[11px] font-label-md">AI AR Guide</span>
          </button>

          <button
            type="button"
            onClick={() => setActiveTab("audio")}
            className={`py-3 flex flex-col items-center justify-center gap-1 border-b-2 transition-all cursor-pointer ${
              activeTab === "audio"
                ? "border-primary text-primary font-bold"
                : "border-transparent text-on-surface-variant hover:text-on-surface font-medium"
            }`}
          >
            <span className="material-symbols-outlined text-[20px]">headphones</span>
            <span className="text-[11px] font-label-md">Cerita Rakyat</span>
          </button>
        </div>

        {/* MAIN PAGE VIEW 1: DETAIL WISATA & INFORMASI LENGKAP */}
        {activeTab === "detail" && (
          <div className="p-5 flex flex-col gap-5">
            {/* Quick Metrics */}
            <div className="grid grid-cols-3 gap-2 text-center">
              <div className="p-3 bg-surface-container-lowest rounded-xl border border-surface-variant/40 flex flex-col items-center">
                <span className="material-symbols-outlined text-primary text-[20px] mb-1">
                  schedule
                </span>
                <span className="text-[10px] text-on-surface-variant font-medium">Jam Buka</span>
                <span className="text-xs font-bold text-on-surface mt-0.5 line-clamp-1">
                  {destination.openHours}
                </span>
              </div>
              <div className="p-3 bg-surface-container-lowest rounded-xl border border-surface-variant/40 flex flex-col items-center">
                <span className="material-symbols-outlined text-secondary text-[20px] mb-1">
                  confirmation_number
                </span>
                <span className="text-[10px] text-on-surface-variant font-medium">Tiket Masuk</span>
                <span className="text-xs font-bold text-on-surface mt-0.5 line-clamp-1">
                  {destination.ticketPrice}
                </span>
              </div>
              <div className="p-3 bg-surface-container-lowest rounded-xl border border-surface-variant/40 flex flex-col items-center">
                <span className="material-symbols-outlined text-primary text-[20px] mb-1">
                  wb_sunny
                </span>
                <span className="text-[10px] text-on-surface-variant font-medium">Waktu Terbaik</span>
                <span className="text-xs font-bold text-on-surface mt-0.5 line-clamp-1">
                  {destination.bestTime}
                </span>
              </div>
            </div>

            {/* Narasi Deskripsi */}
            <div className="flex flex-col gap-2">
              <h2 className="font-headline-sm text-base font-bold text-on-surface">
                Eksplorasi Destinasi
              </h2>
              <p className="font-body-md text-sm text-on-surface-variant leading-relaxed">
                {destination.description}
              </p>
            </div>

            {/* AI Curated Trivia Card */}
            <div className="p-4 rounded-xl bg-surface-container-low border border-secondary/40 flex flex-col gap-2 shadow-sm">
              <div className="flex items-center gap-2 text-primary font-bold text-xs">
                <span className="material-symbols-outlined text-[18px]">auto_awesome</span>
                <span>Fakta Menarik (AI Kurasi LARAS)</span>
              </div>
              <ul className="flex flex-col gap-1.5 pl-4 list-disc text-xs text-on-surface-variant">
                {destination.aiTrivia.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
            </div>

            {/* Feature Action Buttons */}
            <div className="flex flex-col gap-3 pt-2">
              <button
                type="button"
                onClick={() => setActiveTab("ar")}
                className="w-full py-3.5 rounded-xl bg-primary text-on-primary font-label-lg text-sm font-bold flex items-center justify-center gap-2 shadow-md active:scale-95 transition-all cursor-pointer"
              >
                <span className="material-symbols-outlined text-[20px]">view_in_ar</span>
                <span>Mulai Eksplorasi Mode AI AR</span>
              </button>

              <button
                type="button"
                onClick={() => setActiveTab("audio")}
                className="w-full py-3.5 rounded-xl border border-primary text-primary font-label-lg text-sm font-bold flex items-center justify-center gap-2 hover:bg-primary-fixed active:scale-95 transition-all cursor-pointer"
              >
                <span className="material-symbols-outlined text-[20px]">record_voice_over</span>
                <span>Dengarkan Audio Cerita Budaya</span>
              </button>
            </div>
          </div>
        )}

        {/* MAIN PAGE VIEW 2: AI AR GUIDE SIMULATOR */}
        {activeTab === "ar" && (
          <div className="p-5 flex flex-col gap-4 animate-fadeIn">
            <div className="flex flex-col">
              <div className="flex items-center gap-1.5 text-primary text-xs font-bold uppercase tracking-wider">
                <span className="material-symbols-outlined text-[16px]">view_in_ar</span>
                <span>Augmented Reality Explorer</span>
              </div>
              <h2 className="font-headline-sm text-base font-bold text-on-surface mt-0.5">
                {destination.arExperience.title}
              </h2>
              <p className="text-xs text-on-surface-variant mt-1">
                {destination.arExperience.description}
              </p>
            </div>

            {/* Viewfinder Screen */}
            <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden bg-black shadow-inner border border-primary/40">
              <img
                src={destination.imageUrl}
                alt="AR Viewfinder"
                className="w-full h-full object-cover opacity-85"
              />

              {/* Viewfinder Corner Brackets */}
              <div className="absolute top-3 left-3 w-6 h-6 border-t-2 border-l-2 border-primary" />
              <div className="absolute top-3 right-3 w-6 h-6 border-t-2 border-r-2 border-primary" />
              <div className="absolute bottom-3 left-3 w-6 h-6 border-b-2 border-l-2 border-primary" />
              <div className="absolute bottom-3 right-3 w-6 h-6 border-b-2 border-r-2 border-primary" />

              {/* AR Laser Scan Animation */}
              <div className="absolute inset-x-0 h-0.5 bg-gradient-to-r from-transparent via-secondary to-transparent animate-pulse" />

              {/* Hotspots */}
              {destination.arExperience.poiList.map((poi, idx) => (
                <button
                  key={idx}
                  onClick={() => setSelectedPoi(idx)}
                  style={{ top: poi.y, left: poi.x }}
                  className={`absolute -translate-x-1/2 -translate-y-1/2 flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-bold shadow-lg transition-transform active:scale-95 cursor-pointer ${
                    selectedPoi === idx
                      ? "bg-primary text-on-primary ring-2 ring-white scale-110 z-20"
                      : "bg-surface/90 text-on-surface hover:bg-surface-container ring-1 ring-primary/40 z-10"
                  }`}
                  type="button"
                >
                  <span className="w-2 h-2 rounded-full bg-secondary animate-ping" />
                  <span>{poi.label}</span>
                </button>
              ))}

              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <span className="material-symbols-outlined text-white/30 text-[36px]">
                  filter_center_focus
                </span>
              </div>
            </div>

            {/* Hotspot detail popup */}
            {selectedPoi !== null ? (
              <div className="p-4 rounded-xl bg-surface-container-lowest border border-primary/40 flex flex-col gap-1 shadow-sm">
                <div className="flex items-center justify-between">
                  <span className="font-label-lg font-bold text-primary text-xs flex items-center gap-1">
                    <span className="material-symbols-outlined text-[16px]">explore</span>
                    Informasi Objek AR Terdeteksi
                  </span>
                  <button
                    onClick={() => setSelectedPoi(null)}
                    className="text-on-surface-variant hover:text-on-surface cursor-pointer"
                    type="button"
                  >
                    <span className="material-symbols-outlined text-[16px]">close</span>
                  </button>
                </div>
                <h3 className="font-headline-sm text-sm font-bold text-on-surface">
                  {destination.arExperience.poiList[selectedPoi].label}
                </h3>
                <p className="text-xs text-on-surface-variant leading-relaxed mt-0.5">
                  {destination.arExperience.poiList[selectedPoi].detail}
                </p>
              </div>
            ) : (
              <p className="text-xs text-center text-on-surface-variant italic py-2">
                Ketuk salah satu titik hotspot di atas layar untuk mendeteksi informasi geologi dan budaya.
              </p>
            )}
          </div>
        )}

        {/* MAIN PAGE VIEW 3: CERITA RAKYAT & AUDIO TOUR */}
        {activeTab === "audio" && (
          <div className="p-5 flex flex-col gap-4 animate-fadeIn">
            {/* Audio Story Card */}
            <div className="p-4 rounded-2xl bg-surface-container-lowest border border-surface-variant/60 flex flex-col gap-3 shadow-sm">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-10 h-10 rounded-full bg-primary-container text-on-primary flex items-center justify-center">
                    <span className="material-symbols-outlined text-[20px]">
                      record_voice_over
                    </span>
                  </div>
                  <div className="flex flex-col">
                    <span className="font-label-md text-[11px] text-secondary font-bold uppercase">
                      Audio Tour Resmi
                    </span>
                    <h3 className="font-headline-sm text-sm font-bold text-on-surface line-clamp-1">
                      {destination.audioGuide.title}
                    </h3>
                  </div>
                </div>
                <span className="text-xs font-mono text-on-surface-variant">
                  {destination.audioGuide.duration}
                </span>
              </div>

              <div className="flex items-center justify-between text-xs text-on-surface-variant px-1">
                <span>Pencerita: {destination.audioGuide.speaker}</span>
                <span className="text-primary font-semibold">Bahasa Jawa & ID</span>
              </div>

              {/* Progress Wave */}
              <div className="w-full bg-surface-container h-2 rounded-full overflow-hidden">
                <div
                  className={`h-full bg-primary transition-all duration-500 ${
                    isPlayingAudio ? "w-2/3" : "w-1/12"
                  }`}
                />
              </div>

              {/* Controls */}
              <div className="flex items-center justify-center gap-4 pt-1">
                <button
                  type="button"
                  onClick={() => setIsPlayingAudio(!isPlayingAudio)}
                  className="w-12 h-12 rounded-full bg-primary text-on-primary flex items-center justify-center shadow-md active:scale-95 transition-transform cursor-pointer"
                >
                  <span className="material-symbols-outlined text-[26px]">
                    {isPlayingAudio ? "pause" : "play_arrow"}
                  </span>
                </button>
              </div>
            </div>

            {/* Folklore */}
            <div className="p-4 rounded-2xl bg-surface-container-low border border-surface-variant/40 flex flex-col gap-2">
              <div className="flex items-center gap-2 text-primary font-bold text-xs uppercase tracking-wider">
                <span className="material-symbols-outlined text-[18px]">menu_book</span>
                <span>Cerita & Mitos Rakyat</span>
              </div>
              <p className="font-body-md text-xs text-on-surface-variant leading-relaxed">
                {destination.folklore}
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
