/**
 * Banner.js
 */

export default class Banner {
	constructor() {
		this.banners = [ ...document.querySelectorAll( '.banner' ) ];
		if ( ! this.banners ) {
			return;
		}
		this.init();
	}
	init() {
		this.banners.forEach( ( banner ) => {
			const bannerClose = banner.querySelector( '.banner__close' );
			banner.style.height = `${ banner.offsetHeight }px`;
			bannerClose.addEventListener( 'click', () => this.close( banner ) );
		} );
	}
	close( el ) {
		el.classList.add( 'banner--closed' );
		el.removeAttribute( 'style' );
	}
}
