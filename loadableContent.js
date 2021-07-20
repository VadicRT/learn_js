document.addEventListener('scroll', e => {
	let content = createDate(getScrollHeigth());
	if (pageYOffset + document.documentElement.clientHeight >= getScrollHeigth() - 100) {
		document.body.append(content);
	}
	let bottom = document.documentElement.getBoundingClientRect().bottom;
	let top = document.documentElement.getBoundingClientRect().top;
	console.log('top: ' + top);
	console.log('bottom: ' + bottom);
});

function getScrollHeigth() {
	return scrollHeight = Math.max(
		document.body.scrollHeight, document.documentElement.scrollHeight,
		document.body.offsetHeight, document.documentElement.offsetHeight,
		document.body.clientHeight, document.documentElement.clientHeight
		);
}

function createDate(top) {
	let date = new Date();
	let dateScting = 'Date: ' + date;
	let div = document.createElement('div');
	div.textContent = dateScting;
	div.style.cssText = `
	position: absolute;
	left: 0px;
	top: ${top}px;
	`;
	return div;
}