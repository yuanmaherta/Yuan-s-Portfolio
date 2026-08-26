# Portfolio — Yuan Maherta

Website portofolio dibangun dengan Next.js (App Router) + TypeScript + Tailwind CSS + Framer Motion.

## Menjalankan secara lokal

```bash
npm install
npm run dev
```

Buka http://localhost:3000

## Struktur

- `src/app` — layout & halaman utama
- `src/components/sections` — tiap section (Hero, About, Projects, Skills, Experience, Achievements, Contact)
- `src/components/ui` — komponen kecil yang dipakai berulang
- `src/lib/data.ts` — semua konten (masih placeholder, akan diisi konten asli di Fase 2)

## Roadmap

1. **Fase 1** — Struktur & desain (selesai)
2. **Fase 2** — Isi konten asli (bio, project, skill, experience, achievement)
3. **Fase 3** — Integrasi Supabase untuk CMS-lite (projects/achievements dari database) dan analytics pengunjung

## Deploy

Project ini di-deploy lewat Vercel, auto-deploy dari branch `main` di GitHub.
