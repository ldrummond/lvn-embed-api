import { HighlightOptions, playerjsEVENTS } from "./types";
import playerjs from "player.js";
export declare class HighlightPlayer {
    player: playerjs.Player;
    isPlaying: boolean;
    isInitialized: boolean;
    iframe: HTMLIFrameElement;
    constructor(options: {
        containerId: string;
        highlightId: number;
        highlightOptions?: HighlightOptions;
        onReady?: (player: playerjs.Player) => void;
    });
    onLoad(e: any, onReady?: (player: playerjs.Player) => void): void;
    play(): void;
    pause(): void;
    getPaused(callback: (value: boolean) => void): void;
    mute(): void;
    unmute(): void;
    getMuted(callback: (value: boolean) => void): void;
    setVolume(value: number): void;
    getVolume(callback: (value: number) => void): void;
    getDuration(callback: (value: number) => void): void;
    setCurrentTime(value: number): void;
    getCurrentTime(callback: (value: number) => void): void;
    setLoop(value: boolean): void;
    getLoop(callback: (value: boolean) => void): void;
    removeEventListener(event: playerjsEVENTS, callback: () => void): void;
    addEventListener(event: playerjsEVENTS, callback: () => void): void;
    on(event: playerjsEVENTS, callback: () => void): void;
    off(event: playerjsEVENTS, callback: () => void): void;
    getIsPlaying(): boolean;
}
