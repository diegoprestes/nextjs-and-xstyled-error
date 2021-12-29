import {
  defaultTheme,
  ColorModeProvider,
  ThemeProvider,
  Preflight,
} from "@xstyled/styled-components";

const theme = {
  ...defaultTheme,
  useColorSchemeMediaQuery: false,
  colors: {
    ...defaultTheme.colors,
    modes: {
      dark: {
        text: "#fff",
        background: "#000",
        primary: "#0cf",
      },
    },
  },
};

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <ColorModeProvider>
        <Preflight />
        <Component {...pageProps} />
      </ColorModeProvider>
    </ThemeProvider>
  );
}

export default MyApp;
