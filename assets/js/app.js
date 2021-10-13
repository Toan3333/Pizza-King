let checkClose = document.querySelector("#btn__check-close");
let modal = document.querySelector(".modal");
let shoppingCart = document.querySelector(".shopping-my-cart");
let shoppingcartBtn = document.querySelector("#shopping-cart");
let shoppingcartBox = document.querySelector(".shopping-cart-box");
let btnDanger = document.querySelector("#btn__danger");
let loginUser = document.querySelector("#login__user");
let loginBox = document.querySelector(".login__box");
let formClose = document.querySelector("#form-close");

checkClose.addEventListener("click", function () {
  modal.remove();
});

shoppingcartBtn.addEventListener("click", function () {
  shoppingCart.classList.toggle("active");
});

loginUser.addEventListener("click", function () {
  loginBox.classList.add("active");
});

formClose.addEventListener("click", function () {
  loginBox.classList.remove("active");
});

// Xoa cart

// for (i = 0; i < shoppingCart.length; i++) {
//   btnDanger.addEventListener('click', function(xoa){
//     shoppingcartBox.remove();
//   });
// }

function addCart(x) {
  var product__box = x.parentElement.children;
  var img = product__box[0].children[0].src;
  console.log(img);
}

function menu(element) {
  let tabs = document.getElementsByClassName("item");
  for (i = 0; i < tabs.length; i++) {
    tabs[i].style.color = "#222222";
  }
  element.style.color = "#fb4734";
}

var swiper = new Swiper(".hero-slider", {
  spaceBetween: 30,
  centeredSlides: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
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
window.onscroll = () => {
  if (window.scrollY > 60) {
    document.querySelector("#scroll-top").classList.add("active");
  } else {
    document.querySelector("#scroll-top").classList.remove("active");
  }
};

function loader() {
  document.querySelector(".loader-container").classList.add("fade-out");
}

function fadeOut() {
  setInterval(loader, 3000);
}

window.onload = fadeOut();
