document.getElementById('result').onclick = getRes;

getRes();

function getRes() {
	var menu = document.getElementsByClassName('menu');
	var c = 0;
	var k = 0;
	for (var i = 0; i < menu.length; i++) {
		if (menu[i].checked) {
			c += parseFloat(menu[i].getAttribute('data-cost'));
			k += parseFloat(menu[i].getAttribute('data-kkal'));
		}
	}
	document.getElementById('cost').innerHTML = c;
	document.getElementById('kkal').innerHTML = k;
}