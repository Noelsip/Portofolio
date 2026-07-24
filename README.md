# Portofolio — Noel Ericson Rapael Sipayung

Portofolio pribadi. Product Manager & Quality Assurance di Twenti Studio,
mahasiswa Informatika Institut Teknologi Kalimantan.

## Menjalankan

```bash
npm install
npm start      # http://localhost:3000
npm run build  # output ke build/
```

## Struktur

Semua isi situs ada di `src/data/`, terpisah dari komponennya. Untuk
memperbarui konten, cukup ubah file di sana:

| File | Isi |
| --- | --- |
| `headerData.js` | Nama, peran, deskripsi hero, path CV |
| `aboutData.js` | Paragraf "Tentang" dan daftar fakta singkat |
| `workData.js` | Pengalaman kerja |
| `organizationData.js` | Pengalaman organisasi |
| `educationData.js` | Pendidikan |
| `projectsData.js` | Semua proyek, termasuk label peran per proyek |
| `skillsData.js` | Kemampuan, dikelompokkan |
| `contactsData.js` | Email, telepon, alamat |
| `socialsData.js` | Tautan media sosial |

Gambar proyek ada di `src/assets/png/products/` dan diimpor langsung di
`projectsData.js`, bukan lewat string path, supaya ikut ter-bundle saat build.

## Desain

Warna, tipografi, dan spasi didefinisikan sebagai CSS custom property di
`src/index.css` (`--ink`, `--paper`, `--accent`, `--display`, `--sans`,
`--mono`). Mengubah tema cukup dari blok `:root` di file itu.

Animasi scroll ditangani `src/components/Reveal/Reveal.js` lewat
IntersectionObserver, dan dimatikan otomatis saat pengguna mengaktifkan
`prefers-reduced-motion`.

## Form kontak

Menggunakan [Formspree](https://formspree.io). ID form ada di
`src/components/Contacts/Contacts.js`.

## Lisensi

[MIT](LICENSE)
