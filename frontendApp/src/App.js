import './App.css';
import {Switch, Route} from "react-router-dom";
import {ToastContainer} from "react-toastify";
import Crud from "./crud";

function App() {
  return (
    <div className="App">
      <ToastContainer/>
      <Switch>
        <Route exact path="/" component={Crud}/> 
      </Switch>
    </div>
  );
}

export default App;
