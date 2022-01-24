/**
 * Header.js
 */

import Swiper, { Navigation, Pagination } from 'swiper';

class Slideshow {
	constructor() {
		this.init();
	}
	init() {
		const swiper = new Swiper('.swiper', {
			direction: 'horizontal',
			observer: true,
			loop: false,
			slidesPerView: 'auto',
			spaceBetween: 24,
			autoHeight: false,
		});
	}
}

new Slideshow();
