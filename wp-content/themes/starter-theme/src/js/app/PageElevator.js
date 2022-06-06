/**
 * PageElevator.js
 */

import { gsap, Sine } from 'gsap';

export default class PageElevator {
  constructor() {
    this.el = document.querySelector('.page-elevator');
    if (!this.el) return;
    this.init();
  }

  init() {
    this.setArrowPosition();
    window.addEventListener('scroll', () => this.onScroll());
    window.addEventListener('resize', () => this.setArrowPosition());
    this.el.addEventListener('click', () => this.scrollToTop());
  }

  setArrowPosition() {
    const container = document.querySelector('.container');
    const { right } = container.getBoundingClientRect();
    const { width } = this.el.getBoundingClientRect();
    gsap.set(this.el, {
      position: 'fixed',
      bottom: '48px',
      left: right - width,
      zIndex: 50,
      opacity: 0,
    });
  }

  onScroll() {
    if (scrollY > 800) {
      gsap.to(this.el, { opacity: 1, duration: 0.3 });
    } else {
      gsap.to(this.el, { opacity: 0, duration: 0.3 });
    }
  }

  scrollToTop() {
    window.scrollTo(0, 0);
  }
}
