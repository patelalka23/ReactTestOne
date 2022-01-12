import logo from './logo.svg';
import './App.css';
// import Navbar from './Components/Navbar';
// import Header from './Components/Header';
// import Footer from './Components/Footer';
// import Maincontent from './Components/Maincontent';
import HomePages from './Pages/HomePages';
import AboutPage from './Pages/AboutPage';

import {
  BrowserRouter as Router,
  Route,
  Routes,
} from 'react-router-dom'
import { Component } from 'react';
import NavBar from './NavBar';
import ArticlePages from './Pages/ArticlePages';
import ArticleListPage from './Pages/ArticleListPage';
import NotFoundPage from './Pages/NotFoundPage';
import ShowHide, { Form } from './Components/EvenOdd';
import Counter from './Components/Counter';
import ListOfArray from './Components/EvenOdd';
import PostForm from './Components/PostForm';
import Comps from './Components/Counter';
import InpurValueLog from './Components/InpurValueLog';
import UseStateHooks from './Components/UseStateHooks';
import UseEffectHooks from './Components/UseEffectHooks';
import UseStateHooksAxios from './Components/UseStateHooksAxios';



class App extends Component{
  render(){
    return(
      <Router>
        <div className="App">
          <NavBar />
          <div id="page-body">
          <Routes>
            <Route path="/" element={<HomePages />} exact />
            <Route path="/About" element={<AboutPage />} exact />
            <Route path="/ArticleListPage" element={<ArticleListPage />} exact />
            <Route path="/article/:name" element={<ArticlePages />} exact />
            <Route element={<NotFoundPage />}/>
          </Routes>
          </div>
        </div>
      </Router>
    );
  }
}
{/* <Navbar/> */ }
{/* <!-- Page Header--> */ }
{/* <Header /> */ }
{/* <!-- Main Content--> */ }
{/* <Maincontent /> */ }

{/* <Footer /> */ }
export default App;
