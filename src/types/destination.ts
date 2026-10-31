export interface Destination {
  id: string;
  name: string;
  category: "Alam" | "Pantai" | "Budaya" | "Sejarah" | "Kuliner" | "Desa Wisata" | "Ekowisata" | "UMKM";
  location: string;
  distance: string;
  description: string;
  imageUrl: string;
  // Fitur Detail Interaktif & AI AR
  rating: number;
  openHours: string;
  ticketPrice: string;
  bestTime: string;
  folklore: string;
  audioGuide: {
    title: string;
    duration: string;
    speaker: string;
  };
  arExperience: {
    title: string;
    description: string;
    poiList: { label: string; x: string; y: string; detail: string }[];
  };
  aiTrivia: string[];
  kecamatan?: string;
  itemType?: "wisata" | "desa_wisata" | "umkm" | "budaya";
}

