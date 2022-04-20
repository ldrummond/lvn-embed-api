import playerjs from "player.js";
const DEVELOPMENTBASEURL = "https://origin-embed.dev.lvn.org";
const PRODUCTIONBASEURL = "https://origin-embed.lvn.org";
export class HighlightPlayer {
    constructor(id, highlightId, options) {
        var _a, _b;
        const rootElement = window.document.getElementById(id);
        if (rootElement) {
            this.isPlaying = false;
            this.isInitialized = false;
            // Set values for embed
            let srcBase = "";
            if (options === null || options === void 0 ? void 0 : options.src) {
                srcBase = options === null || options === void 0 ? void 0 : options.src;
            }
            else if ((options === null || options === void 0 ? void 0 : options.environment) == "dev") {
                srcBase = DEVELOPMENTBASEURL;
            }
            else {
                srcBase = PRODUCTIONBASEURL;
            }
            const highlightParam = `hid=${highlightId}`;
            const typeParam = (options === null || options === void 0 ? void 0 : options.type) === "minimal" ? `&type=minimal` : "";
            const fontSizeParam = (options === null || options === void 0 ? void 0 : options.fontSize)
                ? `&fsz=${encodeURIComponent(options === null || options === void 0 ? void 0 : options.fontSize)}`
                : "";
            const fontWeightParam = (options === null || options === void 0 ? void 0 : options.fontWeight)
                ? `&fwt=${encodeURIComponent(options === null || options === void 0 ? void 0 : options.fontWeight)}`
                : "";
            const fontFamilyParam = (options === null || options === void 0 ? void 0 : options.fontFamily)
                ? `&ffm=${encodeURIComponent(options === null || options === void 0 ? void 0 : options.fontFamily)}`
                : "";
            const italicsParam = (options === null || options === void 0 ? void 0 : options.italics)
                ? `&ital=${encodeURIComponent(options === null || options === void 0 ? void 0 : options.italics)}`
                : "";
            const highlightColorParam = (options === null || options === void 0 ? void 0 : options.highlightColor)
                ? `&hic=${encodeURIComponent(options === null || options === void 0 ? void 0 : options.highlightColor)}`
                : "";
            const textColorParam = (options === null || options === void 0 ? void 0 : options.textColor)
                ? `&txc=${encodeURIComponent(options === null || options === void 0 ? void 0 : options.textColor)}`
                : "";
            const backgroundColorParam = (options === null || options === void 0 ? void 0 : options.backgroundColor)
                ? `&bgc=${encodeURIComponent(options === null || options === void 0 ? void 0 : options.backgroundColor)}`
                : "";
            const scrollingParam = (options === null || options === void 0 ? void 0 : options.scrolling)
                ? `&scroll=${encodeURIComponent(options === null || options === void 0 ? void 0 : options.scrolling)}`
                : "";
            // Create Iframe
            const iframe = document.createElement("iframe");
            iframe.src = `${srcBase}/?${highlightParam}${typeParam}${fontSizeParam}${fontWeightParam}${fontFamilyParam}${italicsParam}${highlightColorParam}${backgroundColorParam}${textColorParam}${scrollingParam}`;
            // Default width and height to size of card, or adjust if minimal type is asked for
            iframe.width = "570px";
            iframe.height = "220px";
            if ((options === null || options === void 0 ? void 0 : options.type) === "minimal") {
                iframe.width = (_a = options === null || options === void 0 ? void 0 : options.width) !== null && _a !== void 0 ? _a : "100%";
                iframe.height = (_b = options === null || options === void 0 ? void 0 : options.height) !== null && _b !== void 0 ? _b : "100%";
            }
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
        }
        else {
            console.error(`The element with id, ${id}, was not fond`);
        }
    }
    onLoad(e) {
        try {
            const player = new playerjs.Player(e.target);
            player.on("ready", () => {
                this.isInitialized = true;
            });
            this.player = player;
        }
        catch (err) {
            console.error(err);
            console.error("This iframe is not ccompatible with playerjs");
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
    getPaused() {
        return this.player.getPaused();
    }
    mute() {
        this.player.mute();
    }
    unmute() {
        this.player.unmute();
    }
    getMuted() {
        return this.player.getMuted();
    }
    setVolume(value) {
        this.player.setVolume(value);
    }
    getVolume() {
        return this.player.getVolume();
    }
    getDuration() {
        return this.player.getDuration();
    }
    setCurrentTime(value) {
        this.player.setCurrentTime(value);
    }
    getCurrentTime() {
        return this.player.getCurrentTime();
    }
    setLoop(value) {
        this.player.setLoop(value);
    }
    getLoop() {
        return this.player.getLoop();
    }
    removeEventListener() {
        this.player.removeEventListener();
    }
    addEventListener() {
        this.player.addEventListener();
    }
    getIsPlaying() {
        return this.isPlaying;
    }
}
