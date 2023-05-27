import { MemeTemplate } from "./types";

const templates: MemeTemplate[] = [
  /*  {
        id: "disaster-girl",
        background: {
            src: "/disaster-girl.jpg",
            width: 1200,
            height: 900,
            alt: "Disaster girl"
        },
        textareas: [
            {
                id: "tagline",
                top: 750,
                left: 100,
                width: 900,
                height: 130,
                text: "Something Funny",
                fontSize: 100,
                color: "white"
            }
        ]
    }, */
  {
    id: "drake",
    background: {
      src: "/drake.jpg",
      width: 1200,
      height: 1200,
      alt: "Drake",
    },
    textareas: [
      {
        id: "top",
        top: 0,
        left: 600,
        width: 600,
        height: 600,
        text: "Top",
        fontSize: 100,
        color: "black",
      },
      {
        id: "bottom",
        top: 600,
        left: 600,
        width: 600,
        height: 600,
        text: "Bottom",
        fontSize: 100,
        color: "black",
      },
    ],
  },
  {
    id: "guy-looking",
    background: {
      src: "/guy-looking.jpg",
      width: 1600,
      height: 1066,
      alt: "Guy Looking",
    },
    textareas: [
      {
        id: "new",
        top: 650,
        left: 50,
        width: 710,
        height: 320,
        text: "New",
        fontSize: 120,
        color: "black",
      },
      {
        id: "person",
        top: 370,
        left: 850,
        width: 400,
        height: 300,
        text: "Person",
        fontSize: 80,
        color: "black",
      },
      {
        id: "old",
        top: 550,
        left: 1250,
        width: 350,
        height: 320,
        text: "Old",
        fontSize: 100,
        color: "black",
      },
    ],
  },
];

export default templates;
