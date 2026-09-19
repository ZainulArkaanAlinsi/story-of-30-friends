# -*- coding: utf-8 -*-
"""Membangun spread buku (1760x1000) dari ringkasan di content.py.

Setiap negara menjadi satu spread profil perjalanan yang mudah dibaca.
"""
import os, math, random, json
from PIL import Image, ImageDraw, ImageFilter, ImageFont, ImageEnhance
import content

SRC = r"C:\Users\USER\story-of-30-friends\assets\img"
OUT = r"C:\Users\USER\story-of-30-friends\assets\book"
os.makedirs(OUT, exist_ok=True)

W, H = 1760, 1000
PX0, PX1 = 53, 1707
PY0, PY1 = 40, 960
PW, PH = PX1 - PX0, PY1 - PY0
HALF = PW // 2

F = "C:/Windows/Fonts/"
def fnt(n, s): return ImageFont.truetype(F + n, s)
DISP  = lambda s: fnt("GeorgiaPro-Light.ttf", s)
DISPR = lambda s: fnt("GeorgiaPro-Regular.ttf", s)
DISPI = lambda s: fnt("GeorgiaPro-Italic.ttf", s)
DISPB = lambda s: fnt("GeorgiaPro-SemiBold.ttf", s)
COND  = lambda s: fnt("GeorgiaPro-CondRegular.ttf", s)
CONDB = lambda s: fnt("GeorgiaPro-CondSemiBold.ttf", s)
HAND  = lambda s: fnt("Gabriola.ttf", s)

INK   = (44, 38, 30)
BODY  = (60, 52, 42)
PEN   = (48, 56, 82)
PENC  = (96, 82, 62)
FAINT = (150, 134, 108)
TERRA = (158, 72, 36)


# ══════════════ kertas ══════════════
def paper_base(rng):
    p = Image.new("RGB", (PW, PH), (238, 231, 215))
    d = ImageDraw.Draw(p)
    for x in range(PW):
        t = abs(x - PW / 2) / (PW / 2)
        v = int(6 * (1 - t) ** 2)
        d.line([(x, 0), (x, PH)], fill=(238 - v, 231 - v, 215 - v))
    n = Image.effect_noise((PW, PH), 14).convert("L")
    p = Image.composite(p, ImageEnhance.Brightness(p).enhance(1.04),
                        n.point(lambda v: 255 if v > 138 else 0))
    d = ImageDraw.Draw(p)
    for _ in range(320):
        x, y = rng.randrange(PW), rng.randrange(PH)
        r = rng.choice([1, 1, 2])
        d.ellipse([x, y, x + r, y + r],
                  fill=rng.choice([(220, 211, 191), (228, 220, 201), (210, 199, 177)]))
    return p.convert("RGBA")


def gutter(img):
    d = ImageDraw.Draw(img, "RGBA")
    cx = PW // 2
    for i in range(52):
        a = int(78 * (1 - i / 52) ** 2.0)
        d.line([(cx - i, 0), (cx - i, PH)], fill=(70, 55, 32, a))
        d.line([(cx + i, 0), (cx + i, PH)], fill=(70, 55, 32, a))
    d.line([(cx, 0), (cx, PH)], fill=(96, 76, 46, 130))
    for i in range(40):
        a = int(44 * (1 - i / 40) ** 2)
        d.line([(i, 0), (i, PH)], fill=(80, 64, 40, a))
        d.line([(PW - 1 - i, 0), (PW - 1 - i, PH)], fill=(80, 64, 40, a))


# ══════════════ ephemera ══════════════
def tape(w, h, ang, rng, tint=(232, 222, 190)):
    t = Image.new("RGBA", (w, h), tint + (150,))
    d = ImageDraw.Draw(t)
    for x in range(0, w, 3):
        d.line([(x, 0), (x + 2, rng.randint(0, 3))], fill=(0, 0, 0, 0), width=2)
        d.line([(x, h), (x + 2, h - rng.randint(0, 3))], fill=(0, 0, 0, 0), width=2)
    d.line([(0, 2), (w, 2)], fill=(255, 252, 240, 90))
    d.line([(0, h - 3), (w, h - 3)], fill=(120, 106, 76, 60))
    return t.rotate(ang, resample=Image.BICUBIC, expand=True)


