import React, { useState } from 'react';
import Title from './comps/Title';
import UploadForm from './comps/UploadForm';
import ImageGrid from './comps/ImageGrid';
import Modal from './comps/Modal';
import Header from './components/Header';
import Navbar from './components/Navbar';
import { css} from '@emotion/react'
import About from './components/About';
import Description from './components/Description';
import Contacts from './components/Contacts';

import Products from './components/Products';
import Drinks from './components/Drinks';

function App() {
  const [selectedImg, setSelectedImg] = useState(null);
  return (
    <div className="App">
      <Navbar/>
      <Header></Header>
      <Title/>

      <UploadForm />
      
      <ImageGrid setSelectedImg={setSelectedImg} />
      { selectedImg && (
        <Modal selectedImg={selectedImg} setSelectedImg={setSelectedImg} />
      )}
      
      <About></About>
      <Description></Description>
      <Products></Products>
      <Drinks/><Contacts></Contacts>
    </div>
  );
}

export default App;

