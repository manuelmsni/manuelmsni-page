// Toggle .header-scrolled class to #header when page is scrolled
$(window).scroll(function() {
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
