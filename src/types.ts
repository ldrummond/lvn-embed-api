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
  secret?: string;
}

type FontFamlily =
  | "Lato"
  | "Merriweather"
  | "Montserrat"
  | "Open Sans"
  | "Oswald"
  | "Roboto"
  | "Signika";

export type playerjsEVENTS =
  | "ready"
  | "play"
  | "pause"
  | "ended"
  | "timeupdate"
  | "progress"
  | "error";
