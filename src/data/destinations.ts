import type { Destination } from "../types/destination";

// Fallback & Curated Seed Data dengan multimedia AR & Audio lengkap
export const fallbackDestinations: Destination[] = [
  {
    id: "pantai-pelang",
    name: "Pantai Pelang",
    category: "Pantai",
    location: "Panggul, Trenggalek",
    distance: "18,4 km dari lokasimu",
    description:
      "Pantai pesisir barat Trenggalek berpanorama megah dengan air terjun alami Grobogan Sewu yang mengalir langsung ke bibir pantai.",
    imageUrl:
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80",
    rating: 4.7,
    openHours: "07:00 - 17:00 WIB",
    ticketPrice: "Rp10.000 / orang",
    bestTime: "Pagi hari (08:00 - 11:00)",
    folklore:
      "Konon air terjun di tepi Pantai Pelang merupakan tempat pemandian para putri bangsawan Mataram kuno yang dipercaya membawa berkah awet muda.",
    audioGuide: {
      title: "Legenda Air Terjun Pesisir Pantai Pelang",
      duration: "03:50",
      speaker: "Mbah Joyo (Sesepuh Panggul)",
    },
    arExperience: {
      title: "LARAS AR: Pindai Tebing Karang & Air Terjun Pelang",
      description: "Arahkan kamera ke deburan air terjun untuk mengungkap sejarah geologis batuan pantai selatan.",
      poiList: [
        { label: "Air Terjun Pelang", x: "35%", y: "45%", detail: "Debit air tawar jernih mengalir langsung ke laut." },
        { label: "Gardu Pandang Karang", x: "70%", y: "30%", detail: "Spot terbaik melihat deburan ombak Samudra Hindia." },
      ],
    },
    aiTrivia: [
      "Pantai Pelang memiliki pulau karang kecil di tengah laut yang menjadi habitat burung laut.",
      "Terdapat jembatan kayu estetik penghubung antara area parkir dan air terjun alami.",
    ],
  },
  {
    id: "pantai-prigi",
    name: "Pantai Prigi 360",
    category: "Pantai",
    location: "Watulimo, Trenggalek",
    distance: "5,8 km dari lokasimu",
    description:
      "Pusat denyut maritim Trenggalek dengan pelabuhan nusantara terbesar di Jawa Timur, sentra kuliner ikan asap segar, dan panggung Prigi 360.",
    imageUrl:
      "https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=1200&q=80",
    rating: 4.8,
    openHours: "24 Jam",
    ticketPrice: "Rp12.000 / orang",
    bestTime: "Pagi saat lelang ikan & sore santai",
    folklore:
      "Setiap bulan Selo penanggalan Jawa, para nelayan menggelar upacara Larung Sembonyo mempersembahkan tumpeng agung sebagai wujud syukur hasil laut melimpah.",
    audioGuide: {
      title: "Sejarah Babad Prigi & Larung Sembonyo",
      duration: "05:10",
      speaker: "Ki Anom Narator Budaya",
    },
    arExperience: {
      title: "LARAS AR: Napak Tilas Iring-iringan Tumpeng Sembonyo",
      description: "Visualisasikan perahu hias janur nelayan dan arak-arakan sesaji secara augmented reality 3D.",
      poiList: [
        { label: "Dermaga Pelelangan Ikan", x: "40%", y: "60%", detail: "Pusat lelang ikan cakalang dan tuna segar." },
        { label: "Taman Budaya Prigi 360", x: "65%", y: "35%", detail: "Amfiteater terbuka tepi pantai berlatar teluk zamrud." },
      ],
    },
    aiTrivia: [
      "Pelabuhan Perikanan Nusantara Prigi adalah pelabuhan perikanan tertua di pesisir selatan Jawa Timur.",
      "Kawasan kuliner tepi pantainya terkenal dengan aroma ikan asap bumbu rujak khas Watulimo.",
    ],
  },
  {
    id: "pantai-pasir-putih",
    name: "Pantai Karanggongso / Pasir Putih",
    category: "Pantai",
    location: "Watulimo, Trenggalek",
    distance: "6,2 km dari lokasimu",
    description:
      "Hamparan pasir putih bersih membentang sepanjang 1,5 km dengan ombak tenang terlindung bukit karang, surga aman bermain air bersama keluarga.",
    imageUrl:
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80",
    rating: 4.8,
    openHours: "06:00 - 18:00 WIB",
    ticketPrice: "Rp15.000 / orang",
    bestTime: "Pagi hari (06:30 - 09:30)",
    folklore:
      "Nama Karanggongso dipercaya berasal dari batuan karang yang dahulu berbunyi nyaring seperti gamelan gong saat diterpa gelombang laut pasang.",
    audioGuide: {
      title: "Mitos Gamelan Karang Karanggongso",
      duration: "03:45",
      speaker: "Sari Dewi (Pemandu Budaya)",
    },
    arExperience: {
      title: "LARAS AR: Eksplorasi Terumbu Karang & Kano Bening",
      description: "Arahkan kamera ke permukaan air teluk untuk melihat navigasi biota laut dan kano wisata.",
      poiList: [
        { label: "Dermaga Apung Pasir Putih", x: "45%", y: "55%", detail: "Tempat sandar perahu sewa menuju Rumah Apung." },
        { label: "Pesisir Pasir Putih Halus", x: "75%", y: "70%", detail: "Pasir kuarsa putih alami tanpa karang tajam." },
      ],
    },
    aiTrivia: [
      "Air laut di Pantai Pasir Putih sangat tenang karena berada di dalam kantung teluk alami.",
      "Tersedia sewa perahu motor wisata untuk berkeliling batu karang dan gua laut.",
    ],
  },
  {
    id: "goa-lowo",
    name: "Goa Lowo",
    category: "Alam",
    location: "Watulimo, Trenggalek",
    distance: "2,4 km dari lokasimu",
    description:
      "Gua terpanjang dan terbesar di Asia Tenggara dengan panjang lorong mencapai ribuan meter dan formasi stalaktit-stalagmit berusia jutaan tahun.",
    imageUrl: "/images/goa_lowo.jpg",
    rating: 4.9,
    openHours: "08:00 - 16:30 WIB",
    ticketPrice: "Rp15.000 / orang",
    bestTime: "Pagi hari (09:00 - 11:00)",
    folklore:
      "Menurut legenda masyarakat Watulimo, Goa Lowo dahulunya adalah tempat pertapaan para resi kuno Majapahit dan rumah bagi koloni kelelawar pembawa kesuburan ladang cengkeh sekitar.",
    audioGuide: {
      title: "Misteri Batuan Alami & Lorong Kelelawar Goa Lowo",
      duration: "04:15",
      speaker: "Ki Anom Narator Budaya",
    },
    arExperience: {
      title: "LARAS AR: Pindai Formasi Stalaktit & Fosil Purba",
      description:
        "Arahkan kamera ke formasi batuan gua untuk mengungkap usia geologis dan proyeksi 3D batuan kapur kapiler.",
      poiList: [
        { label: "Stalaktit Mahkota Ratu", x: "35%", y: "28%", detail: "Formasi kalsit berumur ~1,2 juta tahun dengan tetesan air aktif." },
        { label: "Jembatan Kayu Jati Tua", x: "65%", y: "72%", detail: "Jembatan terawat sepanjang 850m melintasi sungai bawah tanah." },
      ],
    },
    aiTrivia: [
      "Goa Lowo pertama kali dipetakan oleh ahli speleologi internasional pada tahun 1984.",
      "Terdapat 9 ruang aula besar di dalam gua yang memiliki sirkulasi udara alami sejuk.",
    ],
  },
  {
    id: "desa-wisata-pandean",
    name: "Desa Wisata Pandean",
    category: "Budaya",
    location: "Dongko, Trenggalek",
    distance: "14,2 km dari lokasimu",
    description:
      "Pemenang Anugerah Desa Wisata Indonesia (ADWI) dengan pesona river tubing Sungai Konang, kesenian kothekan lesung, dan sentra kerajinan bambu.",
    imageUrl:
      "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&w=1200&q=80",
    rating: 4.8,
    openHours: "08:00 - 17:00 WIB",
    ticketPrice: "Rp20.000 / paket tubing",
    bestTime: "Pagi menuju siang",
    folklore:
      "Kesenian musik Kothekan Lesung di Desa Pandean berakar dari kebiasaan para ibu menumbuk gabah sambil berirama syukur menyambut musim panen raya.",
    audioGuide: {
      title: "Kearifan Budaya Pandean & River Tubing Sungai Konang",
      duration: "04:30",
      speaker: "Bopo Subagio (Pengelola ADWI Pandean)",
    },
    arExperience: {
      title: "LARAS AR: Navigasi Arung Jeram & Spot Kesenian",
      description: "Pindai aliran sungai untuk mendeteksi tingkat jeram dan titik peristirahatan tradisional.",
      poiList: [
        { label: "Start Point River Tubing", x: "30%", y: "60%", detail: "Jeram ramah keluarga dengan air jernih bebatuan alam." },
        { label: "Sanggar Seni Lesung", x: "70%", y: "40%", detail: "Pentas musik ketukan lesung kayu kuno khas Dongko." },
      ],
    },
    aiTrivia: [
      "Desa Pandean dinobatkan sebagai 50 Desa Wisata Terbaik se-Indonesia pada ADWI Kemenparekraf.",
      "Semua pemandu river tubing merupakan pemuda lokal bersertifikasi keselamatan air.",
    ],
  },
  {
    id: "pantai-mutiara",
    name: "Pantai Mutiara",
    category: "Pantai",
    location: "Watulimo, Trenggalek",
    distance: "5,8 km dari lokasimu",
    description:
      "Teluk berpasir putih bersih dengan ombak tenang terlindung bukit karang zamrud, surga tersembunyi pesisir selatan Jawa.",
    imageUrl:
      "https://images.unsplash.com/photo-1519046904884-53103b34b206?auto=format&fit=crop&w=1200&q=80",
    rating: 4.7,
    openHours: "06:00 - 18:00 WIB",
    ticketPrice: "Rp10.000 / orang",
    bestTime: "Sore hari menikmati sunset",
    folklore:
      "Nama Mutiara berasal dari kemilau pasir putih halus saat tertimpa bias sinar matahari senja, tenang layaknya mutiara terpendam.",
    audioGuide: {
      title: "Keheningan Teluk Mutiara & Kehidupan Pesisir",
      duration: "03:40",
      speaker: "Sari Dewi (Pemandu Maritim)",
    },
    arExperience: {
      title: "LARAS AR: Navigasi Terumbu Karang & Snorkeling",
      description: "Deteksi spot snorkeling dan biota terumbu karang di bawah dermaga kayu.",
      poiList: [
        { label: "Spot Snorkeling Karang Meja", x: "30%", y: "50%", detail: "Kedalaman 2-4 meter, kaya anemon dan ikan badut." },
        { label: "Bukit Karang Pelindung", x: "75%", y: "35%", detail: "Pemecah ombak alami yang menenangkan teluk." },
      ],
    },
    aiTrivia: [
      "Sangat aman untuk berenang santai anak-anak karena nyaris tanpa deburan ombak besar.",
      "Tersedia perahu kano transparan untuk melihat dasar laut berpasir putih.",
    ],
  },
  {
    id: "desa-wisata-duren-sari",
    name: "Desa Wisata Duren Sari",
    category: "Budaya",
    location: "Sawahan, Watulimo",
    distance: "7,5 km dari lokasimu",
    description:
      "Kawasan hutan durian terluas di Asia Tenggara (International Durio Forest) penghasil durian lokal premium kualitas juara nasional.",
    imageUrl:
      "https://images.unsplash.com/photo-1546548970-71785318a17b?auto=format&fit=crop&w=1200&q=80",
    rating: 4.8,
    openHours: "08:00 - 17:00 WIB",
    ticketPrice: "Rp10.000 (Tiket Masuk Hutan Durian)",
    bestTime: "Musim durian (November - Maret)",
    folklore:
      "Hutan durian Sawahan telah dirawat secara turun-temurun oleh masyarakat adat Watulimo sebagai penjaga mata air dan benteng ekologi perbukitan.",
    audioGuide: {
      title: "Kisah Hutan Durian Internasional Duren Sari",
      duration: "04:00",
      speaker: "Pak Wagimin (Pakar Durian Lokal)",
    },
    arExperience: {
      title: "LARAS AR: Identifikasi Pohon Durian Kuno & Varietas Juara",
      description: "Arahkan kamera ke tajuk pohon durian untuk membaca usia pohon dan karakter rasa buahnya.",
      poiList: [
        { label: "Pohon Durian Induk Ripto", x: "40%", y: "35%", detail: "Pohon durian berusia puluhan tahun dengan daging buah tebal kuning mentega." },
        { label: "Sentra Edukasi Olahan Durian", x: "65%", y: "65%", detail: "Tempat mencicipi kolak durian, pancake, dan dodol durian asli." },
      ],
    },
    aiTrivia: [
      "Memiliki luasan hutan durian rakyat lebih dari 650 hektar yang diakui secara internasional.",
      "Terdapat homestay rumah kayu ramah lingkungan di bawah rindangnya pohon durian raksasa.",
    ],
  },
  {
    id: "goa-ngerit",
    name: "Goa Ngerit Stone Garden",
    category: "Alam",
    location: "Senden, Kampak",
    distance: "11,8 km dari lokasimu",
    description:
      "Taman labirin batuan karst alam purba dengan jembatan tali gantung, air terjun tersembunyi, dan formasi gua batu kapur eksotis.",
    imageUrl:
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80",
    rating: 4.7,
    openHours: "08:00 - 16:30 WIB",
    ticketPrice: "Rp10.000 / orang",
    bestTime: "Pagi hari",
    folklore:
      "Gua Ngerit dipercaya sebagai tempat bertapanya ksatria pewayangan dan tempat berlindung prajurit gerilya zaman perjuangan kemerdekaan.",
    audioGuide: {
      title: "Misteri Labirin Batuan Purba Goa Ngerit",
      duration: "03:30",
      speaker: "Mbah Suro (Juru Kunci Kampak)",
    },
    arExperience: {
      title: "LARAS AR: Pemetaan Labirin Batu Karst & Jembatan Tali",
      description: "Visualisasi 3D lorong batuan kapur dan titik ketinggian tebing.",
      poiList: [
        { label: "Jembatan Gantung Karst", x: "50%", y: "45%", detail: "Jembatan gantung melintasi celah tebing batu purba setinggi 20 meter." },
        { label: "Gua Pertapaan Ngerit", x: "25%", y: "65%", detail: "Ruang batu teduh berhiaskan stalaktit aktif." },
      ],
    },
    aiTrivia: [
      "Satu-satunya taman batuan karst labirin alami di Trenggalek dengan spot foto tebing dramatis.",
      "Terdapat mata air jernih di dasar jurang bebatuan yang tidak pernah surut sepanjang tahun.",
    ],
  },
];

export const destinationsData: Destination[] = fallbackDestinations;
