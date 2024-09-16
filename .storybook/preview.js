import 'bootstrap/dist/css/bootstrap.min.css';
import '../src/global/styles/fonts.scss';
import './global.css'

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  options: {
    storySort: {
      order: ['Welcome', 'Foundations', 'Components'],
    }
  }
}