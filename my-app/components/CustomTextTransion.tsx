import React from "react";
import TextTransition, { presets } from "react-text-transition";

export default function CustomTextTransion({words}:{words:string[]}) {
  const TEXTS = words;
  const [index, setIndex] = React.useState(0);
  React.useEffect(() => {
    const intervalId = setInterval(
      () => setIndex((index) => index + 1),
      3000 // every 3 seconds
    );
    return () => clearTimeout(intervalId);
  }, []);

  return (
    <div>
      <TextTransition springConfig={presets.wobbly}>
        {TEXTS[index % TEXTS.length]}
      </TextTransition>
    </div>
  );
}
