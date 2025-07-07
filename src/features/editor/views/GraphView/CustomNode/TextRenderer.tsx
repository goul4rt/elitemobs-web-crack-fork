import React from "react";
import { ColorSwatch } from "@mantine/core";
import styled from "styled-components";

// Função para converter códigos de cor do Minecraft (& para §)
const formatMinecraftText = (text: string) => {
  return text.replace(/&([0-9a-fk-or])/gi, "§$1");
};

// Componente para renderizar texto do Minecraft
const MinecraftText = ({ text }: { text: string }) => {
  const formattedText = formatMinecraftText(text);

  return (
    <span
      style={{
        fontFamily: "Minecraft, monospace",
        whiteSpace: "pre-wrap",
        wordBreak: "break-word",
      }}
      dangerouslySetInnerHTML={{
        __html: formattedText
          .replace(/§([0-9a-fk-or])/gi, '<span class="mc-$1">')
          .replace(/§r/g, "</span><span>")
          .replace(/§([0-9a-f])/gi, '</span><span class="mc-$1">')
          .replace(/§([k-or])/gi, '</span><span class="mc-$1">'),
      }}
    />
  );
};

const StyledRow = styled.span`
  display: inline-flex;
  align-items: center;
  overflow: hidden;
  gap: 4px;
  vertical-align: middle;
`;

const isURL = (word: string) => {
  const urlPattern =
    /^(http:\/\/www\.|https:\/\/www\.|http:\/\/|https:\/\/)?[a-z0-9]+([\-\.]{1}[a-z0-9]+)*\.[a-z]{2,5}(:[0-9]{1,5})?(\/.*)?$/gm;

  return word.match(urlPattern);
};

const Linkify = (text: string) => {
  const addMarkup = (word: string) => {
    return isURL(word)
      ? `<a onclick="event.stopPropagation()" href="${word}" style="text-decoration: underline; pointer-events: all;" target="_blank" rel="noopener noreferrer">${word}</a>`
      : word;
  };

  const words = text.split(" ");
  const formatedWords = words.map(w => addMarkup(w));
  const html = formatedWords.join(" ");
  return <span dangerouslySetInnerHTML={{ __html: html }} />;
};

interface TextRendererProps {
  children: string;
}

export const TextRenderer = ({ children }: TextRendererProps) => {
  const text = children?.replaceAll('"', "");

  if (isURL(text)) return Linkify(text);

  if (isColorFormat(text)) {
    return (
      <StyledRow>
        <ColorSwatch size={12} radius={4} mr={4} color={text} />
        {text}
      </StyledRow>
    );
  }

    // Verificar se contém códigos de cor do Minecraft (&0-9, &a-f, &k-or)
  if (isMinecraftFormat(text)) {
    return <MinecraftText text={text} />;
  }

  return <>{children}</>;
};

function isColorFormat(colorString: string) {
  const hexCodeRegex = /^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/;
  const rgbRegex = /^rgb\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*\)$/;
  const rgbaRegex = /^rgba\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*,\s*(0|1|0\.\d+)\s*\)$/;

  return (
    hexCodeRegex.test(colorString) || rgbRegex.test(colorString) || rgbaRegex.test(colorString)
  );
}

function isMinecraftFormat(text: string) {
  // Verificar se contém códigos de cor do Minecraft (&0-9, &a-f, &k-or)
  const minecraftCodeRegex = /&([0-9a-fk-or])/gi;
  return minecraftCodeRegex.test(text);
}
