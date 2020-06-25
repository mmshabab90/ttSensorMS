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
    let data = [];
    await db.collection(elWatchCollection).onSnapshot((querySnapshot) => {
      data = querySnapshot.docs.map((doc) => doc.data());
      //console.log(data);
      //data.push(dT);
      this.setState({ sensorFirebaseData: data });
    });
    //.then();

    //console.log(data);
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
