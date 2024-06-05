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
    id: 144,
    title: "Moe",
    price: "130000",
    category: "simpson",
    description: "figura coleccionable de Moe Simpson",
    image: "https://tools.toywiz.com/_images/_webp/_products/lg/jul218405-inset1.webp",
    stock: 10,
  },
  {
    id: 14,
    title: "Leela",
    price: "130000",
    category: "futurama",
    description: "figura coleccionable Leela Futurama",
    image: "https://media.entertainmentearth.com/assets/images/0f3bde631aa04622b133f13a673aa2d7lg.jpg",
    stock: 10,
  },
  {
    id: 17,
    title: "Bender",
    price: "120000",
    category: "futurama",
    description: "figura coleccionable Bender Futurama",
    image: "https://i.pinimg.com/564x/be/a2/b7/bea2b7aa6a5acd0c650533208c47d866.jpg",
    stock: 10,
  },
  {
    id: 19,
    title: "Fry",
    price: "120000",
    category: "futurama",
    description: "figura coleccionable Fry Futurama",
    image: "https://http2.mlstatic.com/D_764515-MLA45484365382_042021-C.jpg",
    stock: 13,
  },
  {
    id: 29,
    title: "Bender el tremendo",
    price: "120000",
    category: "futurama",
    description: "figura coleccionable Bender Futurama",
    image: "https://limitededition.mx/cdn/shop/files/limited-edition-810122549147-A_800x.jpg?v=1713483321",
    stock: 13,
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