import logo from './logo.svg';
import './App.css';
import SelectionbarOrder from "./components/SelectionbarOrder"
import Orderdetails from "./components/Orderdetails";
import Navbar from "./components/Navbar"
import EditPrice from "./components/EditPrice.js";

function App() {
  return (
    <div className="App">
      {/* <Navbar/> */}
      <SelectionbarOrder/>
      <Orderdetails/>
    </div>
  );
}

export default App;
