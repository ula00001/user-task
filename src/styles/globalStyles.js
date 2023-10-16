import {Global, css} from "@emotion/react";

export const globalStyles = (
  <Global
    styles={css`
      @import url("./fonts/style.css");

      body {
        font-family: "Futura PT Medium", sans-serif;
        margin: 0;
      }
    `}
  />
);