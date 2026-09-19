/* ════════════════════════════════════════════════════════════
   The Story of 30 Friends — konten diambil dari naskah buku
   (Zainul Arkaan Al Insi, 2026, 346 halaman)
   ════════════════════════════════════════════════════════════ */

const ROUTE = [
  { kode: 'CGK', kota: 'Jakarta',      neg: 'Indonesia',    ket: 'Titik berangkat' },
  { kode: 'KUL', kota: 'Kuala Lumpur', neg: 'Malaysia',     ket: 'Pendaratan lembut' },
  { kode: 'CAI', kota: 'Kairo',        neg: 'Mesir',        ket: '11 hari' },
  { kode: 'CMN', kota: 'Casablanca',   neg: 'Maroko',       ket: 'Medina & Sahara' },
  { kode: 'AMS', kota: 'Amsterdam',    neg: 'Eropa',        ket: '9 negara / 9 hari' },
  { kode: 'IST', kota: 'Istanbul',     neg: 'Turki',        ket: 'Dua benua' },
  { kode: 'JED', kota: 'Makkah',       neg: 'Arab Saudi',   ket: '8 hari' },
  { kode: 'KTM', kota: 'Kathmandu',    neg: 'Nepal',        ket: '6 hari' },
  { kode: 'BKK', kota: 'Bangkok',      neg: 'Thailand',     ket: 'Ramadan & Itikaf' },
  { kode: 'VTE', kota: 'Vientiane',    neg: 'Laos',         ket: '5 hari' },
  { kode: 'HAN', kota: 'Hanoi',        neg: 'Vietnam',      ket: 'Sleeper bus' },
  { kode: 'HKG', kota: 'Hong Kong',    neg: 'Hong Kong & Makau', ket: 'Transit terakhir' },
  { kode: 'CGK', kota: 'Jakarta',      neg: 'Pulang',       ket: 'Home at last' }
];

