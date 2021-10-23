let checkClose = document.querySelector("#btn__check-close");
let modal = document.querySelector(".modal");
let shoppingCart = document.querySelector(".shopping-my-cart");
let shoppingcartBtn = document.querySelector("#shopping-cart");
let shoppingcartBox = document.querySelector(".shopping-cart-box");
let btnDanger = document.querySelector("#btn__danger");
let loginUser = document.querySelector("#login__user");
let loginBox = document.querySelector(".login__box");
let formClose = document.querySelector("#form-close");
let headerShop = document.querySelector("#shop");
let headerCategori = document.querySelector("#categories");
let headernavShop = document.querySelector(".header-navigation-shop");
let headernavShop__2 = document.querySelector(".header-navigation-shop-2");
let headerProduct = document.querySelector("#product");
let headernavShop__3 = document.querySelector(".header-navigation-shop-3");
let barBtn = document.querySelector("#bar");
let barTimes = document.querySelector("#times");
let headerNav = document.querySelector(".header-nav-center");


const accordion = document.getElementsByClassName("shop-1");
for (i = 0; i < accordion.length; i++) {
  accordion[i].addEventListener("click", function() {
    this.classList.toggle("active");
  });
}

// Xử lý đóng / mở modal
checkClose.addEventListener("click", function () {
  modal.remove();
});

// Xử lý khi click menu nav
headerShop.addEventListener("click", function () {
  headernavShop.classList.toggle("active");
});

headerCategori.addEventListener("click", function () {
  headernavShop__2.classList.toggle("active");
});

headerProduct.addEventListener("click", function () {
  headernavShop__3.classList.toggle("active");
});

// Xử lý ẩn hiện giỏ hàng
shoppingcartBtn.addEventListener("click", function () {
  shoppingCart.classList.toggle("active");
});

barBtn.addEventListener("click", function () {
  headerNav.classList.add("active");
});

barTimes.addEventListener("click", function () {
  headerNav.classList.remove("active");
});

// Xử lý hiện đăng nhập
loginUser.addEventListener("click", function () {
  loginBox.classList.add("active");
});

// Xử lý đóng đăng nhập
formClose.addEventListener("click", function () {
  loginBox.classList.remove("active");
});

// xóa cart
var remove_cart = document.getElementsByClassName("btn__danger");
for (var i = 0; i < remove_cart.length; i++) {
  var button = remove_cart[i]
  button.addEventListener("click", function () {
    var button_remove = event.target
    button_remove.parentElement.remove()
  })
}

// Active link
function menu(element) {
  let tabs = document.getElementsByClassName("item");
  for (i = 0; i < tabs.length; i++) {
    tabs[i].style.color = "#222222";
  }
  element.style.color = "#fb4734";
}

// Slider

var swiper = new Swiper(".hero-slider", {
  spaceBetween: 30,
  centeredSlides: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

var swiper = new Swiper(".product-categori-slider", {
  spaceBetween: 10,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  breakpoints: {
    0: {
      slidesPerView: 2,
    },
    768: {
      slidesPerView: 3,
    },
    1024: {
      slidesPerView: 4,
    },
  },
});

var swiper = new Swiper(".customer-sli", {
  pagination: {
    el: ".dot",
  },
});

var swiper = new Swiper(".blog-slider", {
  spaceBetween: 10,
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
  },
});

var swiper = new Swiper(".product-slider", {
  spaceBetween: 30,
  breakpoints: {
    0: {
      slidesPerView: 2,
    },
    768: {
      slidesPerView: 3,
    },
    1024: {
      slidesPerView: 4,
    },
  },
});

var swiper = new Swiper(".brand-slider", {
  spaceBetween: 30,
  autoplay: {
    delay: 2600,
    disableOnInteraction: false,
  },
  breakpoints: {
    0: {
      slidesPerView: 2,
    },
    768: {
      slidesPerView: 3,
    },
    1024: {
      slidesPerView: 6,
    },
  },
});

// Xử lý scroll
window.onscroll = () => {
  if (window.scrollY > 60) {
    document.querySelector("#scroll-top").classList.add("active");
  } else {
    document.querySelector("#scroll-top").classList.remove("active");
  }
};

// Load trang
function loader() {
  document.querySelector(".loader-container").classList.add("fade-out");
}

function fadeOut() {
  setInterval(loader, 3000);
}

window.onload = fadeOut();
