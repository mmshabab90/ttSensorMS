import React, { Component } from "react";
import Table from "../../components/UI/Table";
import Preloader from "../../components/UI/Preloader";

export default class ElWatch extends Component {
  render() {
    const { data } = this.props;
    if (!data) {
      return (
        <div className="container">
          <Preloader />
        </div>
      );
    }
    return (
      <div className="container">
        <Table data={data} />
      </div>
    );
  }
}
