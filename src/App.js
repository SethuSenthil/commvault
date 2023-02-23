import './App.css';
import TodoList from './components/TodoList';
import NavBar from './components/NavBar';
import { createTheme, ThemeProvider } from '@mui/material/styles';



function App() {
  const theme = createTheme({
    palette: {
      primary: {
        light: '#EE312F',
        main: '#EE312F',
        dark: '#EE312F',
        contrastText: 'white',
      },
      secondary: {
        light: '#00B4EB',
        main: '#00B4EB',
        dark: '#00B4EB',
        contrastText: 'white',
      },
    },
  });
  return (
    <ThemeProvider theme={theme}>
    <div className="App">
      <NavBar/>
      <TodoList />
    </div>
    </ThemeProvider>
  );
}

export default App;
