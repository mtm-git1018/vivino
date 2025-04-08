document.addEventListener("DOMContentLoaded", function () {
  // 서치바
  const box = document.querySelector(".box");
  const modal = document.querySelector(".black-bg");
  box.addEventListener("click", function () {
    modal.style.top = "0";
  });

  modal.addEventListener("click", function (e) {
    if (e.target === this) {
      modal.style.top = "-100vh";
    }
  });

  //탑버튼 누를시 가장 위로

  const topBtn = document.querySelector(".top-btn");

  topBtn.addEventListener("click", function () {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });
  // 햅버거버튼

  const hamburgerBtn = document.querySelector(".hamburger");
  const hamburgerMenu = document.querySelector(".hamburger-menubar");

  hamburgerBtn.addEventListener("click", function (e) {
    hamburgerMenu.classList.toggle("open");
  });

  // 메인그리드 탭기능

  const mainTab = document.querySelectorAll(".tab");
  let products = [
    {
      id: 0,
      name: "Stag's Leap Wine Cellars CASK 23 Cabernet Sauvignon 2021",
      region: "USA",
      point: 4.6,
      person: 67,
      price: "₩88,000",
      image: "../img/usflag.png",
      wine: "../wines/cask.png",
      category: "usa",
    },
    {
      id: 1,
      name: "Cristal Brut Champagen 2013",
      region: "France",
      point: 4.6,
      person: 1701,
      price: "₩498,600",
      image: "../img/franceflag.png",
      wine: "../wines/brut.png",
      category: "french",
    },
    {
      id: 2,
      name: "Cabernet Sauvignon Howell Mountain 2014",
      region: "USA",
      point: 4.6,
      person: 10,
      price: "₩145,600",
      image: "../img/usflag.png",
      wine: "../wines/csHowell.png",
      category: "usa",
    },
    {
      id: 3,
      name: "Tenuta Tignanello'Solaia' 2020",
      region: "Italy",
      point: 4.5,
      person: 270,
      price: "₩586,000",
      image: "../img/italyflag.png",
      wine: "../wines/tenuta.png",
      category: "italy",
    },
    {
      id: 4,
      name: "Bramare Malbec Uco Valley 2021",
      region: "Argentina",
      point: 4.5,
      person: 827,
      price: "₩64,000",
      image: "../img/arhenflag.png",
      wine: "../wines/bramare.png",
      category: "southAmerica",
    },
    {
      id: 5,
      name: "Valbuena 5 (Reserva) 2018",
      region: "Spain",
      point: 4.6,
      person: 2829,
      price: "₩366,000",
      image: "../img/spainflag.png",
      wine: "../wines/valbuena.png",
      category: "westEurope",
    },

    {
      id: 6,
      name: "Moët & Chandon Impérial Brut Champagne N.V.",
      region: "France",
      point: 4.1,
      person: 133727,
      price: "₩102,000",
      image: "../img/franceflag.png",
      wine: "../wines/moet.png",
      category: "french",
    },
    {
      id: 7,
      name: "Saint-Émilion Grand Cru (Grand Cru Classé)",
      region: "France",
      point: 4.2,
      person: 7061,
      price: "₩64,600",
      image: "../img/franceflag.png",
      wine: "../wines/saint-emil.png",
      category: "french",
    },
    {
      id: 8,
      name: "La Fiole du Pape Père Anselme Châteauneuf-du-Pape",
      region: "France",
      point: 4.1,
      person: 29324,
      price: "₩54,100",
      image: "../img/franceflag.png",
      wine: "../wines/lafiole.png",
      category: "french",
    },
    {
      id: 9,
      name: "Le Grand Noir Pinot Noir 2023",
      region: "France",
      point: 3.7,
      person: 19581,
      price: "₩30,800",
      image: "../img/franceflag.png",
      wine: "../wines/legrand.png",
      category: "french",
    },
    {
      id: 10,
      name: "Château Meyney Saint-Estèphe 2022",
      region: "France",
      point: 4.0,
      person: 17325,
      price: "₩92,600",
      image: "../img/franceflag.png",
      wine: "../wines/chateau.png",
      category: "french",
    },
    {
      id: 11,
      name: "Ruffino Chianti 1877 1877",
      region: "Italy",
      point: 3.5,
      person: 60393,
      price: "₩26,000",
      image: "../img/italyflag.png",
      wine: "../wines/ruffino.png",
      category: "italy",
    },
    {
      id: 12,
      name: "La Marca Prosecco N.V.",
      region: "Italy",
      point: 3.8,
      person: 33560,
      price: "₩26,000",
      image: "../img/italyflag.png",
      wine: "../wines/lamarca.png",
      category: "italy",
    },
    {
      id: 13,
      name: "Ca' del Bosco Franciacorta Cuvée Prestige N.V.",
      region: "Italy",
      point: 4.1,
      person: 26986,
      price: "₩24,000",
      image: "../img/italyflag.png",
      wine: "../wines/cadel.png",
      category: "italy",
    },
    {
      id: 14,
      name: "Avignonesi Vino Nobile di Montepulciano 2022",
      region: "Italy",
      point: 4.0,
      person: 26986,
      price: "₩55,000",
      image: "./img/italyflag.png",
      wine: "./wines/avign.png",
      category: "italy",
    },
    {
      id: 15,
      name: "Félix Solís Mucho Más Tinto N.V.",
      region: "Spain",
      point: 4.2,
      person: 95291,
      price: "₩22,000",
      image: "./img/spainflag.png",
      wine: "./wines/felix.png",
      category: "westEurope",
    },
    {
      id: 16,
      name: "Casa Ferreirinha Papa Figos Douro 2021",
      region: "Portugal",
      point: 4.0,
      person: 6866,
      price: "₩51,400",
      image: "./img/ptflag.png",
      wine: "./wines/casa.png",
      category: "westEurope",
    },
    {
      id: 17,
      name: "Silk & Spice Red Blend 2021",
      region: "Portugal",
      point: 4.1,
      person: 5834,
      price: "₩20,500",
      image: "./img/ptflag.png",
      wine: "./wines/silk.png",
      category: "westEurope",
    },
    {
      id: 18,
      name: "Borsao Bodegas Tres Picos Garnacha 2022",
      region: "Spain",
      point: 4.0,
      person: 42426,
      price: "₩66,000",
      image: "./img/spainflag.png",
      wine: "./wines/borsao.png",
      category: "westEurope",
    },
    {
      id: 19,
      name: "Lan Gran Reserva Rioja 2018",
      region: "Spain",
      point: 4.0,
      person: 24108,
      price: "₩55,500",
      image: "./img/spainflag.png",
      wine: "./wines/lan.png",
      category: "westEurope",
    },
    {
      id: 20,
      name: "Catena Alta Malbec 2023",
      region: "Argentina",
      point: 4.2,
      person: 37219,
      price: "₩102,000",
      image: "./img/arhenflag.png",
      wine: "./wines/catena.png",
      category: "southAmerica",
    },
    {
      id: 21,
      name: "Altos del Plata Malbec 2023",
      region: "Argentina",
      point: 3.5,
      person: 35187,
      price: "₩30,800",
      image: "./img/arhenflag.png",
      wine: "./wines/altos.png",
      category: "southAmerica",
    },
    {
      id: 22,
      name: "Viña Cobos Cocodrilo Red Blend 2022",
      region: "Argentina",
      point: 4.3,
      person: 23746,
      price: "₩44,100",
      image: "./img/arhenflag.png",
      wine: "./wines/vina.png",
      category: "southAmerica",
    },
    {
      id: 23,
      name: "Gran Reserva Serie Riberas Carmenère 2021",
      region: "Chile",
      point: 3.9,
      person: 19610,
      price: "₩24,600",
      image: "./img/chilflag.png",
      wine: "./wines/gran.png",
      category: "southAmerica",
    },
    {
      id: 24,
      name: "Caballo Loco Red Blend N.V.",
      region: "Chile",
      point: 4.4,
      person: 13498,
      price: "₩102,900",
      image: "./img/chilflag.png",
      wine: "./wines/caballo.png",
      category: "southAmerica",
    },
    {
      id: 25,
      name: "Meiomi Pinot Noir",
      region: "USA",
      point: 4.1,
      person: 180754,
      price: "₩28,000",
      image: "./img/usflag.png",
      wine: "./wines/meiomi.png",
      category: "usa",
    },
    {
      id: 26,
      name: "Bonanza Cabernet Sauvignon Lot N.V.",
      region: "USA",
      point: 4.1,
      person: 41081,
      price: "₩25,000",
      image: "./img/usflag.png",
      wine: "./wines/bonanza.png",
      category: "usa",
    },
    {
      id: 27,
      name: "The Prisoner Saldo Zinfandel",
      region: "USA",
      point: 4.2,
      person: 38468,
      price: "₩48,000",
      image: "./img/usflag.png",
      wine: "./wines/prison.png",
      category: "usa",
    },
    {
      id: 28,
      name: "Liberty School Cabernet Sauvignon 2023",
      region: "USA",
      point: 3.9,
      person: 36007,
      price: "₩23,000",
      image: "./img/usflag.png",
      wine: "./wines/liberty.png",
      category: "usa",
    },
    {
      id: 29,
      name: "Cà dei Frati Pietro Dal Cero Amarone della Valpolicella 2016",
      region: "italy",
      point: 4.5,
      person: 411,
      price: "₩83,000",
      image: "./img/italyflag.png",
      wine: "./wines/pietro.png",
      category: "italy",
    },
  ];

  const gridSlide = document.querySelector(".grid-slide");
  const categoryTab = document.querySelectorAll(".category-tab");
  const regionContainer = document.querySelector(".region-container");
  const mainNextbtn = document.querySelector(".main-next");
  const mainPrevbtn = document.querySelector(".main-prev");

  let mainCount = 0;
  let maxLength = products.length;

  mainNextbtn.addEventListener("click", function () {
    if (mainCount < maxLength - 1) {
      mainCount++;
      let move = mainCount * 295;
      gridSlide.style.transform = `translateX(-${move}px)`;
    }
  });
  mainPrevbtn.addEventListener("click", function () {
    if (mainCount > 0) {
      mainCount--;
      let move = mainCount * 295;
      gridSlide.style.transform = `translateX(-${move}px)`;
    }
  });

  // 메인그리드 아이텝
  products.forEach((a) => {
    addItem(a);
    mainTab.forEach((btn) => {
      btn.addEventListener("click", function (e) {
        gridSlide.innerHTML = "";
        mainCount = 0;
        if (mainTab[0] === this) {
          products.forEach((a) => {
            addItem(a);
          });
        } else if (mainTab[1] === this) {
          let copy = [...products]
            .sort((a, b) => b.person - a.person)
            .slice(0, 6);
          maxLength = 6;
          copy.forEach((a) => {
            addItem(a);
          });
        } else if (mainTab[2] === this) {
          maxLength = 6;
          addItem(a);
          products.forEach((a) => {
            addItem(a);
            // 카테고리탭 버튼을 누를 때마다 탭버튼에 맞는 와인 화면에 보여주기
            // 만약 내가 클릭한 버튼의 필터가 와인의 카테고리와 맞아 떨어지면 보여주세요
            categoryTab.forEach((btn) => {
              btn.addEventListener("click", function () {
                let filter = this.dataset.filter;

                const gridItem = document.querySelectorAll(".main-grid_item");
                gridItem.forEach((item) => {
                  let category = item.dataset.category;
                  if (category == filter) {
                    item.style.display = "flex";
                  } else {
                    item.style.display = "none";
                  }
                });
                mainCount = 0;
                gridSlide.style.transform = `translateX(0px)`;
              });
            });
          });
        }
        gridSlide.style.transform = `translateX(0px)`;
      });
    });
  });

  function addItem(a) {
    let items = ` 
    <div class="main-grid_item" data-category="${a.category}">
            <div class= main-grid_mainimg>
            <img src=${a.wine}>
            </div>
            <div class="main-grid_detail" >
              <div class="main-grid_top">
                <div class="main-grid_region">
                  <div class="main-grid_img">
                    <img src="${a.image}" alt="">
                  </div>
                  <p>${a.region}</p>
                </div>
                <h3>${a.name}</h3>
              </div>
              <div class="main-grid_bottom">
                <div class="main-grid_rank">
                  <h3><svg width="20" height="20" viewBox="0 0 26 24"  xmlns="http://www.w3.org/2000/svg">
<path d="M13 0L15.9187 8.98278H25.3637L17.7225 14.5344L20.6412 23.5172L13 17.9656L5.35879 23.5172L8.27747 14.5344L0.636266 8.98278H10.0813L13 0Z" fill="#2E2E2E"/>
</svg>
</h3>
                  <div>
                    <h3>${a.point}</h3>
                    <span class="subtext">(${a.person})</span>
                  </div>
                </div>
                <div class="main-grid_price">
                  <div class="main-grid_btn">
                    <span class="highlight">${a.price}</span>
                  </div>
                </div>
            </div>
            </div>
          </div>`;
    gridSlide.insertAdjacentHTML("beforeend", items);
  }

  function openTab(index) {
    mainTab.forEach((tab) => {
      tab.classList.remove("on");
    });
    mainTab[index].classList.add("on");
  }

  categoryTab.forEach((item) => {
    item.addEventListener("click", function (e) {
      categoryTab.forEach((item) => {
        item.classList.remove("on");
      });
      this.classList.add("on");
    });
  });

  mainTab.forEach((tab) => {
    tab.addEventListener("click", function (e) {
      openTab(e.currentTarget.dataset.id);

      if (mainTab[2] == this) {
        regionContainer.style.visibility = "visible";
      } else {
        regionContainer.style.visibility = "hidden";
      }
    });
  });
});