const COUNTRIES = [
  {
    id: 'malaysia', no: '01', nama: 'Malaysia', sub: 'Tetangga yang ramah',
    benua: 'Asia Tenggara', warna: '#8c6a2f',
    tagline: 'Pendaratan lembut — cukup dekat agar makanannya terasa akrab, cukup berbeda agar jalannya sudah terasa asing.',
    fakta: [
      ['Ibu kota', 'Kuala Lumpur'],
      ['Mata uang', 'Ringgit Malaysia (MYR)'],
      ['Bahasa', 'Melayu, Inggris, Mandarin, Tamil'],
      ['Puncak', 'Makan malam hawker di George Town, Penang'],
      ['Kenangan', 'Penyeberangan darat pertama — Johor Bahru dengan bus']
    ],
    teks: [
      'Menara Kuala Lumpur menjulang keluar dari rumpun sawit; kios-kios hawker Penang menyajikan mi terbaik sepanjang perjalanan — sebuah pendapat yang tidak pernah kami revisi.',
      'Di sinilah kami belajar ritme hidup bersama tiga puluh orang di satu rumah: giliran mandi, giliran masak, dan pelajaran pertama tentang biaya hidup di negeri orang.'
    ],
    foto: ['malaysia-0', 'malaysia-1', 'malaysia-2'],
    alt: ['Berkumpul bersama di rumah singgah Malaysia', 'Pusat perbelanjaan di Kuala Lumpur', 'Rombongan di stasiun kereta']
  },
  {
    id: 'egypt', no: '02', nama: 'Mesir', sub: 'Negeri para Firaun',
    benua: 'Afrika Utara', warna: '#b4552a',
    tagline: 'Mesir lebih tua dari apa pun yang pernah kami berdiri di sampingnya. Piramida membuat kamera kami malu; Sungai Nil membuat peta kami cuma jadi saran.',
    fakta: [
      ['Ibu kota', 'Kairo'],
      ['Mata uang', 'Pound Mesir (EGP) · 1 EGP ≈ Rp 800'],
      ['Bahasa', 'Arab'],
      ['Lama tinggal', '11 hari'],
      ['Puncak', 'Berdiri di kaki Piramida Agung Giza'],
      ['Kenangan', 'Felucca di Nil saat senja, kota hening saat Maghrib']
    ],
    teks: [
      'Lalu lintas Kairo mengajari kami bahwa lajur itu cuma pendapat, dan corniche Alexandria mengajari kami bahwa Laut Mediterania masih terlihat sama seperti yang dilihat Cleopatra.',
      'Sepiring koshary di pinggir jalan seharga 25 EGP — sekitar Rp 20.000. Kami transit lewat China dari Indonesia, jadi total perjalanan hampir satu hari penuh.'
    ],
    foto: ['egypt-0', 'egypt-1', 'egypt-2', 'egypt-3'],
    alt: ['Unta di depan Piramida Giza', 'Rombongan di kompleks piramida', 'Halaman Masjid Al-Azhar', 'Foto bersama di Kairo']
  },
  {
    id: 'morocco', no: '03', nama: 'Maroko', sub: 'Warna-warni Afrika Utara',
    benua: 'Afrika Utara', warna: '#a8452e',
    tagline: 'Maroko sampai ke indera kami sebelum peta kami sempat menyusul.',
    fakta: [
      ['Ibu kota', 'Rabat'],
      ['Mata uang', 'Dirham Maroko (MAD) · 1 MAD ≈ Rp 1.600'],
      ['Bahasa', 'Arab, Berber, Prancis'],
      ['Cuaca', '18–24° di utara, sampai 35° di dekat gurun'],
      ['Puncak', 'Matahari terbenam di Sahara dari punggung unta'],
      ['Kenangan', 'Tersesat total — dan produktif — di medina Fes']
    ],
    teks: [
      'Medina Fes dan Marrakech adalah labirin yang jelas dirancang oleh orang-orang yang menikmati melihat pelancong tersesat.',
      'Kami minum teh mint yang dituang dari ketinggian, makan tagine yang butuh enam jam untuk matang, dan belajar bahwa menawar itu bentuk percakapan — bukan pertempuran. Sepiring tagine di warung lokal: 30 MAD, sekitar Rp 48.000.'
    ],
    foto: ['morocco-0', 'morocco-1', 'morocco-2', 'morocco-3'],
    alt: ['Masjid Hassan II di Casablanca', 'Rombongan di Menara Hassan, Rabat', 'Menara Hassan', 'Berkumpul di bawah pohon palem']
  },
  {
    id: 'europe', no: '04', nama: 'Eropa', sub: 'Sembilan negara, sembilan hari',
    benua: 'Eropa', warna: '#4c5c6b',
    tagline: 'Wilayah Schengen, kami putuskan, bukanlah sebuah tempat — melainkan sebuah kecepatan.',
    fakta: [
      ['Negara', 'Belanda, Belgia, Jerman, Ceko, Austria, Slovakia, Hungaria, Serbia, Bulgaria'],
      ['Mata uang', 'Euro; Koruna Ceko; Forint Hungaria; Dinar Serbia; Lev Bulgaria'],
      ['Lama tinggal', '9 hari — satu negara per hari'],
      ['Puncak', 'Kereta malam Wina → Budapest'],
      ['Kenangan', 'Sadar bahwa kami sudah melewati tiga perbatasan sebelum makan siang']
    ],
    teks: [
      'Dari Amsterdam ke Sofia, Eropa adalah kabur-kaburan stasiun kereta, penyeberangan tanpa batas, dan kemewahan aneh bisa minum air keran di mana saja.',
      'Kami tidur di bus malam, hidup dari roti dan keju, dan belajar mengenali tiap negara dari desain stopkontaknya. Cuaca dingin dan kelabu, 4–10° C. Makan murah di Eropa 8–12 EUR — jauh lebih mahal dari Asia.'
    ],
    foto: ['europe-0', 'europe-1', 'europe-2', 'europe-3'],
    alt: ['Jam Astronomi di alun-alun Praha', 'Rombongan membawa bendera Indonesia di Praha', 'Menara Bubuk Mesiu, Praha', 'Foto bersama di Bandara Schiphol']
  },
  {
    id: 'turkey', no: '05', nama: 'Turki', sub: 'Di antara dua benua',
    benua: 'Eropa / Asia', warna: '#8f3a3a',
    tagline: 'Istanbul terlihat seperti Eropa tapi terdengar seperti Timur Tengah; lembah batu Cappadocia terlihat seperti bukan di mana-mana.',
    fakta: [
      ['Ibu kota', 'Ankara (kota terbesar: Istanbul)'],
      ['Mata uang', 'Lira Turki (TRY)'],
      ['Bahasa', 'Turki'],
      ['Puncak', 'Balon udara saat matahari terbit di Cappadocia'],
      ['Kenangan', 'Çay dalam gelas tulip di Jembatan Galata']
    ],
    teks: [
      'Kami menyeberangi Bosphorus dengan feri dan berganti benua dalam dua puluh menit — cara termurah meninggalkan Eropa yang pernah ditemukan.',
      'Air keran Istanbul sebenarnya aman. Istanbulkart jadi teman terbaik. Sepiring makan di warung lokal 70 TL, sekitar Rp 35.000 — restoran mewah di ujung jalan tiga kali lipatnya, untuk daging yang sama.'
    ],
    foto: ['turkey-0', 'turkey-1', 'turkey-2'],
    alt: ['Menara Galata dari Bosphorus', 'Hagia Sophia', 'Gerbang Istana Topkapi']
  },
  {
    id: 'saudi', no: '06', nama: 'Arab Saudi', sub: 'Kota-kota suci',
    benua: 'Timur Tengah', warna: '#3f4a3a',
    tagline: 'Titik tengah spiritual perjalanan. Jubah putih umrah dan marmer Masjidil Haram.',
    fakta: [
      ['Kota', 'Jeddah · Madinah · Makkah'],
      ['Mata uang', 'Riyal Saudi (SAR) · 1 SAR ≈ Rp 4.200'],
      ['Bahasa', 'Arab'],
      ['Lama tinggal', '8 hari'],
      ['Puncak', 'Tawaf di Ka’bah'],
      ['Kenangan', 'Peralihan dari panas gurun ke dingin gunung dalam satu pekan']
    ],
    teks: [
      'Cuaca sangat panas dan kering, sering 38–45° C di siang hari, tapi kering, bukan lembap. Malam di gurun justru dingin mengejutkan.',
      'Sepiring nasi mandi dengan ayam 15 SAR, sekitar Rp 63.000. Kami terbang langsung Jakarta–Jeddah, lalu jalur darat ke Madinah dan Makkah.'
    ],
    foto: ['saudi-0', 'saudi-1', 'saudi-2'],
    alt: ['Menara Masjid Nabawi', 'Di bawah payung raksasa Masjid Nabawi', 'Rombongan berjubah putih']
  },
  {
    id: 'nepal', no: '07', nama: 'Nepal', sub: 'Negeri pegunungan',
    benua: 'Asia Selatan', warna: '#4a5f6b',
    tagline: 'Nepal memberi kami keheningan gunung-gunung yang sudah menyaksikan kerajaan-kerajaan naik dan runtuh.',
    fakta: [
      ['Ibu kota', 'Kathmandu'],
      ['Mata uang', 'Rupee Nepal (NPR)'],
      ['Bahasa', 'Nepali'],
      ['Lama tinggal', '6 hari'],
      ['Puncak', 'Matahari terbit di kaki Annapurna'],
      ['Kenangan', 'Belajar IT di pegunungan — Kalinchowk & PT Cheddar']
    ],
    teks: [
      'Bus lokal di Kathmandu memang berguncang, tapi murah. Kami mendaki, kami main futsal, kami singgah di kuil-kuil, dan kami minum air yang harus direbus dulu.',
      'Dari panas Jazirah Arab ke dingin Himalaya dalam hitungan hari — peralihan paling ekstrem sepanjang perjalanan.'
    ],
    foto: ['nepal-0', 'nepal-1', 'nepal-2'],
    alt: ['Stupa Swayambhunath', 'Pegunungan Himalaya', 'Puncak bersalju dari ketinggian']
  },
  {
    id: 'thailand', no: '08', nama: 'Thailand', sub: 'Bangkok, Ramadan & Itikaf',
    benua: 'Asia Tenggara', warna: '#a8762c',
    tagline: 'Panas Bangkok menekan seperti tangan di bahu; pasar malamnya buka cukup lama sampai kau lupa jam berapa sekarang.',
    fakta: [
      ['Ibu kota', 'Bangkok'],
      ['Mata uang', 'Baht Thailand (THB) · 1 THB ≈ Rp 460'],
      ['Bahasa', 'Thai'],
      ['Puncak', 'Itikaf di masjid Bangkok pada sepuluh malam terakhir Ramadan'],
      ['Kenangan', 'Buka puasa bersama orang asing yang menolak dibayar']
    ],
    teks: [
      'Singgahan terpanjang dalam perjalanan kami — negara yang berhasil terasa akrab sekaligus sepenuhnya asing. Kami berpuasa Ramadan di sini, dan berbuka di tengah orang-orang yang tak pernah membiarkan kami membayar.',
      'BTS Skytrain dan perahu antar-jemput gratis ke Icon Siam jadi andalan. Pad thai dari gerobak, seminar IT, KBM, pasar malam, dan Idulfitri yang terasa berbeda.'
    ],
    foto: ['thailand-0', 'thailand-1', 'thailand-2', 'thailand-3'],
    alt: ['Wat Arun di tepi Sungai Chao Phraya', 'Kuil di Bangkok', 'Bangkok di waktu malam', 'Jalanan Bangkok dari atas']
  },
  {
    id: 'laos', no: '09', nama: 'Laos', sub: 'Kereta malam ke Vientiane',
    benua: 'Asia Tenggara', warna: '#5f6b52',
    tagline: 'Negara yang tak kami rencanakan untuk dicintai. Ia tak meminta apa pun dari kami kecuali kesabaran.',
    fakta: [
      ['Ibu kota', 'Vientiane'],
      ['Mata uang', 'Kip Laos (LAK)'],
      ['Bahasa', 'Lao'],
      ['Lama tinggal', '5 hari'],
      ['Puncak', 'Senja di Sungai Mekong dari tepian Vientiane'],
      ['Kenangan', 'Salat Id di masjid kecil terselip di belakang kedai mi']
    ],
    teks: [
      'Lebih lambat dari Thailand, lebih sunyi dari Vietnam. Vientiane terasa seperti kota kecil yang berpura-pura jadi ibu kota; Mekong mengalir seolah tak punya tujuan khusus.',
      'Kami tiba dengan kereta tidur tua dari Bangkok — ranjang sempit, kasur tipis, tirai biru, dan satu lampu baca kecil.'
    ],
    foto: ['laos-0', 'laos-1', 'laos-2'],
    alt: ['Monumen Patuxai, Vientiane', 'Kuil di Vientiane', 'Rombongan di depan Patuxai']
  },
  {
    id: 'vietnam', no: '10', nama: 'Vietnam', sub: 'Sleeper bus ke Hanoi',
    benua: 'Asia Tenggara', warna: '#6b4a3a',
    tagline: 'Vietnam bergerak dengan kecepatan sepeda motor — tak kenal ampun, anggun, sesekali menakutkan.',
    fakta: [
      ['Ibu kota', 'Hanoi'],
      ['Mata uang', 'Dong Vietnam (VND)'],
      ['Bahasa', 'Vietnam'],
      ['Puncak', 'Wisata sehari ke Teluk Ha Long'],
      ['Kenangan', 'Cà phê sữa đá di kursi plastik trotoar Hanoi']
    ],
    teks: [
      'Dari kafe-kafe era kolonial di Hanoi sampai karst kapur Teluk Ha Long, negara ini tak pernah berhenti menyodorkan sesuatu untuk dipandang.',
      'Kami makan phở untuk sarapan dan belajar menyeberang jalan dengan cara berjalan, bukan menunggu. Masuk lewat perbatasan Nam Phao – Cau Treo jam tujuh pagi, langit baru saja mulai terang.'
    ],
    foto: ['vietnam-0', 'vietnam-1', 'vietnam-2'],
    alt: ['Rombongan di jalanan Hanoi', 'Foto bersama di Vietnam', 'Kuil di Hanoi']
  },
  {
    id: 'hongkong', no: '11', nama: 'Hong Kong & Makau', sub: 'Transit terakhir sebelum pulang',
    benua: 'Asia Timur', warna: '#3d4550',
    tagline: 'Dua kota yang memampatkan seluruh kontradiksi dunia ke dalam beberapa kilometer persegi.',
    fakta: [
      ['Wilayah', 'Hong Kong SAR & Makau SAR, Tiongkok'],
      ['Mata uang', 'Dolar Hong Kong (HKD) · Pataca Makau (MOP)'],
      ['Bahasa', 'Kanton, Inggris, Portugis (Makau)'],
      ['Puncak', 'Star Ferry saat senja; egg tart di Taipa'],
      ['Kenangan', 'Ujung jalan, dan kelegaan aneh sebuah bandara']
    ],
    teks: [
      'Hong Kong meraung dengan neon dan angin pelabuhan; Makau berbisik lewat ubin Portugis dan jajanan kaki lima Kanton.',
      'Mata uang termahal yang kami pakai sepanjang perjalanan — semangkuk mi sederhana 40 HKD, sekitar Rp 80.000. Kami tiba kelelahan dan pergi dengan keyakinan bahwa kota, juga, bisa jadi semacam istirahat.'
    ],
    foto: ['hongkong-0', 'hongkong-1', 'hongkong-2', 'hongkong-3'],
    alt: ['Reruntuhan Gereja St. Paul, Makau', 'Menara Jam Tsim Sha Tsui', 'Jalanan tua Makau', 'Pusat kota Hong Kong']
  }
];

