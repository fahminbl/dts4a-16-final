import DashBoard from './container/DashBoard'
import { ThemeProvider } from '@mui/material/styles';
import { customTheme } from './theme/customTheme';


function App() {
  return (
    <>
    <ThemeProvider theme={customTheme} >
      <div className="">
        <DashBoard />
      </div>
      </ThemeProvider>
    </>
  );
}

export default App;
