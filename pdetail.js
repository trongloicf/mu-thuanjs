document.addEventListener("DOMContentLoaded", () => {
    const params = new URLSearchParams(window.location.search);
    const productId = params.get("id");

    const product = products.find(p => p.id === Number(productId));

    if (!product) {
        document.getElementById("p-detail").innerHTML = "<h2>Không tìm thấy sản phẩm.</h2>";
        return;
    }

    renderPDetail(product);
});

function renderPDetail(product) {
    const bigImg = document.querySelector(".con-big-img img");
    const smallImgs = document.querySelectorAll(".con-small-img img");
    const productName = document.querySelector(".con-p-name-price h1");
    const priceOld = document.querySelector(".price-page-old");
    const priceCurrent = document.querySelector(".price-page-current");
    const descriptionBox = document.querySelector(".desc-box");
    const nameCate = document.querySelector(".name-cate");
    const nameBrand = document.querySelector(".name-brand");
    const linkNameP = document.querySelector(".link-name-p");
    const navNameP = document.getElementById("nav-name-p");
    const inStock = document.querySelector(".in-stock");
    const outStock = document.querySelector(".out-stock");
    const conSize = document.querySelector(".con-size");
    const nameSize = document.querySelector(".name-size");

    navNameP.textContent = product.name;
    linkNameP.textContent = product.name;
    bigImg.src = product.imageList[0];

    smallImgs.forEach((img, i) => {
        if(product.imageList[i]) {
            img.src = product.imageList[i];
        }
        else{
            img.style.display = 'none';
        }
    });

    productName.textContent = product.name;

    if(product.discountPercent > 0) {
         priceOld.textContent = product.priceOld;
         priceOld.style.display = 'block';
    }
    else{
         priceOld.style.display = 'none';
    }

    priceCurrent.textContent = product.priceCurrent;
    nameCate.textContent = product.category;
    nameBrand.textContent = product.brand;
    descriptionBox.innerHTML = product.desc;
    
    if(product.stock > 0){
        inStock.style.display = 'block';
        outStock.style.display = "none";
    }else {
        inStock.style.display = "none";
        outStock.style.display = 'block';
    }
    
    if(product.size.length > 0) {
        nameSize.innerHTML = product.size.map(s => `<a href="#">${s}</a>`).join("");
        conSize.style.display = 'flex';
    }
    else{
        conSize.style.display = 'none';
    }
}


function handleSizeClick() {
    const conSize = document.querySelector(".name-size");

    if(!conSize) return;

    conSize.addEventListener("click", (e) => {
        if(e.target.tagName === "A"){
            e.preventDefault();
            const allSize = conSize.querySelectorAll("a");
            allSize.forEach(el => el.classList.remove('selected'));
            e.target.classList.add('selected');
        }
    })    
}
handleSizeClick();

const decreaseBtn = document.querySelector(".decrease");
const increaseBtn = document.querySelector(".increase");
const inputQuatity = document.getElementById("input-quatity");

inputQuatity.addEventListener("input", () => {
    let value = parseInt(inputQuatity.value);
    if (isNaN(value) || value < 1) {
        inputQuatity.value = 1;
    }
});

function decrease(){
    const currentValue = parseInt(inputQuatity.value);
    if (isNaN(currentValue) || currentValue <= 1) {
        inputQuatity.value = 1;
    } else {
        inputQuatity.value = currentValue - 1;
    }
}

function increase() {
    const currentValue = parseInt(inputQuatity.value);
    if (isNaN(currentValue) || currentValue < 1) {
        inputQuatity.value = 1;
    } else {
        inputQuatity.value = currentValue + 1;
    }
}

decreaseBtn.addEventListener("click", decrease);
increaseBtn.addEventListener("click", increase);


let cart = JSON.parse(localStorage.getItem('cart')) || [];

function addToCart(){
    const quantityP = parseInt(document.getElementById("input-quatity").value);
    const imageMain = document.querySelector(".con-small-img img")?.src;
    const name = document.querySelector(".con-p-name-price h1")?.textContent.trim();
    const priceCurrent = document.querySelector(".price-page-current")?.textContent.trim();
    const size = document.querySelector(".name-size a.selected")?.textContent;
    if(!size) {
        alert('Hãy chọn size trước khi thêm vào giỏ hàng!');
        return;
    }

    const cartItem = {
        id: name + "-" + size,
        name: name,
        price: priceCurrent,
        quantity: quantityP,
        size: size,
        image: imageMain
    };

    const foundItem = cart.find(item => item.id === cartItem.id);

    if (foundItem) {
        foundItem.quantity += cartItem.quantity;
    } else {
        cart.push(cartItem);
    }

    localStorage.setItem("cart", JSON.stringify(cart));
    alert("Đã thêm vào giỏ hàng!");
}

const addToCartBtn = document.querySelector(".btn-add");
addToCartBtn.addEventListener("click", addToCart); 