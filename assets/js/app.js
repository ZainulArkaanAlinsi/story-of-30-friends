/* ════════════════════════════════════════════════════════════
   The Story of 30 Friends — interaksi halaman
   ════════════════════════════════════════════════════════════ */
(() => {
'use strict';

const $  = (s, r = document) => r.querySelector(s);
const $$ = (s, r = document) => [...r.querySelectorAll(s)];
const REDUCED = matchMedia('(prefers-reduced-motion: reduce)').matches;
const el = (t, c) => { const e = document.createElement(t); if (c) e.className = c; return e; };

/* ── LOADER ──────────────────────────────────────────── */
(() => {
  const box = $('#loader'), bar = $('#loaderBar'), pct = $('#loaderPct');
  if (!box) return;
  let p = 0;
  document.body.classList.add('is-locked');
  const done = () => { box.classList.add('is-done'); document.body.classList.remove('is-locked'); };
  const tick = setInterval(() => {
    p = Math.min(100, p + Math.random() * 18 + 6);
    bar.style.width = p + '%';
    pct.textContent = String(Math.round(p)).padStart(2, '0') + '%';
    if (p >= 100) { clearInterval(tick); setTimeout(done, 240); }
  }, 170);
  setTimeout(() => { clearInterval(tick); done(); }, 4200);
})();

/* ── NAV ─────────────────────────────────────────────── */
(() => {
  const nav = $('#nav'), burger = $('#burger');
  addEventListener('scroll', () => nav.classList.toggle('is-stuck', scrollY > 40), { passive: true });
  burger?.addEventListener('click', () => {
    const open = nav.classList.toggle('is-open');
    burger.setAttribute('aria-expanded', String(open));
    document.body.classList.toggle('is-locked', open);
  });
  $$('#navLinks a').forEach(a => a.addEventListener('click', () => {
    nav.classList.remove('is-open');
    burger?.setAttribute('aria-expanded', 'false');
    document.body.classList.remove('is-locked');
  }));
})();

/* ── REVEAL ──────────────────────────────────────────── */
const io = new IntersectionObserver((es) => {
  es.forEach(e => {
    if (!e.isIntersecting) return;
    const d = +(e.target.dataset.d || 0);
    setTimeout(() => e.target.classList.add('is-in'), REDUCED ? 0 : d);
    io.unobserve(e.target);
  });
}, { threshold: 0.12, rootMargin: '0px 0px -8% 0px' });
const watch = (n) => $$('.reveal, .shot, .stop', n).forEach(x => io.observe(x));

/* ── COUNTER ─────────────────────────────────────────── */
$$('[data-count]').forEach(n => {
  new IntersectionObserver((es, ob) => es.forEach(e => {
    if (!e.isIntersecting) return;
    const to = +n.dataset.count;
    if (REDUCED) { n.textContent = to; ob.disconnect(); return; }
    const t0 = performance.now(), dur = 1500;
    const run = (now) => {
      const k = Math.min(1, (now - t0) / dur);
      n.textContent = Math.round(to * (1 - Math.pow(1 - k, 3)));
      if (k < 1) requestAnimationFrame(run);
    };
    requestAnimationFrame(run);
    ob.disconnect();
  }), { threshold: 0.5 }).observe(n);
});

/* ── TICKER ──────────────────────────────────────────── */
(() => {
  const row = $('#tickerRow');
  if (!row) return;
  const names = ['Indonesia','Malaysia','Mesir','Maroko','Belanda','Belgia','Jerman','Ceko','Austria',
                 'Slovakia','Hungaria','Serbia','Bulgaria','Turki','Arab Saudi','Nepal','Thailand','Laos',
                 'Vietnam','Hong Kong','Makau'];
  const one = names.map(n => `<span>${n}</span>`).join('');
  row.innerHTML = one + one;
})();

/* ── PLATES (kartu negara) ───────────────────────────── */
(() => {
  const grid = $('#platesGrid');
  if (!grid || typeof COUNTRIES === 'undefined') return;
  COUNTRIES.forEach((c, i) => {
    const b = el('button', 'plate reveal');
    b.dataset.d = String((i % 3) * 90);
    b.type = 'button';
    b.innerHTML = `
      <div class="plate__media">
        <span class="plate__no">${c.no}</span>
        <img loading="lazy" src="/assets/img/${c.foto[0]}.webp" alt="${c.alt[0]}" />
        <span class="plate__benua">${c.benua}</span>
      </div>
      <div class="plate__body">
        <h3 class="plate__nama">${c.nama}</h3>
        <p class="plate__sub">${c.sub}</p>
        <p class="plate__tag">${c.tagline}</p>
        <span class="plate__more"><i></i>Buka catatan</span>
      </div>`;
    b.addEventListener('click', () => openModal(c));
    grid.appendChild(b);
  });
  watch(grid);
})();

/* ── MODAL NEGARA ────────────────────────────────────── */
const modal = $('#modal'), modalBody = $('#modalBody');
let lastFocus = null;

function openModal(c) {
  lastFocus = document.activeElement;
  modalBody.innerHTML = `
    <div class="md__hero"><img src="/assets/img/${c.foto[0]}.webp" alt="${c.alt[0]}" /></div>
    <p class="md__no">Etape ${c.no} · ${c.benua}</p>
    <h2 class="md__nama" id="modalTitle">${c.nama}</h2>
    <p class="md__sub">${c.sub}</p>
    <p class="md__tag">${c.tagline}</p>
    <div class="md__teks">${c.teks.map(t => `<p>${t}</p>`).join('')}</div>
    <dl class="md__fakta">${c.fakta.map(([k, v]) => `<div><dt>${k}</dt><dd>${v}</dd></div>`).join('')}</dl>
    <div class="md__foto">${c.foto.map((f, i) =>
      `<img loading="lazy" src="/assets/img/${f}.webp" alt="${c.alt[i] || c.nama}" data-lb="${f}" data-cap="${c.alt[i] || c.nama}" />`).join('')}</div>`;
  modal.hidden = false;
  requestAnimationFrame(() => modal.classList.add('is-on'));
  document.body.classList.add('is-locked');
  $('.modal__x').focus();
}
function closeModal() {
  modal.classList.remove('is-on');
  document.body.classList.remove('is-locked');
  setTimeout(() => { modal.hidden = true; modalBody.innerHTML = ''; lastFocus?.focus(); }, 480);
}
modal?.addEventListener('click', e => { if (e.target.closest('[data-close]')) closeModal(); });

/* ── GALERI ──────────────────────────────────────────── */
let LB = [];
(() => {
  const grid = $('#galGrid'), filt = $('#galFilters');
  if (!grid || typeof COUNTRIES === 'undefined') return;

  const shots = [];
  COUNTRIES.forEach(c => c.foto.forEach((f, i) =>
    shots.push({ f, cap: c.alt[i] || c.nama, neg: c.nama, id: c.id })));
  ['group-0','group-1','group-2','group-3','group-4','group-5'].forEach(f =>
    shots.push({ f, cap: 'Tiga puluh sahabat', neg: '30 Sahabat', id: 'group' }));

  const cats = [{ id: 'featured', nama: 'Pilihan' }, { id: 'all', nama: 'Semua' },
                ...COUNTRIES.map(c => ({ id: c.id, nama: c.nama })),
                { id: 'group', nama: '30 Sahabat' }];

  cats.forEach((c, i) => {
    const b = el('button', 'chip' + (i === 0 ? ' is-on' : ''));
    b.type = 'button'; b.textContent = c.nama; b.dataset.cat = c.id;
    b.addEventListener('click', () => {
      $$('.chip', filt).forEach(x => x.classList.remove('is-on'));
      b.classList.add('is-on');
      render(c.id);
    });
    filt.appendChild(b);
  });

  function render(cat) {
    const list = cat === 'featured'
      ? shots.filter(s => s.f === 'group-0' || s.f === 'group-3' || s.f === COUNTRIES.find(c => c.id === s.id)?.foto[0])
      : cat === 'all' ? shots : shots.filter(s => s.id === cat);
    LB = list;
    grid.innerHTML = '';
    list.forEach((s, i) => {
      const fig = el('figure', 'shot');
      fig.innerHTML = `<img loading="lazy" decoding="async" src="/assets/img/${s.f}.webp" alt="${s.cap}" />
                       <figcaption><b>${s.neg}</b><span>${s.cap}</span></figcaption>
                       <span class="shot__open" aria-hidden="true">Lihat foto</span>`;
      fig.addEventListener('click', () => openLb(i));
      grid.appendChild(fig);
      if (REDUCED) fig.classList.add('is-in');
    });
    watch(grid);
  }
  render('featured');
})();

/* ── LIGHTBOX ────────────────────────────────────────── */
const lb = $('#lb'), lbImg = $('#lbImg'), lbCap = $('#lbCap');
let lbI = 0;
function openLb(i) {
  if (!LB.length) return;
  lbI = (i + LB.length) % LB.length;
  const s = LB[lbI];
  lbImg.src = `/assets/img/${s.f}.webp`;
  lbImg.alt = s.cap;
  lbCap.textContent = s.neg ? `${s.neg} — ${s.cap}` : s.cap;
  lb.hidden = false;
  requestAnimationFrame(() => lb.classList.add('is-on'));
  document.body.classList.add('is-locked');
}
function closeLb() {
  lb.classList.remove('is-on');
  document.body.classList.remove('is-locked');
  setTimeout(() => { lb.hidden = true; }, 420);
}
lb?.addEventListener('click', e => {
  if (e.target.closest('[data-lbclose]') || e.target === lb) return closeLb();
  if (e.target.closest('[data-lbprev]')) return openLb(lbI - 1);
  if (e.target.closest('[data-lbnext]')) return openLb(lbI + 1);
});
document.addEventListener('click', e => {
  const t = e.target.closest('[data-lb]');
  if (!t) return;
  LB = [{ f: t.dataset.lb, cap: t.dataset.cap, neg: '' }];
  openLb(0);
});
addEventListener('keydown', e => {
  if (!lb.hidden) {
    if (e.key === 'Escape') closeLb();
    if (e.key === 'ArrowLeft') openLb(lbI - 1);
    if (e.key === 'ArrowRight') openLb(lbI + 1);
    return;
  }
  if (!modal.hidden && e.key === 'Escape') closeModal();
});

/* ── RUTE ────────────────────────────────────────────── */
(() => {
  const track = $('#routeTrack');
  if (!track || typeof ROUTE === 'undefined') return;
  ROUTE.forEach((s, i) => {
    const country = COUNTRIES.find(c => c.nama === s.neg);
    const photo = country?.foto[0] || (i === 0 ? 'group-0' : 'group-3');
    const d = el('div', 'stop');
    d.innerHTML = `<div class="stop__photo"><img loading="lazy" decoding="async" src="/assets/img/${photo}.webp" alt="${s.kota}" />
        <span>${String(i + 1).padStart(2, '0')}</span></div>
      <div class="stop__dot"></div>
      <p class="stop__code">${s.kode}</p>
      <h3 class="stop__city">${s.kota}</h3>
      <p class="stop__neg">${s.neg}</p>
      <p class="stop__ket">${s.ket}</p>`;
    track.appendChild(d);
  });
  watch(track);
})();

/* ── CATATAN (accordion) ─────────────────────────────── */
(() => {
  const list = $('#notesList');
  if (!list || typeof NOTES === 'undefined') return;
  NOTES.forEach((n, i) => {
    const d = el('div', 'note reveal');
    d.dataset.d = String(i * 50);
    d.innerHTML = `
      <button class="note__head" type="button" aria-expanded="false">
        <span class="note__n">${String(i + 1).padStart(2, '0')}</span>
        <span class="note__t">${n.t}</span>
        <span class="note__x" aria-hidden="true"></span>
      </button>
      <div class="note__panel"><div class="note__inner"><p>${n.d}</p></div></div>`;
    const head = $('.note__head', d), panel = $('.note__panel', d), inner = $('.note__inner', d);
    head.addEventListener('click', () => {
      const open = d.classList.toggle('is-open');
      head.setAttribute('aria-expanded', String(open));
      panel.style.height = open ? inner.offsetHeight + 'px' : '0px';
      if (open) $$('.note.is-open', list).forEach(o => {
        if (o === d) return;
        o.classList.remove('is-open');
        $('.note__head', o).setAttribute('aria-expanded', 'false');
        $('.note__panel', o).style.height = '0px';
      });
    });
    list.appendChild(d);
  });
  watch(list);
})();

/* ── BUKU 3D (tilt) ──────────────────────────────────── */
(() => {
  if (REDUCED || matchMedia('(hover:none)').matches) return;
  $$('.book').forEach(bk => {
    const host = bk.parentElement;
    const gloss = $('.book__gloss', bk);
    let rx = 0, ry = 0, tx = 0, ty = 0, on = false;
    host.addEventListener('pointermove', e => {
      const r = host.getBoundingClientRect();
      tx = -((e.clientY - r.top) / r.height - .5) * 16;
      ty = ((e.clientX - r.left) / r.width - .5) * 22;
      if (!on) { on = true; requestAnimationFrame(loop); }
    });
    host.addEventListener('pointerleave', () => { tx = 0; ty = 0; });
    function loop() {
      rx += (tx - rx) * .09; ry += (ty - ry) * .09;
      bk.style.transform = `rotateX(${rx.toFixed(2)}deg) rotateY(${ry.toFixed(2)}deg)`;
      if (gloss) gloss.style.transform = `translateX(${(ry * 1.6).toFixed(1)}%)`;
      if (Math.abs(tx - rx) > .05 || Math.abs(ty - ry) > .05) requestAnimationFrame(loop);
      else on = false;
    }
  });
})();

/* ── TOMBOL MAGNETIK ─────────────────────────────────── */
(() => {
  if (REDUCED || matchMedia('(hover:none)').matches) return;
  $$('[data-magnet]').forEach(b => {
    b.addEventListener('pointermove', e => {
      const r = b.getBoundingClientRect();
      b.style.transform = `translate(${((e.clientX - r.left) / r.width - .5) * 12}px,${((e.clientY - r.top) / r.height - .5) * 8}px)`;
    });
    b.addEventListener('pointerleave', () => { b.style.transform = ''; });
  });
})();

watch(document);

/* ════════════════════════════════════════════════════════════
   SKETCHBOOK — lembar yang benar-benar membalik.

   Lembarnya bukan pintu datar: ia rantai strip bersarang yang
   garis singgungnya menyapu sebuah busur, jadi kertasnya
   melengkung seperti kertas sungguhan. Ditambah kaca pembesar
   yang bisa diseret, zoom, dan condong mengikuti kursor.
   ════════════════════════════════════════════════════════════ */
(() => {
  const wrap = $('#sbWrap');
  if (!wrap || typeof BOOK === 'undefined') return;

  const stage = $('#sbStage'), sb3d = $('#sb3d'), book = $('#sbBook');
  const capBox = $('#sbCaptions'), hint = $('#sbHint');
  const zoomWrap = $('#zoomWrap'), zoomInner = $('#zoomInner');
  const loupe = $('#loupe'), zRead = $('#zRead');
  const loupeBtn = $('#loupeBtn'), zIn = $('#zIn'), zOut = $('#zOut');
  const ribbon = $('#sbRibbon'), sbPos = $('#sbPos'), sbTot = $('#sbTot'), sbFill = $('#sbFill');

  const PAGES = BOOK
    .filter(b => b.kind === 'title' || b.kind === 'open' || b.kind === 'end')
    .map(b => ({ url: `/assets/book/${b.id}.webp`, title: b.neg,
                 place: b.kind === 'open' ? 'Passport Profile' : b.judul,
                 kind: b.kind, no: b.no }));
  const M = PAGES.length;
  if (sbTot) sbTot.textContent = String(M);

  /* Hanya tetangga halaman yang diunduh — 35 spread terlalu berat
     untuk dimuat sekaligus. */
  const loaded = new Set();
  function ensure(i) {
    for (const j of [i, (i + 1) % M, (i - 1 + M) % M, (i + 2) % M]) {
      if (loaded.has(j)) continue;
      loaded.add(j);
      new Image().src = PAGES[j].url;
    }
  }

  /* Tebal tumpukan tepi kertas, panjang pita, dan penghitung —
     semuanya membaca posisi halaman yang sama. */
  function updateShell() {
    const cur = turn ? turn.to : idx;
    const k = M > 1 ? cur / (M - 1) : 0;
    sb3d.style.setProperty('--el', (4 + 26 * k).toFixed(1) + 'px');
    sb3d.style.setProperty('--er', (4 + 26 * (1 - k)).toFixed(1) + 'px');
    if (ribbon) ribbon.style.height = (38 + 34 * k).toFixed(1) + '%';
    if (sbPos) sbPos.textContent = String(cur + 1).padStart(2, '0');
    if (sbFill) sbFill.style.width = (k * 100).toFixed(1) + '%';
  }

  const N = 18;          /* jumlah strip — cukup untuk lengkung mulus */
  const SPAN = 0.470;    /* dari gutter ke tepi luar, sebagai pecahan */
  const BETA = 0.60;     /* puncak lengkung busur, radian            */
  let idx = 0, turn = null, strips = [];

  /* ── menggambar ── */
  const imgEl = (i, side) => {
    const im = new Image();
    im.className = 'sb-half-img ' + side;
    im.draggable = false; im.alt = ''; im.src = PAGES[i].url;
    return im;
  };
  const halfEl = (pos, i) => {
    const d = el('div', 'sb-half ' + pos);
    d.appendChild(imgEl(i, pos));
    d.appendChild(el('div', 'gutter-shade ' + pos));
    return d;
  };

  function buildCurl(dir, from, to) {
    strips = [];
    const c = el('div', 'curl ' + dir);
    c.style.setProperty('--n', N);
    c.style.setProperty('--span', SPAN);
    let host = c;
    for (let i = 0; i < N; i++) {
      const s = el('div', 'strip');
      const gut = 'calc(var(--bw) * 0.5)';
      const sw  = `calc(var(--bw) * ${SPAN} / ${N})`;
      const A = `calc(-1 * (${gut} + ${i} * ${sw}))`;   /* menghadap halaman asal   */
      const B = `calc(${i + 1} * ${sw} - ${gut})`;      /* menghadap halaman tujuan */
      const f = el('div', 'face front'), b = el('div', 'face back');
      const dress = (e, url, pos) => { e.style.backgroundImage = `url(${url})`; e.style.backgroundPositionX = pos; };
      dress(f, PAGES[from].url, dir === 'next' ? A : B);
      dress(b, PAGES[to].url,   dir === 'next' ? B : A);
      f.appendChild(el('div', 'sh')); f.appendChild(el('div', 'gl'));
      b.appendChild(el('div', 'sh')); b.appendChild(el('div', 'gl'));
      s.appendChild(f); s.appendChild(b);
      if (i === N - 1) s.classList.add('edge');
      host.appendChild(s); host = s;
      strips.push(s);
    }
    return c;
  }

  function applyTurn(t) {
    const th = Math.PI * t;                    /* seberapa jauh lembar berayun */
    const beta = BETA * Math.sin(Math.PI * t); /* datar di kedua ujung         */
    const D = 180 / Math.PI;
    const tt = th + beta, td = 2 * beta / N;
    sb3d.style.setProperty('--tt', (tt * D).toFixed(2) + 'deg');
    sb3d.style.setProperty('--td', (td * D).toFixed(3) + 'deg');
    sb3d.style.setProperty('--shade', Math.sin(Math.PI * t).toFixed(3));
    fadeCaption(t);
    for (let i = 0; i < strips.length; i++) {
      const l1 = Math.abs(Math.cos(tt - i * td));
      const l2 = Math.abs(Math.cos(tt - (i + 1) * td));
      const st = strips[i].style;
      st.setProperty('--lit', l1.toFixed(3));
      st.setProperty('--a1', ((1 - l1) * .62).toFixed(3));
      st.setProperty('--a2', ((1 - l2) * .62).toFixed(3));
    }
  }

  function paint() {
    book.textContent = '';
    if (!turn) {
      const f = el('div', 'sb-full');
      const im = new Image();
      im.src = PAGES[idx].url; im.alt = PAGES[idx].title; im.draggable = false;
      f.appendChild(im); book.appendChild(f);
      sb3d.style.setProperty('--shade', '0');
    } else {
      const next = turn.dir === 'next';
      book.appendChild(halfEl('left',  next ? turn.from : turn.to));
      book.appendChild(halfEl('right', next ? turn.to   : turn.from));
      book.appendChild(buildCurl(turn.dir, turn.from, turn.to));
      applyTurn(turn.t);
    }
    const a = el('button', 'sb-zone sb-prev'), b = el('button', 'sb-zone sb-next');
    a.type = b.type = 'button';
    a.setAttribute('aria-label', 'halaman sebelumnya');
    b.setAttribute('aria-label', 'halaman berikutnya');
    book.appendChild(a); book.appendChild(b);
    layout(); caption(); marks(); updateShell(); ensure(turn ? turn.to : idx);
    syncZoomLayer(); placeLoupe();
  }

  let capOut = null, capIn = null;
  function caption() {
    capBox.textContent = ''; capOut = capIn = null;
    if (turn) {
      capOut = el('p', 'sb-caption live'); capOut.textContent = PAGES[turn.from].title; capBox.appendChild(capOut);
      capIn  = el('p', 'sb-caption live'); capIn.textContent  = PAGES[turn.to].title;   capBox.appendChild(capIn);
      fadeCaption(turn.t);
    } else {
      const p = el('p', 'sb-caption');
      p.textContent = PAGES[idx].title;
      capBox.appendChild(p);
    }
  }
  function fadeCaption(t) {
    if (!capOut || !capIn) return;
    capOut.style.opacity = (1 - Math.max(0, Math.min(1, (t - .10) / .28))).toFixed(3);
    capIn.style.opacity  = Math.max(0, Math.min(1, (t - .56) / .30)).toFixed(3);
  }
  function layout() { sb3d.style.setProperty('--bw', book.clientWidth + 'px'); }
  addEventListener('resize', layout);

  /* ── loop pegas ── */
  let spring = null, raf = null, last = 0;
  function animateTo(target, done, k, c) { spring = { kind: 'spring', v: 0, target, done, k: k || 150, c: c || 22 }; kick(); }
  function kick() { if (raf === null) { last = performance.now(); raf = requestAnimationFrame(tick); } }
  function tick(now) {
    raf = null;
    const dt = Math.min(.032, (now - last) / 1000 || .016); last = now;
    if (spring && turn) {
      const s = spring;
      const x = turn.t - s.target;
      s.v += (-s.k * x - s.c * s.v) * dt;
      turn.t += s.v * dt;
      if (Math.abs(turn.t - s.target) < .002 && Math.abs(s.v) < .02) {
        turn.t = s.target; spring = null; applyTurn(turn.t); s.done && s.done();
      } else applyTurn(turn.t);
    }
    viewSpring();
    const lm = loupeEase();
    if ((spring || viewActive || lm) && raf === null) raf = requestAnimationFrame(tick);
  }

  /* ── condong + zoom ── */
  const TILT_X = 4.5, TILT_Y = 7, ZMIN = .9, ZMAX = 1.5;
  const view = { rx: 0, ry: 0, z: 1, trx: 0, try_: 0, tz: 1 };
  let viewActive = false, lastZ = 1;
  function applyView() {
    sb3d.style.setProperty('--rx', view.rx.toFixed(2) + 'deg');
    sb3d.style.setProperty('--ry', view.ry.toFixed(2) + 'deg');
    sb3d.style.setProperty('--zoom', view.z.toFixed(3));
    if (view.z !== lastZ) { lastZ = view.z; placeLoupe(); }
  }
  function viewSpring() {
    let moved = false;
    for (const [k, t] of [['rx','trx'],['ry','try_'],['z','tz']]) {
      const d = view[t] - view[k];
      if (Math.abs(d) > .0006) { view[k] += d * .14; moved = true; } else view[k] = view[t];
    }
    if (moved) applyView();
    viewActive = moved;
    return moved;
  }
  function setView(rx, ry, z) {
    view.trx = Math.max(-TILT_X, Math.min(TILT_X, rx));
    view.try_ = Math.max(-TILT_Y, Math.min(TILT_Y, ry));
    view.tz = Math.max(ZMIN, Math.min(ZMAX, z));
    viewActive = true; kick(); syncZoom();
  }
  addEventListener('pointermove', e => {
    if (e.pointerType === 'touch' || drag) return;
    const r = book.getBoundingClientRect();
    if (!r.width) return;
    const nx = Math.max(-1, Math.min(1, (e.clientX - (r.left + r.width / 2)) / (r.width * .62)));
    const ny = Math.max(-1, Math.min(1, (e.clientY - (r.top + r.height / 2)) / (r.height * .9)));
    setView(-ny * TILT_X, nx * TILT_Y, view.tz);
  }, { passive: true });
  addEventListener('pointerout', e => { if (!e.relatedTarget) setView(0, 0, view.tz); });
  addEventListener('blur', () => setView(0, 0, view.tz));
  stage.addEventListener('dblclick', () => setView(view.trx, view.try_, 1));

  /* ── pointer / drag ── */
  let drag = null;
  const hideHint = () => hint.classList.add('gone');
  stage.addEventListener('pointerdown', e => {
    if (e.button !== 0) return;
    e.preventDefault();
    const onBook = e.target.closest('.sb-zone');
    stage.setPointerCapture(e.pointerId);
    hideHint();
    if (!onBook) return;
    const r = book.getBoundingClientRect();
    const dir = (e.clientX - r.left) / r.width > .5 ? 'next' : 'prev';
    startTurn(dir, 0);
    drag = { dir, x0: e.clientX, w: r.width, moved: 0, vel: 0, tPrev: performance.now() };
  });
  stage.addEventListener('pointermove', e => {
    if (!drag) return;
    const dx = e.clientX - drag.x0;
    drag.moved = Math.max(drag.moved, Math.abs(dx));
    const t = Math.max(0, Math.min(1, (drag.dir === 'next' ? -dx : dx) / (drag.w * .62)));
    const now = performance.now();
    drag.vel = (t - (turn ? turn.t : 0)) / Math.max(.001, (now - drag.tPrev) / 1000);
    drag.tPrev = now;
    if (turn) { turn.t = t; applyTurn(t); }
  });
  function endDrag() {
    if (!drag) return;
    const d = drag; drag = null;
    if (!turn) return;
    if (d.moved < 6) return commit();
    (turn.t > .42 || d.vel > 1.1) ? commit() : cancel();
  }
  stage.addEventListener('dragstart', e => e.preventDefault());
  stage.addEventListener('selectstart', e => e.preventDefault());
  stage.addEventListener('pointerup', endDrag);
  stage.addEventListener('pointercancel', endDrag);

  /* ── kendali balik halaman ── */
  function startTurn(dir, t) {
    spring = null;
    if (turn) { idx = turn.to; turn = null; }
    shoveLoupe(dir);
    const from = idx;
    turn = { dir, from, to: dir === 'next' ? (from + 1) % M : (from - 1 + M) % M, t: t || 0 };
    paint();
  }
  function commit() {
    if (!turn) return;
    if (REDUCED) { idx = turn.to; turn = null; paint(); return; }
    animateTo(1, () => { idx = turn.to; turn = null; paint(); }, 170, 26);
  }
  function cancel() { if (turn) animateTo(0, () => { turn = null; paint(); }, 150, 24); }
  function step(dir) {
    if (turn) { idx = turn.to; turn = null; }
    startTurn(dir, 0); commit();
  }
  function goTo(i) {
    if (i === idx) return;
    if (turn) { idx = turn.to; turn = null; }
    const fwd = (i - idx + M) % M, back = (idx - i + M) % M;
    if (Math.min(fwd, back) === 1) return step(fwd === 1 ? 'next' : 'prev');
    idx = i; paint();
  }
  $('#sbLeft').onclick  = () => step('prev');
  $('#sbRight').onclick = () => step('next');
  addEventListener('keydown', e => {
    if (e.key !== 'ArrowLeft' && e.key !== 'ArrowRight') return;
    if (e.metaKey || e.ctrlKey || e.altKey) return;
    if (!lb.hidden || !modal.hidden) return;
    const t = e.target;
    if (t && (t.tagName === 'INPUT' || t.tagName === 'TEXTAREA' || t.isContentEditable)) return;
    const r = wrap.getBoundingClientRect();
    if (r.bottom < 0 || r.top > innerHeight) return;   /* hanya saat buku terlihat */
    e.preventDefault(); hideHint();
    step(e.key === 'ArrowRight' ? 'next' : 'prev');
  });

  /* ── kaca pembesar ── */
  const MAG = 2.3;
  let loupeOn = false, lx = null, ly = null, lgrab = null, lTarget = null;
  const loupeSize = () => Math.round(Math.max(150, Math.min(250, book.clientWidth * .225)));
  const bookBox = () => ({ x: 0, y: 0, w: book.clientWidth, h: book.clientHeight });

  function restLoupe() {
    const b = bookBox();
    if (!b.w) return;
    /* istirahat di sudut luar, setengah menggantung di tepi kertas —
       supaya tidak menutupi teks saat halaman baru dibuka */
    lx = b.x + b.w * .945; ly = b.y + b.h * .88;
    placeLoupe();
  }
  function syncZoomLayer() {
    zoomInner.textContent = '';
    for (const c of book.children) {
      if (c.classList.contains('sb-zone')) continue;
      zoomInner.appendChild(c.cloneNode(true));
    }
  }
  function placeLoupe() {
    if (lx === null) return;
    const B = bookBox(), bw = B.w, bh = B.h;
    if (!bw) return;
    const R = loupeSize() / 2, bez = R * 2 * .058;
    loupe.style.setProperty('--lr', R * 2 + 'px');
    loupe.style.transform = `translate3d(${(lx - R).toFixed(1)}px,${(ly - R).toFixed(1)}px,0)`;
    if (loupeOn) loupe.classList.add('on');

    const z = view.z, cx = bw / 2, cy = bh / 2;
    const x0 = cx + (bw * .0301 - cx) * z, x1 = cx + (bw * .970 - cx) * z;
    const y0 = cy + (bh * .040 - cy) * z, y1 = cy + (bh * .960 - cy) * z;
    const nx = Math.max(x0, Math.min(lx, x1)), ny = Math.max(y0, Math.min(ly, y1));
    const inside = (lx > x0 && lx < x1 && ly > y0 && ly < y1)
      ? Math.min(lx - x0, x1 - lx, ly - y0, y1 - ly)
      : -Math.hypot(lx - nx, ly - ny);
    const k = Math.max(0, Math.min(1, (inside + R * .30) / (R * .55)));

    zoomWrap.style.opacity = (loupeOn ? k : 0).toFixed(3);
    if (k <= .002) return;
    const r = (R - bez).toFixed(1);
    const mask = `radial-gradient(circle ${r}px at ${lx.toFixed(1)}px ${ly.toFixed(1)}px,#000 calc(100% - 1px),transparent 100%)`;
    zoomWrap.style.webkitMaskImage = mask;
    zoomWrap.style.maskImage = mask;
    const px = cx + (lx - cx) / z, py = cy + (ly - cy) / z, s = MAG * z;
    zoomInner.style.transform = `translate(${(lx - px * s).toFixed(1)}px,${(ly - py * s).toFixed(1)}px) scale(${s.toFixed(4)})`;
  }
  function shoveLoupe(dir) {
    if (!loupeOn || lx === null || lgrab) return;
    const b = bookBox();
    const nx = (b.w / 2 + (lx - b.x - b.w / 2) / view.z) / b.w;
    const ny = (b.h / 2 + (ly - b.y - b.h / 2) / view.z) / b.h;
    if (nx < .02 || nx > .98 || ny < .06 || ny > .94) return;
    lTarget = { x: b.x + b.w * (dir === 'next' ? .06 : .945), y: b.y + b.h * .88 };
    kick();
  }
  function loupeEase() {
    if (!lTarget) return false;
    if (lgrab) { lTarget = null; return false; }
    const dx = lTarget.x - lx, dy = lTarget.y - ly;
    if (Math.abs(dx) < .5 && Math.abs(dy) < .5) { lx = lTarget.x; ly = lTarget.y; lTarget = null; placeLoupe(); return false; }
    lx += dx * .17; ly += dy * .17; placeLoupe();
    return true;
  }
  loupe.addEventListener('pointerdown', e => {
    if (!loupeOn || e.button !== 0) return;
    e.preventDefault(); e.stopPropagation();
    lTarget = null;
    lgrab = { cx: e.clientX, cy: e.clientY, lx0: lx, ly0: ly };
    loupe.classList.add('held');
    loupe.setPointerCapture(e.pointerId);
    hideHint();
  });
  loupe.addEventListener('pointermove', e => {
    if (!lgrab) return;
    const b = bookBox(), R = loupeSize() / 2;
    lx = Math.max(b.x - R * .7, Math.min(b.x + b.w + R * .7, lgrab.lx0 + (e.clientX - lgrab.cx)));
    ly = Math.max(b.y - R * .7, Math.min(b.y + b.h + R * 1.0, lgrab.ly0 + (e.clientY - lgrab.cy)));
    placeLoupe();
  });
  const dropLoupe = () => { lgrab = null; loupe.classList.remove('held'); };
  loupe.addEventListener('pointerup', dropLoupe);
  loupe.addEventListener('pointercancel', dropLoupe);
  loupeBtn.onclick = () => {
    loupeOn = !loupeOn;
    loupeBtn.setAttribute('aria-pressed', String(loupeOn));
    loupe.classList.toggle('on', loupeOn);
    if (loupeOn) { if (lx === null) restLoupe(); else placeLoupe(); }
    else zoomWrap.style.opacity = '0';
  };
  addEventListener('resize', () => { lx = null; restLoupe(); });

  function syncZoom() {
    zRead.textContent = Math.round(view.tz * 100) + '%';
    zOut.disabled = view.tz <= ZMIN + .001;
    zIn.disabled  = view.tz >= ZMAX - .001;
  }
  zIn.onclick  = () => { setView(view.trx, view.try_, view.tz * 1.16); hideHint(); };
  zOut.onclick = () => { setView(view.trx, view.try_, view.tz / 1.16); hideHint(); };

  /* ── daftar isi, dikelompokkan per negara ── */
  const idxBox = $('#sbIndex');
  (() => {
    const groups = [];
    PAGES.forEach((p, i) => {
      const last = groups[groups.length - 1];
      if (last && last.neg === p.title) last.items.push({ p, i });
      else groups.push({ neg: p.title, no: p.no, items: [{ p, i }] });
    });
    groups.forEach(g => {
      const box = el('div', 'sb-group');
      box.innerHTML = `<div class="sb-group__h">
          <span class="sb-group__no">${g.no || '—'}</span>
          <span class="sb-group__t"></span>
          <span class="sb-group__b">${g.items.length} halaman</span>
        </div><div class="sb-group__row"></div>`;
      $('.sb-group__t', box).textContent = g.neg;
      const row = $('.sb-group__row', box);
      g.items.forEach(({ p, i }) => {
        const b = el('button', 'sb-jump');
        b.type = 'button'; b.textContent = p.place; b.dataset.i = String(i);
        b.onclick = () => { goTo(i); wrap.scrollIntoView({ behavior: 'smooth', block: 'center' }); };
        row.appendChild(b);
      });
      idxBox.appendChild(box);
    });
  })();
  function marks() {
    const cur = turn ? turn.to : idx;
    $$('.sb-jump', idxBox).forEach(b =>
      b.setAttribute('aria-current', +b.dataset.i === cur ? 'true' : 'false'));
  }

  /* ── boot ── */
  paint(); applyView(); syncZoom();
  const first = new Image();
  first.src = PAGES[0].url;
  (first.decode ? first.decode().catch(() => {}) : Promise.resolve())
    .then(() => { layout(); restLoupe(); paint(); });
})();

})();
