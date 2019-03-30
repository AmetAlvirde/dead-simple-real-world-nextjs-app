import { SheetsRegistry } from 'jss';
import {
  createMuiTheme,
  createGenerateClassName
} from '@material-ui/core/styles';
import purple from '@material-ui/core/colors/purple';
import green from '@material-ui/core/colors/green';

const theme = createMuiTheme({
  palette: {
    primary: {
      light: purple[300],
      main: purple[500],
      dark: purple[700]
    },
    secondary: {
      light: green[300],
      main: green[500],
      dark: green[700]
    }
  },
  typography: {
    useNextVariants: true
  }
});

function createPageContext() {
  return {
    theme,
    sheetsManager: new Map(),
    sheetsRegistry: new SheetsRegistry(),
    generateClassName: createGenerateClassName()
  };
}

let pageContext;

export default function getPageContext() {
  if (!process.browser) {
    return createPageContext();
  }

  if (!pageContext) {
    pageContext = createPageContext();
  }

  return pageContext;
}