const NOTES = [
  {
    t: 'Soal berkemas',
    d: 'Aku sudah mengemas semuanya jauh-jauh hari — carrier, sling bag, dan berbagai perlengkapan yang kukira akan kubutuhkan. Aku salah soal hampir semuanya. Carrier itu terlalu berat sejak negara ketiga. Sling bag justru yang kupakai setiap hari. Kalau boleh mengemas ulang, aku akan berkemas untuk sling bag, bukan carrier.'
  },
  {
    t: 'Soal sepatu',
    d: 'Dua pasang. Satu untuk jalan, satu untuk selebihnya. Yang untuk jalan akan habis di Maroko — beli pasangan kedua di sana. Yang bersol kulit dipakai untuk salat di masjid, kunjungan KBRI, dan saat kau perlu terlihat seperti orang yang tahu apa yang dilakukannya.'
  },
  {
    t: 'Soal air',
    d: 'Air keran Istanbul sebenarnya aman. Di Maroko dan Mesir kami beli botolan. Di Saudi kami minum Zamzam. Di Nepal kami merebusnya. Bawa botol isi ulang, dan isi kapan pun bisa. Plastik itu menumpuk. Begitu juga biayanya.'
  },
  {
    t: 'Soal taksi',
    d: 'Jangan naik kalau bisa dihindari. Transportasi umum hampir selalu berfungsi. Istanbulkart di Turki. BTS Skytrain di Bangkok. Di Hanoi, jalan kaki. Kalau memang harus, pakai aplikasi — BiTaksi di Turki, Grab di Asia Tenggara. Aplikasi menunjukkan harga sebelum berangkat, dan sopir tak bisa berpura-pura argonya rusak.'
  },
  {
    t: 'Soal menawar',
    d: 'Di pasar, harga awal bisa dua sampai tiga kali lipat harga asli. Ini bukan penipuan — ini ritme pasar. Tawarlah. Tersenyumlah sambil menawar. Pergilah kalau perlu; sering penjualnya memanggilmu kembali. Kalau tidak, berarti harganya memang nyata, dan kau harus membayarnya.'
  },
  {
    t: 'Soal makanan',
    d: 'Makanlah di tempat orang lokal makan. Restoran mewah berpelayan bukan untuk backpacker. Simit, lahmacun, balık ekmek di Istanbul. Koshary di Kairo. Tagine di Maroko. Phở di sudut jalan Hanoi. Dal bhat di Kathmandu. Tempat berkursi plastik tanpa menu adalah tempat makanannya paling segar — karena tak ada waktu untuk menyimpannya di rak.'
  },
  {
    t: 'Soal supermarket',
    d: 'Migros, Şok, BİM di Turki. Setiap negara punya jaringannya sendiri. Pakai untuk kebutuhan harian — air, roti, buah, biskuit. Selalu lebih murah dari minimarket dekat hostel. Berjalanlah lima menit lebih jauh untuk menemukannya. Lima menit itu, selama setahun, akan menghematmu lebih dari yang kau kira.'
  }
];

