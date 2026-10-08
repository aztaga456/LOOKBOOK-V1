import { PackageItem, HotelLocation, TierPrice } from '@/types';

export const PRICE_TIERS_2D1N: TierPrice[] = [
  { paxRange: '2–3 Orang', minPax: 2, maxPax: 3, tanpaHotel: 1350000, bintang2: 1550000, bintang3: 1750000, bintang4: 2050000, bintang5: 2550000 },
  { paxRange: '4–5 Orang', minPax: 4, maxPax: 5, tanpaHotel: 1050000, bintang2: 1250000, bintang3: 1450000, bintang4: 1750000, bintang5: 2250000 },
  { paxRange: '6–10 Orang', minPax: 6, maxPax: 10, tanpaHotel: 1000000, bintang2: 1200000, bintang3: 1400000, bintang4: 1700000, bintang5: 2200000 },
  { paxRange: '11–15 Orang', minPax: 11, maxPax: 15, tanpaHotel: 950000, bintang2: 1150000, bintang3: 1350000, bintang4: 1650000, bintang5: 2150000 },
  { paxRange: '16–20 Orang', minPax: 16, maxPax: 20, tanpaHotel: 900000, bintang2: 1100000, bintang3: 1300000, bintang4: 1600000, bintang5: 2100000 },
  { paxRange: '21–34 Orang', minPax: 21, maxPax: 34, tanpaHotel: 850000, bintang2: 1050000, bintang3: 1250000, bintang4: 1550000, bintang5: 2050000 },
  { paxRange: '35–65 Orang', minPax: 35, maxPax: 65, tanpaHotel: 800000, bintang2: 1000000, bintang3: 1200000, bintang4: 1500000, bintang5: 2000000 },
  { paxRange: '66–100 Orang', minPax: 66, maxPax: 100, tanpaHotel: 750000, bintang2: 950000, bintang3: 1150000, bintang4: 1450000, bintang5: 1950000 },
  { paxRange: '101–150 Orang', minPax: 101, maxPax: 150, tanpaHotel: 700000, bintang2: 900000, bintang3: 1100000, bintang4: 1400000, bintang5: 1900000 },
];

export const HOTEL_DATABASE: HotelLocation[] = [
  {
    location: 'Kuta Mandalika',
    tiers: [
      { stars: 5, hotels: ['Pullman Lombok Merujani', 'Novotel Lombok'] },
      { stars: 4, hotels: ['Origin', 'El Tropico', 'Sima', 'Sikara', 'Tiu Oasis'] },
      { stars: 3, hotels: ['Jati', 'Kies Villas', 'Puri Rinjani', 'Tastura'] },
      { stars: 2, hotels: ['Kuta Indah', 'LoTide Surf Camp', 'Mana Eco'] },
    ],
  },
  {
    location: 'Mataram City',
    tiers: [
      { stars: 4, hotels: ['Lombok Astoria', 'Aston Inn', 'Prime Park', 'Golden Palace'] },
      { stars: 3, hotels: ['Favehotel Langko', 'Hotel Santika', 'Lombok Plaza'] },
      { stars: 2, hotels: ['Hotel Griya Asri', 'Hastina', 'M Hotel'] },
    ],
  },
  {
    location: 'Senggigi',
    tiers: [
      { stars: 5, hotels: ['Katamaran'] },
      { stars: 4, hotels: ['Merumatta', 'Holiday Resort', 'Aruna', 'Svarga'] },
      { stars: 3, hotels: ['Puri Saron', 'Sunset Lavinia', 'Pasific Beach'] },
      { stars: 2, hotels: ['Cafe Alberto', 'Bale Mandala', 'Indah Homestay'] },
    ],
  },
  {
    location: 'Gili Trawangan',
    tiers: [
      { stars: 5, hotels: ['Pondok Santi Estate', 'Cocana Resort'] },
      { stars: 4, hotels: ['Pearl', 'Aston Sunset', 'Jambuluwuk Oceano', 'Vila Ombak', 'Lumi'] },
      { stars: 3, hotels: ['The Trawangan Resort', 'Pesona Beach', 'Marc Hotel'] },
      { stars: 2, hotels: ['Gili Sands', 'Gili Amor', 'Trawangan Dive'] },
    ],
  },
];

