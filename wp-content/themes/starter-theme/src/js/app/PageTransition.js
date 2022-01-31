/**
 * PageTransition.js
 */

import barba from '@barba/core';
import Run from './Run';
import { gsap, Sine } from 'gsap';

class PageTransition {
	constructor() {
		document.addEventListener('DOMContentLoaded', () => this.init());
	}
	init() {
		barba.init({
			debug: true,
			prevent: ({ el }) => {
				const isAdminLink = document.getElementById('wpadminbar') ? document.getElementById('wpadminbar').contains(el) : false;
				const isLogout = el.getAttribute('href').includes('wp-login.php?action=logout');
		
				return isAdminLink || isLogout;
			},
			transitions: [{
				name: 'default-transition',
				before(data) {
					const { trigger, current } = data;
					const { container } = current;
		
					if (typeof trigger === 'string') return;
		
					return gsap.to(data.current.container, {
						opacity: 0
					});

				},
		
				enter(data) {
					const { trigger } = data;
		
					console.log('hello')

					return gsap.fromTo(data.next.container, {
						opacity: 0
					}, {
						opacity: 1
					});
				},
		
				after: (data) => {
					const { trigger } = data;
		
					if (typeof trigger === 'string') {
						this.init();
						
						return;
					}
					
					if (!trigger.classList.contains('anim-trigger')) {
						this.init();
					} else {
						const { container } = data.next;
						const body = document.querySelector('body');
						const nav = container.querySelector('nav');
						
						setTimeout(() => {
							body.classList.remove('overflow-hidden');
							container.classList.remove('hide-children');
							nav.classList.remove('opacity-0');
		
							this.init();
						}, 350);
					}

					new Run();
		
					window.scrollTo(0, 0);
				}
			}]
		});
	}
}
new PageTransition();