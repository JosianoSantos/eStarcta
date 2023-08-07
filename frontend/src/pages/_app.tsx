import React from 'react';
import type { AppProps } from 'next/app';
import { ThemeProvider } from 'styled-components';
import '@/styles/globals.css';

import theme from '@/styles/theme';

export default function App({ Component, pageProps: { ...pageProps } }: AppProps) {
  return (
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
  );
}
