import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { getAllImg } from './store/Actions/ImagesActions';
import GalleryList from './components/GalleryList/GalleryList';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllImg());
  }, []);


  return (
    <div className="App">
      <Header />
      <GalleryList />
      <Footer />
    </div>
  );
}

export default App;