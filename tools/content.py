# -*- coding: utf-8 -*-
"""Ringkasan per negara, disarikan dari naskah buku.

Tiap negara jadi tiga halaman: Pembuka, Catatan, lalu Makan & Ongkos.
Angka dan kutipan diambil apa adanya dari bab-bab bukunya.
"""

NEGARA = [
    dict(
        id="malaysia", no="01", nama="Malaysia", sub="Tetangga yang ramah",
        benua="Asia Tenggara", kode="KUL", kota="Kuala Lumpur", tgl="23 JUN 2023",
        capA="Kuala Lumpur", capB="rumah singgah pertama",
        tagline="Pendaratan lembut — cukup dekat agar makanannya terasa akrab, "
                "cukup berbeda agar jalannya sudah terasa asing.",
        fakta=[("Jarak", "1.180 km dari Jakarta · 2 jam terbang"),
               ("Mata uang", "Ringgit (RM) · RM 1 ≈ Rp 3.400"),
               ("Cuaca", "27–33°C, hujan sore mendadak"),
               ("Bahasa", "Melayu, Inggris, Mandarin, Tamil")],
        cuaca="Panas dan lembap sepanjang tahun, 27 sampai 33 derajat. Hujan sore datang "
              "tiba-tiba, persis seperti di rumah. Kami tidak pernah butuh jaket — cukup payung.",
        orang="Ramah, dan sebagian besar mengerti Bahasa Indonesia. Tiga kelompok besar hidup "
              "berdampingan: Melayu, Tionghoa, India. Makanannya, bau jalanannya, musiknya — "
              "berubah tiap beberapa blok.",
        lihat="Masjid Jamek berdiri di pertemuan dua sungai, masjid tertua di Kuala Lumpur, "
              "dibangun 1907 dengan gaya Moor. Lengkungnya krem dan terakota, kubahnya pucat "
              "dan sabar melawan langit terang. Tidak ada biaya masuk. Kami tinggal lebih lama "
              "dari rencana.",
        transport="RapidKL — bus modern berjalur khusus, bersih, ACnya dingin. Lalu MRT dengan "
                  "rute panjang yang menyambung pinggiran ke pusat kota. Satu kartu Touch 'n Go "
                  "untuk semuanya.",
        makan=[("Nasi lemak + sambal", "sarapan, RM 5 ≈ Rp 17.000"),
               ("Roti canai + kari", "pagi atau malam"),
               ("Nasi kandar", "kuah kari, lauk sepuasnya")],
        ongkos=[("Kos / asrama", "RM 200–400 per bulan"),
                ("Apartemen", "RM 800 ke atas"),
                ("Makan warung", "surga food court & kaki lima")],
        tips="Kalau tidak butuh tempat mewah, banyak kos layak, aman, sudah lengkap kamar mandi "
             "dan kipas atau AC. Selisihnya besar sekali dibanding sewa apartemen.",
    ),
    dict(
        id="egypt", no="02", nama="Mesir", sub="Negeri para Firaun",
        benua="Afrika Utara", kode="CAI", kota="Kairo", tgl="04 JUL 2023",
        capA="Giza, Kairo", capB="panasnya lain",
        tagline="Mesir lebih tua dari apa pun yang pernah kami berdiri di sampingnya. "
                "Piramida membuat kamera kami malu; Sungai Nil membuat peta kami cuma jadi saran.",
        fakta=[("Jarak", "9.000 km · transit China, hampir sehari"),
               ("Mata uang", "Pound (EGP) · 1 EGP ≈ Rp 800"),
               ("Cuaca", "30–38°C kering, malam sejuk"),
               ("Lama tinggal", "11 hari")],
        cuaca="Kering dan panas di siang hari, 30 sampai 38 derajat, tapi malamnya bisa sejuk — "
              "terutama di dekat Nil. Udaranya berdebu karena gurun.",
        orang="Lantang, ekspresif, ramah. Mereka suka bertanya, “Dari mana?” Begitu kami bilang "
              "“Indonesia”, mereka tersenyum dan menjawab “Muslim brother!” Menawar itu wajar — "
              "jangan pernah terima harga pertama.",
        lihat="Kau turun dari mobil, langit berdebu oleh angin gurun, lalu tiba-tiba: tiga "
              "piramida raksasa yang selama ini cuma ada di buku sejarah. Itu pertama kalinya "
              "aku tahu rasanya kehilangan kata. Wajah Sphinx sudah aus dimakan waktu, tapi "
              "matanya masih menyimpan sesuatu.",
        transport="Uber jadi penyelamat di tengah kekacauan. Tanpa AC pun, angin masuk lewat "
                  "celah jendela dan rasanya seperti oase. Harganya pasti, jadi hati tenang. "
                  "Untuk jarak dekat, naik microbus.",
        makan=[("Koshary", "nasi, pasta, lentil, bawang goreng · 15–25 EGP"),
               ("Ful medames", "sarapan kacang fava"),
               ("Kentang dalam roti Eish", "saus tomat + saus putih, acar")],
        ongkos=[("Hostel / dorm", "150–300 EGP per malam"),
                ("Makan warung lokal", "20–50 EGP per hari"),
                ("Uber jarak pendek", "20–40 EGP"),
                ("Microbus", "5–10 EGP"),
                ("Total sebulan", "3.000–4.500 EGP ≈ Rp 2–3 juta")],
        tips="Makan di warung lokal, bukan di area wisata. Naik microbus untuk jarak dekat. "
             "Hindari taksi turis. Kalau mau naik unta, tawar dari harga awal. Bawa air sendiri "
             "dari penginapan.",
    ),
    dict(
        id="morocco", no="03", nama="Maroko", sub="Warna-warni Afrika Utara",
        benua="Afrika Utara", kode="CMN", kota="Casablanca", tgl="19 JUL 2023",
        capA="Casablanca", capB="teh mint, dituang tinggi",
        tagline="Maroko sampai ke indera kami sebelum peta kami sempat menyusul.",
        fakta=[("Jarak", "13.000 km · 6 jam dari Kairo"),
               ("Mata uang", "Dirham (MAD) · 1 MAD ≈ Rp 1.600"),
               ("Cuaca", "18–24°C utara, sampai 35°C dekat gurun"),
               ("Lama tinggal", "8 hari 7 malam")],
        cuaca="Di utara — Casablanca, Rabat — sejuk, 18 sampai 24 derajat. Di selatan dekat "
              "gurun bisa 35 derajat di siang hari, lalu turun cepat begitu matahari hilang.",
        orang="Hangat, sangat sopan, dan bangga pada budayanya. Banyak yang bicara Arab dan "
              "Prancis. Mereka cinta teh mint, dan menyuguhkannya pada tamu sebagai tanda hormat.",
        lihat="Masjid Hassan II di Casablanca, masjid terbesar di Maroko. Menaranya 210 meter — "
              "tertinggi di dunia. Tapi yang membuatku penasaran bukan ukurannya, melainkan "
              "letaknya: tepat di tepi Samudra Atlantik. Ombak menghantam dinding masjid. "
              "Lantainya marmer, pintunya kayu cedar berukir.",
        transport="Kereta ONCF cukup terpadu — dari Casa-Voyageurs ke Ain Sebaâ, lalu lanjut bus "
                  "kecil atau jalan kaki. Bus antarkota untuk jarak jauh. Bukan sekelas Eropa "
                  "atau Jepang, tapi untuk ukuran Afrika Utara, Maroko juaranya.",
        makan=[("Tagine", "direbus pelan di periuk tanah · 30 MAD ≈ Rp 48.000"),
               ("Couscous", "hari Jumat"),
               ("Harira", "sup saat matahari terbenam"),
               ("Kebab Maroko", "roti, daging berlimpah, telur utuh di dalam")],
        ongkos=[("Total 8 hari", "jauh lebih murah dari perkiraan"),
                ("Dibanding Eropa", "tidak ada bandingannya"),
                ("Dibanding Bali", "masih lebih murah")],
        tips="Menawar di Maroko itu percakapan, bukan pertempuran. Tersenyumlah sambil menawar. "
             "Pergilah kalau perlu — sering penjualnya memanggilmu kembali.",
    ),
    dict(
        id="europe", no="04", nama="Eropa", sub="Sembilan negara, sembilan hari",
        benua="Eropa", kode="AMS", kota="Amsterdam", tgl="02 SEP 2023",
        capA="Praha", capB="tiga perbatasan sebelum makan siang",
        tagline="Wilayah Schengen, kami putuskan, bukanlah sebuah tempat — "
                "melainkan sebuah kecepatan.",
        fakta=[("Jarak", "11.500 km ke Amsterdam"),
               ("Mata uang", "Euro · 1 EUR ≈ Rp 16.500"),
               ("Cuaca", "4–10°C, kelabu dan sering hujan"),
               ("Lama tinggal", "9 hari — satu negara per hari")],
        cuaca="Dingin dan kelabu, 4 sampai 10 derajat. Hujan biasa. Kami memakai jaket setiap "
              "hari, sembilan hari berturut-turut.",
        orang="Di Eropa Barat — Belanda, Belgia, Jerman — orangnya sopan tapi menjaga jarak. "
              "Di Eropa Timur — Ceko, Hungaria, Serbia, Bulgaria — lebih hangat, lebih mau "
              "berhenti dan bicara.",
        lihat="Dari Amsterdam ke Sofia: stasiun kereta, penyeberangan tanpa batas, dan kemewahan "
              "aneh bisa minum air keran di mana saja. Kami belajar mengenali tiap negara dari "
              "desain stopkontaknya.",
        transport="Bus malam dan kereta. Kami tidur di jalan, hidup dari roti dan keju. "
                  "Kereta malam Wina ke Budapest jadi yang paling diingat.",
        makan=[("Roti dan keju", "makanan pokok sembilan hari"),
               ("Makan murah", "8–12 EUR ≈ Rp 130.000–200.000"),
               ("Air keran", "gratis, dan aman di mana-mana")],
        ongkos=[("Mata uang lain", "Koruna Ceko, Forint Hungaria"),
                ("", "Dinar Serbia, Lev Bulgaria"),
                ("Jauh lebih mahal", "dibanding seluruh Asia")],
        tips="Sembilan negara dalam sembilan hari artinya kau tidak benar-benar melihat satu pun. "
             "Tapi kau merasakan betapa dekatnya mereka satu sama lain — dan betapa jauhnya rumah.",
    ),
    dict(
        id="turkey", no="05", nama="Turki", sub="Di antara dua benua",
        benua="Eropa / Asia", kode="IST", kota="Istanbul", tgl="14 SEP 2023",
        capA="Bosphorus", capB="dua benua, satu feri",
        tagline="Istanbul terlihat seperti Eropa tapi terdengar seperti Timur Tengah.",
        fakta=[("Jarak", "9.300 km · masuk darat dari Bulgaria"),
               ("Mata uang", "Lira (TL) · 1 TL ≈ Rp 500"),
               ("Cuaca", "12–18°C, Karadeniz lebih dingin"),
               ("Kartu", "Istanbulkart — untuk semua")],
        cuaca="Sejuk dan nyaman, 12 sampai 18 derajat. Pesisir Laut Hitam tempat kami menginap "
              "sedikit lebih dingin dan sering hujan. Istanbul punya sore-sore yang cerah.",
        orang="Ramah dan sangat penasaran. Banyak yang memanggil kami “kardeş” — saudara. "
              "Mereka cinta çay, dan akan menawarimu segelas bahkan sebelum menanyakan namamu.",
        lihat="Kami menyeberangi Bosphorus dengan feri dan berganti benua dalam dua puluh menit — "
              "cara termurah meninggalkan Eropa yang pernah ditemukan.",
        transport="Hari pertama: beli Istanbulkart di mesin otomatis. Deposit 70 TL, isi 200 TL. "
                  "Kartu biru itu berlaku untuk bus, metrobus, metro, trem, feri — bahkan toilet "
                  "umum. Aku naik bus 36T dari Gaziosmanpaşa.",
        makan=[("Simit + çay", "5 TL ≈ Rp 2.500 · teh 10 TL"),
               ("Doner kebab", "70 TL ≈ Rp 35.000"),
               ("Lahmacun, balık ekmek", "di pinggir jalan Istanbul")],
        ongkos=[("Kamar 3×3 m", "di rumah warga, lantai 2"),
                ("", "kasur, lemari, meja, kamar mandi dalam"),
                ("Warung lokal", "70 TL per makan"),
                ("Restoran mewah", "tiga kali lipat, daging sama")],
        tips="Cari di pinggiran seperti Gaziosmanpaşa, Esenler, atau Zeytinburnu. Jangan menginap "
             "di Sultanahmet atau Taksim. Air keran Istanbul sebenarnya aman diminum.",
    ),
    dict(
        id="saudi", no="06", nama="Arab Saudi", sub="Kota-kota suci",
        benua="Timur Tengah", kode="JED", kota="Jeddah", tgl="28 SEP 2023",
        capA="Madinah", capB="jubah putih",
        tagline="Titik tengah spiritual perjalanan. Jubah putih umrah dan marmer Masjidil Haram.",
        fakta=[("Jarak", "8.000 km · langsung Jakarta–Jeddah"),
               ("Mata uang", "Riyal (SAR) · 1 SAR ≈ Rp 4.200"),
               ("Cuaca", "38–45°C kering, malam gurun sejuk"),
               ("Lama tinggal", "8 hari")],
        cuaca="Sangat panas dan kering, sering 38 sampai 45 derajat di siang hari — tapi kering, "
              "bukan lembap. Malam di gurun justru sejuk, mengejutkan.",
        orang="Campuran dari seluruh dunia Muslim: Arab, Indonesia, Pakistan, Afrika, Turki. "
              "Orang Saudinya sendiri murah hati, terutama di waktu salat. Orang asing akan "
              "mengajakmu berbagi makanan mereka.",
        lihat="Tawaf di Ka'bah. Marmer Masjidil Haram yang dingin di telapak kaki meski matahari "
              "di luar 45 derajat. Payung-payung raksasa Masjid Nabawi yang membuka pelan-pelan "
              "setiap pagi.",
        transport="Terbang langsung Jakarta–Jeddah, lalu jalur darat ke Madinah dan Makkah. "
                  "Bus antarkota nyaman dan ber-AC — harus, dengan suhu seperti itu.",
        makan=[("Nasi mandi + kambing", "15 SAR ≈ Rp 63.000"),
               ("Nasi mandi + ayam", "porsi besar, cukup berdua"),
               ("Air Zamzam", "gratis, di mana-mana")],
        ongkos=[("Makan", "15–25 SAR sekali makan"),
                ("Minum", "Zamzam, tidak perlu beli"),
                ("Transportasi darat", "bus antarkota ber-AC")],
        tips="Dari panas Jazirah Arab ke dingin Himalaya dalam hitungan hari — peralihan paling "
             "ekstrem sepanjang perjalanan. Siapkan jaket sebelum meninggalkan Jeddah.",
    ),
    dict(
        id="nepal", no="07", nama="Nepal", sub="Negeri pegunungan",
        benua="Asia Selatan", kode="KTM", kota="Kathmandu", tgl="11 OKT 2023",
        capA="Kathmandu", capB="udara tipis",
        tagline="Nepal memberi kami keheningan gunung-gunung yang sudah menyaksikan "
                "kerajaan-kerajaan naik dan runtuh.",
        fakta=[("Jarak", "4.500 km · Jeddah–Kathmandu transit Dubai"),
               ("Mata uang", "Rupee (NPR) · 1 NPR ≈ Rp 120"),
               ("Cuaca", "18–24°C, pagi berkabut"),
               ("Lama tinggal", "6 hari")],
        cuaca="Sejuk dan segar, 18 sampai 24 derajat di Kathmandu. Paginya berkabut. Semakin "
              "tinggi ke gunung, semakin dingin — jauh lebih dingin dari yang kami bayangkan.",
        orang="Lembut, pelan bicaranya, dan sangat ramah. Orang Nepal menyapa dengan “Namaste” "
              "dan telapak tangan dirapatkan. Banyak yang bahasa Inggrisnya bagus karena "
              "pariwisata.",
        lihat="Stupa Swayambhunath dengan sepasang mata yang menatap ke empat arah. Kalinchowk "
              "di ketinggian, tempat kami belajar IT di antara gunung. Dan pagi-pagi ketika "
              "kabut membuka dan Annapurna ada di sana, seperti selalu ada di sana.",
        transport="Bus lokal berguncang tapi murah. Untuk jarak jauh di pegunungan, siapkan "
                  "perut dan kesabaran — jalanannya berkelok tanpa habis.",
        makan=[("Dal bhat", "nasi, sup lentil, sayur, acar · 200 NPR ≈ Rp 24.000"),
               ("", "dan boleh isi ulang, sepuasnya"),
               ("Momo", "pangsit kukus")],
        ongkos=[("Dal bhat", "200 NPR — sekali makan, kenyang seharian"),
                ("Bus lokal", "murah, tapi berguncang"),
                ("Air", "harus direbus dulu")],
        tips="Dal bhat itu isi ulang gratis. Kalau uangmu tipis dan perutmu lapar, itu jawabannya. "
             "Mereka akan terus menambah sampai kau menyerah.",
    ),
    dict(
        id="thailand", no="08", nama="Thailand", sub="Bangkok, Ramadan & Itikaf",
        benua="Asia Tenggara", kode="BKK", kota="Bangkok", tgl="02 MAR 2024",
        capA="Wat Arun, Bangkok", capB="buka puasa bareng orang asing",
        tagline="Panas Bangkok menekan seperti tangan di bahu; pasar malamnya buka cukup lama "
                "sampai kau lupa jam berapa sekarang.",
        fakta=[("Jarak", "2.300 km · dari Kathmandu ~3 jam"),
               ("Mata uang", "Baht (THB) · 1 THB ≈ Rp 460"),
               ("Cuaca", "32–36°C, lembap dan berat"),
               ("Momen", "Ramadan, Itikaf, Idulfitri")],
        cuaca="Panas dan lembap, 32 sampai 36 derajat. Udaranya tebal dan basah — kami berkeringat "
              "dalam hitungan menit setelah keluar pintu.",
        orang="Hangat, murah senyum, dan sabar. Orang Thailand terkenal dengan “senyum Thailand” — "
              "dan itu nyata. Bahkan saat menawar pun mereka tersenyum.",
        lihat="Itikaf di sebuah masjid Bangkok pada sepuluh malam terakhir Ramadan. Lalu Wat Arun "
              "di tepi Chao Phraya saat matahari turun, dan pasar malam yang tidak pernah "
              "benar-benar tutup.",
        transport="BTS Skytrain untuk menembus macet, dan perahu antar-jemput gratis ke Icon Siam. "
                  "Dua itu saja sudah cukup untuk hampir seluruh Bangkok.",
        makan=[("Pad thai", "dari gerobak · 60 baht ≈ Rp 28.000"),
               ("Tom yum goong", "asam, pedas, panas"),
               ("Mango sticky rice", "penutup wajib"),
               ("Green curry", "santan dan daun jeruk")],
        ongkos=[("Pad thai gerobak", "60 baht"),
                ("BTS Skytrain", "sesuai jarak"),
                ("Perahu ke Icon Siam", "gratis"),
                ("Buka puasa", "sering tidak dibiarkan bayar")],
        tips="Kami berpuasa Ramadan di sini, dan berbuka di tengah orang-orang asing yang tidak "
             "pernah membiarkan kami membayar. Itu yang paling diingat, bukan kuilnya.",
    ),
    dict(
        id="laos", no="09", nama="Laos", sub="Kereta malam ke Vientiane",
        benua="Asia Tenggara", kode="VTE", kota="Vientiane", tgl="14 APR 2024",
        capA="Vientiane", capB="pelan sekali di sini",
        tagline="Negara yang tak kami rencanakan untuk dicintai. Ia tak meminta apa pun dari kami "
                "kecuali kesabaran.",
        fakta=[("Jarak", "3.200 km · tapi kami tidak terbang"),
               ("Masuk", "kereta malam Bangkok + Jembatan Persahabatan"),
               ("Mata uang", "Kip (LAK) · 1.000 kip ≈ Rp 700"),
               ("Lama tinggal", "5 hari")],
        cuaca="Tropis, mirip Indonesia. Hangat di siang hari, 28 sampai 32 derajat. Tapi pagi di "
              "Vientiane terasa sejuk dan bersih — satu-satunya pagi seperti itu di Asia Tenggara.",
        orang="Tenang, pelan bicaranya, dan tidak memaksa. Sangat berbeda dari Vietnam atau Mesir. "
              "Mereka banyak tersenyum. Sebagian bisa sedikit bahasa Thai, sebagian mengerti "
              "Inggris dasar.",
        lihat="Monumen Patuxai berdiri di ujung jalan lebar, dan Mekong mengalir pelan seolah tak "
              "punya tujuan khusus. Salat Id kami di masjid kecil yang terselip di belakang kedai "
              "mi — mungkin momen paling hangat sepanjang perjalanan.",
        transport="Kereta tidur tua dari Bangkok: ranjang sempit, kasur tipis, tirai biru, satu "
                  "lampu baca kecil. Empat belas jam. Lalu bus menyeberang Jembatan Persahabatan.",
        makan=[("Laap", "salad daging cincang, asam dan pedas"),
               ("Semangkuk mi", "15.000 kip ≈ Rp 10.500"),
               ("Pasar malam Vientiane", "pelan, tidak berdesakan")],
        ongkos=[("Semangkuk mi", "15.000 kip"),
                ("Kereta malam Bangkok", "14 jam sampai perbatasan"),
                ("Hidup sehari", "paling murah sepanjang perjalanan")],
        tips="Laos itu negara yang harus kau lewati pelan-pelan, atau kau tidak akan mendapat "
             "apa-apa darinya. Jangan buru-buru. Duduk saja di tepi Mekong sampai matahari habis.",
    ),
    dict(
        id="vietnam", no="10", nama="Vietnam", sub="Sleeper bus ke Hanoi",
        benua="Asia Tenggara", kode="HAN", kota="Hanoi", tgl="21 APR 2024",
        capA="Hanoi", capB="kopi di kursi plastik",
        tagline="Vietnam bergerak dengan kecepatan sepeda motor — tak kenal ampun, anggun, "
                "sesekali menakutkan.",
        fakta=[("Jarak", "3.000 km · darat dari Laos, 20 jam"),
               ("Perbatasan", "Nam Phao – Cau Treo, jam 7 pagi"),
               ("Mata uang", "Dong (VND) · 1.000 dong ≈ Rp 650"),
               ("Cuaca", "18–24°C siang, 14°C malam")],
        cuaca="Bulan November, Hanoi sejuk — 18 sampai 24 derajat di siang hari, dan 14 derajat "
              "di malam hari. Kami perlu jaket. Sangat berbeda dari Saigon yang selalu panas.",
        orang="Cepat, pekerja keras, dan langsung. Orang Hanoi sedikit lebih menjaga jarak "
              "dibanding orang selatan. Mereka bukan kasar — hanya tidak punya waktu untuk "
              "basa-basi.",
        lihat="Teluk Ha Long dengan karst kapurnya yang muncul dari air seperti sesuatu yang "
              "belum selesai dibangun. Lalu kafe-kafe era kolonial Hanoi, dan trotoar yang "
              "seluruhnya jadi ruang makan.",
        transport="Sleeper bus dua tingkat dari Vientiane, kursinya bisa rebah hampir rata. "
                  "Dua puluh jam. Di Hanoi sendiri, jalan kaki. Menyeberang jalan dengan cara "
                  "berjalan pelan, bukan menunggu.",
        makan=[("Phở", "sarapan · 35.000 dong ≈ Rp 23.000"),
               ("Cà phê sữa đá", "di kursi plastik trotoar"),
               ("Bánh mì", "roti Prancis isi Vietnam")],
        ongkos=[("Semangkuk phở", "35.000 dong"),
                ("Jumlah nol di uangnya", "membuat kami semua jadi jutawan"),
                ("Jalan kaki", "gratis, dan cara terbaik")],
        tips="Cara menyeberang jalan di Hanoi: jalan pelan dan jangan berhenti. Motor akan "
             "mengalir di sekitarmu. Kalau kau berhenti mendadak, justru itu yang berbahaya.",
    ),
    dict(
        id="hongkong", no="11", nama="Hong Kong & Makau", sub="Transit terakhir sebelum pulang",
        benua="Asia Timur", kode="HKG", kota="Hong Kong", tgl="06 MEI 2024",
        capA="Makau", capB="ujung jalan",
        tagline="Dua kota yang memampatkan seluruh kontradiksi dunia ke dalam beberapa "
                "kilometer persegi.",
        fakta=[("Jarak", "3.250 km dari Hanoi · 2 jam terbang"),
               ("Mata uang", "HKD · 1 HKD ≈ Rp 2.000"),
               ("Catatan", "mata uang termahal sepanjang perjalanan"),
               ("Cuaca", "18–22°C, angin Victoria Peak dingin")],
        cuaca="Sejuk dan sedikit lembap di bulan November, 18 sampai 22 derajat. Tapi angin di "
              "Victoria Peak pada malam hari terasa benar-benar dingin.",
        orang="Cepat, efisien, dan agak serius. Semua orang berjalan cepat. Mereka tidak tersenyum "
              "pada orang asing — tapi kalau kau minta tolong, mereka akan menolong dengan sopan. "
              "Kanton bahasa utamanya, Inggris ada di mana-mana.",
        lihat="Reruntuhan Gereja St. Paul di Makau, tinggal fasadnya saja, berdiri seperti pintu "
              "yang tidak menuju ke mana-mana. Star Ferry menyeberang saat senja. Dan neon "
              "Hong Kong yang menyala sebelum langitnya sempat gelap.",
        transport="Airport Express dari bandara ke Kowloon. Feri ke Makau dan kembali. Semuanya "
                  "tepat waktu, semuanya mahal — tapi setelah setahun di jalan, ketepatan itu "
                  "terasa seperti istirahat.",
        makan=[("Dim sum", "di kedai teh yang berisik"),
               ("Bebek panggang di atas nasi", "murah, dan sempurna"),
               ("Milk tea", "kental, disaring kain"),
               ("Egg tart", "di Taipa, Makau")],
        ongkos=[("Semangkuk mi sederhana", "40 HKD ≈ Rp 80.000"),
                ("Airport Express", "cepat, tapi tidak murah"),
                ("Feri ke Makau", "satu jam, pulang-pergi")],
        tips="Kami tiba kelelahan dan pergi dengan keyakinan bahwa kota, juga, bisa jadi semacam "
             "istirahat. Ini halte terakhir sebelum pulang.",
    ),
]

