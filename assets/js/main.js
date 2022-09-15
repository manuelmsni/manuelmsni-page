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
	let rgbText, nodes, hues;
	
	rgbText = document.querySelector(".rgb");

	rgbText.innerHTML = [].slice
		.call(rgbText.innerHTML)
		.map(c => `<span>${c}</span>`)
		.join("");

	nodes = document.querySelectorAll(".rgb span");
	hues = [];

	nodes.forEach((c, i) => {
		hues.push(Math.round(i * (360 / nodes.length)));
	});
	
	(function loop() {
		hues.forEach((h, i, _this) => {
			_this[i]--;
			nodes[i].style.color = `hsl(${_this[i]},100%,50%)`;
		});
		window.requestAnimationFrame(loop);
	})();
};


function showColorTable() {
	

	
};


$(document).ready(function () {
	var now = new Date();
	var time = now.getHours() + ":" + now.getMinutes() + ":" + now.getSeconds();
	document.getElementById('date').innerHTML = time;
});




