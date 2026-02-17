import './src/style.css';
import 'prismjs/themes/prism-tomorrow.css';

export { wrapRootElement } from './src/wrap-root-element';

export const shouldUpdateScroll = ({ routerProps: { location } }) => {
  if (location.hash) return false;
  return [0, 0];
};
