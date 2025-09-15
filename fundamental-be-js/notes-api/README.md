
<!-- PROJECT LOGO -->

<p align="center">
  <a href="https://nodejs.org/" target="_blank"><img src="https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white" alt="Node.js"/></a>
  <a href="https://hapi.dev/" target="_blank"><img src="https://img.shields.io/badge/Hapi.js-FF6C37?style=for-the-badge&logo=hapi&logoColor=white" alt="Hapi.js"/></a>
  <a href="https://www.postgresql.org/" target="_blank"><img src="https://img.shields.io/badge/PostgreSQL-4169E1?style=for-the-badge&logo=postgresql&logoColor=white" alt="PostgreSQL"/></a>
  <a href="https://www.rabbitmq.com/" target="_blank"><img src="https://img.shields.io/badge/RabbitMQ-FF6600?style=for-the-badge&logo=rabbitmq&logoColor=white" alt="RabbitMQ"/></a>
  <a href="https://aws.amazon.com/s3/" target="_blank"><img src="https://img.shields.io/badge/AWS%20S3-232F3E?style=for-the-badge&logo=amazon-aws&logoColor=white" alt="AWS S3"/></a>
  <a href="https://joi.dev/" target="_blank"><img src="https://img.shields.io/badge/Joi-4E9A06?style=for-the-badge&logo=Joi&logoColor=white" alt="Joi"/></a>
  <a href="https://eslint.org/" target="_blank"><img src="https://img.shields.io/badge/ESLint-4B32C3?style=for-the-badge&logo=eslint&logoColor=white" alt="ESLint"/></a>
  <a href="https://www.npmjs.com/package/nanoid" target="_blank"><img src="https://camo.githubusercontent.com/a477af76393072f91113471d2d536cbd402586e94cbcce617154953cb0e11500/68747470733a2f2f61692e6769746875622e696f2f6e616e6f69642f6c6f676f2e737667" alt="NanoId" width="50"/></a>
</p>

# Notes API

Notes API adalah aplikasi backend berbasis Node.js yang menyediakan layanan pencatatan digital dengan fitur kolaborasi, autentikasi JWT, ekspor data, dan upload file ke AWS S3. Proyek ini dirancang menggunakan Hapi.js, PostgreSQL, RabbitMQ, dan AWS S3 untuk mendukung kebutuhan aplikasi modern yang scalable dan secure.

---

## Table of Contents
- [Fitur Utama](#fitur-utama)
- [Teknologi & Dependensi](#teknologi--dependensi)
- [Struktur Proyek](#struktur-proyek)
- [Konfigurasi Lingkungan](#konfigurasi-lingkungan)
- [Migrasi Database](#migrasi-database)
- [Menjalankan Aplikasi](#menjalankan-aplikasi)
- [Linting & Standar Kode](#linting--standar-kode)
- [Lisensi](#lisensi)

---

## Fitur Utama
- **Manajemen Catatan**: CRUD catatan dengan tag dan owner.
- **Manajemen Pengguna**: Registrasi, login, dan pencarian pengguna.
- **Autentikasi JWT**: Sistem login dan refresh token.
- **Kolaborasi Catatan**: Berbagi akses catatan antar pengguna.
- **Ekspor Catatan**: Ekspor data catatan via RabbitMQ.
- **Upload File**: Upload gambar ke AWS S3.
- **Validasi Payload**: Menggunakan Joi untuk validasi data.

## Teknologi & Dependensi
- **Node.js**
- **Hapi.js** (`@hapi/hapi`, `@hapi/jwt`, `@hapi/inert`)
- **PostgreSQL** (`pg`, `node-pg-migrate`)
- **RabbitMQ** (`amqplib`)
- **AWS S3** (`@aws-sdk/client-s3`, `@aws-sdk/s3-request-presigner`)
- **Joi** (validasi payload)
- **Bcrypt** (hash password)
- **Nanoid** (ID unik)
- **ESLint** (standar kode, AirBnB Base)

## Struktur Proyek
```
notes-api/
├── migrations/           # Skrip migrasi database
├── src/
│   ├── api/              # Handler & route untuk fitur utama
│   ├── exceptions/       # Custom error
│   ├── services/         # Logika bisnis & integrasi (Postgres, S3, RabbitMQ)
│   ├── tokenize/         # JWT Token manager
│   ├── utils/            # Helper
│   ├── validator/        # Validasi payload
│   └── server.js         # Entry point aplikasi
├── .env.example          # Contoh konfigurasi environment
├── package.json          # Dependensi & script
├── .eslintrc.json        # Konfigurasi ESLint
└── README.md             # Dokumentasi
```

## Konfigurasi Lingkungan
Salin `.env.example` menjadi `.env` dan isi sesuai environment Anda:
```ini
HOST=localhost
PORT=5000
PGUSER=postgres
PGHOST=localhost
PGPASSWORD=yourpassword
PGDATABASE=notesdb
PGPORT=5432
ACCESS_TOKEN_KEY=youraccesstokenkey
REFRESH_TOKEN_KEY=yourrefreshtokenkey
ACCESS_TOKEN_AGE=3600
RABBITMQ_SERVER=amqp://localhost
AWS_ACCESS_KEY_ID=yourawsaccesskeyid
AWS_SECRET_ACCESS_KEY=yourawssecretaccesskey
AWS_REGION=yourawsregion
AWS_BUCKET_NAME=yourbucketname
```

## Migrasi Database
Jalankan migrasi database PostgreSQL:
```powershell
npm run migrate
```

## Menjalankan Aplikasi
- **Development**: Hot reload dengan nodemon
  ```powershell
  npm run start:dev
  ```
- **Production**:
  ```powershell
  npm run start:prod
  ```

## Linting & Standar Kode
- Jalankan linting dengan ESLint:
  ```powershell
  npm run lint
  ```
- Standar: AirBnB Base, lihat `.eslintrc.json`

## Lisensi
Proyek ini menggunakan lisensi [MIT](./LICENSE).

---

> Dibuat oleh Fallid. Untuk pertanyaan dan kontribusi, silakan buka issue atau pull request.
