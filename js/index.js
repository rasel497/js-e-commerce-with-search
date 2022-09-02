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
        // console.log(allProducts);
        const foundProducts = allProducts.filter(product => product.category.includes(searchValue));
        // console.log(foundProducts);

        // now using forEach Show all products search html display.
        const productContainer = document.getElementById("product-container");
        productContainer.textContent = ""; // ja serach ta prothome thkbe

        // seach not found
        const notFund = document.getElementById('not-found');
        notFund.textContent = "";
        // seach not found
        if (foundProducts.length === 0) {
            // console.log('Not found search');
            notFund.innerHTML = `
            <h2 class=" text-2xl text-orange-500 text-center">Search not found!</h2>
            `
            return;
        }

        foundProducts.forEach(product => {
            console.log(product);

            const { category, image, title } = product;

            const div = document.createElement("div");
            div.innerHTML = `
            <div class="card card-compact w-full bg-base-100 shadow-xl">
                <figure><img src="${image}" class="h-60 w-full" alt="Shoes" /></figure>
                    <div class="card-body">
                          <h2 class="card-title">${category}</h2>
                          <p>${title.length > 20 ? title.slice(0, 20) + '...' : title}</p>
                        <div class="card-actions justify-end">
                             <button class="btn btn-primary">Buy Now</button>
                        </div>
                    </div>
            </div>
            `;
            productContainer.appendChild(div);

        })
    }
})





// loadAllProducts();
