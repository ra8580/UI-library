import type { Preview } from "@storybook/react";

// Import CSS
import '../src/assets/css/bootstrap.min.css';
import '../src/assets/css/content/index.css';
import '../src/assets/css/vrf-icons.css';
import '../src/assets/css/vrf.css';
import "../src/assets/css/vrf-utilities.css";
import "../src/assets/css/allBrowser_framework.css";
import '../src/pages/style/myaccount-landing.css';

// Import JS
import '../src/assets/js/bootstrap.bundle';

// Import Splide
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    backgrounds: {
      values: [
        { name: 'Primary', value: '#E10A0A' },
        { name: 'Rose', value: '#FFE1E3' },
        { name: 'Dawn ', value: '#E5E8F0' },
        { name: 'Midnight', value: '#131C35' },
        { name: 'White', value: '#FFFFFF' }
      ],
    },
  },
};

export default preview;
