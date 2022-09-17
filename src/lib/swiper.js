import Swiper, { Navigation, Pagination } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
Swiper.use([Navigation, Pagination]);
export const redireccion = (id) => {
	alert('esta es la casa ' + id);
};

export const swiper = new Swiper('.swiper', {
	loop: true,
	pagination: {
		el: '.swiper-pagination',
		clickable: true,
	},
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	},
	on: {
		click: (swiper, e) => {
			redireccion(e.target.id);
		},
	},
});
