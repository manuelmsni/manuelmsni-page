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
	now.setMonth(month);
	
	var horas = now.getHours();
	var minutos = now.getMinutes();
	var segundos = now.getSeconds();
	
	var dia = now.getDate();
	var mes = ("0" + now.getMonth()).slice(-2);
	var amo = now.getFullYear();

	var time = "Fecha: " + dia + "/" + mes + "/" + amo + " Hora: " + horas + ":" + minutos + ":" + segundos;
	document.getElementById('date').innerHTML = time;	
	
	
	var day = now.getUTCDay() + 4;
	
	if (day == 0) {
		 $('.lunes').addClass('active');
	} if (day == 1) {
		$('.martes').addClass('active');
	} if (day == 2) {
		$('.miercoles').addClass('active');
	} if (day == 3) {
		$('.jueves').addClass('active');
	} if (day == 4) {
		$('.viernes').addClass('active');
	}
};

