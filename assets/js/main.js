// Toggle .header-scrolled class to #header when page is scrolled
$(window).scroll(function() {
    if ($(this).scrollTop() > 50) {
      $('#header').addClass('header-scrolled');
    } else {
      $('#header').removeClass('header-scrolled');
    }
  });

  if ($(window).scrollTop() > 50) {
    $('#header').addClass('header-scrolled');
  }

  function ShowHide(ShowClass, HideClass) {
    $(`.${ShowClass}`).fadeIn('slow');
    $(`.${HideClass}`).hide();
  }

window.onload = () => {
	$('#header').load('manuelmsni.com/assets/bits/header.html');
	$('#footer').load('manuelmsni.com/assets/bits/footer.html');
};




function loadHTML(elementId, path) {
	$(`#${elementId}`).load(`${path}`);
}
