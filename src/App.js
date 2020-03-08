import React, { Component } from "react";
import Image from "./components/Image/Image";
import ResultTable from "./components/ResultTable/ResultTable";
import "./App.css";
import data from "./assets/data";

export class App extends Component {
  state = {
    image: data.images[0],
    noMoreImage: false,
    correctAns: 0,
    rvalue: "",
    noOfCats: 0,
    noOfDogs: 0
  };

  // --EVENT HANDLERS-- //
  nextImageHandler = () => {
    //BASE CASE & COUNTING TOTAL NUMBER OF SELECTED CATS & DOGS
    if (this.state.rvalue === "") {
      alert("Please select an option!");
    } else {
      if (this.state.rvalue === "cat") {
        const totCats = this.state.noOfCats + 1;
        this.setState({
          noOfCats: totCats
        });
      } else {
        const totDogs = this.state.noOfDogs + 1;
        this.setState({
          noOfDogs: totDogs
        });
      }
      ///////////////////////////////////////////////////
      //STATEMENT TO CHECK HOW MANY OPTIONS ARE CORRECTLY ANSWERED
      if (this.state.rvalue === this.state.image.value) {
        const correctAnswer = this.state.correctAns + 1;
        this.setState({
          correctAns: correctAnswer
        });
      }
      ///////////////////////////////////////////////////
      // CHANGING THE IMAGE
      const newIndex = this.state.image.index + 1;
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
      //////////////////////////////////////////////////
    }
  };

  radioButtonHandler = event => {
    this.setState({
      rvalue: event.target.value
    });
  };
  // --EVENT HANDLERS END-- //

  render() {
    if (this.state.noMoreImage === true) {
      return (
        <ResultTable
          totalCats={this.state.noOfCats}
          totalDogs={this.state.noOfDogs}
        />
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
