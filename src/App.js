import "./App.css";
import "materialize-css/dist/css/materialize.min.css";
import "materialize-css/dist/js/materialize.min.js";
import React, { Component } from "react";
import M from "materialize-css";
import Footer from "./view/Footer/Footer";
import SideBar from "./components/Navigation/SideBar";
import TopBar from "./components/Navigation/TopBar";
import Router from "./Router";
import { db } from "./API/FirebaseConfig";

//firebase collection
const elWatchCollection = "elWatchData";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "Dashboard",
      elWData: [],
      sensorName: "",
      sensorValue: "",
      sensorSerial: "",
      temp: "",
      timestamp: "",
    };
  }

  getData(sensorData) {
    setTimeout(() => {
      this.setState({ elWData: sensorData });
    }, 100);
  }

  componentDidMount() {
    M.AutoInit();

    //firebase config and setup
    db.collection(elWatchCollection)
      .get()
      .then((snapshot) => {
        const sensorData = [];
        snapshot.forEach((doc) => {
          const data = doc.data();
          sensorData.push(data);
        });
        //this.getData(sensorData);
        this.setState({ elWData: sensorData });
      })
      .catch((error) => console.log(error));
  }

  navTitle = (title) => {
    this.setState({ title: title });
  };
  render() {
    const { title, elWData } = this.state;
    return (
      <div>
        <header>
          <TopBar title={title} />
        </header>

        <SideBar onSideNavItemClick={this.navTitle} />

        <main>
          <div className="content">
            <Router data={elWData} />
          </div>
        </main>

        <Footer />
      </div>
    );
  }
}
