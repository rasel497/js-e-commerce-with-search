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
const setAllMenue = async () => {
    const data = await loadProducts();
    //02. set id all-menue index.html file n here
    const menue = document.getElementById('all-menue');

    //03. uniqueArray use jeno bar bar same jinish repeate na hoy.
    const uniqueArray = [];

    //01. add for loop set data to ul
    for (const product of data) {
        // console.log(product.category); // show category of products.
        //04. kichu thkle index dibe na thkle -1 dibe, 
        // this line ignore same category onther times in li list.
        if (uniqueArray.indexOf(product.category) === -1) {
            uniqueArray.push(product.category);

            const li = document.createElement('li');
            li.innerHTML = `
            <a>${product.category}</a>
            `;
            menue.appendChild(li);
        }
    }

}
setAllMenue();



// loadProducts();
