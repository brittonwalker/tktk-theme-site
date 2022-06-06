/**
 * Header.js
 */

import Headroom from 'headroom.js';

class Header {
  constructor() {
    this.el = document.querySelector('header');
    this.init();
  }

  init() {
    const headroom = new Headroom(this.el);
    headroom.init();
  }
}

new Header();
