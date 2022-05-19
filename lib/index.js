import playerjs from "player.js";
const DEVELOPMENTBASEURL = "https://origin-embed.dev.lvn.org";
const PRODUCTIONBASEURL = "https://origin-embed.lvn.org";
export class HighlightPlayer {
    constructor(options) {
        var _a, _b;
        const { containerId, highlightId, highlightOptions, onReady } = options;
        const rootElement = window.document.getElementById(containerId);
        if (rootElement) {
            this.isPlaying = false;
            this.isInitialized = false;
            // Set values for embed
            let srcBase = "";
            if (highlightOptions === null || highlightOptions === void 0 ? void 0 : highlightOptions.src) {
                srcBase = highlightOptions === null || highlightOptions === void 0 ? void 0 : highlightOptions.src;
            }
            else if ((highlightOptions === null || highlightOptions === void 0 ? void 0 : highlightOptions.environment) == "dev") {
                srcBase = DEVELOPMENTBASEURL;
            }
            else {
                srcBase = PRODUCTIONBASEURL;
            }
            const highlightParam = `hid=${highlightId}`;
            const typeParam = (highlightOptions === null || highlightOptions === void 0 ? void 0 : highlightOptions.type) === "minimal" ? `&type=minimal` : "";
            const fontSizeParam = (highlightOptions === null || highlightOptions === void 0 ? void 0 : highlightOptions.fontSize)
                ? `&fsz=${encodeURIComponent(highlightOptions === null || highlightOptions === void 0 ? void 0 : highlightOptions.fontSize)}`
                : "";
            const fontWeightParam = (highlightOptions === null || highlightOptions === void 0 ? void 0 : highlightOptions.fontWeight)
                ? `&fwt=${encodeURIComponent(highlightOptions === null || highlightOptions === void 0 ? void 0 : highlightOptions.fontWeight)}`
                : "";
            const fontFamilyParam = (highlightOptions === null || highlightOptions === void 0 ? void 0 : highlightOptions.fontFamily)
                ? `&ffm=${encodeURIComponent(highlightOptions === null || highlightOptions === void 0 ? void 0 : highlightOptions.fontFamily)}`
                : "";
            const italicsParam = (highlightOptions === null || highlightOptions === void 0 ? void 0 : highlightOptions.italics)
                ? `&ital=${encodeURIComponent(highlightOptions === null || highlightOptions === void 0 ? void 0 : highlightOptions.italics)}`
                : "";
            const highlightColorParam = (highlightOptions === null || highlightOptions === void 0 ? void 0 : highlightOptions.highlightColor)
                ? `&hic=${encodeURIComponent(highlightOptions === null || highlightOptions === void 0 ? void 0 : highlightOptions.highlightColor)}`
                : "";
            const textColorParam = (highlightOptions === null || highlightOptions === void 0 ? void 0 : highlightOptions.textColor)
                ? `&txc=${encodeURIComponent(highlightOptions === null || highlightOptions === void 0 ? void 0 : highlightOptions.textColor)}`
                : "";
            const backgroundColorParam = (highlightOptions === null || highlightOptions === void 0 ? void 0 : highlightOptions.backgroundColor)
                ? `&bgc=${encodeURIComponent(highlightOptions === null || highlightOptions === void 0 ? void 0 : highlightOptions.backgroundColor)}`
                : "";
            const scrollingParam = (highlightOptions === null || highlightOptions === void 0 ? void 0 : highlightOptions.scrolling)
                ? `&scroll=${encodeURIComponent(highlightOptions === null || highlightOptions === void 0 ? void 0 : highlightOptions.scrolling)}`
                : "";
            // Create Iframe
            const iframe = document.createElement("iframe");
            iframe.src = `${srcBase}/?${highlightParam}${typeParam}${fontSizeParam}${fontWeightParam}${fontFamilyParam}${italicsParam}${highlightColorParam}${backgroundColorParam}${textColorParam}${scrollingParam}`;
            // Default width and height to size of card, or adjust if minimal type is asked for
            iframe.width = "570px";
            iframe.height = "220px";
            if ((highlightOptions === null || highlightOptions === void 0 ? void 0 : highlightOptions.type) === "minimal") {
                iframe.width = (_a = highlightOptions === null || highlightOptions === void 0 ? void 0 : highlightOptions.width) !== null && _a !== void 0 ? _a : "100%";
                iframe.height = (_b = highlightOptions === null || highlightOptions === void 0 ? void 0 : highlightOptions.height) !== null && _b !== void 0 ? _b : "100%";
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
        }
        else {
            console.error(`The element with id, ${containerId}, was not fond`);
        }
    }
    // Setting up playerJS functionality. The spect can be found here
    // https://github.com/embedly/player.js/blob/master/src/player.js
    onLoad(e, onReady = () => {
        return;
    }) {
        try {
            const player = new playerjs.Player(e.target);
            player.on("ready", () => {
                onReady(player);
                this.isInitialized = true;
            });
            this.player = player;
        }
        catch (err) {
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
    getPaused(callback) {
        this.player.getPaused(callback);
    }
    mute() {
        this.player.mute();
    }
    unmute() {
        this.player.unmute();
    }
    getMuted(callback) {
        this.player.getMuted(callback);
    }
    setVolume(value) {
        this.player.setVolume(value);
    }
    getVolume(callback) {
        this.player.getVolume(callback);
    }
    getDuration(callback) {
        this.player.getDuration(callback);
    }
    setCurrentTime(value) {
        this.player.setCurrentTime(value);
    }
    getCurrentTime(callback) {
        this.player.getCurrentTime(callback);
    }
    setLoop(value) {
        this.player.setLoop(value);
    }
    getLoop(callback) {
        this.player.getLoop(callback);
    }
    removeEventListener(event, callback) {
        this.player.removeEventListener(event, callback);
    }
    addEventListener(event, callback) {
        this.player.addEventListener(event, callback);
    }
    on(event, callback) {
        this.player.on(event, callback);
    }
    off(event, callback) {
        this.player.off(event, callback);
    }
    getIsPlaying() {
        return this.isPlaying;
    }
}
