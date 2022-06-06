/**
 * Run.js
 */

import './Header';
import Accordions from './Accordion';
import Banner from './Banner';
import CodeHighlight from './CodeHighlight';
import CodeTabs from './CodeTabs';
import Drawer from './Drawer';
import FadeIn from './FadeIn';
import FadeInText from './FadeInText';
import Modal from './Modal';
import PageElevator from './PageElevator';
import ProgressBar from './ProgressBar';
import ScrollAnimations from './ScrollAnimation';
import Slideshow from './Slideshows';
import TextLinesReveal from './TextLinesReveal';
import Toast from './Toast';
import Video from './Video';

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
    new PageElevator();
    new FadeIn();
  }
}
