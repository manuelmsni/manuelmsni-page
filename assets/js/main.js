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



$(document).ready(function () {
	setInterval(time, 1000);
	tableHeight();
});

window.onresize = function() {
	tableHeight();
}

function tableHeight() {
	ancho = $("div").width();
	altura = (ancho) * (258/1406);
	$("body").css("--altura-horario", altura+"px");
}


function time() {
    	var now = new Date();
	var month = now.getMonth() + 1;
	now.setMonth(month);
	
	var horas = ("0" + now.getHours()).slice(-2);
	var minutos = ("0" + now.getMinutes()).slice(-2);
	var segundos = ("0" + now.getSeconds()).slice(-2);
	
	var dia = ("0" + now.getDate()).slice(-2);
	var mes = ("0" + now.getMonth()).slice(-2);
	var amo = ("0" + now.getFullYear()).slice(-4);

	var time = "Fecha: " + dia + "/" + mes + "/" + amo + " - Hora: " + horas + ":" + minutos + ":" + segundos;
	document.getElementById('date').innerHTML = time;	
	
	
	var day = now.getUTCDay() + 4;
	
	
	//Test
	day = 3;
	horas = 20;
	minutos = 30;
	
	if ( day < 5) {
		
		var decimalTime = horas + (minutos/100);
		var tt = 0;
		var td = 0;
		
		if (day == 0) {
			$('.a').addClass('active');
			var dd = "a";
		} if (day == 1) {
			$('.b').addClass('active');
			var dd = "b";
		} if (day == 2) {
			$('.c').addClass('active');
			var dd = "c";
		} if (day == 3) {
			$('.d').addClass('active');
			var dd = "d";
		} if (day == 4) {
			$('.e').addClass('active');
			var dd = "e";
		}
		
		if ( 16.00 <= decimalTime && decimalTime < 21.45) {
		
			if (16.00 <= decimalTime && decimalTime < 16.50) {
				// Hora 1
				var tt = 1;
			} if (16.50 <= decimalTime && decimalTime < 16.55) {
				// Descanso 1
				var tb = 1;
			} if (16.55 <= decimalTime && decimalTime < 17.45) {
				// Hora 2
				var tt = 2;
			} if (17.45 <= decimalTime && decimalTime < 17.50) {
				// Descanso 2
				var tb = 2;
			} if (17.50 <= decimalTime && decimalTime < 18.40) {
				//Hora 3
				var tt = 3;
			} if (18.40 <= decimalTime && decimalTime < 19.05) {
				// Recreo
				var tt = 4;
			} if (19.05 <= decimalTime && decimalTime < 19.55) {
				//Hora 4
				var tt = 5;
			} if (19.55 <= decimalTime && decimalTime < 20.00) {
				// Descanso 3
				var tb = 3;
			} if (20.00 <= decimalTime && decimalTime < 20.50) {
				//Hora 5
				var tt = 6;
			} if (20.50 <= decimalTime && decimalTime < 20.55) {
				// Descanso 4
				var tb = 4;
			} if (20.55 <= decimalTime && decimalTime < 21.45) {
				//Hora 6
				var tt = 7;
			}
			
			if (0 < tt) {
				var code = dd + tt;
				$('.' + code).addClass('active');
				$('.t' + tt).addClass('active');
			} if (0 < tb) {
				var code = dd + "s" + tb;
				$('.' + code).addClass('activeBorder');
				$('.t' + tb).addClass('activeBorder');
			}
		}	
	}

};

