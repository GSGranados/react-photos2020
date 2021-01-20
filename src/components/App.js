import React, { Component } from "react";
import unsplash from "../api/unsplash";
import SearchBar from "./SearchBar";
import ImageList from "./ImageList";

export class App extends Component {
  state = { images: [] };

  onFormSubmit = async (term) => {
    try {
      const response = await unsplash.get("search/photos", {
        params: { query: term },
      });
      this.setState({ images: response.data.results });
    } catch (error) {
      console.log(error);
    }
  };

  render() {
    return (
      <div className="ui container" style={{ marginTop: "10px" }}>
        <SearchBar onSubmit={this.onFormSubmit}></SearchBar>
        <ImageList images={this.state.images} />
      </div>
    );
  }
}

export default App;
