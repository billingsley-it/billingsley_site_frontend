/**
 * Vuetify3 Plugin
 */
import { createVuetify } from "vuetify";

// Styles
import "vuetify/styles";

const myCustomLightTheme = {
  dark: false,
  colors: {
    primary: "#80162B",
    secondary: "#82B1FF",
    accent: "#47121D",
    success: "#47121D",
    error: "#EE5044",
    teal: "#63BAC0",
    blue: "#1976d2",
    yellow: "#F8C545",
    darkblue: "#032F45",
    silver: "#D5DFE7",
    card: "EAEAEA",
    blue: "#1976D2",
    gray: "#F0F0F0",
    darkgray: "#424242"
  },
};

const vuetify = createVuetify({
  theme: {
    defaultTheme: "myCustomLightTheme",
    themes: {
      myCustomLightTheme,
    },
  },
  icons: {
    defaultSet: "mdi",
  },
});

export default vuetify;
