const cartButton = document.getElementById("cart-button");
const cartItemCount = document.getElementById("cart-item-count");
const productCards = document.querySelectorAll(".product-card");
const addToCartButtons = document.querySelectorAll(".add-to-cart");
const checkoutButton = document.getElementById("checkout");
const cancelButton = document.getElementById("cancel");
const productList = document.getElementById("product-list");
const containerCard = document.getElementById("kartu-kontainer");

// Daftar produk yang ada di Cart
const cart = [];

//Daftar produk di Stok
const dataBase = [
    {
        id: 1,
        merk: 'Nike',
        name: 'Nike SB Dunk High',
        warna: 'Sweet Tooth Candy Corn',
        harga: 1_650_000,
        img: 'https://media.gq-magazine.co.uk/photos/651fcb62a238e39e745a9ee5/master/w_1600,c_limit/Candy%201.jpg',
        model: 'Sneakers',
        size: 45,
        description: 'asgdhfdjgfkglj'
    },
    {
        id: 2,
        merk: 'Nike',
        name: 'Jordan 12 Retro',
        warna: 'Cherry (2023)',
        harga: 3_800_000,
        img: 'https://image-cdn.hypb.st/https%3A%2F%2Fhypebeast.com%2Fimage%2F2023%2F09%2Fair-jordan-12-cherry-ct8013-116-release-date-01.jpg?cbr=1&q=90',
        model: 'Sneakers',
        size: 45,
        description: 'asdg'
    },
    {
        id: 3,
        merk: 'Nike',
        name: 'Jordan 1 Retro High OG',
        warna: 'Royal Reimagined',
        harga: 3_100_000,
        img: 'https://image-cdn.hypb.st/https%3A%2F%2Fhypebeast.com%2Fimage%2F2023%2F06%2Fair-jordan-1-royal-reimagined-dz5485-042-release-1.jpg?cbr=1&q=90',
        model: 'Sneakers',
        size: 45,
        description: 'asdghfgj'
    },
    {
        id: 4,
        merk: 'Timberland',
        name: 'Timberland 6" Premium Waterproof Boot',
        warna: 'Wheat',
        harga: 2_100_000,
        img: 'https://images.timberland.com/is/image/timberland/10061713-HERO?wid=650&hei=650&qlt=50&resMode=sharp2&op_usm=0.9,1.0,8,0',
        model: 'Boots',
        size: 45,
        description: 'asdhgfj'
    },
    {
        id: 5,
        merk: 'Wacko Maria',
        name: 'Wacko Maria Sandal',
        warna: 'BlackEyePatch Black',
        harga: 500_000,
        img: 'https://s3.bukalapak.com/img/37777066003/s-463-463/data.jpeg.webp',
        model: 'Sandals',
        size: 45,
        description: 'asdghfg'
    },
    {
        id: 6,
        merk: 'Aldo',
        name: 'Black Tassel Rounded',
        warna: 'Black Leather',
        harga: 2_300_000,
        img: 'https://down-id.img.susercontent.com/file/sg-11134201-22120-n77d80zcgmlvaa',
        model: 'Loafers',
        size: 45,
        description: 'asfgdhfgk'
    },
    {
        id: 7,
        merk: 'Dr.Martens',
        name: '1460 8 Eye Boot',
        warna: 'Black Leather',
        harga: 3_400_000,
        img: 'https://dynamic.zacdn.com/9GSRVGOBf63B1V-W2FEDYYI1fe8=/filters:quality(70):format(webp)/https://static-id.zacdn.com/p/dr-martens-9511-3992451-1.jpg',
        model: 'Boots',
        size: 45,
        description: 'asgdhgmfh'
    },
    {
        id: 8,
        merk: 'Huckberry',
        name: 'Outpost Sandal',
        warna: 'Black',
        harga: 600_000,
        img: 'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcRWr_CZuhZwkRmCLS70156xQyAMk2jHiCm3rXvpv6GzcTN9kwzq',
        model: 'Sandals',
        size: 45,
        description: 'asfgdhfj'
    },
    {
        id: 9,
        merk: 'MSCHF',
        name: 'Astro Boy',
        warna: 'Red Original',
        harga: 5_600_000,
        img: 'https://media.gq-magazine.co.uk/photos/63e39961a1432ddc0d466f6c/master/w_1600,c_limit/Screenshot%202023-02-08%20at%2012.44.52.png',
        model: 'Boots',
        size: 'Universal',
        description: 'REEEEEEEEEEEEEEEEEEEEEEEEEEEEEEE'
    },
    {
        id: 10,
        merk: 'Reese Cooper & Merrell',
        name: 'Moab Flight Sieve',
        warna: 'Black and Oyster Combo',
        harga: 3_600_000,
        img: 'https://image-cdn.hypb.st/https%3A%2F%2Fid.hypebeast.com%2Ffiles%2F2023%2F09%2Freese-cooper-lanjutkan-kolaborasi-bareng-merrell-02.jpg?cbr=1&q=90',
        model: 'Sneakers',
        size: '40',
        description: 'REEEEEEEEEEEEEEEEEEEEEEEEEEEEEEE'
    },
    {
        id: 11,
        merk: 'Shrek x Crocs',
        name: 'Classic Cogs',
        warna: 'Shrek Swamp',
        harga: 4_500_000,
        img: 'https://image-cdn.hypb.st/https%3A%2F%2Fid.hypebeast.com%2Ffiles%2F2023%2F09%2Ffirst-look-shrek-x-crocs-classic-clog-02.jpg?cbr=1&q=90',
        model: 'Sandals',
        size: 'BEEG',
        description: 'GET OUT OF MY SWAMP'
    },
]
//Fungsi untuk menampilkan database di divider container-card dan menambahkan product-card
function render() {
    let template = ""
    for (let i = 0; i < dataBase.length; i++) {
        let perObj = dataBase[i]
        // create divider
        const divProductCard = document.createElement('div')
        divProductCard.classList.add('product-card')
        containerCard.appendChild(divProductCard)
        template += `
        <div class="product-card">
        <a onclick ="find_data(${perObj['id']})">
        <img src="${perObj['img']}">
        <h2>${perObj['merk']}</h2>
        <h3>${perObj['name']}</h3>
        <p>Warna: ${perObj['warna']}</p>
        <p>IDR ${perObj['harga']}</p>
        </a>
        <button class="add-to-cart" onclick="addToCart(${perObj['id']})">Add to Cart</button>
        </div>
        `
    }
    document.getElementById('kartu-kontainer').innerHTML = template
}
render()

