/**
 * @fileoverview Contoh penggunaan JSDoc untuk dokumentasi tipe di JavaScript.
 * File ini menunjukkan bagaimana menulis anotasi tipe menggunakan JSDoc.
 */

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

/**
 * Nama user.
 * @type {string}
 */
let nama = "Supa";

/**
 * ID user yang bisa berupa string atau number.
 * @type {(string|number)}
 */
let id = 12345;

id = "abcde";

/**
 * Tipe data User.
 *
 * @typedef {Object} User
 * @property {number} id - ID unik user.
 * @property {string} nama - Nama user.
 * @property {boolean} aktif - Status aktif user.
 */

/**
 * Contoh objek user.
 * @type {User}
 */
const user1 = {
  id: 1,
  nama: "Budi",
  aktif: true,
};

/**
 * Menampilkan informasi user dalam bentuk string.
 *
 * @param {User} user - Objek user yang akan ditampilkan.
 * @returns {string} Informasi user dalam format string.
 */
function tampilkanUser(user) {
  return `User ${user.nama} dengan ID ${user.id} sedang ${
    user.aktif ? "aktif" : "tidak aktif"
  }`;
}
