import * as React from "react";
import { Frame, addPropertyControls, ControlType } from "framer";
import { Title } from "./Title";

// Open Preview: Command + P
// Learn more: https://framer.com/api

export function Articles(props) {
  const { text, tint, ...rest } = props;

  return (
    <Title>Articles</Title>

    // <Frame
    //     {...rest}
    //     background={tint}
    //     whileHover={{
    //         scale: 1.1,
    //     }}
    //     style={{
    //         color: "#fff",
    //         fontSize: 16,
    //         fontWeight: 600,
    //     }}
    // >
    //     {text}
    // </Frame>
  );
}

Articles.defaultProps = {
  height: 128,
  width: 240,
  text: "Get started!",
  tint: "#0099ff"
};

// Learn more: https://framer.com/api/property-controls/
addPropertyControls(Articles, {
  text: {
    title: "Text",
    type: ControlType.String,
    defaultValue: "Hello Framer!"
  },
  tint: {
    title: "Tint",
    type: ControlType.Color,
    defaultValue: "#0099ff"
  }
});
