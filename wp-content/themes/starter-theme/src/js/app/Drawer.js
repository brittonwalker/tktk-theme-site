/**
 * Drawer.js
 */

export default class Drawer {
	constructor() {
		this.trigger = document.querySelector( '.js-drawer-trigger' );
		this.drawer = document.querySelector( '.drawer' );
		if ( ! this.trigger ) return;
		this.init();
	}
	init() {
		this.trigger.addEventListener( 'click', () => this.handleDrawer() );
	}
	handleDrawer() {
		if ( this.drawer.classList.contains( 'active' ) ) {
			this.drawer.classList.remove( 'active' );
		} else {
			this.drawer.classList.add( 'active' );
		}
	}
}