def stain(r, rng):
    s = Image.new("RGBA", (r * 2, r * 2), (0, 0, 0, 0))
    d = ImageDraw.Draw(s)
    for i in range(14):
        k = i / 14
        o = int(r * (.62 + .36 * k))
        d.ellipse([r - o, r - o, r + o, r + o],
                  outline=(150, 108, 58, int(16 + 30 * k ** 3)), width=2)
    return s.filter(ImageFilter.GaussianBlur(1.6))


def photo(path, box_w, rot, rng, cap=None, tapes=2):
    # Sumber foto berukuran web; jaga detail saat dipasang sebagai foto utama
    # dan hindari tampilan kusam ketika spread diperbesar.
    im = Image.open(path).convert("RGB")
    im = ImageEnhance.Color(im).enhance(1.08)
    im = ImageEnhance.Contrast(im).enhance(1.04)
    im = ImageEnhance.Sharpness(im).enhance(1.32)
    k = box_w / im.width
    im = im.resize((box_w, max(1, round(im.height * k))), Image.LANCZOS)
    pad, bot = 13, (46 if cap else 13)
    card = Image.new("RGBA", (im.width + pad * 2, im.height + pad + bot), (252, 249, 241, 255))
    card.paste(im, (pad, pad))
    d = ImageDraw.Draw(card)
    d.rectangle([pad - 1, pad - 1, pad + im.width, pad + im.height], outline=(0, 0, 0, 46))
    if cap:
        f = HAND(46)
        d.text(((card.width - d.textlength(cap, font=f)) / 2, pad + im.height - 4),
               cap, font=f, fill=PENC)
    for i in range(tapes):
        tp = tape(rng.randint(58, 92), rng.randint(20, 27),
                  rng.choice([-42, -38, 40, 44, 132, 138]), rng)
        card.alpha_composite(tp, (-14, -12) if i == 0 else
                             (card.width - tp.width + 14, card.height - tp.height + 10))
    sh = Image.new("RGBA", (card.width + 56, card.height + 56), (0, 0, 0, 0))
    ImageDraw.Draw(sh).rectangle([28, 33, 28 + card.width, 33 + card.height], fill=(58, 44, 26, 115))
    sh = sh.filter(ImageFilter.GaussianBlur(13))
    o = Image.new("RGBA", sh.size, (0, 0, 0, 0))
    o.alpha_composite(sh)
    o.alpha_composite(card, (28, 28))
    return o.rotate(rot, resample=Image.BICUBIC, expand=True)


def stub(w, h, rng, kode, kota, tgl):
    c = Image.new("RGBA", (w, h), (246, 240, 226, 255))
    d = ImageDraw.Draw(c)
    d.rectangle([0, 0, w - 1, h - 1], outline=(150, 132, 100, 190))
    xp = int(w * 0.62)
    for y in range(4, h - 4, 9):
        d.ellipse([xp - 2, y, xp + 2, y + 4], fill=(224, 214, 190, 255))
    d.text((12, 9), kode, font=DISPB(30), fill=INK)
    d.text((12, 46), kota.upper(), font=COND(17), fill=(120, 106, 82))
    d.text((12, h - 28), tgl, font=COND(15), fill=(140, 124, 98))
    d.text((xp + 14, 14), "BOARDING", font=COND(13), fill=FAINT)
    d.text((xp + 14, 34), "PASS", font=COND(13), fill=FAINT)
    for i, bx in enumerate(range(xp + 14, w - 10, 5)):
        if i % 3:
            d.line([(bx, 58), (bx, h - 12)], fill=(70, 60, 46, 200), width=rng.choice([1, 1, 2]))
    return c.rotate(rng.uniform(-6, 6), resample=Image.BICUBIC, expand=True)


