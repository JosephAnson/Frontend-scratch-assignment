import { defineConfig } from 'windicss/helpers';
import formsPlugin from 'windicss/plugin/forms';

export default defineConfig({
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx,vue}'],
  plugins: [formsPlugin],
  theme: {
    container: {
      padding: '0.5rem'
    }
  }
});
