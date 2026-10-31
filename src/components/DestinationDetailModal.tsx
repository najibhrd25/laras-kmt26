import React, { useState } from "react";
import type { Destination } from "../types/destination";

interface DestinationDetailModalProps {
  destination: Destination | null;
  onClose: () => void;
}

export const DestinationDetailModal: React.FC<DestinationDetailModalProps> = ({
  destination,
  onClose,
}) => {
  const [activeTab, setActiveTab] = useState<"info" | "ar" | "audio">("info");
  const [isPlayingAudio, setIsPlayingAudio] = useState(false);
  const [selectedPoi, setSelectedPoi] = useState<number | null>(null);

  if (!destination) return null;

  return (
    <div
      aria-modal="true"
      className="fixed inset-0 z-50 flex flex-col justify-end bg-black/60 backdrop-blur-sm"
      role="dialog"
    >
      {/* Top Close Tap Area */}
      <div className="flex-1 w-full" onClick={onClose} />

      {/* Main Drawer Modal */}
      <div className="relative z-10 max-h-[92vh] overflow-y-auto bg-surface rounded-t-3xl shadow-2xl border-t border-surface-variant max-w-md mx-auto w-full flex flex-col pb-safe">
        {/* Top Floating Drag Bar & Back Button */}
        <div className="sticky top-0 z-20 bg-surface/95 backdrop-blur-md px-5 py-3.5 flex items-center justify-between border-b border-surface-variant/40">
          <div className="flex items-center gap-2">
            <button
              onClick={onClose}
              className="w-9 h-9 rounded-full bg-surface-container flex items-center justify-center text-on-surface hover:bg-surface-container-high transition-colors cursor-pointer"
              aria-label="Kembali"
              type="button"
            >
              <span className="material-symbols-outlined text-[20px]">
                arrow_back
              </span>
            </button>
            <span className="font-headline-sm text-sm font-bold text-on-surface line-clamp-1">
              {destination.name}
            </span>
          </div>

          <div className="flex items-center gap-1.5">
            <button
              onClick={() => setActiveTab("ar")}
              className={`px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1 transition-all cursor-pointer ${
                activeTab === "ar"
                  ? "bg-primary text-on-primary shadow-sm"
                  : "bg-surface-container text-on-surface hover:bg-surface-container-high"
              }`}
              type="button"
            >
              <span className="material-symbols-outlined text-[15px]">
                view_in_ar
              </span>
              <span>Mode AR</span>
            </button>
          </div>
        </div>

        {/* Tab Selector: Info Destinasi / AR Viewfinder / Cerita Audio */}
        <div className="flex items-center border-b border-surface-variant/50 bg-surface-container-low px-4 pt-1">
          <button
            onClick={() => setActiveTab("info")}
            className={`flex-1 py-2.5 text-xs font-bold border-b-2 transition-all cursor-pointer flex items-center justify-center gap-1.5 ${
              activeTab === "info"
                ? "border-primary text-primary"
                : "border-transparent text-on-surface-variant hover:text-on-surface"
            }`}
            type="button"
          >
            <span className="material-symbols-outlined text-[16px]">info</span>
            <span>Ringkasan</span>
          </button>
          <button
            onClick={() => setActiveTab("ar")}
            className={`flex-1 py-2.5 text-xs font-bold border-b-2 transition-all cursor-pointer flex items-center justify-center gap-1.5 ${
              activeTab === "ar"
                ? "border-primary text-primary"
                : "border-transparent text-on-surface-variant hover:text-on-surface"
            }`}
            type="button"
          >
            <span className="material-symbols-outlined text-[16px]">
              view_in_ar
            </span>
            <span>AI AR Guide</span>
          </button>
          <button
            onClick={() => setActiveTab("audio")}
            className={`flex-1 py-2.5 text-xs font-bold border-b-2 transition-all cursor-pointer flex items-center justify-center gap-1.5 ${
              activeTab === "audio"
                ? "border-primary text-primary"
                : "border-transparent text-on-surface-variant hover:text-on-surface"
            }`}
            type="button"
          >
            <span className="material-symbols-outlined text-[16px]">
              headphones
            </span>
            <span>Cerita Rakyat</span>
          </button>
        </div>

        {/* CONTENT 1: INFO & RINGKASAN */}
        {activeTab === "info" && (
          <div className="p-5 flex flex-col gap-4">
            {/* Hero Image */}
            <div className="relative w-full aspect-[16/10] rounded-xl overflow-hidden shadow-md">
              <img
                src={destination.imageUrl}
                alt={destination.name}
                className="w-full h-full object-cover"
              />
              <div className="absolute top-3 left-3 bg-primary text-on-primary px-3 py-1 rounded-sm text-xs font-bold uppercase tracking-wider">
                {destination.category}
              </div>
              <div className="absolute bottom-3 right-3 bg-surface/90 backdrop-blur-md px-3 py-1 rounded-md text-xs font-bold text-on-surface flex items-center gap-1 shadow">
                <span className="material-symbols-outlined text-[16px] text-secondary">
                  star
                </span>
                <span>{destination.rating} (500+ Ulasan)</span>
              </div>
            </div>

            {/* Quick Metrics Grid */}
            <div className="grid grid-cols-3 gap-2 text-center">
              <div className="p-3 bg-surface-container-lowest rounded-xl border border-surface-variant/40 flex flex-col items-center">
                <span className="material-symbols-outlined text-primary text-[20px] mb-1">
                  schedule
                </span>
                <span className="text-[10px] text-on-surface-variant font-medium">
                  Jam Buka
                </span>
                <span className="text-xs font-bold text-on-surface mt-0.5 line-clamp-1">
                  {destination.openHours}
                </span>
              </div>
              <div className="p-3 bg-surface-container-lowest rounded-xl border border-surface-variant/40 flex flex-col items-center">
                <span className="material-symbols-outlined text-secondary text-[20px] mb-1">
                  confirmation_number
                </span>
                <span className="text-[10px] text-on-surface-variant font-medium">
                  Tiket Masuk
                </span>
                <span className="text-xs font-bold text-on-surface mt-0.5 line-clamp-1">
                  {destination.ticketPrice}
                </span>
              </div>
              <div className="p-3 bg-surface-container-lowest rounded-xl border border-surface-variant/40 flex flex-col items-center">
                <span className="material-symbols-outlined text-primary text-[20px] mb-1">
                  wb_sunny
                </span>
                <span className="text-[10px] text-on-surface-variant font-medium">
                  Waktu Terbaik
                </span>
                <span className="text-xs font-bold text-on-surface mt-0.5 line-clamp-1">
                  {destination.bestTime}
                </span>
              </div>
            </div>

            {/* Deskripsi */}
            <div className="flex flex-col gap-1.5">
              <h4 className="font-headline-sm text-sm font-bold text-on-surface">
                Tentang Destinasi
              </h4>
              <p className="font-body-md text-sm text-on-surface-variant leading-relaxed">
                {destination.description}
              </p>
            </div>

            {/* AI Curated Trivia */}
            <div className="p-4 rounded-xl bg-surface-container-low border border-secondary/30 flex flex-col gap-2">
              <div className="flex items-center gap-2 text-primary font-bold text-xs">
                <span className="material-symbols-outlined text-[18px]">
                  auto_awesome
                </span>
                <span>Fakta Menarik (AI Kurasi LARAS)</span>
              </div>
              <ul className="flex flex-col gap-1.5 pl-4 list-disc text-xs text-on-surface-variant">
                {destination.aiTrivia.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
            </div>

            {/* CTA Buttons */}
            <div className="pt-2 flex items-center gap-3">
              <button
                onClick={() => setActiveTab("ar")}
                className="flex-1 py-3 rounded-xl bg-primary text-on-primary font-label-lg text-sm font-bold flex items-center justify-center gap-2 shadow-sm active:scale-95 transition-all cursor-pointer"
                type="button"
              >
                <span className="material-symbols-outlined text-[18px]">
                  view_in_ar
                </span>
                <span>Buka AI AR Viewfinder</span>
              </button>
            </div>
          </div>
        )}

        {/* CONTENT 2: AI AR VIEWFINDER SIMULATOR */}
        {activeTab === "ar" && (
          <div className="p-5 flex flex-col gap-4">
            <div className="flex flex-col">
              <div className="flex items-center gap-1.5 text-primary text-xs font-bold uppercase tracking-wider">
                <span className="material-symbols-outlined text-[16px]">
                  view_in_ar
                </span>
                <span>Augmented Reality Explorer</span>
              </div>
              <h3 className="font-headline-sm text-base font-bold text-on-surface mt-0.5">
                {destination.arExperience.title}
              </h3>
              <p className="text-xs text-on-surface-variant mt-1">
                {destination.arExperience.description}
              </p>
            </div>

            {/* Interactive Viewfinder Box */}
            <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden bg-black shadow-inner border border-primary/30">
              <img
                src={destination.imageUrl}
                alt="AR View"
                className="w-full h-full object-cover opacity-85"
              />

              {/* Viewfinder Corner Brackets (Sesuai panduan design.md) */}
              <div className="absolute top-3 left-3 w-6 h-6 border-t-2 border-l-2 border-primary" />
              <div className="absolute top-3 right-3 w-6 h-6 border-t-2 border-r-2 border-primary" />
              <div className="absolute bottom-3 left-3 w-6 h-6 border-b-2 border-l-2 border-primary" />
              <div className="absolute bottom-3 right-3 w-6 h-6 border-b-2 border-r-2 border-primary" />

              {/* Live AR Scanning Line */}
              <div className="absolute inset-x-0 h-0.5 bg-gradient-to-r from-transparent via-secondary to-transparent animate-bounce opacity-80" />

              {/* Interactive POI Hotspots */}
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

              {/* Center crosshair */}
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <span className="material-symbols-outlined text-white/40 text-[32px]">
                  filter_center_focus
                </span>
              </div>
            </div>

            {/* Selected POI Details Card */}
            {selectedPoi !== null ? (
              <div className="p-4 rounded-xl bg-surface-container-lowest border border-primary/40 flex flex-col gap-1 animate-fadeIn">
                <div className="flex items-center justify-between">
                  <span className="font-label-lg font-bold text-primary text-xs flex items-center gap-1">
                    <span className="material-symbols-outlined text-[16px]">
                      explore
                    </span>
                    Titik Informasi Budaya
                  </span>
                  <button
                    onClick={() => setSelectedPoi(null)}
                    className="text-on-surface-variant hover:text-on-surface"
                    type="button"
                  >
                    <span className="material-symbols-outlined text-[16px]">
                      close
                    </span>
                  </button>
                </div>
                <h4 className="font-headline-sm text-sm font-bold text-on-surface">
                  {destination.arExperience.poiList[selectedPoi].label}
                </h4>
                <p className="text-xs text-on-surface-variant leading-relaxed mt-0.5">
                  {destination.arExperience.poiList[selectedPoi].detail}
                </p>
              </div>
            ) : (
              <p className="text-xs text-center text-on-surface-variant italic">
                Ketuk salah satu titik hotspot di atas untuk membaca penjelasan artefak & sejarah.
              </p>
            )}
          </div>
        )}

        {/* CONTENT 3: AUDIO STORY & FOLKLORE */}
        {activeTab === "audio" && (
          <div className="p-5 flex flex-col gap-4">
            {/* Audio Player Card (Sesuai panduan design.md Audio Story Card) */}
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
                    <span className="font-headline-sm text-sm font-bold text-on-surface line-clamp-1">
                      {destination.audioGuide.title}
                    </span>
                  </div>
                </div>
                <span className="text-xs font-mono text-on-surface-variant">
                  {destination.audioGuide.duration}
                </span>
              </div>

              {/* Narator info */}
              <div className="flex items-center justify-between text-xs text-on-surface-variant px-1">
                <span>Pencerita: {destination.audioGuide.speaker}</span>
                <span className="text-primary font-semibold">Bahasa Jawa & ID</span>
              </div>

              {/* Simulated Progress Wave */}
              <div className="w-full bg-surface-container h-2 rounded-full overflow-hidden">
                <div
                  className={`h-full bg-primary transition-all duration-500 ${
                    isPlayingAudio ? "w-2/3" : "w-1/12"
                  }`}
                />
              </div>

              {/* Audio Controls */}
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

            {/* Folklore Narrative Story */}
            <div className="p-4 rounded-2xl bg-surface-container-low border border-surface-variant/40 flex flex-col gap-2">
              <div className="flex items-center gap-2 text-primary font-bold text-xs uppercase tracking-wider">
                <span className="material-symbols-outlined text-[18px]">
                  menu_book
                </span>
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
