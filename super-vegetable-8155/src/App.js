// import logo from './logo.svg';
import './App.css';
import HomePage from './components/HomePage';
import Navbar from './components/navbar';
import Navbar2 from './components/Navbar2';
import { ChakraProvider } from '@chakra-ui/react'
import Header from './components/header2';
import Header3 from './components/header3';
import Trending from './components/Trending';




function App() {
  return (
    <div>
      <ChakraProvider>
          <Navbar/>
          <Navbar2/>
          <HomePage/>
          <Header/>
          <Header3/>
          <Trending/>
      </ChakraProvider>
      
    </div>
  );
}

export default App;