//슬라이드 기능

const slideWrap = document.querySelectorAll(".slide-wrap");
let redWine = [
  {
    id: 0,
    name: "Cartuxa Pêra-Manca Tinto 2005",
    image: "../wines/cartuxa.png",
    flavor: "plum, blackberry, vanilla",
    price: "29,000",
  },
  {
    id: 1,
    name: "Quintarelli Giuseppe Classico 2000",
    image: "../wines/quin.png",
    flavor: "chocolate, violet, jam",
    price: "16,000",
  },
  {
    id: 2,
    name: "Château Haut-Brion Pessac-Léognan  1990",
    image: "../wines/pess.png",
    flavor: "blackfruit, cherry, mint",
    price: "19,000",
  },
  {
    id: 3,
    name: "Casa Ferreirinha Barca Velha Douro 1999",
    image: "../wines/barca.png",
    flavor: "oak, red fruit, prune",
    price: "24,000",
  },
  {
    id: 4,
    name: "Château La Mission Haut-Brion Pessac-Léognan 1989",
    image: "../wines/leog.png",
    flavor: "cassis, raspberry, fig",
    price: "32,000",
  },
  {
    id: 5,
    name: "Masseto Toscana 2007",
    image: "../wines/masseto.png",
    flavor: "chochlate, blackberry, truffles",
    price: "24,000",
  },
  {
    id: 6,
    name: "Harlan Estate Red 2016",
    image: "../wines/harlan.png",
    flavor: "oak, blackberry, blackcurrant",
    price: "17,000",
  },
  {
    id: 7,
    name: "Legado Douro Tinto 2015",
    image: "../wines/douro.png",
    flavor: "oak, plum, cinnamon",
    price: "38,000",
  },
  {
    id: 8,
    name: "Scarecrow Cabernet Sauvignon 2016 United",
    image: "../wines/scare.png",
    flavor: "cassis, pepper, cherry",
    price: "102,000",
  },
  {
    id: 9,
    name: "Viña Cobos Cobos Volturno 2016",
    image: "../wines/cobos.png",
    flavor: "chocolate, cherry, cocoa",
    price: "23,000",
  },
];

