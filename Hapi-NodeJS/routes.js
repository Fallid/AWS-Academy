const routes = [
  {
    method: "GET",
    path: "/",
    handler: (req, res) => {
      return "Homepage";
    },
  },
  {
    method: "*",
    path: "/",
    handler: (req, res) => {
      return "Halaman tidak dapat diakses dengan method";
    },
  },
  {
    method: "GET",
    path: "/about",
    handler: (req, res) => {
      return "About Page";
    },
  },
  {
    method: "*",
    path: "/about",
    handler: (req, res) => {
      return "Halaman tidak dapat diakses dengan method";
    },
  },
  {
    method: "GET",
    path: "/hello/{name?}",
    handler: (request, h) => {
      const { name = "stranger" } = request.params;
      const { lang } = request.query;

      if (lang === "id") {
        return `Hai, ${name}!`;
      }
      return `Hello, ${name}!`;
    },
  },
  {
    method: "POST",
    path: "/login",
    handler: (request, h) => {
      const { username, password } = request.payload;
      return `Welcome ${username}!`;
    },
  },
  {
    method: "*",
    path: "/{any*}",
    handler: (req, res) => {
      return "Halaman tidak ditemukan";
    },
  },
];

module.exports = routes;
