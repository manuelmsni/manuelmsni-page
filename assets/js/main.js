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

});

$(document).ready(function () {
	setInterval(time, 1000);
});

function time() {
    	var now = new Date();
	var month = now.getMonth() + 1;
	var actualMonth = month;
	if (actualMonth > 10) {
		var realMonth = "0" + actualMonth;
	} else {
		var realMonth = month;
	}
	var time = "Fecha: " + now.getDay() + "/" + realMonth + "/" + now.getFullYear() + " Hora: " + now.getHours() + ":" + now.getMinutes() + ":" + now.getSeconds();
	document.getElementById('date').innerHTML = time;	
};

