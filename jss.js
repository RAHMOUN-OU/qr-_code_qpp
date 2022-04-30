const wrapper=document.querySelector(".wrapper");
gen_btn=wrapper.querySelector(".wrapper .form button");
qr_in=wrapper.querySelector(".form input");
qr_img=wrapper.querySelector(".qr_code img");

gen_btn.addEventListener("click",() => {
    let qr_value=qr_in.value;
    if(!qr_value) return;
    qr_img.src='https://api.qrserver.com/v1/create-qr-code/?size=150x150&data='+qr_value;

wrapper.classList.add("action");

})