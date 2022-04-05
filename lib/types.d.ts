export interface HighlightOptions {
    width?: string;
    height?: string;
    type?: "minimal" | "lvn";
    fontWeight?: string;
    fontSize?: string;
    highlightColor?: string;
    environment?: "dev" | "prod";
    src?: string;
}
