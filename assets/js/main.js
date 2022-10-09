// Toggle .header-scrolled class to #header when page is scrolled
$(window).scroll(function () {
  if ($(this).scrollTop() > 50) {
    $('#Header').addClass('header-scrolled');
  } else {
    $('#Header').removeClass('header-scrolled');
  }
});

if ($(window).scrollTop() > 50) {
  $('#Header').addClass('header-scrolled');
}

function ShowHide(ShowClass, HideClass) {
  $(`.${ShowClass}`).fadeIn('slow');
  $(`.${HideClass}`).hide();
}

function loadHTML(elementId, path) {
  $(`#${elementId}`).load(`${path}`);
}

window.onload = () => {
  loadHTML('Header', '../../../../../../assets/bits/header.html');
  loadHTML('Footer', '../../../../../../assets/bits/footer.html');
};

function instagram() {
  url= "https://www.instagram.com/manuelmsni";
  window.open(url, '_blank').focus();
}

// Hamburguer

function hamburguer() {
  var el = document.querySelector(".nav-cross");
  var nav = document.querySelector(".nav");
  var outerclick = document.querySelector("#outerClickAux");
  if (el.classList.contains("active")) {
    outerclick.classList.add("no");
    el.classList.remove("active");
    nav.classList.remove("nav-active");
  }
  else {
    outerclick.classList.remove("no");
    el.classList.add("active");
    nav.classList.add("nav-active");
  }
}

function outerClick() {
  var el = document.querySelector(".nav-cross");
  var nav = document.querySelector(".nav");
  var outerclick = document.querySelector("#outerClickAux");
  if (el.classList.contains("active")) {
    outerclick.classList.add("no");
    el.classList.remove("active");
    nav.classList.remove("nav-active");
  }
  else { }
}
