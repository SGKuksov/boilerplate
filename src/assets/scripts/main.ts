import { getLCP, getFID, getCLS } from 'web-vitals';
import App from './App';
import { breakpoints } from './utils/config';

const isDev = process.env.NODE_ENV === 'development';

if (isDev) {
  getCLS(console.log);
  getFID(console.log);
  getLCP(console.log);
}

document.addEventListener('DOMContentLoaded', () => {
  App();
  console.log(breakpoints);
});