export const LOMBOK_PACKAGES: PackageItem[] = [
  // 1. Paket Wisata Lombok 2 Hari 1 Malam (2D1N) - Price List Image 1
  {
    id: 'paket-2d1n',
    name: {
      id: 'Paket Wisata Lombok 2 Hari 1 Malam (2D1N)',
      en: 'Lombok Tour Package 2 Days 1 Night (2D1N)',
    },
    location: {
      id: 'Lombok (Selatan & Kota)',
      en: 'Lombok (South & City Tour)',
    },
    shortDescription: {
      id: 'Paket lengkap hemat menginap 2D1N dengan pilihan hotel Bintang 2 s/d Bintang 5 atau Tanpa Hotel. Cocok untuk liburan nyaman mulai 2 peserta.',
      en: 'Comprehensive 2D1N stay tour with options from No Hotel to 5-Star luxury. Perfect for romantic, family or corporate trips starting from 2 pax.',
    },
    duration: {
      id: '2 Hari 1 Malam',
      en: '2 Days 1 Night',
    },
    price: 700000,
    priceUnit: {
      id: '/ orang (mulai dari)',
      en: '/ person (starting from)',
    },
    rating: 4.9,
    reviewsCount: 342,
    image: 'https://images.unsplash.com/photo-1518548419970-58e3b4079ab2?auto=format&fit=crop&w=1200&q=80',
    category: 'stay',
    minPax: 2,
    tierPrices: PRICE_TIERS_2D1N,
    highlights: [
      { id: 'Tersedia pilihan Tanpa Hotel & Hotel Bintang 2 s/d 5', en: 'Available with No Hotel & 2 to 5-Star Hotel options' },
      { id: 'Transportasi All New Avanza / Armada Menyesuaikan', en: 'Comfortable All New Avanza / AC private transport' },
      { id: 'Airport Transfer Pulang Pergi (PP)', en: 'Roundtrip Airport Transfer included' },
      { id: 'Itinerary fleksibel sesuai kebutuhan peserta', en: 'Flexible custom itinerary on demand' }
    ],
    itinerary: [
      {
        timeOrDay: 'Hari 1',
        title: { id: 'Kedatangan & Wisata Sasak Mandalika', en: 'Arrival & Sasak Mandalika Tour' },
        desc: {
          id: 'Penjemputan di Bandara Internasional Lombok (BIL), mengunjungi Desa Adat Sade, Pantai Kuta Mandalika, Sirkuit Mandalika, Bukit Merese untuk sunset spektakuler, lalu check-in hotel pilihan.',
          en: 'Airport pickup at Lombok Airport (BIL), explore Sade traditional Sasak village, Kuta Mandalika beach, MotoGP Circuit, golden sunset at Merese Hill, then hotel check-in.'
        }
      },
      {
        timeOrDay: 'Hari 2',
        title: { id: 'City Tour, Belanja Oleh-Oleh & Airport Transfer', en: 'City Tour, Souvenirs & Airport Transfer' },
        desc: {
          id: 'Sarapan di hotel, check-out, mengunjungi pusat kerajinan tenun Sukarara, oleh-oleh mutiara & jajanan khas Lombok, transfer kembali ke Bandara.',
          en: 'Breakfast at hotel, check-out, visit Sukarara handweaving village, Lombok pearls and local snacks market, then transfer back to Airport.'
        }
      }
    ],
    inclusions: [
      { id: 'Transportasi (All New Avanza / Menyesuaikan)', en: 'Transportation (All New Avanza / Adapted)' },
      { id: 'Bahan Bakar Minyak (BBM)', en: 'Fuel (BBM)' },
      { id: 'Driver Berpengalaman & Ramah', en: 'Experienced & Courteous Driver' },
      { id: 'Parkir Seluruh Destinasi', en: 'Parking fees at all destinations' },
      { id: 'Air Mineral Selama Tur', en: 'Mineral water during the trip' },
      { id: 'Tiket Masuk Objek Wisata', en: 'Entrance tickets to all attractions' },
      { id: 'Akomodasi Hotel (Sesuai Pilihan Bintang)', en: 'Hotel accommodation (According to selected star tier)' },
      { id: 'Airport Transfer (PP)', en: 'Roundtrip Airport Transfer' }
    ],
    exclusions: [
      { id: 'Tiket Pesawat ke/dari Lombok', en: 'Flight tickets to/from Lombok' },
      { id: 'Makan (Lunch & Dinner)', en: 'Meals (Lunch & Dinner)' },
      { id: 'Pengeluaran Pribadi', en: 'Personal expenses' },
      { id: 'Tip Driver (Sukarela)', en: 'Driver tip (Voluntary)' },
      { id: 'Biaya Tambahan Diluar Itinerary', en: 'Additional expenses outside itinerary' }
    ]
  },

  // 2. GILI TRILOGY - Private Snorkeling (Image 2)
  {
    id: 'gili-trilogy',
    name: {
      id: 'Gili Trilogy — Private Snorkeling',
      en: 'Gili Trilogy — Private Snorkeling',
    },
    location: {
      id: '3 Gili (Gili T, Gili Air, Gili Meno)',
      en: '3 Gili Islands (Gili T, Gili Air, Gili Meno)',
    },
    shortDescription: {
      id: 'Private snorkeling trip eksklusif mengunjungi 3 Gili: spot patung bawah laut Nest, berenang bersama penyu liar, dan karang warna-warni.',
      en: 'Exclusive private snorkeling excursion to 3 Gili Islands: Nest underwater statues, swimming with wild sea turtles, and colorful coral gardens.',
    },
    duration: {
      id: '4 – 5 Jam (Private Boat)',
      en: '4 – 5 Hours (Private Boat)',
    },
    price: 1000000,
    priceUnit: {
      id: '/ paket privat (Maks. 6 orang)',
      en: '/ private package (Max 6 persons)',
    },
    rating: 5.0,
    reviewsCount: 420,
    image: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=1200&q=80',
    category: 'snorkeling',
    maxPax: 6,
    highlights: [
      { id: 'Explore 3 Gili: Gili Trawangan, Gili Air, Gili Meno', en: 'Explore 3 Gili: Gili Trawangan, Gili Air, Gili Meno' },
      { id: 'Dokumentasi Underwater Kamera GoPro Terbaru', en: 'Underwater documentation with latest edition GoPro' },
      { id: 'Private Boat & Guide Khusus Rombongan Anda', en: 'Private boat & dedicated guide just for your group' },
      { id: 'Peralatan Lengkap, Handuk, Air Mineral & Asuransi', en: 'Full gear, towels, mineral water & insurance included' }
    ],
    itinerary: [
      {
        timeOrDay: 'Spot 1',
        title: { id: 'Gili Air Coral Garden & Fish Feeding', en: 'Gili Air Coral Garden & Fish Feeding' },
        desc: {
          id: 'Berenang di perairan jernih Gili Air sambil memberi makan ratusan ikan karang warna-warni yang jinak.',
          en: 'Swim in crystal clear waters of Gili Air while feeding friendly tropical reef fish.'
        }
      },
      {
        timeOrDay: 'Spot 2',
        title: { id: 'Gili Meno Underwater Statues (The Nest)', en: 'Gili Meno Underwater Statues (The Nest)' },
        desc: {
          id: 'Foto bawah air ikonik di patung lingkaran karya Jason deCaires Taylor dan spot konservasi penyu laut.',
          en: 'Iconic underwater photoshoot at the circle statues by Jason deCaires Taylor and sea turtle haven.'
        }
      },
      {
        timeOrDay: 'Spot 3',
        title: { id: 'Gili Trawangan Turtle Point & Rest Area', en: 'Gili Trawangan Turtle Point & Rest Area' },
        desc: {
          id: 'Berenang bersama penyu hijau liar di Turtle Point lalu bersantai di pantai pasir putih Gili Trawangan.',
          en: 'Encounter wild green sea turtles at Turtle Point and relax along the vibrant white shores of Gili T.'
        }
      }
    ],
    inclusions: [
      { id: 'Private Guide Berpengalaman', en: 'Private Guide' },
      { id: 'GoPro Latest Edition (Foto & Video HD)', en: 'GoPro Latest Edition (HD Photos & Videos)' },
      { id: 'Snorkeling Equipment (Masker, Snorkel, Life Jacket)', en: 'Snorkeling Equipment (Mask, Snorkel, Life Jacket)' },
      { id: 'Private Boat Khusus (Bukan Sharing)', en: 'Private Boat (Not Shared)' },
      { id: 'Mineral Water & Towel (Handuk Bersih)', en: 'Mineral Water & Clean Towel' },
      { id: 'Insurance Included (Asuransi Perjalanan)', en: 'Insurance Included' }
    ],
    exclusions: [
      { id: 'Makan siang di pulau (opsional)', en: 'Lunch on the island (optional)' },
      { id: 'Sewa sepeda / Cidomo di Gili Trawangan', en: 'Bicycle or Cidomo carriage rental on Gili T' },
      { id: 'Transportasi antar jemput darat ke pelabuhan', en: 'Land transfers to harbor (available on request)' }
    ]
  },

  // 3. One Day Trip SENARU & SEMBALUN (Image 3)
  {
    id: 'senaru-sembalun',
    name: {
      id: 'One Day Trip: Senaru & Sembalun',
      en: 'One Day Trip: Senaru & Sembalun',
    },
    location: {
      id: 'Lombok Utara & Sembalun',
      en: 'North Lombok & Sembalun Valley',
    },
    shortDescription: {
      id: 'Jelajahi keagungan lembah Sembalun berlatar Gunung Rinjani serta kesegaran mistis Air Terjun Sendang Gile & Tiu Kelep.',
      en: 'Explore majestic Sembalun valley at the foot of Mt Rinjani and experience the mystical Sendang Gile & Tiu Kelep waterfalls.',
    },
    duration: {
      id: '1 Hari Penuh (07.00 – 16.30)',
      en: 'Full Day (07.00 – 16.30)',
    },
    price: 525000,
    priceUnit: {
      id: '/ pack (Min. 2 Pax)',
      en: '/ pack (Min. 2 Pax)',
    },
    rating: 4.9,
    reviewsCount: 236,
    image: 'https://images.unsplash.com/photo-1432405972618-c60b0225b8f9?auto=format&fit=crop&w=1200&q=80',
    category: 'oneday',
    minPax: 2,
    highlights: [
      { id: 'Sembalun View Point panorama lembah pegunungan', en: 'Sembalun View Point with panoramic mountain valley views' },
      { id: 'Sendang Gile & Tiu Kelep Waterfall', en: 'Sendang Gile & Tiu Kelep waterfalls soft trekking' },
      { id: 'Private Trip hemat sudah termasuk tiket dan supir BBM', en: 'Private trip inclusive of tickets, car, fuel & driver' }
    ],
    itinerary: [
      { timeOrDay: '07.00', title: { id: 'Pick Up & Briefing', en: 'Pick Up & Briefing' }, desc: { id: 'Penjemputan di hotel dan pengenalan rute wisata hari ini.', en: 'Hotel pickup and trip briefing by our driver.' } },
      { timeOrDay: '09.00', title: { id: 'Sembalun View Point', en: 'Sembalun View Point' }, desc: { id: 'Spot foto pemandangan petak sawah warna-warni dan udara sejuk pegunungan.', en: 'Photo opportunity overlooking patchwork hills and refreshing mountain air.' } },
      { timeOrDay: '11.00', title: { id: 'Sendang Gile Waterfall', en: 'Sendang Gile Waterfall' }, desc: { id: 'Menikmati gemuruh tirai air terjun pertama setinggi 30 meter.', en: 'Experience the 30-meter high first cascade surrounded by lush forest.' } },
      { timeOrDay: '12.30', title: { id: 'Lunch Break', en: 'Lunch Break' }, desc: { id: 'Makan siang santai di restoran lokal bernuansa alam Senaru.', en: 'Lunch at a scenic local restaurant in Senaru.' } },
      { timeOrDay: '14.00', title: { id: 'Tiu Kelep Waterfall', en: 'Tiu Kelep Waterfall' }, desc: { id: 'Melintasi sungai dangkal menuju air terjun magis Tiu Kelep yang terkenal awet muda.', en: 'River walk to the magical Tiu Kelep curtain waterfall, legendary for youth rejuvenation.' } },
      { timeOrDay: '16.30', title: { id: 'Drop Off Hotel', en: 'Drop Off Hotel' }, desc: { id: 'Perjalanan kembali dan pengantaran pulang ke hotel.', en: 'Scenic drive back and hotel drop-off.' } },
    ],
    inclusions: [
      { id: 'Transport & Driver', en: 'Transport & Driver' },
      { id: 'BBM & Parkir', en: 'Fuel (BBM) & Parking' },
      { id: 'Air Mineral Dingin', en: 'Mineral Water' },
      { id: 'Tiket Masuk Wisata', en: 'Entrance Tickets to all Attractions' }
    ],
    exclusions: [
      { id: 'Lunch (Makan Siang)', en: 'Lunch' },
      { id: 'Personal Expense (Pengeluaran Pribadi)', en: 'Personal Expense' }
    ]
  },

  // 4. One Day Trip SASAK TOUR & MANDALIKA (Image 4)
  {
    id: 'sasak-mandalika',
    name: {
      id: 'One Day Trip: Sasak Tour & Mandalika',
      en: 'One Day Trip: Sasak Tour & Mandalika',
    },
    location: {
      id: 'Lombok Tengah (Sade & Mandalika)',
      en: 'Central Lombok (Sade & Mandalika)',
    },
    shortDescription: {
      id: 'Jelajahi budaya autentik suku Sasak di Desa Sade & Ende, keindahan Pantai Kuta Mandalika, Sirkuit MotoGP, dan sunset Bukit Merese.',
      en: 'Explore ancient Sasak culture at Sade & Ende villages, Kuta Mandalika beach, international MotoGP Circuit, and sunset at Merese Hill.',
    },
    duration: {
      id: 'Durasi ± 10 Jam (Full Day)',
      en: 'Duration ± 10 Hours (Full Day)',
    },
    price: 425000,
    priceUnit: {
      id: '/ pack (Min. 2 Pax)',
      en: '/ pack (Min. 2 Pax)',
    },
    rating: 4.8,
    reviewsCount: 310,
    image: 'https://images.unsplash.com/photo-1596402184320-417e7178b2cd?auto=format&fit=crop&w=1200&q=80',
    category: 'oneday',
    minPax: 2,
    highlights: [
      { id: 'Desa Sade (Rumah Adat Sasak)', en: 'Sade Traditional Sasak Village' },
      { id: 'Desa Ende (Sentra Tenun Tradisional)', en: 'Ende Traditional Handweaving Village' },
      { id: 'Pantai Kuta Mandalika & Bukit Merese', en: 'Kuta Mandalika Beach & Merese Hill' },
      { id: 'Sirkuit Mandalika MotoGP', en: 'Mandalika International MotoGP Circuit' }
    ],
    itinerary: [
      { timeOrDay: 'Destinasi 1', title: { id: 'Desa Sade (Rumah Adat Sasak)', en: 'Sade Village (Sasak Traditional Houses)' }, desc: { id: 'Mengenal arsitektur unik rumah beratap jerami dan lantai kotoran kerbau yang autentik.', en: 'Discover unique thatched roof architecture and centuries-old cultural customs.' } },
      { timeOrDay: 'Destinasi 2', title: { id: 'Desa Ende (Tenun Tradisional)', en: 'Ende Village (Handwoven Textiles)' }, desc: { id: 'Melihat langsung wanita Sasak menenun kain songket dengan motif filosofis warisan nenek moyang.', en: 'Watch Sasak artisans weave ornate traditional songket cloths on wooden looms.' } },
      { timeOrDay: 'Destinasi 3', title: { id: 'Pantai Kuta Mandalika', en: 'Kuta Mandalika Beach' }, desc: { id: 'Pantai berpasir butiran merica unik dengan panorama teluk eksotis.', en: 'Exotic bay famous for its unique round pepper-like sand grains.' } },
      { timeOrDay: 'Destinasi 4', title: { id: 'Bukit Merese', en: 'Merese Hill' }, desc: { id: 'Bukit hijau dengan pemandangan 360 derajat samudra lepas dan tebing karang dramatis.', en: 'Rolling green cliff hill offering a 360-degree viewpoint of the Indian Ocean.' } },
      { timeOrDay: 'Destinasi 5', title: { id: 'Sirkuit Mandalika', en: 'Mandalika MotoGP Circuit' }, desc: { id: 'Spot foto di lintasan sirkuit balap jalan raya internasional kebanggaan Indonesia.', en: 'Photo stop at Indonesia’s premier world-class MotoGP street circuit.' } },
    ],
    inclusions: [
      { id: 'Transportasi AC Nyaman', en: 'Comfortable AC Transportation' },
      { id: 'Driver & BBM', en: 'Driver & Fuel (BBM)' },
      { id: 'Tiket Parkir Seluruh Lokasi', en: 'Parking fees at all sites' },
      { id: 'Air Mineral', en: 'Mineral Water' }
    ],
    exclusions: [
      { id: 'Makan (Lunch/Dinner)', en: 'Meals (Lunch/Dinner)' },
      { id: 'Tiket Masuk Objek Wisata', en: 'Attraction Entrance Tickets' },
      { id: 'Pengeluaran Pribadi', en: 'Personal Expenses' }
    ]
  }
];

