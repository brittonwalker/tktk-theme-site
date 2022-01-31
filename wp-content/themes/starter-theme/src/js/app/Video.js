/**
 * Video.js
 */

import Plyr from 'plyr';

const DEFAULT_CONFIG = {
	controls: ['play-large', 'play', 'progress', 'current-time', 'mute', 'volume', 'fullscreen'],
	storage: false,
}

export default class Video {
	constructor() {
		this.players = document.querySelectorAll('.video-player')
		if (!this.players) return;
		this.init();
	}
	init() {
		this.players.forEach((element) => {
			const player = element.querySelector('.video-player__embed');
			const video = new Plyr(player, this.getConfig(player));
			video.config.muted = true;
		})
	}
	getConfig(el) {
		const isBackground = el.classList.contains('js-is-background');
		const newConfig = {
			...DEFAULT_CONFIG,
			muted: isBackground,
			autoplay: isBackground,
			playsinline: isBackground,
			clickToPlay: !isBackground,
			loop: {
				active: isBackground
			},
		}
		if (isBackground) {
			newConfig.controls = false;
		}

		return newConfig;
	}
}