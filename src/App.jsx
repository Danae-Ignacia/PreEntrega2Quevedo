import './App.css'
import BannerContainer from './components/ShopeView/BannerContainer';
import ItemListContainer from './components/ShopeView/ItemListContainer';
import SingleProduct from './components/ShopeView/SingleProduct';
import CategoryContainer from './components/ShopeView/CategoryContainer';
import NavBar from './components/navigation/NavBar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';




function App() {
  return (
    <>
 <BrowserRouter>
        <NavBar />
        <Routes>
          <Route exact path="/" element={<ItemListContainer />} />
          <Route exact path="/CategoryContainer" element={<CategoryContainer/>} />
          <Route exact path="/product/:prodId" element={<SingleProduct />} />
        </Routes>
      </BrowserRouter>
    
    </>
  )
}

export default App
