import { BooleanCallback, HighlightOptions, NumberCallback } from "./types";
import playerjs from "player.js";
export declare class HighlightPlayer {
    player: playerjs.Player;
    isPlaying: boolean;
    isInitialized: boolean;
    iframe: HTMLIFrameElement;
    constructor(id: string, highlightId: number, options?: HighlightOptions);
    onLoad(e: any): void;
    play(): void;
    pause(): void;
    getPaused(callback: BooleanCallback): any;
    mute(): void;
    unmute(): void;
    getMuted(callback: BooleanCallback): any;
    setVolume(value: number): void;
    getVolume(callback: NumberCallback): any;
    getDuration(callback: NumberCallback): any;
    setCurrentTime(value: number): void;
    getCurrentTime(callback: NumberCallback): any;
    setLoop(value: boolean): void;
    getLoop(callback: BooleanCallback): any;
    removeEventListener(): void;
    addEventListener(): void;
    getIsPlaying(): boolean;
}
