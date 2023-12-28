import { HTTP } from 'meteor/http';
import { onPageLoad } from 'meteor/server-render'; 
import { Meteor } from 'meteor/meteor';  
import { sanitizeUrl } from '@braintree/sanitize-url';

const { compilerOptions } = require('./tsconfig.json')
module.exports = {
  collectCoverageFrom: [
    '**/*.{js,jsx,ts,tsx}',


  moduleNameMapper: {
    ...pathsToModuleNameMapper(compilerOptions.paths, { prefix: '<rootDir>/' }),
    /* Handle CSS imports (with CSS modules)

        https://jestjs.io/docs/webpack#mocking-css-modules */
    '\\.svg$': '<rootDir>/__mocks__/svg.js',
    '^.+\\.module\\.(css|sass|scss)$': 'identity-obj-proxy',


const defaultImage = '/img/buy_icon.png'; 
const defaultMetaTags = `
<meta property="og:title"       content="${siteName}" />
<meta property="og:description" content="${description}" />
<meta property="og:image"       content="${defaultImage}" />
<meta property="og:url"         content="" />
`;

const BROWSER_BOT = 0;
const SLACK_BOT = 1;
