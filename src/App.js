
import './App.css';
import EditProduct from "./pages/EditProduct"
import ViewOrder from "./pages/Vieworder";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';


function App() {
  return (
<>
      <Router>
        <Switch>
          <Route path='/' exact component={ViewOrder} />
          <Route path='/editproduct' component={EditProduct} />

        </Switch>
      </Router>
    </>
  );
}

export default App;
