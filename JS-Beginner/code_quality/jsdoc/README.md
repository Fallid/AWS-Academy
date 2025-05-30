# JSDoc Example Project

## 1. 🚀 Apa itu JSDoc?

JSDoc adalah sebuah tool dokumentasi untuk JavaScript yang memungkinkan kamu menulis komentar khusus di dalam kode sumber yang kemudian dapat diubah menjadi dokumentasi yang terstruktur dan mudah dibaca. JSDoc juga membantu editor dan IDE memberikan fitur autocomplete dan pengecekan tipe secara statis.

---

## 2. 📔 Project Overview

Proyek ini mendemonstrasikan cara menggunakan **JSDoc** untuk mendokumentasikan kode JavaScript dengan anotasi dan komentar. Contoh ini menunjukkan cara menulis komentar JSDoc untuk fungsi, variabel, dan cara menghasilkan dokumentasi HTML dari komentar tersebut.

---

## 3. 🛠️ Instalasi JSDoc

Sebelum memulai, pastikan kamu memenuhi beberapa point dibawah ini:

### 1. Persyaratan menjalankan project ini

- Node.js sudah terpasang terpasang di komputer kamu. Jika belum, kamu bisa download dan install dari [NodeJs](https://nodejs.org/en).
- Setelah node berhasil terpasang, kamu bisa install dan menggunakan JSDoc secara langsung dengan perintah:

```bash
npm install
```

atau

```bash
yarn install
```

### 2. Instalasi JSDoc secara global

Untuk menggunakan JSDoc dari command line di mana saja, kamu bisa install secara global dengan perintah:

```bash
bash
npm install -g jsdoc
```

atau

```bash
bash
yarn global add jsdoc
```

### 3. Instalasi JSDoc secara local di project

Jika kamu ingin mengelola dependensi JSDoc di dalam project, jalankan perintah ini di folder project kamu:

```bash
bash
npm install --save-dev jsdoc
```

atau

```bash
bash
yarn add --dev jsdoc
```

---

## 4. 📄 Cara Membuat Dokumentasi dengan JSDoc

### 1. Tambahkan komentar JSDoc di kode JavaScript kamu

Contoh sederhana:

```js
js
/**
 * Menambahkan dua angka.
 *
 * @param {number} a - Angka pertama.
 * @param {number} b - Angka kedua.
 * @returns {number} Hasil penjumlahan a dan b.
 */
function tambah(a, b) {
  return a + b;
}
```

### 2. Buat file konfigurasi (opsional)
Kamu bisa membuat file konfigurasi jsdoc.json untuk mengatur opsi seperti folder sumber, folder output, template, dll.
Contoh isi ```jsdoc.json```:
```json
json
{
  "source": {
    "include": ["src"],
    "includePattern": ".js$"
  },
  "opts": {
    "destination": "docs"
  }
}

```
---

## 4. ▶️ Menjalankan JSDoc untuk Membuat Dokumentasi

## 4. Documentation Generation Steps

To generate HTML documentation from the JSDoc comments, run:

npm run doc

This command uses the `jsdoc` CLI to parse the source files and create documentation based on the comments.

### package.json Scripts

- **start**: Runs the example JavaScript file

  "start": "node index.js"

- **doc**: Generates documentation using JSDoc

  "doc": "jsdoc"

---

## 5. License Information

This project is licensed under the MIT License. Feel free to use and modify it as needed.

---

If you want to learn more about JSDoc, visit the official website: https://jsdoc.app/