# ── halaman pembuka & penutup ───────────────────────────────────────────
JUDUL = dict(
    kind="title", id="00-judul", neg="Pembuka", nama="The Story of 30 Friends",
    sub="Exploring 20 Countries in One Year", penulis="Zainul Arkaan Al Insi",
    tahun="2026",
    kutipan="Untuk tiga puluh temanku, yang berjalan di jalan panjang itu bersamaku, "
            "dan untuk setiap pejalan yang membawa rumah di dalam ranselnya.",
    catatan="Ini bukan panduan wisata. Bukan daftar “10 Tempat Terbaik”. "
            "Ini kisah nyata tentang tiga puluh anak muda yang meninggalkan semuanya "
            "selama setahun.",
    foto=["group-0", "group-4"],
)

PENUTUP = dict(
    kind="end", id="99-penutup", neg="Penutup", nama="Pulang",
    sub="Home at last",
    kutipan="Pergilah. Jalan itu lebih ramah dari yang kau kira.",
    teks="Tiga puluh dari kami berangkat dari Soekarno-Hatta pada satu Selasa yang gerah; "
         "tiga puluh dari kami pulang lewat gerbang yang sama. Yang berubah bukan jumlahnya.",
    cta="Cerita lengkapnya — 74 bab, 346 halaman — ada di dalam bukunya.",
    foto=["group-2", "group-3"],
)

