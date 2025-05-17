const products = [
  { id: 1, name: "Product 1", price: 34 },
  { id: 1, name: "Product 2", price: 56 },
  { id: 1, name: "Product 3", price: 40 }
  { id: 1, name: "Product 3", price: 40 },
];

for (let i = 0; i < products.length; i++) {
  products[i].price = products[i].price + 5;
  console.log(products[i].name + ": " + products[i].price);
}
products.map(product => {
  product.price += 5;
  console.log(product.name + ": " + product.price);
});