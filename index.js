const products = [
    {
        id: 1,
        name: "Áo MU Sân Nhà 24/25",
        brand: "Adidas",
        category: "Áo bóng đá CLB",
        priceOld: "3.799.000₫",
        priceCurrent: "3.039.000₫",
        discountPercent: 20,
        stock: 10,
        size: ["S", "M", "L", "XL", "2XL"],
        imageList:
            [
                "https://sneakerdaily.vn/wp-content/uploads/2025/06/Ao-Adidas-Dau-San-Nha-Authentic-Manchester-United-24_25-Mufc-Red-JF1291-3.jpg",
                "https://sneakerdaily.vn/wp-content/uploads/2025/06/Ao-Adidas-Dau-San-Nha-Authentic-Manchester-United-24_25-Mufc-Red-JF1291.jpg",
                "https://sneakerdaily.vn/wp-content/uploads/2025/06/Ao-Adidas-Dau-San-Nha-Authentic-Manchester-United-24_25-Mufc-Red-JF1291-4-150x150.jpg",
                "https://sneakerdaily.vn/wp-content/uploads/2025/06/Ao-Adidas-Dau-San-Nha-Authentic-Manchester-United-24_25-Mufc-Red-JF1291-5-150x150.jpg"
            ],
        desc: `
                <p>Mẫu <strong>Áo Adidas đấu sân nhà Authentic Manchester United 2024-2025 ‘Mufc Red’ mã JF1291</strong> là hiện thân của truyền thống và tinh thần chiến đấu không ngừng nghỉ của câu lạc bộ lừng danh bậc nhất nước Anh. Mang sắc đỏ đặc trưng của “Quỷ Đỏ”, chiếc áo này đánh dấu một bước tiến trong thiết kế hiện đại, kết hợp với những giá trị lịch sử mà người hâm mộ MU luôn trân trọng.</p>
                <p>Chiếc áo sở hữu gam màu đỏ rực rỡ làm chủ đạo, cùng với các họa tiết đặc trưng độc quyền của Adidas, đem lại vẻ ngoài vừa sang trọng vừa thể thao. Phần cổ áo và tay áo được thiết kế tinh tế, tạo sự thoải mái tối ưu cho các cầu thủ khi thi đấu trên sân. Logo Manchester United cùng biểu tượng Adidas được thêu sắc nét trên ngực, thể hiện sự đồng hành lâu dài giữa câu lạc bộ và thương hiệu thể thao hàng đầu thế giới.</p>
                <p>Mẫu áo này được sản xuất theo tiêu chuẩn Authentic – đúng chuẩn áo thi đấu chính thức của các cầu thủ khi ra sân, với chất liệu công nghệ cao giúp thoáng khí, thấm hút mồ hôi và độ bền vượt trội, hỗ trợ tối đa hiệu suất thi đấu.</p>
                <p>Dưới sự dẫn dắt của ban huấn luyện mới và đội hình trẻ trung đầy tài năng, chiếc áo không chỉ là biểu tượng thời trang cho người hâm mộ mà còn mang ý nghĩa tiếp nối truyền thống vinh quang và sự quyết tâm chinh phục các danh hiệu mới của Manchester United mùa giải 2024-2025.</p>
            `
    },
    {
        id: 2,
        name: "Áo Adidas Real Madrid Pre-Match Jersey ‘White’ IT5101",
        brand: "Adidas",
        category: "Áo bóng đá CLB",
        priceOld: "1.500.000₫",
        priceCurrent: "1.500.000₫",
        discountPercent: 0,
        stock: 1,
        size: ["S", "M", "L", "XL", "2XL"],
        imageList:
            [
                "https://sneakerdaily.vn/wp-content/uploads/2025/06/Ao-Adidas-Real-Madrid-Pre-Match-Jersey-White-IT5101-6.jpg",
                "https://sneakerdaily.vn/wp-content/uploads/2025/06/Ao-Adidas-Real-Madrid-Pre-Match-Jersey-White-IT5101-4.jpg",
                "https://sneakerdaily.vn/wp-content/uploads/2025/06/Ao-Adidas-Real-Madrid-Pre-Match-Jersey-White-IT5101.jpg",
                "https://sneakerdaily.vn/wp-content/uploads/2025/06/Ao-Adidas-Real-Madrid-Pre-Match-Jersey-White-IT5101-2.jpg"
            ],
        desc: `
                <p>Mẫu <strong>Áo Adidas Real Madrid Pre-Match Jersey ‘White’ mã IT5101</strong> là hiện thân của truyền thống và tinh thần chiến đấu không ngừng nghỉ của câu lạc bộ lừng danh bậc nhất nước Anh. Mang sắc đỏ đặc trưng của “Quỷ Đỏ”, chiếc áo này đánh dấu một bước tiến trong thiết kế hiện đại, kết hợp với những giá trị lịch sử mà người hâm mộ MU luôn trân trọng.</p>
                <p>Chiếc áo nổi bật với tông màu trắng tinh khiết đặc trưng của Real Madrid, biểu tượng cho sự thanh lịch và tinh thần chiến đấu trong sáng, luôn hướng tới chiến thắng. Thiết kế tối giản nhưng tinh tế, với logo Real Madrid và Adidas thêu sắc nét trên ngực áo, tạo điểm nhấn trang nhã.</p>
                <p>Chất liệu vải công nghệ cao giúp tăng khả năng thoáng khí và thoải mái khi mặc, hỗ trợ tối đa cho các cầu thủ trong quá trình khởi động và chuẩn bị thể lực. Form áo vừa vặn, linh hoạt, giúp vận động dễ dàng trong mọi tình huống.</p>
            `
    },
    {
        id: 3,
        name: "Áo bóng đá không logo Apollo màu trắng",
        brand: "Justplay",
        category: "Áo bóng đá không logo",
        priceOld: "170.000₫",
        priceCurrent: "150.000₫",
        discountPercent: 12,
        stock: 1,
        size: ["S", "M", "L", "XL", "2XL"],
        imageList:
            [
                "https://www.sporter.vn/wp-content/uploads/2022/08/Ao-bong-da-khong-logo-apollo-trang-0.jpg",
                "https://www.sporter.vn/wp-content/uploads/2022/08/Ao-bong-da-khong-logo-apollo-trang-4.jpg",
                "https://www.sporter.vn/wp-content/uploads/2022/08/Ao-bong-da-khong-logo-apollo-trang-4.jpg",
                "https://www.sporter.vn/wp-content/uploads/2022/08/Ao-bong-da-khong-logo-apollo-trang-4.jpg"
            ],
        desc: `
                <p>Mẫu <strong>Áo bóng đá JSX từ nhà Justplay</strong> với chất vải mè thấm hút và thoát mồ hôi tốt, giúp trang phục thi đấu thoải mái và mát mẻ, không gây mùi hôi do tiếp xúc vi khuẩn bên ngoài không khí khi chơi thể thao thời gian dài.</p>
                <p>Size: S – M – L – XL – 2XL/p>
                <p>Chất liệu: Polyester Thun lạnh 4 chiều</p>
            `
    },
    {
        id: 4,
        name: "Áo PUMA 1920 Season Italian Renaissance Casual Sport Football Breathable Short Sleeves T Shirt 757222-03",
        brand: "Puma",
        category: "Áo bóng đá đội tuyển",
        priceOld: "2.300.000₫",
        priceCurrent: "2.300.000₫",
        discountPercent: 0,
        stock: 1,
        size: ["S", "M"],
        imageList:
            [
                "https://sneakerdaily.vn/wp-content/uploads/2025/02/Ao-PUMA-1920-Season-Italian-Renaissance-Casual-Sport-Football-Breathable-Short-Sleeves-T-Shirt-757222-03.jpg",
                "https://sneakerdaily.vn/wp-content/uploads/2025/02/Ao-PUMA-1920-Season-Italian-Renaissance-Casual-Sport-Football-Breathable-Short-Sleeves-T-Shirt-757222-03-3.jpg",
                "https://sneakerdaily.vn/wp-content/uploads/2025/02/Ao-PUMA-1920-Season-Italian-Renaissance-Casual-Sport-Football-Breathable-Short-Sleeves-T-Shirt-757222-03-4.jpg",
                "https://sneakerdaily.vn/wp-content/uploads/2025/02/Ao-PUMA-1920-Season-Italian-Renaissance-Casual-Sport-Football-Breathable-Short-Sleeves-T-Shirt-757222-03-5.jpg"
            ],
        desc: `
                <p>Mẫu <strong>PUMA 1920 Season Italian Renaissance Casual Sport Football Breathable Short Sleeves T-Shirt</strong> (Mã sản phẩm: 757222-03) là chiếc áo t-shirt thể thao với thiết kế cổ điển kết hợp với yếu tố hiện đại, mang đến phong cách thể thao và thời trang cho người mặc. Chiếc áo này là sự kết hợp tuyệt vời giữa cảm hứng từ Italian Renaissance (Phục hưng Ý) và tính năng thoải mái, thấm hút mồ hôi của các sản phẩm thể thao. </p>
                <p>Áo PUMA 1920 Season Italian Renaissance Casual Sport Football Breathable T-Shirt là món đồ lý tưởng cho những tín đồ thời trang yêu thích sự kết hợp giữa thể thao và các yếu tố nghệ thuật cổ điển. Đây cũng là món đồ hoàn hảo cho những ai yêu thích phong cách đơn giản nhưng vẫn thể hiện cá tính và sự sang trọng, kết hợp giữa yếu tố thể thao và phong cách sống hiện đại.</p>
                <p>Chiếc PUMA 1920 Season Italian Renaissance Casual Sport Football Breathable T-Shirt 757222-03 là sự lựa chọn hoàn hảo cho những ai muốn thể hiện phong cách thể thao và thời trang trong một thiết kế đầy sáng tạo, với sự kết hợp giữa ảnh hưởng cổ điển và hiện đại.</p>
            `
    },
    {
        id: 5,
        name: "Áo Nike PSG 202425 Stadium Fourth ‘Blue’ HJ0865-493",
        brand: "Nike",
        category: "Áo bóng đá CLB",
        priceOld: "3.090.000₫",
        priceCurrent: "3.090.000₫",
        discountPercent: 0,
        stock: 0,
        size: ["S", "M", "L", "XL"],
        imageList:
            [
                "https://sneakerdaily.vn/wp-content/uploads/2025/04/Ao-Nike-PSG-2024_25-Stadium-Fourth-Blue-HJ0865-493-3.jpg",
                "https://sneakerdaily.vn/wp-content/uploads/2025/04/Ao-Nike-PSG-2024_25-Stadium-Fourth-Blue-HJ0865-493.jpg",
                "https://sneakerdaily.vn/wp-content/uploads/2025/04/Ao-Nike-PSG-2024_25-Stadium-Fourth-Blue-HJ0865-493-4.jpg",
                "https://sneakerdaily.vn/wp-content/uploads/2025/04/Ao-Nike-PSG-2024_25-Stadium-Fourth-Blue-HJ0865-493-2.jpg"
            ],
        desc: `
                <p>Mẫu <strong>Áo Nike PSG 202425 Stadium Fourth ‘Blue’ HJ0865-493</strong> Đây không chỉ là một trang phục thể thao thông thường, mà còn là biểu tượng tinh tế của sự kết hợp giữa đam mê bóng đá, thời trang đường phố và di sản văn hóa của Jordan Brand.</p>
                <p>Ngay từ cái nhìn đầu tiên, chiếc áo gây ấn tượng mạnh bởi tông màu xanh Blue Void chủ đạo, trầm lắng nhưng mạnh mẽ, được điểm xuyết bằng những chi tiết màu Phantom tinh tế. Phần tay áo nổi bật với họa tiết cánh cách điệu, lấy cảm hứng từ logo “Wings” – một biểu tượng huyền thoại của dòng giày Air Jordan. Đây là lần đầu tiên thiết kế “cánh” này xuất hiện trên áo bóng đá dài tay, mang lại diện mạo hoàn toàn mới, lạ mắt và độc đáo cho bộ trang phục./p>
                <p>Không chỉ đẹp mắt, áo còn sở hữu chất liệu cao cấp từ 100% polyester tái chế, ứng dụng công nghệ Nike Dri-FIT hiện đại, giúp thấm hút mồ hôi, tạo cảm giác khô thoáng và thoải mái tối đa cho người mặc, dù là trên sân cỏ hay trong các hoạt động thường ngày. Điều này phản ánh cam kết bền vững của Nike trong việc bảo vệ môi trường và giảm thiểu khí thải carbon.</p>
            `
    },
];


function renderPHome() {
    const conPHome = document.getElementById("p-home");
    products.slice(0, 5).forEach(pHome => {
        const div = document.createElement("div");
        div.className = "grid__column-2-4";
        div.innerHTML =
            `
            <a href="pdetail.html?id=${pHome.id}">
                <div class="con-p-info">
                    <div class="p-img">
                        <img src="${pHome.imageList[0]}"
                            alt="">
                        ${pHome.discountPercent > 0 ? `<div class="p-sale"><span>-${pHome.discountPercent}%</span></div>` : ""} 
                        <div class="p-favorite">
                            <span>
                                <i class="fa-solid fa-heart"></i>
                            </span>
                        </div>
                    </div>
                    <div class="p-info">
                        <div class="p-name">
                            <span style="line-height: 1.4rem;">${pHome.name}</span>
                        </div>
                        <div class="p-price">
                            
                            ${pHome.discountPercent > 0 ? `<div class="price-old">${pHome.priceOld}</div>` : ""}
                            <div class="price-current">${pHome.priceCurrent}</div>
                        </div>
                    </div>
                </div>
            </a>
        `;
        conPHome.appendChild(div);
    });
}
renderPHome();

