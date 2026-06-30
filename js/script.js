// =======================
// BÀI 1 - DANH SÁCH SẢN PHẨM
// =======================

const products = [
    { name: "Laptop Dell", price: "15.000.000đ" },
    { name: "iPhone 15", price: "22.000.000đ" },
    { name: "Samsung Galaxy S24", price: "18.000.000đ" },
    { name: "Tai nghe Bluetooth", price: "1.200.000đ" },
    { name: "Chuột Logitech", price: "500.000đ" }
];

function hienThiSanPham(ds = products){

    const list = document.getElementById("product-list");

    if(!list) return;

    list.innerHTML = "";

    ds.forEach(function(sp){

        list.innerHTML += `
        <div class="card">
            <h3>${sp.name}</h3>
            <p>Giá: ${sp.price}</p>
            <button>Xem chi tiết</button>
        </div>
        `;

    });

}

function timSanPham(){

    const text = document.getElementById("search").value.toLowerCase().trim();

    const ketQua = products.filter(function(sp){

        return sp.name.toLowerCase().includes(text);

    });

    const message = document.getElementById("message");

    if(ketQua.length == 0){

        message.innerHTML = "Không tìm thấy sản phẩm!";
        hienThiSanPham([]);

    }else{

        message.innerHTML = "";
        hienThiSanPham(ketQua);

    }

}

hienThiSanPham();


// =======================
// BÀI 2 - FORM ĐĂNG KÝ
// =======================

function dangKy(event){

    event.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value;
    const agree = document.getElementById("agree").checked;

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    const passRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;

    if(name==""){

        alert("Vui lòng nhập họ tên");
        return;

    }

    if(!emailRegex.test(email)){

        alert("Email không hợp lệ");
        return;

    }

    if(!passRegex.test(password)){

        alert("Mật khẩu phải từ 8 ký tự, có chữ hoa, chữ thường và số");
        return;

    }

    if(!agree){

        alert("Bạn phải đồng ý điều khoản");
        return;

    }

    localStorage.setItem("user",JSON.stringify({

        name,
        email

    }));

    alert("Đăng ký thành công!");

}


// =======================
// BÀI 3 - COUNTDOWN
// =======================

function batDauDongHo(){

    const timer = document.getElementById("timer");

    if(!timer) return;

    let time = 600;

    const interval = setInterval(function(){

        let minute = Math.floor(time/60);

        let second = time%60;

        timer.innerHTML =
        String(minute).padStart(2,"0")
        +":"
        +
        String(second).padStart(2,"0");

        if(time<=60){

            timer.classList.add("danger");

        }

        if(time<=0){

            clearInterval(interval);

            alert("Đã hết thời gian!");

        }

        time--;

    },1000);

}

batDauDongHo();