import React, { Component } from "react";
import Table from "../../components/UI/Table";
import Preloader from "../../components/UI/Preloader";
import { db } from "../../API/FirebaseConfig";

const elWatchCollection = "elWatchData";

export default class ElWatch extends Component {
  state = {
    sensorFirebaseData: [],
    isLoading: false,
  };

  _isMounted = false;

  async componentDidMount() {
    this.setState({ isLoading: true });
    let data = [];
    this._isMounted = true;

    await db.collection(elWatchCollection).onSnapshot((querySnapshot) => {
      data = querySnapshot.docs.map((doc) => doc.data());
      //console.log(data);
      //data.push(dT);
      this.setState({ sensorFirebaseData: data, isLoading: false });
    });
    //.then();

    //console.log(data);
  }

  componentWillUnmount() {
    this._isMounted = false;
  }

  render() {
    const { sensorFirebaseData, isLoading } = this.state;

    // timeout 5s to refresh page
    setInterval(function () {
      window.location.reload();
    }, 300000);

    //console.log(sensorFirebaseData);

    if (isLoading === true) {
      return (
        <div className="container">
          <Preloader />
        </div>
      );
    }
    return (
      <div className="container">
        {sensorFirebaseData && sensorFirebaseData.length ? (
          <Table data={sensorFirebaseData} />
        ) : (
          <p className="flow-text">No data available!</p>
        )}
      </div>
    );
  }
}
