$(document).ready(function () {
  let owl = $("#owl-demo");

  owl.owlCarousel({
    items: 3,
    itemsDesktop: [1000, 2],
    itemsDesktopSmall: [900, 2],
    itemsTablet: [600, 1],
    itemsMobile: false,
  });

  let owl_gallery = $("#owl-gallery");

  owl_gallery.owlCarousel({
    items: 3,
    itemsDesktop: [1000, 2],
    itemsDesktopSmall: [900, 2],
    itemsTablet: [600, 1],
    itemsMobile: false,
  });
  $(".next").click(function () {
    owl_gallery.trigger("owl.next");
  });
  $(".prev").click(function () {
    owl_gallery.trigger("owl.prev");
  });

  let owl_gallery_single = $("#owl-gallery-single");

  owl_gallery_single.owlCarousel({
    items: 1,
    itemsDesktop: [1000, 1],
    itemsDesktopSmall: [900, 1],
    itemsTablet: [600, 1],
    itemsMobile: Float32Array,
  });

  $(".next").click(function () {
    owl_gallery_single.trigger("owl.next");
  });
  $(".prev").click(function () {
    owl_gallery_single.trigger("owl.prev");
  });

  // owl-demo-single-sm
  let owl_single_sm = $("#owl-demo-single-sm");
  owl_single_sm.owlCarousel({
    items: 1,
  });
});

// nav hover function ovaright dropdown-menu
let dropDownLink = document.querySelectorAll("#dropDown-link");
let dropdownMenu = document.querySelectorAll(".dropdown-menu");

dropDownLink.forEach((element) => {
  element.addEventListener("mouseenter", function () {
    element.querySelector(".dropdown-menu").classList.add("show");
  });
  element.addEventListener("mouseleave", function () {
    element.querySelector(".dropdown-menu").classList.remove("show");
  });
});

//onload popup show
$(window).on("load", function () {
  setTimeout(() => {
    $(".modal").modal("show");
  }, 3000);
});

// onscroll animation
const scrollElements = document.querySelectorAll(".js-scroll");

const elementInView = (el, dividend = 1) => {
  const elementTop = el.getBoundingClientRect().top;

  return (
    elementTop <=
    (window.innerHeight || document.documentElement.clientHeight) / dividend
  );
};

const elementOutofView = (el) => {
  const elementTop = el.getBoundingClientRect().top;

  return (
    elementTop > (window.innerHeight || document.documentElement.clientHeight)
  );
};

const displayScrollElement = (element) => {
  element.classList.add("scrolled");
};

const hideScrollElement = (element) => {
  element.classList.remove("scrolled");
};

const handleScrollAnimation = () => {
  scrollElements.forEach((el) => {
    if (elementInView(el, 1.15)) {
      displayScrollElement(el);
    } else if (elementOutofView(el)) {
      //hideScrollElement(el);
    }
  });
};

window.addEventListener("scroll", () => {
  handleScrollAnimation();
  showTapToTop();
});

//tap to top btn
const tap_top_btn = document.querySelector(".tap-toTop");
function showTapToTop() {
  let posHight = document.documentElement.scrollHeight;
  let pos = window.scrollY;

  if (pos > posHight - 2500) {
    tap_top_btn.classList.add("active");
  } else {
    tap_top_btn.classList.remove("active");
  }
}

tap_top_btn.onclick = function () {
  document.documentElement.scrollTop = 0;
};

// home header select box
let select_box = document.querySelector(".floating-select");
select_box.onchange = () => {
  if (select_box.value == "kochi") {
    window.location.href = "/virtual-office-in-kochi.html";
  } else if (select_box.value == "delhi") {
    window.location.href = "/virtual-office-in-kochi.html";
  } else if (select_box.value == "bangalore") {
    window.location.href = "/virtual-office-in-kochi.html";
  } else if (select_box.value == "chennai") {
    window.location.href = "/virtual-office-in-kochi.html";
  }
};