export const TESTIMONIALS = [
  {
    name: 'Budi Santoso & Keluarga',
    origin: 'Jakarta',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80',
    comment: {
      id: 'Pelayanan Paket 2D1N Lombok Partner luar biasa memuaskan! Driver sangat sopan, hotel bintang 4 nya berkelas, dan anak-anak sangat bahagia saat snorkeling 3 Gili. Highly recommended!',
      en: 'The 2D1N tour package from Lombok Partner was top-notch! The driver was very courteous, the 4-star hotel was wonderful, and our children had the best time snorkeling in 3 Gili!'
    },
    rating: 5,
    package: 'Paket 2D1N Lombok'
  },
  {
    name: 'Jessica & Kevin',
    origin: 'Surabaya',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80',
    comment: {
      id: 'Gili Trilogy Private Snorkeling bener-bener privat! Gak gabung orang lain, hasil foto GoPro nya jernih banget di patung The Nest. Admin responnya secepat kilat.',
      en: 'Gili Trilogy private snorkeling was truly private! No sharing with strangers, and the GoPro photos at The Nest were crystal clear. Fast customer service!'
    },
    rating: 5,
    package: 'Gili Trilogy Private Snorkeling'
  },
  {
    name: 'Mark & Sarah',
    origin: 'Australia',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80',
    comment: {
      id: 'Trip Senaru & Sembalun sangat menakjubkan. Air terjun Tiu Kelep adalah salah satu tempat paling indah yang pernah saya lihat. Terima kasih Lombok Partner!',
      en: 'The Senaru & Sembalun day trip was breathtaking. Tiu Kelep waterfall is easily one of the most magical places on Earth. Thank you Lombok Partner!'
    },
    rating: 5,
    package: 'Senaru & Sembalun Trip'
  },
  {
    name: 'dr. Amanda & Rekan',
    origin: 'Bandung',
    avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=200&q=80',
    comment: {
      id: 'Liburan bersama rekan kerja ke Kuta Mandalika dan Bukit Merese sangat berkesan. Driver ramah, tahu spot foto tersembunyi, dan sunsetnya sangat magis!',
      en: 'Our holiday trip with colleagues to Kuta Mandalika and Merese Hill was unforgettable. Friendly driver, knew hidden photo spots, and the sunset was pure magic!'
    },
    rating: 5,
    package: 'Sasak Mandalika Discovery'
  },
  {
    name: 'Rian Pratama',
    origin: 'Yogyakarta',
    avatar: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=200&q=80',
    comment: {
      id: 'Snorkeling di Secret Gili (Nanggu, Sudak, Kedis) suasananya tenang dan alami sekali. Karang masih sangat terjaga dan banyak ikan warna-warni. Pelayanan mantap!',
      en: 'Snorkeling at Secret Gili (Nanggu, Sudak, Kedis) was so peaceful and pristine. Coral reef is vibrant with tons of colorful fish. Outstanding hospitality!'
    },
    rating: 5,
    package: 'Secret Gili Snorkeling'
  },
  {
    name: 'Clara & David',
    origin: 'Singapura',
    avatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=200&q=80',
    comment: {
      id: 'Bulan madu kami di Lombok sangat sempurna bersama Lombok Partner. Pilihan resort tepi pantainya romantis, itinerary santai tanpa terburu-buru, service bintang 5!',
      en: 'Our honeymoon in Lombok was extraordinary with Lombok Partner. Romantic beachfront resort, relaxed itinerary without rush, and 5-star service throughout!'
    },
    rating: 5,
    package: 'Lombok Honeymoon Romantic'
  },
  {
    name: 'Hendro Wijaya & Tim',
    origin: 'Semarang',
    avatar: 'https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?auto=format&fit=crop&w=200&q=80',
    comment: {
      id: 'Acara family gathering 16 orang berjalan lancar dan terkoordinasi rapi. Bus wisata bersih, driver profesional, makanan lokal yang direkomendasikan semuanya lezat!',
      en: 'Our family gathering of 16 went seamlessly and well-organized. Clean tour bus, professional driver, and all the recommended local culinary stops were delicious!'
    },
    rating: 5,
    package: 'Private Family Gathering 3D2N'
  }
];

