// @flow

function tambah(a: number, b: number): number {
  return a + b;
}

let nama: string = "Supa";

let id: string | number = 12345;

id = "abcde";

type User = {
  id: number,
  nama: string,
  aktif: boolean,
};

const user1: User = {
  id: 1,
  nama: "Budi",
  aktif: true,
};

function tampilkanUser(user: User): string {
  return `User ${user.nama} dengan ID ${user.id} sedang ${
    user.aktif ? "aktif" : "tidak aktif"
  }`;
}

export default {tambah, tampilkanUser, user1};


