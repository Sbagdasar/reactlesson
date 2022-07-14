import './App.css';
import {Header} from "./Header";
import {BestSellers} from "./BestSellers";
import {
    Routes,
    Route,
} from "react-router-dom";
import {Product} from "./Product";

function App() {
  return (
    <div className='appContainer'>
      <Header/>
        <hr className="divider" />
        <Routes>
            <Route path="/" element={<BestSellers />} />
            <Route path="product" element={<Product />} />
        </Routes>
    </div>
  );
}

export default App;
