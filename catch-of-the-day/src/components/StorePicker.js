import React from "react";
import { getFunName } from "../helpers";

// Landing page component: allows you to name the store
class StorePicker extends React.Component {
  // constructor runs before component mounts
  // example of binding; obselete with arrow func
  //   constructor() {
  //     super();
  //     this.goToStore = this.goToStore.bind(this);
  //   }

  // Links input to submission
  myInput = React.createRef();
  // Function to handle form submission
  goToStore = event => {
    // 1. Stop form submission
    event.preventDefault();
    // 2. Get text from the input
    const storeName = this.myInput.current.value;
    // 3. Route to page
    this.props.history.push(`/store/${storeName}`);
  };
  render() {
    // <React.Fragment> is the same as <> </>
    return (
      <>
        <form className="store-selector" onSubmit={this.goToStore}>
          <h2>Please Enter A Store</h2>
          <input
            type="text"
            ref={this.myInput}
            required
            placeholder="Store Name"
            defaultValue={getFunName()}
          />
          <button type="submit">Visit Store ➡</button>
        </form>
      </>
    );
  }
}

export default StorePicker;