/* Halaman buku — urutan spread yang dibalik di bagian Sketchbook.
   Dibangkitkan dari naskah: judul, tiga halaman per negara, lalu penutup. */
const BOOK = [
  { id: "00-judul",            neg: "Pembuka",           judul: "Exploring 20 Countries in One Year", no: "",    kind: "title" },
  { id: "malaysia-open",       neg: "Malaysia",          judul: "Pembuka",         no: "01",  kind: "open" },
  { id: "malaysia-notes",      neg: "Malaysia",          judul: "Catatan",         no: "01",  kind: "notes" },
  { id: "malaysia-taste",      neg: "Malaysia",          judul: "Makan & Ongkos",  no: "01",  kind: "taste" },
  { id: "egypt-open",          neg: "Mesir",             judul: "Pembuka",         no: "02",  kind: "open" },
  { id: "egypt-notes",         neg: "Mesir",             judul: "Catatan",         no: "02",  kind: "notes" },
  { id: "egypt-taste",         neg: "Mesir",             judul: "Makan & Ongkos",  no: "02",  kind: "taste" },
  { id: "morocco-open",        neg: "Maroko",            judul: "Pembuka",         no: "03",  kind: "open" },
  { id: "morocco-notes",       neg: "Maroko",            judul: "Catatan",         no: "03",  kind: "notes" },
  { id: "morocco-taste",       neg: "Maroko",            judul: "Makan & Ongkos",  no: "03",  kind: "taste" },
  { id: "europe-open",         neg: "Eropa",             judul: "Pembuka",         no: "04",  kind: "open" },
  { id: "europe-notes",        neg: "Eropa",             judul: "Catatan",         no: "04",  kind: "notes" },
  { id: "europe-taste",        neg: "Eropa",             judul: "Makan & Ongkos",  no: "04",  kind: "taste" },
  { id: "turkey-open",         neg: "Turki",             judul: "Pembuka",         no: "05",  kind: "open" },
  { id: "turkey-notes",        neg: "Turki",             judul: "Catatan",         no: "05",  kind: "notes" },
  { id: "turkey-taste",        neg: "Turki",             judul: "Makan & Ongkos",  no: "05",  kind: "taste" },
  { id: "saudi-open",          neg: "Arab Saudi",        judul: "Pembuka",         no: "06",  kind: "open" },
  { id: "saudi-notes",         neg: "Arab Saudi",        judul: "Catatan",         no: "06",  kind: "notes" },
  { id: "saudi-taste",         neg: "Arab Saudi",        judul: "Makan & Ongkos",  no: "06",  kind: "taste" },
  { id: "nepal-open",          neg: "Nepal",             judul: "Pembuka",         no: "07",  kind: "open" },
  { id: "nepal-notes",         neg: "Nepal",             judul: "Catatan",         no: "07",  kind: "notes" },
  { id: "nepal-taste",         neg: "Nepal",             judul: "Makan & Ongkos",  no: "07",  kind: "taste" },
  { id: "thailand-open",       neg: "Thailand",          judul: "Pembuka",         no: "08",  kind: "open" },
  { id: "thailand-notes",      neg: "Thailand",          judul: "Catatan",         no: "08",  kind: "notes" },
  { id: "thailand-taste",      neg: "Thailand",          judul: "Makan & Ongkos",  no: "08",  kind: "taste" },
  { id: "laos-open",           neg: "Laos",              judul: "Pembuka",         no: "09",  kind: "open" },
  { id: "laos-notes",          neg: "Laos",              judul: "Catatan",         no: "09",  kind: "notes" },
  { id: "laos-taste",          neg: "Laos",              judul: "Makan & Ongkos",  no: "09",  kind: "taste" },
  { id: "vietnam-open",        neg: "Vietnam",           judul: "Pembuka",         no: "10",  kind: "open" },
  { id: "vietnam-notes",       neg: "Vietnam",           judul: "Catatan",         no: "10",  kind: "notes" },
  { id: "vietnam-taste",       neg: "Vietnam",           judul: "Makan & Ongkos",  no: "10",  kind: "taste" },
  { id: "hongkong-open",       neg: "Hong Kong & Makau", judul: "Pembuka",         no: "11",  kind: "open" },
  { id: "hongkong-notes",      neg: "Hong Kong & Makau", judul: "Catatan",         no: "11",  kind: "notes" },
  { id: "hongkong-taste",      neg: "Hong Kong & Makau", judul: "Makan & Ongkos",  no: "11",  kind: "taste" },
  { id: "99-penutup",          neg: "Penutup",           judul: "Home at last",    no: "",    kind: "end" },
];
