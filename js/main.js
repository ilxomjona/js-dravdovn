const elMenuLink = document.querySelectorAll('.menu__link');
const elButton = document.querySelectorAll('.fax__top');
elMenuLink.forEach(item => {
	item.addEventListener('click', () => {
		elMenuLink.forEach(i => i.classList.remove('menu__link-active'));
		item.classList.add('menu__link-active');
	});
});

// ELTOP
elButton.forEach((e, index) => {
	e.addEventListener('click', () => {
		let elButtonNext = e.nextElementSibling;
		// console.log(elButtonNext);
		elButton.forEach((i, index2) => {
			if (index2 !== index) {
				i.nextElementSibling.classList.remove('visable');
			}
		});
		elButtonNext.classList.toggle('visable');
	});
});