let whiteWine = [
  {
    id: 0,
    name: "Whitehaven Sauvignon Blanc 2024",
    image: "../wines/heaven.png",
    flavor: "grapefruit, pear, citrus",
    price: "26,000",
  },
  {
    id: 1,
    name: "Pascal Jolivet Sancerre Blanc 2024",
    image: "../wines/pascal.png",
    flavor: "green apple, honey, gooseberry",
    price: "51,000",
  },
  {
    id: 2,
    name: "Mer Soleil Reserve Chardonnay 2023",
    image: "../wines/mersole.png",
    flavor: "butter, apple, tropical",
    price: "51,000",
  },
  {
    id: 3,
    name: "The Crossings Sauvignon Blanc 2024",
    image: "../wines/cross.png",
    flavor: "citrus, passion fruit, peach",
    price: "25,000",
  },
  {
    id: 4,
    name: "Babich Sauvignon Blanc 2024",
    image: "../wines/babich.png",
    flavor: "lime, pineapple, green apple",
    price: "32,000",
  },
  {
    id: 5,
    name: "Louis Latour Pouilly-Fuissé 2023",
    image: "../wines/latour.png",
    flavor: "pear, lemon, butter",
    price: "52,000",
  },
  {
    id: 6,
    name: "Tramin Nussbaumer Gewürztraminer 2023",
    image: "../wines/tramin.png",
    flavor: "lychee, honey, melon",
    price: "66,000",
  },
  {
    id: 7,
    name: "Schmitt Söhne Riesling Relax 2023",
    image: "../wines/schmitt.png",
    flavor: "apple, lemon, honey",
    price: "17,000",
  },
  {
    id: 8,
    name: "Abbazia di Novacella Kerner 2024",
    image: "../wines/abbazia.png",
    flavor: "peach, lemon, honey",
    price: "41,000",
  },
  {
    id: 9,
    name: "J. Moreau & Fils Chablis 2021",
    image: "../wines/fils.png",
    flavor: "citrus, apple, honey",
    price: "50,000",
  },
];

