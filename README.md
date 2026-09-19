# The Story of 30 Friends

Situs promosi untuk buku **"The Story of 30 Friends — Exploring 20 Countries in One Year"**
karya **Zainul Arkaan Al Insi** (2026, 346 halaman).

Kisah nyata tiga puluh anak muda dari Bogor yang menjelajah 20 negara di tiga benua
dalam satu tahun — dengan ransel, mimpi, dan satu sama lain.

## Isi

| Bagian | Keterangan |
| --- | --- |
| Hero | Sampul buku 3D yang condong mengikuti kursor, cap paspor |
| Sketchbook | Buku yang benar-benar bisa dibalik halamannya + kaca pembesar |
| Rute | Sebelas etape, dari Soekarno-Hatta sampai pulang |
| Negara | Kartu per negara, klik untuk catatan lengkap |
| Galeri | Foto asli dari dalam buku, bisa difilter per negara |
| Catatan | Tujuh catatan praktis dari jalan |

## Sketchbook

Lembar yang membalik bukan pintu datar. Ia rantai 18 strip bersarang yang garis
singgungnya menyapu sebuah busur, jadi kertasnya membengkok seperti kertas
sungguhan — lengkap dengan pencahayaan per strip, bayangan lipatan, dan pegas
yang menyelesaikan ayunan saat dilepas.

Kaca pembesarnya benda nyata yang tergeletak di atas halaman: seret ke mana saja,
ia tetap di situ, dan lembar yang membalik akan menyenggolnya ke pinggir.

Kontrol: **seret halaman** · **panah kiri/kanan** · **zoom** · **klik ganda** untuk 100%

## Menjalankan

Situs statis, tanpa build step.

```bash
python -m http.server 8000
# buka http://localhost:8000
```

## Struktur

```
index.html
assets/
  css/style.css        — halaman utama
  css/sketchbook.css   — lembar melengkung + loupe
  js/data.js           — konten dari naskah buku
  js/app.js            — interaksi
  img/                 — foto perjalanan (46 berkas)
  book/                — spread buku (11 berkas)
```

## Pemesanan

WhatsApp **+62 852-8254-0833** · email **zainaril13@gmail.com**

---

© 2026 Zainul Arkaan Al Insi. Seluruh tulisan dan foto adalah milik penulis.
