function formRegister() {
    // Kiểm tra các điều kiện đăng ký và hiển thị thông báo
    let msg = document.getElementById("message");
    let successMsg = "Chúc Mừng! Bạn đã đăng ký thành công!.";

    // Họ tên không được để trống
    let txt_ho = document.forms["register"]["lastName"];
    if (txt_ho.value == "") {
        msg.innerText = "Họ tên không được để trống.";
        msg.style.color = "red";
        msg.style.fontStyle = "italic";
        return false;
    }

    // Kiểm tra thông tin bổ sung
    let bo_sung = document.forms["register"]["bosung"];
    if (bo_sung.value.length < 4 || bo_sung.value.length > 1000) {
        msg.innerText = "Hãy nhập thông tin bổ sung từ 4 đến 1000 ký tự.";
        msg.style.color = "red";
        msg.style.fontStyle = "italic";
        return false;
    }

    // Kiểm tra đã chọn tỉnh hay chưa
    let chon_tinh = document.forms["register"]["tinh"];
    if (chon_tinh.value == 0) {
        msg.innerText = "Bạn chưa chọn tỉnh.";
        msg.style.color = "red";
        msg.style.fontStyle = "italic";
        return false;
    }

    // Kiểm tra đã chọn quốc tịch hay chưa
    let chon_quoc_tich = document.forms["register"]["quoctich"];
    if (chon_quoc_tich.value == 0) {
        msg.innerText = "Bạn chưa chọn quốc tịch.";
        msg.style.color = "red";
        msg.style.fontStyle = "italic";
        return false;
    }

    // Kiểm tra đã chọn giới tính hay chưa
    let gender = document.forms["register"]["gender"];
    if (!gender[0].checked && !gender[1].checked) {
        msg.innerText = "Giới tính phải được chọn.";
        msg.style.color = "red";
        msg.style.fontStyle = "italic";
        return false;
    }

    // Kiểm tra số điện thoại
    let cellphone = document.forms["register"]["cellphone"];
    if (cellphone.value == "") {
        msg.innerText = "Điện thoại không được để trống.";
        msg.style.color = "red";
        msg.style.fontStyle = "italic";
        return false;
    }
    if (cellphone.value.length < 10 || cellphone.value.length > 11 || isNaN(cellphone.value)) {
        msg.innerText = "Điện thoại phải có từ 10 đến 11 ký tự số.";
        msg.style.color = "red";
        msg.style.fontStyle = "italic";
        return false;
    }

    // Kiểm tra đã chọn ít nhất một sở thích
    let hobbyArr = document.forms["register"]["hobby"];
    let isHobbySelected = false;
    for (let i = 0; i < hobbyArr.length; i++) {
        if (hobbyArr[i].checked) {
            isHobbySelected = true;
            break;
        }
    }
    if (!isHobbySelected) {
        msg.innerText = "Bạn phải chọn ít nhất một sở thích.";
        msg.style.color = "red";
        msg.style.fontStyle = "italic";
        return false;
    }

    // Nếu điều kiện đăng ký hợp lệ, hiển thị thông báo thành công và hiện nút Đăng nhập
    msg.innerText = successMsg;
    msg.style.color = "green";
    msg.style.fontStyle = "normal";

    // Hiển thị nút Đăng nhập
    document.getElementById("btn_dangNhap").style.display = "inline-block";

    return false;
}
document.getElementById("btn_dangNhap").addEventListener("click", function() {
    window.location.href = "/home/home.html"; 
});