//function untuk mencari data
function find_data(id) {
    let produk = {};
    for (let i = 0; i < dataBase.length; i++) {
        const obj = dataBase[i];
        // console.log(obj)
        if (id === obj.id) {
            produk = obj;
            break;
        }
    }
    displayProductDetail(produk);
}

//function untuk menampilkan detil produk
function displayProductDetail(produk) {
    containerCard.innerHTML = "";
    let divProductDetails = document.createElement('div')
    // divProductDetails.classList.add('product-card');
    divProductDetails.id = "product-details";
    containerCard.appendChild(divProductDetails);
    // console.log(divProductDetails)
    let template = `
    <div class='image-detail'>
        <a onclick ="render()">
        <img src="${produk.img}">
        </a>
        </div>
        <div class='description'>

        <h2>${produk.merk}</h2>
        <h3>${produk.name}</h3>
        <p>Warna: ${produk.warna}</p>
        <p>IDR ${produk.harga}</p>
        <p>Size: ${produk.size}</p>
        <p class='product-desc'>${produk.description}</p>
        <button class="add-to-cart" onclick="addToCart(${produk.id})">Add to Cart</button>
        </div>
        `
    document.getElementById('product-details').innerHTML = template
}


//function untuk memfilter produk sesuai dengan modelnya
function displayFilterSneakers() {
    containerCard.innerHTML = ""
    let sneakers = dataBase.filter(function (product) {
        return product.model === "Sneakers"
    })
    sneakers.forEach(function (product) {
        let divProductCard = document.createElement('div')
        divProductCard.classList.add('product-card');
        containerCard.appendChild(divProductCard)
        divProductCard.innerHTML = `
        <a onclick ="find_data(${product.id})">
        <img src="${product.img}">
        <h2>${product.merk}</h2>
        <h3>${product.name}</h3>
        <p>Warna: ${product.warna}</p>
        <p>IDR ${product.harga}</p>
        </a>
        <button class="add-to-cart" onclick="addToCart(${product.id})">Add to Cart</button>
    `;
    })
}
const sneakersButton = document.getElementById("sneakers-filter");
sneakersButton.addEventListener("click", displayFilterSneakers);

function displayFilterBoots() {
    containerCard.innerHTML = ""
    let boots = dataBase.filter(function (product) {
        return product.model === "Boots"
    })
    boots.forEach(function (product) {
        let divProductCard = document.createElement('div')
        divProductCard.classList.add('product-card');
        containerCard.appendChild(divProductCard)
        divProductCard.innerHTML = `
        <a onclick ="find_data(${product.id})">
        <img src="${product.img}">
        <h2>${product.merk}</h2>
        <h3>${product.name}</h3>
        <p>Warna: ${product.warna}</p>
        <p>IDR ${product.harga}</p>
        </a>
        <button class="add-to-cart" onclick="addToCart(${product.id})">Add to Cart</button>
    `;
    })
}
const bootsButton = document.getElementById("boots-filter");
bootsButton.addEventListener("click", displayFilterBoots);