# foto per negara, mengikuti berkas yang sudah ada di assets/img
FOTO = {
    "malaysia": ["malaysia-0", "malaysia-1", "malaysia-2"],
    "egypt":    ["egypt-0", "egypt-1", "egypt-2", "egypt-3"],
    "morocco":  ["morocco-0", "morocco-1", "morocco-2", "morocco-3"],
    "europe":   ["europe-0", "europe-1", "europe-2", "europe-3"],
    "turkey":   ["turkey-0", "turkey-1", "turkey-2"],
    "saudi":    ["saudi-0", "saudi-1", "saudi-2"],
    "nepal":    ["nepal-0", "nepal-1", "nepal-2"],
    "thailand": ["thailand-0", "thailand-1", "thailand-2", "thailand-3"],
    "laos":     ["laos-0", "laos-1", "laos-2"],
    "vietnam":  ["vietnam-0", "vietnam-1", "vietnam-2"],
    "hongkong": ["hongkong-0", "hongkong-1", "hongkong-2", "hongkong-3"],
}


def halaman():
    """Urutan halaman buku: judul, tiga halaman per negara, lalu penutup."""
    out = [JUDUL]
    for n in NEGARA:
        for kind, judul in (("open", "Pembuka"), ("notes", "Catatan"),
                            ("taste", "Makan & Ongkos")):
            p = dict(n)
            p["kind"] = kind
            p["judul"] = judul
            p["neg"] = n["nama"]
            p["foto"] = FOTO[n["id"]]
            p["id"] = n["id"] + "-" + kind
            out.append(p)
    out.append(PENUTUP)
    return out
