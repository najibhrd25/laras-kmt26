import React, { useState } from "react";

export const LocationBanner: React.FC = () => {
  const [locationText, setLocationText] = useState("Watulimo, Trenggalek");
  const [status, setStatus] = useState<"idle" | "loading" | "detected" | "error">("idle");

  const handleRequestLocation = () => {
    if (!navigator.geolocation) {
      alert("Browser Anda tidak mendukung deteksi lokasi.");
      return;
    }

    setStatus("loading");
    navigator.geolocation.getCurrentPosition(
      async (position) => {
        const { latitude, longitude } = position.coords;
        try {
          // Reverse geocoding gratis via OpenStreetMap Nominatim
          const response = await fetch(
            `https://nominatim.openstreetmap.org/reverse?lat=${latitude}&lon=${longitude}&format=json`,
            {
              headers: {
                "Accept-Language": "id",
              },
            }
          );
          if (response.ok) {
            const data = await response.json();
            const addr = data.address || {};
            const subdistrict =
              addr.village ||
              addr.suburb ||
              addr.town ||
              addr.municipality ||
              addr.neighbourhood ||
              addr.city_district;
            const district =
              addr.county ||
              addr.city ||
              addr.state_district ||
              "Trenggalek";

            if (subdistrict) {
              setLocationText(`${subdistrict}, ${district}`);
            } else {
              setLocationText(district);
            }
            setStatus("detected");
            return;
          }
        } catch (err) {
          console.warn("Reverse geocode failed, falling back to approximation:", err);
        }

        // Fallback jika offline atau API limit
        setLocationText(`${latitude.toFixed(2)}°, ${longitude.toFixed(2)}° (Trenggalek)`);
        setStatus("detected");
      },
      (error) => {
        console.warn("Geolocation error:", error);
        setStatus("error");
      },
      { timeout: 12000, enableHighAccuracy: true }
    );
  };

  return (
    <section className="px-margin-mobile py-1">
      <button
        onClick={handleRequestLocation}
        type="button"
        title="Klik untuk perbarui lokasi Anda"
        className="w-full text-left flex items-center justify-between p-2.5 rounded-xl bg-surface-container-low border border-surface-variant/40 hover:bg-surface-container-high transition-colors cursor-pointer group"
      >
        <div className="flex items-center gap-2 text-on-surface-variant text-body-sm">
          <span className={`material-symbols-outlined text-[20px] ${status === 'loading' ? 'animate-spin text-primary' : 'text-primary'}`}>
            {status === "loading" ? "sync" : "near_me"}
          </span>
          <div className="flex flex-col">
            <span className="font-semibold text-xs text-on-surface">
              {status === "loading" ? "Mendeteksi posisi Anda..." : "Lokasi Terkini:"}
            </span>
            <span className="text-on-surface-variant text-xs font-medium truncate max-w-[240px]">
              {status === "error" ? "Gagal mendeteksi lokasi (Klik untuk ulangi)" : locationText}
            </span>
          </div>
        </div>

        <span className="material-symbols-outlined text-on-surface-variant text-[18px] group-hover:translate-x-0.5 transition-transform">
          chevron_right
        </span>
      </button>
    </section>
  );
};
