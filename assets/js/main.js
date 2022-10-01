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
	var path = require('path');
    var appDir = path.dirname(require.main.filename);

	$('#header').load('../bits/header.html');
	$('#footer').load('../bits/footer.html');
};

function loadHTML(elementId, path) {
	$(`#${elementId}`).load(`${path}`);
}
