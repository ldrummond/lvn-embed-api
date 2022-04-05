import playerjs from "player.js";

interface HighlightOptions {
  width?: string;
  height?: string;
  type?: "minimal" | "lvn";
  fontWeight?: string;
  fontSize?: string;
  highlightColor?: string;
  environment?: "dev" | "prod";
  src?: string;
}

const DEVELOPMENTBASEURL = "https://origin-embed.dev.lvn.org";

const PRODUCTIONBASEURL = "https://origin-embed.lvn.org";

export function HighlightPlayer(
  id: string,
  highlightId: number,
  options?: HighlightOptions
) {
  const rootElement = window.document.getElementById(id);
  if (rootElement) {
    this.isPlaying = false;
    this.isInitialized = false;

    // Set values for embed
    let srcBase = "";
    if (options?.src) {
      srcBase = options?.src;
    } else if (options?.environment == "dev") {
      srcBase = DEVELOPMENTBASEURL;
    } else {
      srcBase = PRODUCTIONBASEURL;
    }
    const highlightParam = `hid=${highlightId}`;
    const fontSizeParam = options?.fontSize
      ? `&fsz=${encodeURIComponent(options?.fontSize)}`
      : "";
    const fontWeightParam = options?.fontWeight
      ? `&fwt=${encodeURIComponent(options?.fontWeight)}`
      : "";
    const highlightColorParam = options?.highlightColor
      ? `&hic=${encodeURIComponent(options?.highlightColor)}`
      : "";
    const typeParam = options?.type === "minimal" ? `&type=minimal` : "";

    // Create Iframe
    const iframe = document.createElement("iframe");
    iframe.src = `${srcBase}/?${highlightParam}${typeParam}${fontSizeParam}${fontWeightParam}${highlightColorParam}`;
    iframe.width = options?.width ?? "100%";
    iframe.height = options?.height ?? "100%";

    // Enforce no scrolling and no border on the highlight
    iframe.setAttribute("scrolling", "no");
    iframe.setAttribute("frameBoarder", "0");
    iframe.style.border = "none";
    iframe.style.overflow = "hidden";

    // Inject iframe into DOM
    iframe.allow = "autoplay";
    iframe.onload = (e) => this.onLoad(e);
    this.iframe = iframe;
    rootElement.replaceChildren(iframe);
  } else {
    console.error(`The element with id, ${id}, was not fond`);
  }
}

HighlightPlayer.prototype.onLoad = function (e) {
  try {
    console.log(playerjs);
    const player = new playerjs.Player(e.target);
    player.on("ready", () => {
      this.isInitialized = true;
    });
    this.player = player;
  } catch (err) {
    console.error(err);
    console.error("This iframe is not ccompatible with playerjs");
  }
};

HighlightPlayer.prototype.play = function () {
  this.player.play();
  this.isPlaying = true;
};
HighlightPlayer.prototype.pause = function () {
  this.player.pause();
  this.isPlaying = false;
};
HighlightPlayer.prototype.getPaused = function () {
  return this.player.getPaused();
};
HighlightPlayer.prototype.mute = function () {
  this.player.mute();
};
HighlightPlayer.prototype.unmute = function () {
  this.player.unmute();
};
HighlightPlayer.prototype.getMuted = function () {
  return this.player.getMuted();
};
HighlightPlayer.prototype.setVolume = function (value: number) {
  this.player.setVolume(value);
};
HighlightPlayer.prototype.getVolume = function () {
  return this.player.getVolume();
};
HighlightPlayer.prototype.getDuration = function () {
  return this.player.getDuration();
};
HighlightPlayer.prototype.setCurrentTime = function (value: number) {
  this.player.setCurrentTime(value);
};
HighlightPlayer.prototype.getCurrentTime = function () {
  return this.player.getCurrentTime();
};
HighlightPlayer.prototype.setLoop = function (value: boolean) {
  this.player.setLoop(value);
};
HighlightPlayer.prototype.getLoop = function () {
  return this.player.getLoop();
};
HighlightPlayer.prototype.removeEventListener = function () {
  this.player.removeEventListener();
};
HighlightPlayer.prototype.addEventListener = function () {
  this.player.addEventListener();
};
HighlightPlayer.prototype.getIsPlaying = function () {
  return this.isPlaying;
};
