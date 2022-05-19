import { HighlightOptions, playerjsEVENTS } from "./types";
import playerjs from "player.js";

const DEVELOPMENTBASEURL = "https://origin-embed.dev.lvn.org";

const PRODUCTIONBASEURL = "https://origin-embed.lvn.org";

export class HighlightPlayer {
  player: playerjs.Player;
  isPlaying: boolean;
  isInitialized: boolean;
  iframe: HTMLIFrameElement;

  constructor(options: {
    containerId: string;
    highlightId: number;
    highlightOptions?: HighlightOptions;
    onReady?: (player: playerjs.Player) => void;
  }) {
    const { containerId, highlightId, highlightOptions, onReady } = options;
    const rootElement = window.document.getElementById(containerId);
    if (rootElement) {
      this.isPlaying = false;
      this.isInitialized = false;

      // Set values for embed
      let srcBase = "";
      if (highlightOptions?.src) {
        srcBase = highlightOptions?.src;
      } else if (highlightOptions?.environment == "dev") {
        srcBase = DEVELOPMENTBASEURL;
      } else {
        srcBase = PRODUCTIONBASEURL;
      }
      const highlightParam = `hid=${highlightId}`;
      const typeParam =
        highlightOptions?.type === "minimal" ? `&type=minimal` : "";
      const fontSizeParam = highlightOptions?.fontSize
        ? `&fsz=${encodeURIComponent(highlightOptions?.fontSize)}`
        : "";
      const fontWeightParam = highlightOptions?.fontWeight
        ? `&fwt=${encodeURIComponent(highlightOptions?.fontWeight)}`
        : "";
      const fontFamilyParam = highlightOptions?.fontFamily
        ? `&ffm=${encodeURIComponent(highlightOptions?.fontFamily)}`
        : "";
      const italicsParam = highlightOptions?.italics
        ? `&ital=${encodeURIComponent(highlightOptions?.italics)}`
        : "";
      const highlightColorParam = highlightOptions?.highlightColor
        ? `&hic=${encodeURIComponent(highlightOptions?.highlightColor)}`
        : "";
      const textColorParam = highlightOptions?.textColor
        ? `&txc=${encodeURIComponent(highlightOptions?.textColor)}`
        : "";
      const backgroundColorParam = highlightOptions?.backgroundColor
        ? `&bgc=${encodeURIComponent(highlightOptions?.backgroundColor)}`
        : "";
      const scrollingParam = highlightOptions?.scrolling
        ? `&scroll=${encodeURIComponent(highlightOptions?.scrolling)}`
        : "";

      // Create Iframe
      const iframe = document.createElement("iframe");
      iframe.src = `${srcBase}/?${highlightParam}${typeParam}${fontSizeParam}${fontWeightParam}${fontFamilyParam}${italicsParam}${highlightColorParam}${backgroundColorParam}${textColorParam}${scrollingParam}`;

      // Default width and height to size of card, or adjust if minimal type is asked for
      iframe.width = "570px";
      iframe.height = "220px";
      if (highlightOptions?.type === "minimal") {
        iframe.width = highlightOptions?.width ?? "100%";
        iframe.height = highlightOptions?.height ?? "100%";
      }

      // Enforce no scrolling and no border on the highlight
      iframe.setAttribute("scrolling", "no");
      iframe.setAttribute("frameBoarder", "0");
      iframe.style.border = "none";
      iframe.style.overflow = "hidden";

      // Inject iframe into DOM
      iframe.allow = "autoplay";
      iframe.onload = (e) => this.onLoad(e, onReady);
      this.iframe = iframe;
      rootElement.replaceChildren(iframe);
    } else {
      console.error(`The element with id, ${containerId}, was not fond`);
    }
  }

  // Setting up playerJS functionality. The spect can be found here
  // https://github.com/embedly/player.js/blob/master/src/player.js

  onLoad(
    e,
    onReady: (player: playerjs.Player) => void = () => {
      return;
    }
  ) {
    try {
      const player = new playerjs.Player(e.target);
      player.on("ready", () => {
        onReady(player);
        this.isInitialized = true;
      });
      this.player = player;
    } catch (err) {
      console.error(err);
      console.error("This iframe is not compatible with playerjs");
    }
  }

  play() {
    this.player.play();
    this.isPlaying = true;
  }
  pause() {
    this.player.pause();
    this.isPlaying = false;
  }
  getPaused(callback: (value: boolean) => void) {
    this.player.getPaused(callback);
  }
  mute() {
    this.player.mute();
  }
  unmute() {
    this.player.unmute();
  }
  getMuted(callback: (value: boolean) => void) {
    this.player.getMuted(callback);
  }
  setVolume(value: number) {
    this.player.setVolume(value);
  }
  getVolume(callback: (value: number) => void) {
    this.player.getVolume(callback);
  }
  getDuration(callback: (value: number) => void) {
    this.player.getDuration(callback);
  }
  setCurrentTime(value: number) {
    this.player.setCurrentTime(value);
  }
  getCurrentTime(callback: (value: number) => void) {
    this.player.getCurrentTime(callback);
  }
  setLoop(value: boolean) {
    this.player.setLoop(value);
  }
  getLoop(callback: (value: boolean) => void) {
    this.player.getLoop(callback);
  }
  removeEventListener(event: playerjsEVENTS, callback: () => void) {
    this.player.removeEventListener(event, callback);
  }
  addEventListener(event: playerjsEVENTS, callback: () => void) {
    this.player.addEventListener(event, callback);
  }
  on(event: playerjsEVENTS, callback: () => void) {
    this.player.on(event, callback);
  }
  off(event: playerjsEVENTS, callback: () => void) {
    this.player.off(event, callback);
  }
  getIsPlaying() {
    return this.isPlaying;
  }
}
