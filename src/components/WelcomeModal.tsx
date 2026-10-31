import React, { useState } from "react";

interface WelcomeModalProps {
  isOpen: boolean;
  onSaveName: (name: string) => void;
}

export const WelcomeModal: React.FC<WelcomeModalProps> = ({ isOpen, onSaveName }) => {
  const [inputName, setInputName] = useState("");
  const [error, setError] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputName.trim()) {
      setError(true);
      return;
    }
    onSaveName(inputName.trim());
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fadeIn">
      <div className="w-full max-w-sm bg-surface rounded-2xl p-6 shadow-2xl border border-surface-variant/40 flex flex-col items-center text-center">
        {/* Icon / Emblem */}
        <div className="w-16 h-16 rounded-full bg-primary-container/30 border border-primary/20 flex items-center justify-center mb-4 text-primary">
          <span className="material-symbols-outlined text-[32px]">travel_explore</span>
        </div>

        <span className="text-primary font-label-md uppercase tracking-wider font-semibold text-xs">
          Sugeng Rawuh
        </span>
        <h2 className="text-headline-sm font-bold text-on-surface mt-1">
          Selamat Datang di LARAS
        </h2>
        <p className="text-body-sm text-on-surface-variant mt-1.5 leading-relaxed">
          Sebelum mulai menjelajahi keindahan Trenggalek, boleh kami tahu siapa namamu?
        </p>

        <form onSubmit={handleSubmit} className="w-full mt-5 flex flex-col gap-3">
          <div className="flex flex-col text-left">
            <input
              type="text"
              autoFocus
              value={inputName}
              onChange={(e) => {
                setInputName(e.target.value);
                if (error) setError(false);
              }}
              placeholder="Masukkan nama panggilanmu..."
              className={`w-full px-4 py-3 rounded-xl bg-surface-container-low border text-on-surface placeholder:text-on-surface-variant/60 focus:outline-none transition-colors text-sm ${
                error
                  ? "border-error focus:border-error ring-1 ring-error"
                  : "border-surface-variant/70 focus:border-primary focus:ring-1 focus:ring-primary"
              }`}
            />
            {error && (
              <span className="text-xs text-error mt-1 ml-1">
                Silakan isi nama terlebih dahulu ya.
              </span>
            )}
          </div>

          <button
            type="submit"
            className="w-full py-3 px-4 rounded-xl bg-primary text-on-primary font-semibold text-sm shadow-md hover:bg-primary/90 active:scale-[0.98] transition-all flex items-center justify-center gap-2 cursor-pointer mt-1"
          >
            <span>Mulai Menjelajah</span>
            <span className="material-symbols-outlined text-lg">arrow_forward</span>
          </button>
        </form>
      </div>
    </div>
  );
};
