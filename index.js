var swiper = new Swiper(".mySwiper", {
  spaceBetween: 30,
  centeredSlides: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});


document.addEventListener("DOMContentLoaded", function () {
  const container = document.querySelector(".card-slider-main");
  const leftButton = document.querySelector(".arrow-left");
  const rightButton = document.querySelector(".arrow-right");

  function updateButtonState() {
    leftButton.disabled = container.scrollLeft <= 0;
    rightButton.disabled =
      container.scrollLeft + container.offsetWidth >= container.scrollWidth;
  }

  leftButton.addEventListener("click", function () {
    container.scrollBy({
      left: -container.offsetWidth / 2,
      behavior: "smooth",
    });
  });

  rightButton.addEventListener("click", function () {
    container.scrollBy({ left: container.offsetWidth / 2, behavior: "smooth" });
  });
  container.addEventListener("scroll", updateButtonState);
  updateButtonState();
});


// email check



function validateForm() {
  var email = document.getElementById("email").value;
  var password = document.getElementById("password").value;


  var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(email)) {
    alert("Noto'g'ri email formati!");
    return false;
  }

  // Parolni uzunligi tekshirish:
  if (password.length < 6) {
    alert("Parol kamida 6 belgidan iborat bo'lishi kerak!");
    return false;
  }

  // Agar tekshirish muvaffaqiyatli bo'lsa, forma yuboriladi
  // (siz uni serverga yuborishingiz kerak bo'lsa, bu kerak emas)
  return true;
}








const swiper_mySwiper1 = document.querySelector(".mySwiper"),
  main_slider1 = document.querySelector(".main-slider"),
  page30 = document.querySelector(".page3"),
  page40 = document.querySelector(".page4"),
  page50 = document.querySelector(".page5"),
  page60 = document.querySelector(".page6"),
  page70 = document.querySelector(".page7"),
  page80 = document.querySelector(".page8"),
  page90 = document.querySelector(".page9"),
  q10 = document.querySelector(".q1"),
  li100 = document.getElementById("li10"),
  as10 = document.getElementById("as1"),
  rasm10 = document.getElementById("rasm1"),
  login1 = document.querySelector(".login"),
  svg10 = document.getElementById("svg1"),
  container1 = document.querySelector(".container"),
  katalog1 = document.querySelector(".katalog"),
  li110 = document.getElementById("li11"),
  li120 = document.getElementById("li12");


li100.addEventListener("click", () => {
  swiper_mySwiper1.style.display = "none";
  page50.style.display = "none";
  page60.style.display = "none";
  page70.style.display = "none";
  page80.style.display = "none";
  page90.style.display = "none";
  q10.style.display = "none";
  theme.style.display = 'none'
  page10.style.display = 'none'
  katalog1.style.display = "grid"
})
as10.addEventListener("click", () => {
  swiper_mySwiper1.style.display = "grid";
  page50.style.display = "grid";
  page60.style.display = "grid";
  page70.style.display = "grid";
  page80.style.display = "grid";
  page10.style.display = 'block'
  theme.style.display = 'block'
  page10.style.display = 'none'
})
rasm10.addEventListener("click", () => {
  login1.style.display = "grid";
  container1.style.opacity = "0.1";
})
svg10.addEventListener("click", () => {
  login1.style.display = "none"
  container1.style.opacity = "1000";
  theme.style.display = 'block'
})
li110.addEventListener("click", () => {
  swiper_mySwiper1.style.display = "none";
  page50.style.display = "none";
  page60.style.display = "none";
  page70.style.display = "none";
  page80.style.display = "none";
  page90.style.display = "none";
  q10.style.display = "none";
  theme.style.display = 'none'
  page10.style.display = 'none'
  katalog1.style.display = "grid"
})
li120.addEventListener("click", () => {
  swiper_mySwiper1.style.display = "none";
  page50.style.display = "none";
  page60.style.display = "none";
  page70.style.display = "none";
  page80.style.display = "none";
  page10.style.display = 'none'
  theme.style.display = 'none'
  page10.style.display = 'grid'
  katalog1.style.display = 'none'
})

