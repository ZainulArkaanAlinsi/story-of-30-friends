# tools

Pembangkit halaman buku yang dipakai di bagian Sketchbook.

- `content.py` — ringkasan tiap negara, disarikan dari naskah buku.
  Tiga halaman per negara: Pembuka, Catatan, Makan & Ongkos.
- `makebook.py` — menggambar tiap spread (1760×1000) ke `assets/book/*.webp`
  dan menulis `book_manifest.json`.

Jalankan dari folder ini:

```bash
python makebook.py
```

Butuh Pillow, dan font Georgia Pro + Gabriola (bawaan Windows).
Geometri kertas dikunci ke nilai yang dibaca `app.js` untuk kaca pembesar:
kertas menempati 3,01%–97,0% mendatar dan 4%–96% menurun dari kanvas.
