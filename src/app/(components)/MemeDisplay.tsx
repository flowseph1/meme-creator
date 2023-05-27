"use client";

import { Anton } from "next/font/google";
import Image from "next/image";
import React from "react";
import { useElementSize } from "usehooks-ts";

const anton = Anton({ subsets: ["latin"], weight: "400" });

type textarea = {
  id: string;
  top: number;
  left: number;
  width: number;
  height: number;
  color: string;
  fontSize: number;
  text: string;
};

function MemeDisplay({
  background,
  textareas,
  values,
}: {
  background: {
    src: string;
    width: number;
    height: number;
    alt: string;
  };

  textareas: textarea[];

  values: Record<string, string>;
}) {
  const [memeRef, { width }] = useElementSize();

  const ratio = width / background.width;

  return (
    <div className="relative" ref={memeRef}>
      <Image
        src={background.src}
        alt={background.alt}
        width={background.width}
        height={background.height}
      />

      {textareas.map((textarea) => (
        <div
          key={textarea.id}
          style={{
            top: textarea.top * ratio,
            left: textarea.left * ratio,
            width: textarea.width * ratio,
            height: textarea.height * ratio,
          }}
          className={`absolute`}
        >
          <div
            style={{
              fontSize: textarea.fontSize * ratio,
              lineHeight: 1.1,
            }}
            className={`${anton.className} text-center text-${textarea.color} text-stroke-${textarea.color}`}
          >
            {values?.[textarea.id] ?? textarea.text}
          </div>
        </div>
      ))}
    </div>
  );
}

export default MemeDisplay;
