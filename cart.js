let cart = JSON.parse(localStorage.getItem("cart")) || [];

function renderPCart() {
    const tbody = document.querySelector(".cart-table tbody");
    let total = 0;
    const conCart = document.querySelector(".cart-container");
    const thead = document.querySelector(".cart-table thead");


    if(cart.length === 0){
        conCart.innerHTML = `<h1>Giỏ hàng trống</h1>`;
        return;
    }
    thead.innerHTML = 
                    `<tr>
                        <th>Ảnh</th>
                        <th>Tên sản phẩm</th>
                        <th>Size</th>
                        <th>Đơn giá</th>
                        <th>Số lượng</th>
                        <th>Thành tiền</th>
                    </tr>`;
    tbody.innerHTML = "";
    cart.forEach((item, index) => {
        const priceNumber = parseInt(item.price.replace(/\D/g, ""));
        const lineTotal = priceNumber * item.quantity;
        total += lineTotal;
        
        tbody.innerHTML += 
                        `<tr>
                            <td><img src="${item.image}"
                                    alt="${item.name}">
                                <button class="delete-p-cart" onclick="deleteItem(${index})">x</button>
                            </td>
                            <td>${item.name}</td>
                            <td>${item.size}</td>
                            <td>${item.price}</td>
                            <td>
                                <div class="con-quantity">
                                    <div onclick="decrease(${index})" class="decrease"><i class="fa-solid fa-minus"></i></div>
                                    <input type="text" name="" id="" value="${item.quantity}">
                                    <div onclick="increase(${index})" class="increase"><i class="fa-solid fa-plus"></i></div>
                                </div>
                            </td>
                            <td>${lineTotal.toLocaleString("vi-VN")}đ</td>
                        </tr>`;
    });
    const cartTotal = document.querySelector(".cart-total span");
    cartTotal.textContent = `${total.toLocaleString("vi-VN")}đ`;
}

function deleteItem(index) {
    if(confirm('Chắn chắn muốn xóa sản phẩm này chứ?')){
        cart.splice(index, 1);
        localStorage.setItem("cart", JSON.stringify(cart));
        renderPCart();
    }
}

function increase(index) {
  cart[index].quantity++;
  localStorage.setItem("cart", JSON.stringify(cart));
  renderPCart();
}

function decrease(index) {
  if (cart[index].quantity > 1) {
    cart[index].quantity--;
    localStorage.setItem("cart", JSON.stringify(cart));
    renderPCart();
  }
}

renderPCart();