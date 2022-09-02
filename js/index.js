// https://fakestoreapi.com/products
// console.log('Helloo js');

const loadProducts = async () => {

    const response = await fetch('https://fakestoreapi.com/products');
    const data = await response.json();
    console.log(data);
}

loadProducts();
