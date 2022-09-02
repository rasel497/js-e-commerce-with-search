// https://fakestoreapi.com/products
// console.log('Helloo js');

const loadAllProducts = async () => {
    const response = await fetch('https://fakestoreapi.com/products');
    const data = await response.json();
    // console.log(data);
    return data; // ekhon amra amdr proyjon data gula bar abr use korte parbo
}
//Ctg-01. create func
// two types of promise 1. resolved 2. reject
const setAllMenue = async () => {
    const data = await loadAllProducts();
    //Ctg-02. set id all-menue index.html file n here
    const menue = document.getElementById('all-menue');

    //Ctg-03. uniqueArray use jeno bar bar same jinish repeate na hoy.
    const uniqueArray = [];

    //Ctg-04. add for loop set data to ul
    for (const product of data) {
        // console.log(product.category); // show category of products.
        //Ctg-04. kichu thkle index dibe na thkle -1 dibe, 
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

//search-ctg-01. create id in search-field
const searchField = document.getElementById('search-field');
searchField.addEventListener("keypress", async (event) => {
    // console.log(event.key); //inital key press console
    if (event.key === "Enter") {
        // console.log(event.key); // press enter
        // console.log(searchField.value);
        const searchValue = searchField.value;
        const allProducts = await loadAllProducts();
        console.log(allProducts);
    }
})





// loadAllProducts();