let champaigne = [
  {
    id: 0,
    name: "Veuve Clicquot Brut Champagne N.V.",
    image: "../wines/veuve.png",
    flavor: "apple, citrus, brioche",
    price: "88,000",
  },
  {
    id: 1,
    name: "Bollinger Special Cuvée Brut Aÿ Champagne N.V.",
    image: "../wines/boll.png",
    flavor: "pear, toast, citrus",
    price: "102,000",
  },
  {
    id: 2,
    name: "Laurent-Perrier La Cuvée Brut Champagne N.V",
    image: "../wines/cuvee.png",
    flavor: "citrus, apple, brioche",
    price: "73,000",
  },
  {
    id: 3,
    name: "Taittinger Brut Champagne N.V.",
    image: "../wines/tait.png",
    flavor: "green apple, citrus, toast",
    price: "64,000",
  },
  {
    id: 4,
    name: "Perrier-Jouët Grand Brut Champagne N.V.",
    image: "../wines/errier.png",
    flavor: "peach, citrus, almond",
    price: "102,000",
  },
  {
    id: 5,
    name: "Pol Roger Réserve Brut Champagne N.V.",
    image: "../wines/pol.png",
    flavor: "apple, biscuit, citrus",
    price: "100,000",
  },
  {
    id: 6,
    name: "Pommery Royal Brut Champagne N.V.",
    image: "../wines/pomm.png",
    flavor: "apple, almond, citrus",
    price: "75,000",
  },
  {
    id: 7,
    name: "G.H. Mumm Brut Champagne N.V.",
    image: "../wines/mumm.png",
    flavor: "green apple, citrus, toast",
    price: "73,000",
  },
  {
    id: 8,
    name: "Billecart-Salmon Brut Réserve Champagne N.V.",
    image: "../wines/salmon.png",
    flavor: "apple, brioche, citrus",
    price: "95,000",
  },
  {
    id: 9,
    name: "Deutz Classic Brut Champagne N.V.",
    image: "../wines/deutz.png",
    flavor: "apple, citrus, toast",
    price: "73,000",
  },
];
const slideBox = document.querySelectorAll(".slide-box");

