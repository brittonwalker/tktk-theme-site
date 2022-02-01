/**
 * Run.js
 */

import './Header';
import Slideshow from './Slideshows';
import Banner from './Banner';
import Modal from './Modal';
import CodeTabs from './CodeTabs';
import ProgressBar from './ProgressBar';
import Drawer from './Drawer';
import Toast from './Toast';
import Accordions from './Accordion';
import Video from './Video';
import CodeHighlight from './CodeHighlight';
import ScrollAnimations from './ScrollAnimation';

export default class Run {
	constructor() {
		this.init();
	}
	init() {
		new Video();
		new Slideshow();
		new CodeHighlight();
		new Accordions();
		new CodeTabs();
		new Drawer();
		new Toast();
		new ProgressBar();
		new Banner();
		new Modal();
		new ScrollAnimations();
	}
}