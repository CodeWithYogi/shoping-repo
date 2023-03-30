import React from 'react';
import Main from './Main';
import Categories from './Categories'
import Trending from './Trending';
import Featured from './Featured';
import Image2 from './Image2';
import NewProducts from './NewProducts';
import BestSellingProducts from './BestSellingProducts';
import Discount from './Discount';
import Footer from './Footer';


const App = () => {
  return (
    <main className='m-auto mw-100'>
      <Main/>
      <Categories/>
      <Trending/>
      <Featured/>
      <Image2/>
      <NewProducts/>
      <BestSellingProducts/>
      <Discount/>
      <Footer/>
    </main>
  );
}

export default App;
