import { getCssText } from "../configs/style";

export default function Head() {
  return (
    <head>
      <title>ovo</title>
      <style id="stitches" dangerouslySetInnerHTML={{ __html: getCssText() }} />
      <meta content="width=device-width, initial-scale=1" name="viewport" />
      <link rel="icon" href="/favicon.ico" />
    </head>
  );
}
