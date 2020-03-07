import React, { Component } from "react";
import Image from "./components/Image/Image";
import "./App.css";
import data from "./assets/data";

export class App extends Component {
  state = {
    image: data.images[0],
    noMoreImage: false,
    correctAns: 0,
    rvalue: ""
  };

  nextImageHandler = () => {
    if (this.state.rvalue === "") {
      alert("Please select an option!");
    } else {
      const newIndex = this.state.image.index + 1;
      if (this.state.rvalue === this.state.image.value) {
        const correctAnswer = this.state.correctAns + 1;
        this.setState({
          correctAns: correctAnswer
        });
      }
      console.log(this.state.correctAns);
      if (newIndex > 14) {
        this.setState({
          noMoreImage: true
        });
      } else {
        this.setState({
          image: data.images[newIndex],
          rvalue: ""
        });
      }
    }
  };

  radioButtonHandler = event => {
    this.setState({
      rvalue: event.target.value
    });
  };

  render() {
    if (this.state.noMoreImage === true) {
      return (
        <div className="Result">You got {this.state.correctAns} Correct!!</div>
      );
    }
    return (
      <div className="App">
        <div className="header">Image Labelling Tool</div>
        <Image
          scale={this.state.defaultScale}
          url={this.state.image.picture}
          rclick={this.radioButtonHandler}
          rvalue={this.state.rvalue}
        />
        <div
          className="button_cont"
          onClick={this.nextImageHandler}
          align="center"
        >
          <a className="example_c">Next Image</a>
        </div>
      </div>
    );
  }
}

export default App;
