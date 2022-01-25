/**
 * Toast.js
 */


 class Toast {
	constructor() {
		this.trigger = document.querySelector('.js-toast-trigger');
		this.toast = document.querySelector('.toast');
		if (!this.trigger) return;
		this.init();
	}
	init() {
		this.trigger.addEventListener('click', () => this.handleToast())
	}
	handleToast() {
		if (this.toast.classList.contains('active')) {
			this.toast.classList.remove('active')
		} else {
			this.toast.classList.add('active')
		}
	}
}
new Toast();