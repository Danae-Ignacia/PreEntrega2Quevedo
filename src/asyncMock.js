const products = [
  {
    id: 10,
    title: "Homero astronauta",
    price: "12999",
    category: "simpson",
    description: "figura coleccionable astronauta homero",
    image:
      "https://www.questloot.cl/wp-content/uploads/2022/05/Homero-Simpson-Astronauta-Los-Simpsons-7-Super7-2022-1.jpg",
      stock: 10,
  },
  {
    id: 11,
    title: "Homero buda",
    price: "20000",
    category: "simpson",
    description: "figura coleccionable homero buddha",
    image:
      "https://www.videocenterfunstore.cl/wp-content/uploads/2022/01/16.png",
      stock: 10,
  },
  {
    id: 12,
    title: "Bart",
    price: "130000",
    category: "simpson",
    description: "figura coleccionable de Bart Simpson",
    image: "https://www.hipergol.com/240430-medium_default/figura-bart-simpson-65cm.jpg",
    stock: 10,
  },
  {
    id: 14,
    title: "Leela",
    price: "130000",
    category: "Futurama",
    description: "figura coleccionable Leela Futurama",
    image: "https://media.entertainmentearth.com/assets/images/0f3bde631aa04622b133f13a673aa2d7lg.jpg",
    stock: 10,
  },
];

//devuelve todos los productos
export const getProducts = new Promise((resolve) => {
  setTimeout(() => {
    resolve(products);
  }, 1000);
});

//busca un producto
export const getProduct = (id) => {
  return products.find((prod) => prod.id == id);
};

//filtrar por categoría
export const getCategory = (category) => {
  return new Promise((resolve) => {
    const result = products.filter((prod) => prod.category === category);
    resolve(result);
  });
};