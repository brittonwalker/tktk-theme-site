/**
 * Header.js
 */

import Swiper, { Navigation, Pagination, EffectFade } from 'swiper';
Swiper.use([Navigation, Pagination, EffectFade])

const DEFAULT_CONFIG = {
	direction: 'horizontal',
	observer: true,
	loop: false,
	slidesPerView: 'auto',
	spaceBetween: 24,
	autoHeight: false,
}

const CENTER_CONFIG = {
	spaceBetween: 24,
	centeredSlides: true,
	slidesPerView: 'auto',
	loop: true,
}

const CONFIGS = [
	{ 
		name: 'default', 
		config: DEFAULT_CONFIG ,
	},
	{ 
		name: 'centered', 
		config: CENTER_CONFIG ,
	},
]
class Slideshow {
	constructor() {
		this.slideshows = [...document.querySelectorAll('.slideshow')];
		if (!this.slideshows.length) return;
		this.init();
	}
	init() {
		this.slideshows.map((slideshow) => {
			const el = slideshow.querySelector('.swiper');
			const slideshowData = slideshow.dataset;
			const controls = slideshow.querySelector('.swiper-controls');
			const config = this.handleConfig(slideshowData);
			if (controls) {
				config.navigation = {
					nextEl: controls.querySelector('.swiper-button-next'),
					prevEl: controls.querySelector('.swiper-button-prev'),
				};
				config.pagination = {
					el: controls.querySelector('.swiper-pagination'),
					type: 'bullets',
				}
			}
			new Swiper(el, config);
		})
	}
	handleConfig(data) {
		let { slideshowType: type = 'default', slideshowLoop } = data;
		let { config } = CONFIGS.find(({ name }) => name === type );
		return config;
	}
}

new Slideshow();