function addSlide(a, i) {
  let slide = `<div class="slide-item">
                  <div class="slide-item_img">
                  <img src="${a.image}">
                  </div>
                  <div class="slide-item_text">
                    <h3>${a.name}</h3>
                    <p>${a.flavor}</p>
                  </div>
                    <div class="slide-item_btn">
                      <span class="subtext">${a.price}</span>
                      </div>
                         </div>
                   `;

  slideBox[i].insertAdjacentHTML("beforeend", slide);
}

redWine.forEach((a) => {
  addSlide(a, 0);
});

whiteWine.forEach((a) => {
  addSlide(a, 1);
});

champaigne.forEach((a) => {
  addSlide(a, 2);
});

const prevBtn = document.querySelectorAll(".prev-btn");
const nextBtn = document.querySelectorAll(".next-btn");
let count = Array(nextBtn.length).fill(0);

function slideWidth() {
  if (window.innerWidth > 1440) {
    return 431;
  } else if (window.innerWidth > 1024) {
    return 305;
  } else if (window.innerWidth > 768) {
    return 226;
  } else {
    return 226;
  }
}

nextBtn.forEach((btn, i) => {
  btn.addEventListener("click", function () {
    if (count[i] < 8) {
      count[i]++;
      let next = slideWidth() * count[i];
      slideBox[i].style.transform = `translateX(-${next}px)`;
    }
  });
});

prevBtn.forEach((btn, i) => {
  btn.addEventListener("click", function () {
    if (count[i] > 0) {
      count[i]--;
      let prev = count[i] * slideWidth();
      slideBox[i].style.transform = `translateX(-${prev}px)`;
    }
  });
});

// region-container가 사라질때 0.3초 딜레이발생

// 이메일 정규식
const subscribeText = document.querySelector(".subscribe-text");
const subscribeBtn = document.querySelector(".subscribe");
subscribeText.addEventListener("input", function () {
  if (/\S+@\S+\.\S+/.test(subscribeText.value)) {
    subscribeBtn.style.cursor = "pointer";
    subscribeBtn.style.backgroundColor = "rgba(176, 58, 72, 0.66)";
  } else {
    subscribeBtn.style.cursor = "not-allowed";
    subscribeBtn.style.backgroundColor = "#2e2e2e";
  }
}); // DOM
