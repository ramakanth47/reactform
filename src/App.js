
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import FormComponent from "./components/Formcomponent";

//import img from "./images/background.jpg"


function App() {
  return (
    <div className="App">
      <div className="header">
        {/* <img src={img} width="100%" height="20%" alt="background" /> */}
      </div>
      <div className="form-section">
        <FormComponent />
      </div>
    </div>
  );
}

export default App;
