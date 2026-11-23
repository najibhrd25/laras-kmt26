import type { Destination } from "../types/destination";

// Fallback & Curated Seed Data dengan multimedia AR & Audio lengkap
export const fallbackDestinations: Destination[] = [
  // ===================== PANTAI =====================
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

  // ===================== WISATA ALAM =====================
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

  // ===================== DESA WISATA =====================
  {
    id: "desa-wisata-pandean",
    name: "Desa Wisata Pandean",
    category: "Desa Wisata",
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
    kecamatan: "Dongko",
    itemType: "desa_wisata",
  },
  {
    id: "desa-wisata-duren-sari",
    name: "Desa Wisata Duren Sari",
    category: "Desa Wisata",
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
    kecamatan: "Watulimo",
    itemType: "desa_wisata",
  },
  {
    id: "desa-wisata-banyu-nget",
    name: "Desa Wisata Banyu Nget",
    category: "Desa Wisata",
    location: "Dukuh, Watulimo",
    distance: "8,3 km dari lokasimu",
    description:
      "Ekowisata alam hutan pegunungan yang asri dengan kolam air hangat alami, Air Terjun Urang Kambil, sepeda gantung, dan gazebo bambu tepi telaga.",
    imageUrl:
      "https://images.unsplash.com/photo-1473448912268-2022ce9509d8?auto=format&fit=crop&w=1200&q=80",
    rating: 4.8,
    openHours: "07:30 - 17:00 WIB",
    ticketPrice: "Rp10.000 / orang",
    bestTime: "Pagi hari udara sejuk",
    folklore:
      "Nama Banyu Nget bermakna air yang hangat dalam bahasa Jawa, bersumber dari mata air alami pegunungan yang tidak pernah dingin membeku di pagi buta.",
    audioGuide: {
      title: "Pesona Gemercik Air Terjun Banyu Nget",
      duration: "03:40",
      speaker: "Mas Hadi (Pengelola Pokdarwis Dukuh)",
    },
    arExperience: {
      title: "LARAS AR: Jalur Trekking Hutan & Kolam Alami",
      description: "Pindai lanskap lembah untuk mendeteksi rute jalan setapak kayu dan spot foto jembatan gantung.",
      poiList: [
        { label: "Telaga Banyu Nget", x: "40%", y: "55%", detail: "Kolam alami jernih dinaungi pohon rindang." },
        { label: "Air Terjun Urang Kambil", x: "70%", y: "30%", detail: "Curug bertingkat dengan debit air konstan." },
      ],
    },
    aiTrivia: [
      "Dikelola langsung oleh Lembaga Masyarakat Desa Hutan (LMDH) secara berkelanjutan.",
      "Tersedia wahana flying fox dan sepeda gantung melintasi lembah rimbun.",
    ],
    kecamatan: "Watulimo",
    itemType: "desa_wisata",
  },

  // ===================== SENI & BUDAYA =====================
  {
    id: "budaya-turonggo-yakso",
    name: "Kesenian Jaranan Turonggo Yakso",
    category: "Budaya",
    location: "Dongko, Trenggalek",
    distance: "14,0 km dari lokasimu",
    description:
      "Kesenian jaranan buto asli Trenggalek berkepala raksasa dengan irama gamelan rancak, simbol kemenangan kebajikan melawan angkara murka.",
    imageUrl: "/images/turonggo_yakso.jpg",
    rating: 4.9,
    openHours: "Jadwal Pementasan & Festival Adat",
    ticketPrice: "Donasi Pentas / Tiket Acara",
    bestTime: "Malam pentas festival / Upacara Baritan",
    folklore:
      "Lahir dari upacara Baritan di Dongko karya sesepuh Mbah Gandu untuk mengusir pagebluk dan hama pertanian, kini telah ditetapkan sebagai Warisan Budaya Takbenda (WBTb) Nasional.",
    audioGuide: {
      title: "Filosofi Kuda Raksasa Turonggo Yakso",
      duration: "05:00",
      speaker: "Ki Dalang Samino (Maestro Jaranan)",
    },
    arExperience: {
      title: "LARAS AR: Topeng Buto Yakso 3D",
      description: "Interaksi 3D topeng jaranan buto berkepala raksasa taring panjang bermahkota bulu merak.",
      poiList: [
        { label: "Kepala Buto Yakso", x: "50%", y: "40%", detail: "Anyaman bambu bermahkota bulu merak dan taring emas gagah." },
        { label: "Pecut Samandiman", x: "70%", y: "60%", detail: "Pecut pusaka simbol pengendali nafsu dan angkara murka." },
      ],
    },
    aiTrivia: [
      "Warisan Budaya Takbenda (WBTb) resmi Indonesia yang lahir murni dari lereng Dongko Trenggalek.",
      "Kuda anyamannya memiliki moncong raksasa bertaring (yakso/buto), berbeda dari jaranan kuda biasa.",
    ],
    kecamatan: "Dongko",
    itemType: "budaya",
  },
  {
    id: "budaya-larung-sembonyo",
    name: "Tradisi Upacara Larung Sembonyo",
    category: "Budaya",
    location: "Teluk Prigi, Watulimo",
    distance: "5,8 km dari lokasimu",
    description:
      "Upacara adat sedekah laut tahunan nelayan Teluk Prigi setiap bulan Selo penanggalan Jawa dengan melarung tumpeng agung raksasa ke tengah samudra luas.",
    imageUrl: "/images/larung_sembonyo.jpg",
    rating: 4.9,
    openHours: "Puncak Acara Bulan Selo Jawa",
    ticketPrice: "Gratis Disaksikan Publik",
    bestTime: "Pagi hari saat arak-arakan tumpeng sesaji",
    folklore:
      "Babad pernikahan mistis Raden Tumenggung Yudonegoro dengan Putri Gambar Inten penguasa teluk laut selatan Jawa.",
    audioGuide: {
      title: "Babad Larung Sembonyo Teluk Prigi",
      duration: "05:10",
      speaker: "Ki Anom Narator Budaya",
    },
    arExperience: {
      title: "LARAS AR: Replika Tumpeng Agung 3D & Kapal Hias",
      description: "Visualisasi 3D kapal hias nelayan berhiaskan janur kuning dan gunungan hasil bumi.",
      poiList: [
        { label: "Tumpeng Agung Nelayan", x: "45%", y: "50%", detail: "Gunungan hasil bumi setinggi 3 meter diarak ratusan perahu." },
        { label: "Titik Larung Teluk Prigi", x: "70%", y: "35%", detail: "Lokasi pelepasan sesaji di gerbang samudra selatan." },
      ],
    },
    aiTrivia: [
      "Tradisi ini telah diwariskan turun-temurun sejak abad ke-18 dan menarik ribuan wisatawan setiap tahun.",
      "Menjadi simbol rasa syukur masyarakat maritim atas limpahan hasil laut yang menghidupi nelayan.",
    ],
    kecamatan: "Watulimo",
    itemType: "budaya",
  },

  // ===================== KULINER KHAS TRENGGALEK =====================
  {
    id: "kuliner-ayam-lodho",
    name: "Ayam Lodho Tradisional Trenggalek",
    category: "Kuliner",
    location: "Sentra Durenan & Gandusari, Trenggalek",
    distance: "9,5 km dari lokasimu",
    description:
      "Mahakarya kuliner nomor satu Trenggalek: ayam kampung utuh dipanggang di atas bara arang kayu beraroma sangit gurih, dimasak perlahan dalam kuah santan pedas cabai rawit utuh.",
    imageUrl:
      "https://images.unsplash.com/photo-1598515214211-89d3c73ae83b?auto=format&fit=crop&w=1200&q=80",
    rating: 4.9,
    openHours: "07:30 - 21:00 WIB",
    ticketPrice: "Rp35.000 - Rp95.000 / porsi",
    bestTime: "Makan siang atau makan malam keluarga",
    folklore:
      "Sajian kehormatan yang sakral saat tradisi Kupatan Durenan sepekan setelah Lebaran, melambangkan kemakmuran, rasa syukur, dan tali silaturahmi tanpa batas.",
    audioGuide: {
      title: "Rahasia Rempah & Asap Ayam Lodho Trenggalek",
      duration: "04:10",
      speaker: "Bu Sri (Pelestari Kuliner Lodho Tradisional)",
    },
    arExperience: {
      title: "LARAS AR: Anatomi Rempah & Pemanggangan Lodho",
      description: "Pindai sajian lodho untuk melihat visualisasi racikan rempah santan kental dan cabai rawit gunung.",
      poiList: [
        { label: "Ayam Panggang Arang Sangit", x: "45%", y: "45%", detail: "Ayam kampung muda dipanggang di atas bara kayu kopi." },
        { label: "Kuah Santan Pedas Gurih", x: "65%", y: "60%", detail: "Santan kelapa tua berpadu kunyit, kencur, ketumbar, dan cabai rawit utuh." },
      ],
    },
    aiTrivia: [
      "Saat tradisi Kupatan di Durenan, setiap rumah memasak ayam lodho dan menyuguhkannya secara gratis kepada siapa saja yang berkunjung.",
      "Proses pengasapan bara membuat daging empuk luar biasa dan tahan disimpan tanpa pengawet buatan.",
    ],
    kecamatan: "Durenan",
    itemType: "umkm",
  },
  {
    id: "kuliner-nasi-gegok",
    name: "Nasi Gegok Mbak Tumirah",
    category: "Kuliner",
    location: "Srabah, Bendungan, Trenggalek",
    distance: "16,2 km dari lokasimu",
    description:
      "Kuliner pedas legendaris lereng Gunung Wilis: nasi pulen berbalur sambal ikan teri pedas membara, dibungkus daun pisang dan dikukus dalam dandang tembaga tradisional.",
    imageUrl:
      "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=1200&q=80",
    rating: 4.9,
    openHours: "07:00 - 18:00 WIB",
    ticketPrice: "Rp5.000 - Rp8.000 / bungkus",
    bestTime: "Pagi atau siang hari saat hawa pegunungan sejuk",
    folklore:
      "Diciptakan oleh Mbah Tumirah untuk para buruh petik cengkeh di pegunungan Bendungan agar tubuh mereka tetap hangat dan bertenaga di tengah udara dingin perbukitan.",
    audioGuide: {
      title: "Sensasi Pedas Membakar Nasi Gegok Bendungan",
      duration: "03:45",
      speaker: "Mbak Tumirah (Perintis Nasi Gegok)",
    },
    arExperience: {
      title: "LARAS AR: Aroma Dandang & Daun Pisang",
      description: "Visualisasi proses kukus tradisional dalam dandang tembaga dan varian lauk teri tuna.",
      poiList: [
        { label: "Bungkus Daun Pisang", x: "50%", y: "50%", detail: "Nasi pulen harum daun pisang dengan sambal teri pedas meledak." },
        { label: "Kopi Ijo Wilis", x: "75%", y: "35%", detail: "Minuman kopi tradisional pendamping penawar rasa pedas." },
      ],
    },
    aiTrivia: [
      "Nama 'Gegok' konon berasal dari 'Sego Genem Pegat Roh' saking pedasnya yang membuat mata langsung melek seketika.",
      "Setiap wisatawan yang datang biasanya sanggup melahap 3 sampai 5 bungkus sekaligus karena ketagihan.",
    ],
    kecamatan: "Bendungan",
    itemType: "umkm",
  },
  {
    id: "kuliner-sompil",
    name: "Sompil Gurih Pedas Trenggalek",
    category: "Kuliner",
    location: "Pasar Pon, Trenggalek Kota",
    distance: "1,2 km dari lokasimu",
    description:
      "Sarapan pusaka khas Trenggalek: lontong berbentuk kerucut segitiga kenyal lembut berpadu sayur lodeh pedas lompong (batang talas) muda, tahu pong, dan taburan bubuk koya kedelai gurih.",
    imageUrl:
      "https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=1200&q=80",
    rating: 4.8,
    openHours: "06:00 - 12:00 WIB",
    ticketPrice: "Rp7.000 - Rp12.000 / porsi",
    bestTime: "Pagi hari saat sarapan hangat",
    folklore:
      "Bentuk kerucut segitiga sompil melambangkan gunung-gunung pelindung Trenggalek dan kehangatan guyub rukun pasar rakyat tempo dulu.",
    audioGuide: {
      title: "Kelezatan Kuah Lodeh Sompil Tradisional",
      duration: "03:30",
      speaker: "Mbah Nem (Pedagang Legendaris Pasar Pon)",
    },
    arExperience: {
      title: "LARAS AR: Komposisi Sompil & Bubuk Kedelai",
      description: "Pindai piring sompil untuk melihat racikan bumbu lodeh lompong dan taburan koya kedelai sangrai.",
      poiList: [
        { label: "Lontong Sompil Segitiga", x: "40%", y: "50%", detail: "Dibalut daun pisang dengan teknik lipat segitiga cangkang kerang sompil." },
        { label: "Bubuk Kedelai Sangrai", x: "65%", y: "40%", detail: "Memberikan sensasi gurih manis penyeimbang kuah pedas." },
      ],
    },
    aiTrivia: [
      "Sayur lodeh sompil menggunakan lompong (batang talas sayur) yang diolah dengan resep rahasia agar bebas gatal dan lembut lumer di lidah.",
      "Sompil menjadi menu sarapan wajib bagi para penikmat kuliner tradisional di Kabupaten Trenggalek.",
    ],
    kecamatan: "Trenggalek",
    itemType: "umkm",
  },
  {
    id: "kuliner-tiwul-ikan-asap",
    name: "Sentra Ikan Asap & Nasi Tiwul Teluk Prigi",
    category: "Kuliner",
    location: "PPI Watulimo, Trenggalek",
    distance: "5,5 km dari lokasimu",
    description:
      "Kuliner sehat pesisir selatan berbahan singkong gaplek kaya serat, disajikan hangat bersama ikan tuna/cakalang asap sabut kelapa pantai, lalapan daun pakis, dan sambal terasi pedas.",
    imageUrl:
      "https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?auto=format&fit=crop&w=1200&q=80",
    rating: 4.8,
    openHours: "07:00 - 20:00 WIB",
    ticketPrice: "Rp15.000 - Rp30.000 / porsi",
    bestTime: "Siang atau sore hari sehabis berwisata di pantai",
    folklore:
      "Tiwul adalah makanan pejuang masyarakat Trenggalek zaman dahulu yang kini bermutasi menjadi sajian kuliner bergizi tinggi yang digemari wisatawan.",
    audioGuide: {
      title: "Filosofi Tiwul Singkong Gaplek & Hasil Laut Nelayan",
      duration: "03:50",
      speaker: "Pak Man Prigi",
    },
    arExperience: {
      title: "LARAS AR: Pengolahan Gaplek Menjadi Tiwul Pulen",
      description: "Visualisasi tahapan pembuatan tiwul mulai dari gaplek ubi kayu hingga kukusan dandang bambu.",
      poiList: [
        { label: "Tiwul Gaplek Kukus", x: "45%", y: "45%", detail: "Singkong gaplek rendah gula, kaya serat, dan bebas gluten." },
        { label: "Ikan Asap Sabut Kelapa", x: "65%", y: "60%", detail: "Ikan cakalang segar diasap dengan aroma kelapa pesisir khas." },
      ],
    },
    aiTrivia: [
      "Tiwul memiliki indeks glikemik yang jauh lebih ramah bagi kesehatan dibandingkan beras putih.",
      "Pusat lelang ikan Prigi menyuplai berton-ton ikan asap segar ke berbagai kota di Jawa Timur setiap minggunya.",
    ],
    kecamatan: "Watulimo",
    itemType: "umkm",
  },
  {
    id: "kuliner-alen-alen-kripik",
    name: "Sentra Alen-Alen & Tempe Kripik Trenggalek",
    category: "Kuliner",
    location: "Jl. Raya Tugu / Durenan, Trenggalek",
    distance: "7,5 km dari lokasimu",
    description:
      "Oleh-oleh legendaris paling diburu di Trenggalek: camilan cincin kuning emas alen-alen yang super renyah beraroma ketumbar kunyit, serta tempe kripik tipis beraroma daun jeruk purut.",
    imageUrl:
      "https://images.unsplash.com/photo-1599490659213-e2b9527bd087?auto=format&fit=crop&w=1200&q=80",
    rating: 4.8,
    openHours: "07:00 - 21:00 WIB",
    ticketPrice: "Rp10.000 - Rp25.000 / bungkus",
    bestTime: "Pagi hingga malam untuk belanja buah tangan",
    folklore:
      "Dahulu alen-alen dibuat oleh para putri bangsawan Kadipaten Trenggalek sebagai suguhan terhormat saat menyambut tamu agung kadipaten.",
    audioGuide: {
      title: "Kisah Cincin Emas Alen-Alen & Tempe Kripik",
      duration: "03:20",
      speaker: "Hj. Siti (Pengrajin Oleh-Oleh Khas)",
    },
    arExperience: {
      title: "LARAS AR: Cetakan Alen-Alen & Irisan Tempe Presisi",
      description: "Eksplorasi teknik pilin adonan tapioka alen-alen dan ketipisan irisan kedelai tempe kripik.",
      poiList: [
        { label: "Alen-Alen Kuning Emas", x: "35%", y: "45%", detail: "Warna kuning alami dari rimpang kunyit dengan kerenyahan tahan lama." },
        { label: "Tempe Kripik Daun Jeruk", x: "70%", y: "55%", detail: "Irisan tempe sangat tipis berbalut tepung beras dan daun jeruk wangi." },
      ],
    },
    aiTrivia: [
      "Alen-alen Trenggalek telah dipasarkan hingga mancanegara oleh komunitas diaspora Trenggalek.",
      "Kunci kerenyahan alen-alen terletak pada kualitas tapioka singkong dataran tinggi Trenggalek.",
    ],
    kecamatan: "Tugu",
    itemType: "umkm",
  },
];

export const destinationsData: Destination[] = fallbackDestinations;
