import { configure } from '@storybook/html';
import '../assets/src/scss/styles.scss';
import '../node_modules/handlebars/dist/handlebars';
// import '../node_modules/fs';
// require('handlebars');

// automatically import all files ending in *.stories.js
const req = require.context('../stories', true, /\.stories\.js$/);
function loadStories() {
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
