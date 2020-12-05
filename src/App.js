import "./App.css";
import { connect } from "react-redux";
import { anotherName } from './actions/action';

function App(props) {
  console.log(props);
  return (
    <div className="App">
      <h1>REDUX APPLICATION</h1>
      <h1>My name is {props.myname}</h1>
      <button onClick={()=>props.changeMyname()}>Click</button>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    myname: state.name,
  };
};

const mapDispatchToProps = (dispatch) =>{
  return {
    changeMyname:() => dispatch(anotherName())
  };
};

export default connect(mapStateToProps,mapDispatchToProps)(App);