const shopBox = document.querySelector(".shop-Box"),
  iconCart = document.getElementById(".quant"),
  closeBox = document.querySelector(".close"),
  Modal = document.querySelector(".ModalCart"),
  ListcartHTML = document.querySelector(".Listcart"),
  iconCartSpan = document.querySelector(".quant"),
  removed = document.querySelector(".removed"),
  listProductHTML = document.querySelector(".ProductList");


let listProduct = [];
let carts = [];


const addDatatoHTML = () => {
  listProductHTML.innerHTML = "";
  if (listProduct.length > 0) {
    listProduct.forEach((product) => {
      let newProduct = document.createElement("div"); //yangi div yaratiladi ya'ni karobkasi
      newProduct.classList.add("item"); // yangi item qushilishi
      newProduct.dataset.id = product.id; //bosilgandagi elementni id sini olish
      newProduct.innerHTML = `
            <img src="${product.image}" alt="">
            <h2>${product.name}</h2>
            <div class="price">${product.price}</div>
            <button class="addBtn">Add to Cart</button>
            `; // apidan barcha ma'lumotlarni olib HTMLga chiqarish
      listProductHTML.append(newProduct); //va chiqarilgan har bir item oxiridan qushiladi append() orqali
    });
  }
};
const kon = document.getElementById('li1')
const page10 = document.querySelector('.page10')
const theme = document.querySelector('.theme')

kon.addEventListener('click', () => {
  page10.style.display = 'block'
  theme.style.display = 'none'
  katalog1.style.display = "none"
})





let regexx = /([A-Z])/;

const inp = document.querySelector('.imgg1').value,
  w511 = document.querySelector('.w511'),
  tugma10 = document.getElementById("tugma1"),
  in10 = document.getElementById("in1"),
  in20 = document.getElementById("in2"),
  in30 = document.getElementById("in3");


w511.addEventListener('click', () => {
  if (!regexx.exec(inp)){
    alert("gffghdjfgshdjfghjsgdhfjgds")
  }
  else {
    alert("to'g'ri")
  }
})


tugma10.addEventListener("click", () => {
  if (in10.length > 2 && in20 !== "") {
    alert("to'g'ri")
  } else {
    alert("xato")
  }
})

const ni10 = document.getElementById("ni1"),
  ni20 = document.getElementById("ni2"),
  burger10 = document.querySelector(".burger1"),
  burger20 = document.querySelector(".burger2"),
  rasm30 = document.getElementById("rasm3"),
  rasm40 = document.getElementById("rasm4");

ni10.addEventListener("click", () => {
  burger10.style.display = 'grid'
})
rasm30.addEventListener("click", () => {
  burger10.style.display = "none";
})
ni20.addEventListener("click", () => {
  burger20.style.display = "grid";
})
rasm40.addEventListener("click", () => {
  burger20.style.display = "none"
})
const shopBoxBtn = document.querySelector(".shop-Box"),
  closeBoxBtn = document.querySelector(".close"),
  ModalCart = document.querySelector(".ModalCart");


shopBoxBtn.addEventListener("click", () => {
  ModalCart.classList.toggle("show");
});

closeBoxBtn.addEventListener("click", () => {
  ModalCart.classList.toggle("show");
});
const addToCart = (product_id) => {
  let positionThisProductCart = carts.findIndex(
    (value) => value.product_id == product_id
  );
  if (carts.length <= 0) {
    carts = [
      {
        product_id: product_id,
        quantity: 1,
      },
    ];
  } else if (positionThisProductCart < 0) {
    carts.push({
      product_id: product_id,
      quantity: 1,
    });
  } else {
    carts[positionThisProductCart].quantity =
      carts[positionThisProductCart].quantity + 1;
  }
  addToCartHTML();
};

const removeItem = (index) => {
  carts.splice(index, 1); // carts dan mahsulotni o'chiramiz
  addToCartHTML(); // Qayta yuklash
};

const initData = () => {
  fetch("api.json")
    .then((res) => res.json())
    .then((data) => {
      listProduct = data;
      addDatatoHTML();
    });
};























