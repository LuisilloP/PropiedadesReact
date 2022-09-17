window.addEventListener('scroll', () => {
	const header = document.querySelector('header');
	const fondo_header = document.querySelector('div .fondo-header');

	header.classList.toggle('sigue', window.scrollY > 0);
	fondo_header.classList.toggle('sigue', window.scrollY > 0);
});
