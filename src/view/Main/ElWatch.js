import React, { Component } from "react";
import Table from "../../components/UI/Table";
import Preloader from "../../components/UI/Preloader";
import { db } from "../../API/FirebaseConfig";

const elWatchCollection = "elWatchData";

export default class ElWatch extends Component {
  state = {
    sensorFirebaseData: [],
  };

  async componentDidMount() {
    const data = [];
    await db
      .collection(elWatchCollection)
      .get()
      .then((querySnapshot) => {
        const dT = querySnapshot.docs.map((doc) => doc.data());
        //console.log(data);
        data.push(dT);
      });

    console.log(data);

    this.setState({ sensorFirebaseData: data[0] });
  }

  render() {
    const { sensorFirebaseData } = this.state;
    if (!sensorFirebaseData) {
      return (
        <div className="container">
          <Preloader />
        </div>
      );
    }
    return (
      <div className="container">
        <Table data={sensorFirebaseData} />
      </div>
    );
  }
}
