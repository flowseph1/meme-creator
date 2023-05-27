interface Background {
    src: string;
    width: number;
    height: number;
    alt: string;
}

interface TextArea {
    id: string;
    top: number;
    left: number;
    width: number;
    height: number;
    color: string;
    fontSize: number;
    text: string;
  };

  export interface MemeTemplate {
    id: string;
    background:  Background;
    textareas: TextArea[];
  }

  export interface Meme {
    id: string;
    template: string;
    values: Record<string, string>;
  }