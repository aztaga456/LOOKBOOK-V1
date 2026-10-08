# PRD — Website Travel "Lombok Partner"

**Versi:** 1.0 · **Status:** Draft untuk review

## 1. Ringkasan

Website pemesanan paket wisata Lombok dengan tampilan modern (hero besar, destinasi populer, banner video, grid paket) dan **admin panel (CMS)** agar seluruh konten, foto, paket, dan data pemesanan bisa dikelola tanpa programmer.

**Tujuan:** (1) menampilkan paket secara menarik, (2) memudahkan calon wisatawan memesan dalam \< 2 menit, (3) memudahkan admin mengelola konten dan pesanan.

**Metrik sukses:** konversi kunjungan→pemesanan ≥ 3%, waktu isi form \< 2 menit, 100% konten bisa diedit admin.

## 2. Pengguna

| Peran | Kebutuhan |
| --- | --- |
| Wisatawan | Cari paket, lihat detail & harga, pesan, konfirmasi via WhatsApp |
| Admin | Kelola paket, foto, konten, pesanan, kontak |
| Owner (opsional) | Lihat ringkasan pesanan dan pendapatan |

## 3. Struktur Halaman (Situs Publik)

1. **Beranda:** navbar + logo, hero (judul, CTA "Lihat Paket"), destinasi populer, banner "Rasakan Keindahan Lombok", grid paket, keunggulan, footer.
2. **Detail Paket:** foto, deskripsi, itinerary, yang termasuk, harga, **form pemesanan** (sticky di samping).
3. **Konfirmasi Pemesanan:** kode booking, ringkasan, tombol konfirmasi WhatsApp.
4. *(Fase 2)* Tentang Kami, Galeri, Blog, Kontak, Testimoni.

## 4. Kebutuhan Fungsional

### 4.1 Form Pemesanan

Field: nama, WhatsApp, email (opsional), tanggal berangkat, jumlah dewasa, jumlah anak (harga 50%), catatan. Total dihitung otomatis. Validasi field wajib. Hasil: kode booking unik (LP-XXXXX), status awal "Baru", link WhatsApp berisi ringkasan pesanan.

### 4.2 Admin Panel

- **Login** admin (produksi: password ter-hash, sesi aman, opsi 2FA).
- **Paket:** tambah, edit, hapus; nama, lokasi, durasi, harga, deskripsi, itinerary, termasuk, upload foto.
- **Pemesanan:** daftar, ubah status (Baru → Dikonfirmasi → Lunas → Selesai / Batal), hapus, klik WA pemesan.
- **Konten & Foto:** judul/sub judul hero, deskripsi destinasi, kutipan banner, foto hero & destinasi.
- **Kontak & Brand:** nama brand, tagline, logo, WhatsApp, email, alamat.

## 5. Rekomendasi Tambahan

- **Prioritas tinggi:** tombol WhatsApp melayang; pembayaran DP via transfer/Midtrans/Xendit; email otomatis ke pemesan dan admin; ekspor pesanan ke CSV/Excel.
- **Menengah:** testimoni & rating, galeri foto/video, filter paket (destinasi, durasi, harga), kalender ketersediaan/kuota, kode promo.
- **Lanjutan:** multi bahasa (ID/EN), blog SEO, dashboard statistik, role admin berbeda (admin/staf), invoice PDF.

## 6. Kebutuhan Non-Fungsional

Responsif mobile-first (mayoritas trafik dari HP); skor Lighthouse ≥ 85; foto dikompres otomatis; SEO dasar (meta, sitemap, schema TouristTrip); HTTPS; backup data harian; data pribadi pemesan hanya dapat diakses admin.

## 7. Desain

Gaya: bersih dan segar, putih dengan aksen biru laut dan tosca, sudut membulat, foto besar, pembatas section bergelombang. Font sans-serif modern. Logo dummy (ikon matahari + ombak) dapat diganti lewat admin.

## 8. Arsitektur Teknis (Produksi)

**Keputusan:** database **Supabase** (PostgreSQL + Auth), penyimpanan foto **Google Drive**.

