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
        conSize.style.display = 'block';
    }
    else{
        conSize.style.display = 'none';
    }
}














//     // Ảnh lớn
//     if (bigImg) {
//         bigImg.src = product.imageList[0];
//     }

//     // Ảnh nhỏ
//     smallImgs.forEach((img, i) => {
//         if (product.imageList[i]) {
//             img.src = product.imageList[i];
//         } else {
//             img.style.display = "none";
//         }
//     });

//     // Tên sản phẩm
//     if (productName) productName.textContent = product.name;

//     // Giá
//     if (priceOld) {
//         if (product.discountPercent > 0) {
//             priceOld.textContent = product.priceOld;
//             priceOld.style.display = "block";
//         } else {
//             priceOld.style.display = "none";
//         }
//     }

//     if (priceCurrent) {
//         priceCurrent.textContent = product.priceCurrent;
//     }

//     // Mô tả (nếu có)
//     if (descriptionBox && product.desc) {
//         descriptionBox.innerHTML = product.desc;
//     }
//     const sizeContainer = document.querySelector(".name-size");
// if (sizeContainer && product.size) {
//     sizeContainer.innerHTML = product.size.map(s => `<a href="#">${s}</a>`).join("");
// }

// // Hiển thị tồn kho
// const inStock = document.querySelector(".in-stock");
// const outStock = document.querySelector(".out-stock");
// if (product.stock > 0) {
//     inStock.style.display = "block";
//     outStock.style.display = "none";
// } else {
//     inStock.style.display = "none";
//     outStock.style.display = "block";
// }