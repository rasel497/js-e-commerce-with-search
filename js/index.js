// https://fakestoreapi.com/products
// console.log('Helloo js');

const loadProducts = async () => {
    const response = await fetch('https://fakestoreapi.com/products');
    const data = await response.json();
    // console.log(data);
    return data; // ekhon amra amdr proyjon data gula bar abr use korte parbo
}
//create func-01
// two types of promise 1. resolved 2. reject
const setAllMenue = () => {
    console.log(loadProducts());
}
setAllMenue();



// loadProducts();