| Lapisan | Pilihan |
| --- | --- |
| Frontend | Next.js/React (atau HTML statis + supabase-js), hosting Vercel/Netlify |
| Database | Supabase Postgres dengan Row Level Security (RLS) |
| Login admin | Supabase Auth (email + password), hanya akun admin yang boleh mengelola data |
| Foto | Folder Google Drive "Lombok Partner Media", dibagikan "siapa saja dengan tautan (lihat)" |
| Upload foto dari admin | Google Apps Script Web App (menyimpan file ke folder Drive, mengembalikan File ID) |
| Notifikasi | Supabase Edge Function / Database Webhook ke email atau WhatsApp admin |

### 8.1 Skema Database

```sql
create table site_settings (
  id int primary key default 1,
  brand text, tagline text, hero_title text, hero_sub text,
  about_title text, about text, quote text,
  hero_img_id text, about_img_id text, logo_img_id text,
  wa text, email text, address text,
  check (id = 1)
);

create table packages (
  id uuid primary key default gen_random_uuid(),
  name text not null, location text, duration text,
  price bigint not null default 0,
  description text,
  itinerary text[] default '{}', inclusions text[] default '{}',
  image_id text,            -- Google Drive File ID
  is_active boolean default true,
  sort_order int default 0,
  created_at timestamptz default now()
);

create table bookings (
  id uuid primary key default gen_random_uuid(),
  code text unique not null,
  package_id uuid references packages(id) on delete set null,
  package_name text,        -- salinan nama saat dipesan
  customer_name text not null, whatsapp text not null, email text,
  travel_date date not null,
  adults int not null check (adults >= 1), children int not null default 0,
  note text, total bigint not null,
  status text not null default 'Baru'
    check (status in ('Baru','Dikonfirmasi','Lunas','Selesai','Batal')),
  created_at timestamptz default now()
);
```

### 8.2 Keamanan (RLS)

```sql
alter table site_settings enable row level security;
alter table packages enable row level security;
alter table bookings enable row level security;

-- publik: hanya baca konten
create policy "read settings" on site_settings for select using (true);
create policy "read packages" on packages for select using (is_active);
-- publik: boleh membuat pesanan, tidak boleh membaca
create policy "create booking" on bookings for insert to anon with check (status = 'Baru');
-- admin (login): akses penuh
create policy "admin all settings" on site_settings for all to authenticated using (true) with check (true);
create policy "admin all packages" on packages for all to authenticated using (true) with check (true);
create policy "admin all bookings" on bookings for all to authenticated using (true) with check (true);
```

Total harga sebaiknya dihitung ulang di server (trigger atau Edge Function) agar tidak bisa dimanipulasi dari browser.

### 8.3 Alur Foto dengan Google Drive

1. Admin memilih foto di panel, browser mengompres (maks. 1000 px) lalu mengirim ke Apps Script Web App.
2. Apps Script menyimpan file ke folder Drive, mengatur akses "siapa saja dengan tautan", dan mengembalikan **File ID**.
3. File ID disimpan di kolom `image_id` Supabase.
4. Situs menampilkan foto lewat `https://drive.google.com/thumbnail?id=FILE_ID&sz=w1000`.

**Catatan penting:** Google Drive bukan layanan hosting gambar. Tautan thumbnail bisa lambat dan kadang dibatasi saat trafik tinggi. Apps Script perlu dilindungi token rahasia agar orang lain tidak bisa mengunggah. Jika nanti foto terasa lambat, cukup ganti sumber ke Supabase Storage atau Cloudinary; skema database tidak perlu diubah karena hanya menyimpan ID/URL.

## 9. Alur Utama

Pengunjung buka beranda → pilih paket → isi form → kode booking + WhatsApp → admin melihat pesanan di panel → mengubah status → jalankan perjalanan.

## 10. Rencana Rilis

| Fase | Isi |
| --- | --- |
| 1 (prototipe) | Beranda, detail paket, form pemesanan, admin dasar |
| 2 | Backend + database, email notifikasi, pembayaran DP, galeri, testimoni |
| 3 | Multi bahasa, blog, dashboard, promo, kalender kuota |

## 11. Risiko & Pertanyaan Terbuka

- Isi paket, harga, dan foto final dari tim (placeholder saat ini).
- Metode pembayaran: manual atau payment gateway?
- Apakah perlu kuota/ketersediaan per tanggal?
- Domain, hosting, dan logo final.