const y110 = document.querySelector(".y11"),
  y120 = document.querySelector(".y12"),
  y130 = document.querySelector(".y13"),
  y140 = document.querySelector(".y14"),
  y150 = document.querySelector(".y15"),
  y160 = document.querySelector(".y16"),
  y170 = document.querySelector(".y17"),
  y180 = document.querySelector(".y18"),
  y190 = document.querySelector(".y19"),
  y200 = document.querySelector(".y20"),
  y210 = document.querySelector(".y21"),
  y220 = document.querySelector(".y22"),
  y230 = document.querySelector(".y23"),
  y240 = document.querySelector(".y24"),
  y250 = document.querySelector(".y25"),
  t10 = document.getElementById('t1'),
  t20 = document.getElementById('t2'),
  t30 = document.getElementById('t3'),
  t40 = document.getElementById('t4'),
  t50 = document.getElementById('t5'),
  t60 = document.getElementById('t6'),
  t70 = document.getElementById('t7'),
  t80 = document.getElementById('t8'),
  t90 = document.getElementById('t9'),
  t100 = document.getElementById('t10'),
  t110 = document.getElementById('t11'),
  t120 = document.getElementById('t12'),
  t130 = document.getElementById('t13'),
  t140 = document.getElementById('t14'),
  t150 = document.getElementById("t15")
tguma110 = document.getElementById('tguma11'),
  tguma120 = document.getElementById('tguma12'),
  tguma130 = document.getElementById('tguma13'),
  tguma140 = document.getElementById('tguma14'),
  tguma150 = document.getElementById('tguma15'),
  tguma160 = document.getElementById('tguma16'),
  tguma170 = document.getElementById('tguma17'),
  tguma180 = document.getElementById('tguma18'),
  tguma190 = document.getElementById('tguma19'),
  tguma200 = document.getElementById('tguma20'),
  tguma210 = document.getElementById('tguma21'),
  tguma220 = document.getElementById('tguma22'),
  tguma230 = document.getElementById('tguma23'),
  tguma240 = document.getElementById('tguma24'),
  tguma250 = document.getElementById('tguma25');







t10.addEventListener("click", () => {
  y110.style.display = "grid"
})
t20.addEventListener("click", () => {
  y120.style.display = "grid"
})
t30.addEventListener("click", () => {
  y130.style.display = "grid"
})
t40.addEventListener("click", () => {
  y140.style.display = "grid"
})
t50.addEventListener("click", () => {
  y150.style.display = "grid"
})
t60.addEventListener("click", () => {
  y160.style.display = "grid"
})
t70.addEventListener("click", () => {
  y170.style.display = "grid"
})
t80.addEventListener("click", () => {
  y180.style.display = "grid"
})
t90.addEventListener("click", () => {
  y190.style.display = "grid"
})
t90.addEventListener("click", () => {
  y190.style.display = "grid"
})
t100.addEventListener("click", () => {
  y200.style.display = "grid"
})
t110.addEventListener("click", () => {
  y210.style.display = "grid"
})
t120.addEventListener("click", () => {
  y220.style.display = "grid"
})
t130.addEventListener("click", () => {
  y230.style.display = "grid"
})
t140.addEventListener("click", () => {
  y240.style.display = "grid"
})
t150.addEventListener("click", () => {
  y250.style.display = "grid"
})
tguma110.addEventListener("click", () => {
  y110.style.display = "none"
})
tguma120.addEventListener("click", () => {
  y120.style.display = "none"
})
tguma130.addEventListener("click", () => {
  y130.style.display = "none"
})
tguma140.addEventListener("click", () => {
  y140.style.display = "none"
})
tguma150.addEventListener("click", () => {
  y150.style.display = "none"
})
tguma160.addEventListener("click", () => {
  y160.style.display = "none"
})
tguma170.addEventListener("click", () => {
  y170.style.display = "none"
})
tguma180.addEventListener("click", () => {
  y180.style.display = "none"
})
tguma190.addEventListener("click", () => {
  y190.style.display = "none"
})
tguma200.addEventListener("click", () => {
  y200.style.display = "none"
})
tguma210.addEventListener("click", () => {
  y210.style.display = "none"
})
tguma220.addEventListener("click", () => {
  y220.style.display = "none"
})
tguma230.addEventListener("click", () => {
  y230.style.display = "none"
})
tguma240.addEventListener("click", () => {
  y240.style.display = "none"
})
tguma250.addEventListener("click", () => {
  y250.style.display = "none"
})