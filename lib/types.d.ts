export interface HighlightOptions {
    width?: string;
    height?: string;
    type?: "minimal" | "lvn";
    fontWeight?: string;
    fontSize?: string;
    fontFamily?: FontFamlily;
    italics?: boolean;
    highlightColor?: string;
    textColor?: string;
    backgroundColor?: string;
    scrolling?: boolean;
    environment?: "dev" | "prod";
    src?: string;
}
declare type FontFamlily = "Lato" | "Merriweather" | "Montserrat" | "Open Sans" | "Oswald" | "Roboto" | "Signika";
export declare type NumberCallback = (value: number) => void;
export declare type BooleanCallback = (value: boolean) => void;
export {};
