import React from "react";
import ReactDOM from "react-dom";
import App from "./components/app";

class Main extends React.Component {
  render() {
    return (
      <div>
        <App />
      </div>
    );
  }
}

ReactDOM.render(<Main />, document.querySelector("#root"));
