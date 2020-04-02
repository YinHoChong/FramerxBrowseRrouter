import * as React from "react";
import { Frame, addPropertyControls, ControlType } from "framer";
import { Title } from "./Title";

// Open Preview: Command + P
// Learn more: https://framer.com/api

export function About(props) {
  const { text, tint, ...rest } = props;

  return (
    <div>
      <Title>About</Title>
    </div>
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

About.defaultProps = {
  height: 128,
  width: 240,
  text: "Get started!",
  tint: "#0099ff"
};

// Learn more: https://framer.com/api/property-controls/
addPropertyControls(About, {
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
