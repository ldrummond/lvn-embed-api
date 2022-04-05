import { HighlightOptions } from "./types";
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
    getPaused(): any;
    mute(): void;
    unmute(): void;
    getMuted(): any;
    setVolume(value: number): void;
    getVolume(): any;
    getDuration(): any;
    setCurrentTime(value: number): void;
    getCurrentTime(): any;
    setLoop(value: boolean): void;
    getLoop(): any;
    removeEventListener(): void;
    addEventListener(): void;
    getIsPlaying(): boolean;
}
