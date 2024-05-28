const products = [
  {
    id: 10,
    title: "homero astronauta",
    price: "12999",
    category: "Simpson",
    description: "figura coleccionable astronauta homero",
    image:
      "https://www.questloot.cl/wp-content/uploads/2022/05/Homero-Simpson-Astronauta-Los-Simpsons-7-Super7-2022-1.jpg",
  },
  {
    id: 11,
    title: "homero buda",
    price: "20000",
    category: "Simpson",
    description: "figura coleccionable homero buddha",
    image:
      "https://www.videocenterfunstore.cl/wp-content/uploads/2022/01/16.png",
  },
  {
    id: 12,
    title: "homero saiyajin",
    price: "130000",
    category: "Simpson",
    image: "https://pbs.twimg.com/media/EVH3Di8WAAAi6Ew.jpg:large",
  },
];

//devuelve todos los productos
export const getProducts = new Promise((resolve) => {
  setTimeout(() => {
    resolve(products);
  }, 1000);
});

//busca un producto por id
export const getProduct = (id) => {
  return products.find((prod) => prod.id == id);
};
