import { defineConfig } from 'vite-plugin-windicss';

export default defineConfig({
  theme: {
    colors: {
      violet: 'hsl(257, 40%, 49%)',
      magenta: 'hsl(300, 69%, 71%)',
      white: 'hsl(0, 0%, 100%)',
    },
    fontFamily: {
      poppins: ['Poppins', 'sans-serif'],
      open: ['Open Sans', 'sans-serif'],
    },
  },
});
