const http = require("http");

/**
 * @typedef {object} IncomingMessage
 * @property {string} url - URL dari permintaan.
 * @property {string} method - Metode HTTP dari permintaan (GET, POST, dll.).
 */

/**
 * @typedef {object} ServerResponse
 * @property {function(string, string): void} setHeader - Fungsi untuk mengatur header respons.
 * @property {number} statusCode - Kode status HTTP respons.
 * @property {string} statusMessage - Pesan status HTTP respons.
 * @property {function(string): void} end - Fungsi untuk mengakhiri respons dan mengirimkan data.
 */

/**
 * Fungsi `requestListener` adalah handler utama untuk setiap permintaan HTTP yang masuk ke server.
 * Fungsi ini menangani berbagai URL dan metode HTTP, mengembalikan konten HTML yang berbeda
 * atau pesan kesalahan berdasarkan permintaan.
 *
 * @param {IncomingMessage} request - Objek permintaan HTTP yang berisi informasi terkait permintaan klien,
 * seperti metode HTTP dan URL.
 * @param {ServerResponse} response - Objek respons HTTP yang digunakan untuk menanggapi permintaan,
 * termasuk mengatur header, kode status, dan mengirimkan isi respons kembali ke klien.
 */
const requestListener = (request, response) => {
  const { method, url } = request;

  response.setHeader("Content-Type", "application/json");
  response.setHeader("Powered-By", "Node.js");
  response.statusCode = 200;
  response.statusMessage = "OK";

  if (url === "/") {
    if (method === "GET") {
      response.end(JSON.stringify({ message: "Ini adalah homepage" }));
    } else {
      response.statusCode = 404;
      response.statusMessage = "Page is not found";
      response.end(
        JSON.stringify({
          message: `Halaman tidak dapat diakses dengan ${method} request`,
        })
      );
    }
  } else if (url === "/about") {
    if (method === "GET") {
      response.end(
        JSON.stringify({ message: "Halo! Ini adalah halaman about!" })
      );
    } else if (method === "POST") {
      let body = [];

      request.on("data", (chunk) => {
        body.push(chunk);
      });

      request.on("end", () => {
        body = Buffer.concat(body).toString();
        try {
          const { name } = JSON.parse(body);
          response.statusCode = 200;
          response.end(
            JSON.stringify({
              message: `Halo, ${name}! Ini adalah halaman about`,
            })
          );
        } catch (error) {
          response.statusCode = 400;
          response.statusMessage = "Invalid JSON body";
          response.end(
            JSON.stringify({ message: "Format body JSON tidak valid" })
          );
        }
      });
    } else {
      response.statusCode = 404;
      response.statusMessage = "Page is not found";
      response.end(
        JSON.stringify({
          message: `Halaman tidak dapat diakses dengan ${method} request`,
        })
      );
    }
  } else {
    response.statusCode = 404;
    response.statusMessage = "Page is not found";
    response.end(
      JSON.stringify({
        message: "Halaman tidak ditemukan!",
      })
    );
  }
};

/**
 * Membuat instance server HTTP menggunakan `requestListener` sebagai fungsi penangan permintaan.
 * Objek `server` ini akan mendengarkan permintaan masuk dan meneruskannya ke `requestListener`.
 *
 * @type {http.Server}
 */
const server = http.createServer(requestListener);

/**
 * Nomor port tempat server akan mendengarkan permintaan masuk.
 * @type {number}
 */
const port = 5000;

/**
 * Hostname atau alamat IP tempat server akan mendengarkan permintaan masuk.
 * Dalam kasus ini, server akan dapat diakses dari localhost (komputer yang sama).
 * @type {string}
 */
const host = "localhost";

/**
 * Memulai server HTTP untuk mendengarkan pada port dan host yang telah ditentukan.
 * Ketika server berhasil berjalan dan mulai mendengarkan, sebuah pesan akan dicetak ke konsol
 * yang menunjukkan alamat di mana server dapat diakses.
 */
server.listen(port, host, () => {
  console.log(`Server berjalan pada http://${host}:${port}`);
});
