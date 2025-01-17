import React from 'react';
import Nav from './Component/Nav';
import Footer from './Component/Footer';
import { Route, Routes } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import Home from './Pages/Home';
import About from './Pages/About';
import Cart from './Pages/cart';
import Checkout from './Pages/Checkout';
import Faqs from './Pages/Faqs';
import Homep from './Pages/Homep';
import ProductDetail from './Pages/ProductDetail';
import ProductList from './Pages/ProductList';
import RegLog from './Pages/RegLog';
import SignUp from './Pages/SignUp';

const App = () => {
  return (
    <div>
      <Helmet>
        <title>FoodTrove - Delicious Meals & Ingredients Delivered</title>
        <meta
          name="description"
          content="Explore FoodTrove for delicious recipes, fresh ingredients, and convenient delivery. Your journey to culinary excellence starts here!"
        />
        <meta
          name="keywords"
          content="FoodTrove, fresh ingredients, recipes, meal delivery, food shopping"
        />
        <link rel="canonical" href="https://yourwebsite.com/" />
      </Helmet>
      <header>
        <Nav />
      </header>
      <main>


        <Routes>

          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/faqs" element={<Faqs />} />
          <Route
            path='/productDetail/:productId'
            element={<ProductDetail />}
            />
          <Route path="/productList" element={<ProductList />} />
          <Route path="/Homeproduct" element={<Homep />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path='/login' element={<RegLog/>}/>
          <Route path='/signUp' element={<SignUp/>}/>

        </Routes>

      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default App;
