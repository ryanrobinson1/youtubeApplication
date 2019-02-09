import React from "react";

//input field - keep state of input text box
//form - form control speak <App> to then call youtube API

class SearchBar extends React.Component {
  state = { searchTerm: "" };

  //when the input field is changed update the state to keep track
  onInputChanged = event => {
    //update the state with the value that the input field has changed to
    this.setState({ searchTerm: event.target.value });
  };

  //communicate back to the app component what the submitted search term was
  onFormSubmit = event => {
    event.preventDefault();

    //using callbacks
    //the <App> component can pass a prop to the searchbar component and then we can
    //use that prop to invoke a function

    //formSubmit is the callback
    //when it is called, pass through the parameter this.state.searchTerm
    this.props.formSubmit(this.state.searchTerm);
  };

  render() {
    return (
      <div>
        <div className="ui container">
          <form className="ui form" onSubmit={this.onFormSubmit}>
            <div className="field">
              <input
                type="text"
                placeholder="Enter search term here..."
                onChange={this.onInputChanged}
                value={this.state.searchTerm}
              />
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default SearchBar;
