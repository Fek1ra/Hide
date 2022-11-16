const select = document.querySelector('select');
const allLang = ['en', 'ua', 'ru'];


select.addEventListener('change', changeURLLanguage);

function changeURLLanguage() {
	let lang = select.value;
	location.href = window.location.pathname + '#' + lang;
	location.reload();
}

function changeLanguage() {
	let hash = window.location.hash;
	hash = hash.substr(1);
	console.log(hash);
	if (!allLang.includes(hash)) {
		location.href = window.location.pathname + '#en';
		location.reload();
	}
	select.value = hash;
	document.querySelector('title').innerHTML = langArr['unit'][hash];
	// document.querySelector('.lng-chip').innerHTML = langArr['chip'][hash];
	for (let key in langArr) {
		let elem = document.querySelectorAll('.lng-' + key);
		elem.forEach(el => el.innerHTML = langArr[key][hash]);
	}
}

changeLanguage();

var language = window.navigator ? (window.navigator.language ||
                  window.navigator.systemLanguage ||
                  window.navigator.userLanguage) : "ru";
language = language.substr(0, 2).toLowerCase();

window.onscroll = function() {myFunction()};

var header = document.getElementById("fixed-navbar");
var sticky = header.offsetTop;

function myFunction() {
  if (window.pageYOffset >= sticky) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
}