function displayFilterLoafers() {
    containerCard.innerHTML = ""
    let loafers = dataBase.filter(function (product) {
        return product.model === "Loafers"
    })
    loafers.forEach(function (product) {
        let divProductCard = document.createElement('div')
        divProductCard.classList.add('product-card');
        containerCard.appendChild(divProductCard)
        divProductCard.innerHTML = `
        <a onclick ="find_data(${product.id})">
        <img src="${product.img}">
        <h2>${product.merk}</h2>
        <h3>${product.name}</h3>
        <p>Warna: ${product.warna}</p>
        <p>IDR ${product.harga}</p>
        </a>
        <button class="add-to-cart" onclick="addToCart(${product.id})">Add to Cart</button>
    `;
    })
}
const loafersButton = document.getElementById("loafers-filter");
loafersButton.addEventListener("click", displayFilterLoafers);

function displayFilterSandals() {
    containerCard.innerHTML = ""
    let sandals = dataBase.filter(function (product) {
        return product.model === "Sandals"
    });
    sandals.forEach(function (product) {
        let divProductCard = document.createElement('div')
        divProductCard.classList.add('product-card');
        containerCard.appendChild(divProductCard)
        divProductCard.innerHTML = `
        <a onclick ="find_data(${product.id})">
        <img src="${product.img}">
        <h2>${product.merk}</h2>
        <h3>${product.name}</h3>
        <p>Warna: ${product.warna}</p>
        <p>IDR ${product.harga}</p>
        </a>
        <button class="add-to-cart" onclick="addToCart(${product.id})">Add to Cart</button>
    `;
    })
}
const sandalsButton = document.getElementById("sandals-filter");
sandalsButton.addEventListener("click", displayFilterSandals);

// membuat logo di web menjadi reset untuk membuat semua produk tampil
let logolink = document.getElementById("logo-link")
logolink.addEventListener("click", function () {
    displayAllProducts();
})
function displayAllProducts() {
    containerCard.innerHTML = ""
    render()
}

// Fungsi untuk menambahkan produk ke keranjang
function addToCart(id) {
    let produk = {}
    for (let i = 0; i < dataBase.length; i++) {
        const obj = dataBase[i];
        // console.log(obj)
        if (id === obj.id) {
            produk = obj
            break;
        }
    }
    cart.push(produk);
    updateCartItemCount();
}

// Fungsi untuk memperbarui jumlah item di keranjang
function updateCartItemCount() {
    cartItemCount.textContent = cart.length;
}

// Fungsi untuk menampilkan produk yang ada di keranjang
function displayCart() {
    productList.innerHTML = "";
    cart.forEach((product, index) => {
        const item = document.createElement("div");
        item.textContent = `Product ${index + 1}: ${product.name} - Rp ${product.harga}`;
        productList.appendChild(item);
    });

}

// Memantau tombol "Add to Cart" pada setiap produk
addToCartButtons.forEach((button, index) => {
    button.addEventListener("click", () => {
        const productCard = productCards[index];
        const productNameElement = productCard.querySelector("h3");
        const productPriceElement = productCard.querySelector("p:last-child");

        if (!productNameElement || !productPriceElement) {
            console.error("Product name or price not found in product card.");
            return;
        }

        const productName = productNameElement.textContent;
        const productPrice = productPriceElement.textContent;

        addToCart({ name: productName, price: productPrice });
    });
});

// Memantau tombol "Checkout"
checkoutButton.addEventListener("click", () => {
    if (cart.length === 0) {
        alert("Keranjang Anda kosong. Tambahkan produk sebelum checkout.");
    } else {
        displayCart();
        // Tambahkan logika checkout
        let sumItems = 0
        for (let perItems of cart) {
            // console.log(perItems)
            sumItems += perItems['harga']
        }
        if (document.getElementById('name').value === '' || document.getElementById('address').value === '') {
            document.getElementById('name').value === '' ? alert('Silahkan isi Nama terlebih Dahulu') :  alert('Silahkan isi Alamat terlebih Dahulu')
        } else {
            alert(`Halo Kak ${document.getElementById('name').value},
                Total Belanja Anda Sebesar Rp ${sumItems} dengan metode pembayaran ${document.getElementById('payment-method').value}`);
        }
    }
    // Kosongkan keranjang
    cart.length = 0;
    updateCartItemCount();
});

// Memantau tombol "Cancel"
cancelButton.addEventListener("click", () => {
    productList.innerHTML = "";
    cart.length = 0; // Kosongkan keranjang
    updateCartItemCount();
});

// Memantau tombol "Cart" pada navbar
cartButton.addEventListener("click", () => {
    if (cart.length === 0) {
        alert("Keranjang Anda kosong. Tambahkan produk sebelum melihat keranjang.");
    } else {
        document.getElementById("kartu-kontainer").style.display = "none"
        document.getElementById("checkout-page").style.display = ""
        displayCart();
    }
});