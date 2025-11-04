// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;


import React from 'react'
import { BrowserRouter as Router ,Routes , Route ,} from 'react-router-dom';
import Home from "./Pages/Home";
import Product from "./Pages/Product";
import Shop from "./Pages/Shop";
import Cart from "./Pages/Cart"
import Login from './Pages/Login';
import Blog from './Pages/Blog';
import Profile from "./Pages/Profile"

function App() {
  return (
    <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/product/:id" element={<Product/>} />
          <Route path="/cart"element={<Cart/>}/>
          <Route path="/login" element= {<Login/>}/>
          <Route path="/blog" element= {<Blog/>} />
          <Route path="/profile" element= {<Profile/>} />
        </Routes>
    </Router>
    
  )
}
export default App
