// const axios  = require("axios")
const logoBtn = document.getElementById("logo");
const menu = document.getElementById("menu");
const mainProductImg = document.getElementById("product-img");
const productImgs = document.getElementsByClassName("small-img");

const loginForm = document.getElementById("login");
const registerForm = document.getElementById("register");
const indecator = document.getElementById("indecator");

function login() {
  loginForm.style.transform = "translateX(0px)";
  registerForm.style.transform = "translateX(300px)";
  indecator.style.transform = "translateX(50px)";
}
function register() {
  registerForm.style.transform = "translateX(0px)";
  loginForm.style.transform = "translateX(-300px)";
  indecator.style.transform = "translateX(150px)";
}

for (let i = 0; i < productImgs.length; i++) {
  productImgs[i].onclick = function (e) {
    mainProductImg.src = e.target.src;
  };
}

console.log(logoBtn);
logoBtn.onclick = (e) => {
  if (menu.classList == "expand") {
    menu.classList = "collapse";
    return;
  }
  menu.classList = "expand";
};

const promises = [1, 0, 3];
const run = (p, r, i = 0) => {
  if (p.length === 0) return r;
  const p1 = p[0];
  const newp = p.filter((item, index) => {
    return index != 0;
  });
  try {
    const res = p1 == 0 ? false : true;
    if (res) {
      r.push({ res, i });
      return run(newp, r, ++i);
    }
    throw "data not resolved";
  } catch (e) {
    r.push({
      res: false,
      i,
    });
    return run(newp, r, ++i);
  }
};
const result = run(promises, []);
console.log(result);