def passport_stamp(txt, sub, rng):
    s = 190
    c = Image.new("RGBA", (s, s), (0, 0, 0, 0))
    d = ImageDraw.Draw(c)
    col = (146, 66, 40, 165)
    d.ellipse([8, 8, s - 8, s - 8], outline=col, width=4)
    d.ellipse([22, 22, s - 22, s - 22], outline=col, width=2)
    for t, f, y in ((txt.upper(), COND(26), s // 2 - 22), (sub.upper(), COND(15), s // 2 + 12)):
        d.text(((s - d.textlength(t, font=f)) / 2, y), t, font=f, fill=col)
    d.line([(46, s // 2 + 4), (s - 46, s // 2 + 4)], fill=col, width=2)
    m = Image.effect_noise((s, s), 40).convert("L").point(lambda v: 255 if v > 96 else 110)
    a = c.getchannel("A")
    c.putalpha(Image.composite(a, a.point(lambda v: int(v * .35)), m))
    return c.rotate(rng.uniform(-22, 22), resample=Image.BICUBIC, expand=True)


# ══════════════ tulisan ══════════════
def hand(img, xy, txt, size, ang=0, fill=PEN, max_w=None):
    txt = txt.replace("\u2192", "ke").replace("\u2013", "-")
    f = HAND(size)
    if max_w:
        while size > 22 and f.getlength(txt) > max_w:
            size -= 2
            f = HAND(size)
    tmp = Image.new("RGBA", (int(f.getlength(txt)) + 30, size + 30), (0, 0, 0, 0))
    ImageDraw.Draw(tmp).text((10, 4), txt, font=f, fill=fill)
    if ang:
        tmp = tmp.rotate(ang, resample=Image.BICUBIC, expand=True)
    img.alpha_composite(tmp, (int(xy[0]), int(xy[1])))


def wobble(d, x0, y0, x1, y1, rng, col=PEN, w=2, seg=16):
    pts = [(x0 + (x1 - x0) * i / seg + rng.uniform(-1.6, 1.6),
            y0 + (y1 - y0) * i / seg + rng.uniform(-1.8, 1.8)) for i in range(seg + 1)]
    d.line(pts, fill=col, width=w, joint="curve")


def dotpath(d, pts, rng, col=PENC):
    for i in range(len(pts) - 1):
        ax, ay = pts[i]
        bx, by = pts[i + 1]
        n = max(2, int(math.hypot(bx - ax, by - ay) / 13))
        for j in range(n):
            k = j / n
            x = ax + (bx - ax) * k + rng.uniform(-2, 2)
            y = ay + (by - ay) * k + rng.uniform(-2, 2)
            d.ellipse([x, y, x + 2.6, y + 2.6], fill=col)


def wrap(d, txt, f, mw):
    out, cur = [], ""
    for word in txt.split():
        t = (cur + " " + word).strip()
        if d.textlength(t, font=f) <= mw:
            cur = t
        else:
            if cur:
                out.append(cur)
            cur = word
    if cur:
        out.append(cur)
    return out


def para(d, x, y, txt, f, mw, lh, fill=BODY, limit=99):
    for ln in wrap(d, txt, f, mw)[:limit]:
        d.text((x, y), ln, font=f, fill=fill)
        y += lh
    return y


def snip(txt, limit=180):
    """Ambil satu gagasan utuh untuk ringkasan yang tetap nyaman dibaca."""
    clean = " ".join(txt.replace("\n", " ").split())
    if len(clean) <= limit:
        return clean
    cut = clean[:limit].rsplit(" ", 1)[0]
    return cut.rstrip(".,;: ") + "..."


def section(d, x, y, label, body, mw, size=22, lh=31, limit=99):
    """Judul kecil berhuruf besar, lalu paragraf di bawahnya."""
    d.text((x, y), label.upper(), font=CONDB(16), fill=TERRA)
    y += 26
    y = para(d, x, y, body, DISPR(size), mw, lh, BODY, limit)
    return y + 22


def rows(page, d, x, y, items, mw, gap=42, ls=180):
    """Baris: label kecil di kiri, nilai tulisan tangan di kanan."""
    for k, v in items:
        if k:
            d.text((x, y + 4), k.upper(), font=COND(15), fill=FAINT)
        hand(page, (x + ls, y - 12), v, 38, 0, PEN, max_w=mw - ls)
        y += gap
    return y


def runhead(d, neg, judul, no):
    """Kepala halaman berjalan, kecil di pojok atas."""
    d.text((56, 22), neg.upper(), font=COND(15), fill=FAINT)
    t = judul.upper()
    d.text((PW - 56 - d.textlength(t, font=COND(15)), 22), t, font=COND(15), fill=FAINT)
    if no:
        d.line([(56, 44), (PW - 56, 44)], fill=(44, 38, 30, 34), width=1)


# ══════════════ tata letak ══════════════
LX, TOP = 56, 92
RX = HALF + 104
CW = HALF - 168          # lebar kolom teks, sama di kiri dan kanan
BOT = PH - 64            # garis dasar; di bawahnya hanya nomor halaman


def fit_photo(path, max_w, max_h, rng, cap=None, tapes=2, rot=None):
    """Foto sebesar mungkin yang masih muat di kotak (max_w × max_h).

    photo() menambah bingkai, keterangan, dan margin bayangan, jadi lebar
    sumbernya dihitung mundur dari keduanya lalu diambil yang terkecil.
    """
    with Image.open(path) as im:
        sw, sh = im.size
    bot = (46 if cap else 13)
    by_w = max_w - 82
    by_h = (max_h - 69 - bot) * sw / sh
    box = int(min(by_w, by_h) * 0.94)        # sisakan ruang untuk kemiringan
    if box < 150:
        return None
    if rot is None:
        rot = rng.uniform(-3.4, 3.4)
    return photo(path, box, rot, rng, cap, tapes)


def place(page, img, x, y, cw=None):
    """Tempel foto, ditengahkan mendatar di dalam kolom bila cw diberi."""
    if img is None:
        return
    if cw:
        x = x + (cw - img.width) // 2
    page.alpha_composite(img, (int(x), int(y)))


def fill_bottom(page, path, x, y, cw, rng, cap=None, tapes=1):
    """Isi sisa kolom dari y sampai BOT dengan satu foto."""
    img = fit_photo(path, cw, BOT - y, rng, cap, tapes)
    if img:
        place(page, img, x, BOT - img.height, cw)
    return img


# ══════════════ jenis halaman ══════════════
def page_title(page, d, c, rng):
    p0 = fit_photo(os.path.join(SRC, c["foto"][0] + ".webp"), CW, BOT - TOP, rng,
                   cap="tiga puluh", tapes=2)
    place(page, p0, LX, TOP, CW)

    d.text((RX, TOP + 16), "CATATAN PERJALANAN · " + c["tahun"], font=CONDB(17), fill=TERRA)
    y = TOP + 58
    for ln in ["The Story", "of 30 Friends"]:
        d.text((RX, y), ln, font=DISP(80), fill=INK)
        y += 92
    wobble(d, RX + 2, y + 4, RX + 360, y + 6, rng, TERRA, 3)
    y += 36
    d.text((RX, y), c["sub"], font=DISPI(27), fill=(104, 92, 76))
    y += 62
    d.text((RX, y), c["penulis"].upper(), font=COND(20), fill=(120, 106, 82))
    y += 54
    y = para(d, RX, y, c["catatan"], DISPR(23), CW, 33, BODY) + 34
    d.line([(RX, y), (RX + CW, y)], fill=(44, 38, 30, 40), width=1)
    y += 26
    hand(page, (RX, y), "— untuk tiga puluh temanku —", 46, -1.2, PENC, max_w=CW)


def page_open(page, d, c, rng):
    runhead(d, c["neg"], "pembuka", c["no"])

    # kiri: satu foto besar, ditambah catatan tangan di bawahnya
    note_h = 96
    ph = fit_photo(os.path.join(SRC, c["foto"][0] + ".webp"), CW, BOT - TOP - note_h,
                   rng, cap=c["capA"], tapes=2)
    place(page, ph, LX, TOP, CW)
    yb = TOP + (ph.height if ph else 0)
    hand(page, (LX + 34, yb + 10), c["capB"], 46, -2, PENC, max_w=CW - 60)
    dotpath(d, [(LX + 44, yb + 72), (LX + 250, yb + 52), (HALF - 140, yb + 84)], rng)

    # kanan: nama etape, tagline, lalu tabel fakta
    d.text((RX, TOP), "ETAPE " + c["no"], font=DISPB(19), fill=TERRA)
    y, tw = TOP + 36, CW
    for ln in wrap(d, c["nama"], DISP(82), CW + 10)[:2]:
        d.text((RX, y), ln, font=DISP(82), fill=INK)
        tw = d.textlength(ln, font=DISP(82))
        y += 88
    wobble(d, RX + 2, y - 6, RX + min(tw, CW), y - 4, rng, TERRA, 3)
    y += 18
    d.text((RX, y), c["sub"], font=DISPI(27), fill=(104, 92, 76))
    y += 58
    y = para(d, RX, y, c["tagline"], DISPR(25), CW, 36, BODY) + 30
    y = rows(page, d, RX, y, c["fakta"], CW, 48, 200)

    st = stub(340, 110, rng, c["kode"], c["kota"], c["tgl"])
    page.alpha_composite(st, (RX + CW - st.width + 40, BOT - st.height + 10))


def page_country(page, d, c, rng):
    """Satu spread editorial yang merangkum satu negara tanpa halaman berulang."""
    runhead(d, c["neg"], "passport profile", c["no"])
    accents = [(154, 72, 39), (44, 89, 104), (168, 117, 38),
               (65, 94, 75), (109, 68, 54), (91, 70, 111)]
    accent = accents[(int(c["no"]) - 1) % len(accents)]
    # Latar berwarna harus tetap terang: ringkasan dibaca di layar, bukan
    # sekadar dilihat sebagai dekorasi.
    wash = tuple(234 + round(v / 255 * 14) for v in accent) + (255,)
    wash_2 = tuple(243 + round(v / 255 * 7) for v in accent) + (255,)

    # Halaman kiri: fakta yang bisa dipindai cepat.
    d.rounded_rectangle([LX - 18, TOP - 12, HALF - 50, BOT], radius=18,
                        fill=wash, outline=accent + (60,), width=2)
    d.rectangle([LX, TOP + 2, LX + 8, TOP + 74], fill=accent + (255,))
    d.text((LX + 26, TOP + 2), "PASSPORT PROFILE  /  " + c["no"] + " OF 11",
           font=CONDB(16), fill=accent + (255,))

    title_size = 78 if len(c["nama"]) < 16 else 64
    y = TOP + 48
    title_lines = wrap(d, c["nama"], DISP(title_size), CW - 34)[:2]
    for ln in title_lines:
        d.text((LX, y), ln, font=DISP(title_size), fill=INK)
        y += title_size + 4
    wobble(d, LX + 2, y - 5, LX + min(CW - 40, d.textlength(title_lines[-1], font=DISP(title_size))),
           y - 3, rng, accent + (255,), 3)
    y += 16
    d.text((LX, y), c["sub"], font=DISPI(27), fill=(104, 92, 76))
    y += 48
    y = para(d, LX, y, snip(c["tagline"], 155), DISPR(23), CW - 34, 31, BODY, 3) + 12

    facts = c["fakta"][:4]
    card_h = 74
    for i, (label, value) in enumerate(facts):
        fy = y + i * (card_h + 9)
        d.rounded_rectangle([LX, fy, HALF - 72, fy + card_h], radius=9,
                            fill=(248, 244, 233, 196), outline=accent + (52,), width=1)
        d.text((LX + 15, fy + 12), label.upper(), font=CONDB(13), fill=accent + (215,))
        vals = wrap(d, snip(value, 64), DISPR(20), CW - 118)[:2]
        for j, val in enumerate(vals):
            d.text((LX + 15, fy + 32 + j * 21), val, font=DISPR(20), fill=BODY)

    footer_y = min(BOT - 70, y + len(facts) * (card_h + 9) + 8)
    d.line([(LX, footer_y), (HALF - 72, footer_y)], fill=accent + (90,), width=2)
    hand(page, (LX, footer_y + 10), c["kota"] + "  /  " + c["tgl"], 37, -1.2,
         accent + (255,), max_w=CW - 24)

    # Halaman kanan: foto dominan, lalu tiga potongan cerita paling penting.
    d.rounded_rectangle([RX - 24, TOP - 12, PW - 56, BOT], radius=18,
                        fill=wash_2, outline=accent + (75,), width=1)
    for i in range(7):
        yy = TOP + 18 + i * 58
        d.line([(RX - 6, yy), (PW - 72, yy - 76)], fill=accent + (17,), width=2)

    photos = c["foto"]
    main_photo = fit_photo(os.path.join(SRC, photos[0] + ".webp"), 565, 455, rng,
                           cap=c["capA"], tapes=2, rot=(-2.0 if int(c["no"]) % 2 else 2.0))
    if main_photo:
        place(page, main_photo, RX, TOP + 4, CW)
    mini_photo = fit_photo(os.path.join(SRC, photos[1 % len(photos)] + ".webp"), 260, 190, rng,
                           cap=None, tapes=1, rot=(4.2 if int(c["no"]) % 2 else -4.2))
    if mini_photo:
        page.alpha_composite(mini_photo, (PW - mini_photo.width - 80, TOP + 278))

    by = TOP + 488
    d.text((RX, by), "SEKILAS DI " + c["nama"].upper(), font=CONDB(16), fill=accent + (255,))
    by += 31
    by = para(d, RX, by, snip(c["lihat"], 168), DISPR(22), CW - 8, 30, BODY, 4) + 15

    split = (CW - 18) // 2
    cards = [
        ("COBA", c["makan"][0][0], c["makan"][0][1]),
        ("GERAK", c["transport"], c["ongkos"][0][1]),
    ]
    for i, (label, head, body) in enumerate(cards):
        x = RX + i * (split + 18)
        d.rounded_rectangle([x, by, x + split, BOT - 16], radius=10,
                            fill=(248, 244, 233, 214), outline=accent + (54,), width=1)
        d.text((x + 16, by + 14), label, font=CONDB(13), fill=accent + (240,))
        d.text((x + 16, by + 35), snip(head, 28), font=DISPB(21), fill=INK)
        para(d, x + 16, by + 62, snip(body, 74), DISPI(18), split - 30, 24, (96, 84, 68), 3)

    stamp = passport_stamp(c["kode"], c["kota"], rng)
    page.alpha_composite(stamp, (HALF - 192, TOP + 28))


def page_notes(page, d, c, rng):
    runhead(d, c["neg"], "catatan", c["no"])
    F = c["foto"]

    y = TOP
    y = section(d, LX, y, "Cuaca", c["cuaca"], CW, 24, 34)
    y = section(d, LX, y, "Orang-orangnya", c["orang"], CW, 24, 34)
    p1 = fill_bottom(page, os.path.join(SRC, F[1 % len(F)] + ".webp"), LX, y + 8, CW, rng)

    y = TOP
    y = section(d, RX, y, "Yang dilihat", c["lihat"], CW, 24, 34)
    y = section(d, RX, y, "Jalan-jalannya", c["transport"], CW, 24, 34)
    fill_bottom(page, os.path.join(SRC, F[2 % len(F)] + ".webp"), RX, y + 8, CW, rng)

    # cap paspor menumpang di sudut foto kiri, bukan mengambang di ruang kosong
    if p1:
        stp = passport_stamp(c["kode"], c["kota"], rng)
        page.alpha_composite(stp, (LX + CW - stp.width + 26, BOT - stp.height + 24))


def page_taste(page, d, c, rng):
    runhead(d, c["neg"], "makan & ongkos", c["no"])

    d.text((LX, TOP), "YANG DIMAKAN", font=CONDB(16), fill=TERRA)
    y = TOP + 38
    for nama, ket in c["makan"]:
        if nama:
            d.text((LX, y), nama, font=DISPR(30), fill=INK)
            y += 38
        y = para(d, LX + 20, y, ket, DISPI(22), CW - 20, 31, (108, 96, 78)) + 20
    fill_bottom(page, os.path.join(SRC, c["foto"][-1] + ".webp"), LX, y + 6, CW, rng)

    d.text((RX, TOP), "ONGKOSNYA", font=CONDB(16), fill=TERRA)
    y = TOP + 42
    for k, v in c["ongkos"]:
        if k:
            d.text((RX, y + 6), k, font=DISPR(23), fill=INK)
        hand(page, (RX + 310, y - 12), v, 40, 0, PEN, max_w=CW - 300)
        y += 50
        d.line([(RX, y - 13), (RX + CW, y - 13)], fill=(44, 38, 30, 26), width=1)
    y += 34
    d.text((RX, y), "CATATAN", font=CONDB(15), fill=FAINT)
    y += 30
    y = para(d, RX, y, c["tips"], DISPI(23), CW, 33, (96, 84, 68))
    if len(c["foto"]) > 1:
        fill_bottom(page, os.path.join(SRC, c["foto"][1] + ".webp"), RX, y + 26, CW, rng)
    if rng.random() < .5:
        page.alpha_composite(stain(rng.randint(48, 70), rng), (HALF - 380, TOP + 40))


def page_end(page, d, c, rng):
    runhead(d, "penutup", "home at last", None)
    p0 = fit_photo(os.path.join(SRC, c["foto"][0] + ".webp"), CW, BOT - TOP, rng,
                   cap="pulang", tapes=2)
    place(page, p0, LX, TOP, CW)

    d.text((RX, TOP + 16), "PENUTUP", font=DISPB(19), fill=TERRA)
    y = TOP + 56
    d.text((RX, y), c["nama"], font=DISP(84), fill=INK)
    y += 100
    d.text((RX, y), c["sub"], font=DISPI(27), fill=(104, 92, 76))
    y += 70
    y = para(d, RX, y, c["teks"], DISPR(25), CW, 36, BODY) + 40
    hand(page, (RX, y), c["kutipan"], 54, -1, PENC, max_w=CW)
    y += 96
    d.line([(RX, y), (RX + CW, y)], fill=(44, 38, 30, 40), width=1)
    y += 28
    y = para(d, RX, y, c["cta"], DISPI(23), CW, 33, (96, 84, 68))
    if len(c["foto"]) > 1:
        fill_bottom(page, os.path.join(SRC, c["foto"][1] + ".webp"), RX, y + 26, CW, rng)


KIND = dict(title=page_title, country=page_country, end=page_end)


# ══════════════ build ══════════════
def build(c, n):
    rng = random.Random(4000 + n * 53)
    page = paper_base(rng)
    gutter(page)
    d = ImageDraw.Draw(page, "RGBA")
    KIND[c["kind"]](page, d, c, rng)
    hand(page, (40, PH - 60), str(n * 2 + 4), 40, 0, PENC)
    hand(page, (PW - 84, PH - 60), str(n * 2 + 5), 40, 0, PENC)
    d.line([(26, 70), (26, PH - 70)], fill=(160, 142, 112, 70), width=1)
    d.line([(PW - 26, 70), (PW - 26, PH - 70)], fill=(160, 142, 112, 70), width=1)
    canvas = Image.new("RGBA", (W, H), (0, 0, 0, 0))
    canvas.alpha_composite(page, (PX0, PY0))
    return canvas


if __name__ == "__main__":
    pages = content.halaman()
    man = []
    for i, c in enumerate(pages):
        img = build(c, i)
        p = os.path.join(OUT, c["id"] + ".webp")
        img.save(p, "WEBP", quality=92, method=6)
        man.append({"id": c["id"], "neg": c["neg"], "judul": c.get("judul", c["sub"]),
                    "no": c.get("no", ""), "kind": c["kind"]})
        print("%-22s %-6s %dKB" % (c["id"], c["kind"], os.path.getsize(p) // 1024))
    json.dump(man, open("book_manifest.json", "w", encoding="utf-8"), ensure_ascii=False, indent=1)
    tot = sum(os.path.getsize(os.path.join(OUT, f)) for f in os.listdir(OUT))
    print("HALAMAN", len(pages), "· TOTAL", tot // 1024, "KB")
