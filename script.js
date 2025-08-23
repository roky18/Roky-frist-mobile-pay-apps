// Login Btn setelment->

let LgBtn = document.getElementById("LoginBtn");
LgBtn.addEventListener("click", function () {
  let MbNo = 01712345678;
  let Pn6D = 111222;

  let MobileNo = document.getElementById("MbNo").value;
  let MobileNoConV = parseInt(MobileNo);

  let PinNo = document.getElementById("PnNo").value;
  let PinNoConV = parseInt(PinNo);

  if (MbNo === MobileNoConV && Pn6D === PinNoConV) {
    window.location.href = "./main.html";
  } else {
    alert("Invalid dost Fire jaw ---- Sothik Number r Pin Niye eso");
  }
});
