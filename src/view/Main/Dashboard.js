import React, { Component } from "react";
import Preloader from "../../components/UI/Preloader";
import { db } from "../../API/FirebaseConfig";

const elWatchCollection = "elWatchData";

export default class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      elData: [],
      sensorActive: false,
      isLoading: false,
    };
  }

  _isMounted = false;
  async componentDidMount() {
    this.setState({ isLoading: true });
    this._isMounted = true;

    //firebase config and setup
    await db
      .collection(elWatchCollection)
      .get()
      .then((snapshot) => {
        const sensorData = [];
        snapshot.forEach((doc) => {
          const data = doc.data();
          sensorData.push(data);
        });
        //this.getData(sensorData);
        if (this._isMounted) {
          this.setState({ elData: sensorData, isLoading: false });
          this.computeTime();
        }
      })
      .catch((error) => console.log(error));
  }

  computeTime = () => {
    const { elData } = this.state;
    const timestampNow = new Date();
    const ts = [];

    elData.forEach((item) => {
      ts.push(item.timestamp);
    });

    const lastTsItem = parseInt(ts[ts.length - 1]);
    const elTimestamp = new Date(lastTsItem);

    // for equal date and equal hour
    if (timestampNow.getDate() === elTimestamp.getDate()) {
      if (timestampNow.getHours() === elTimestamp.getHours()) {
        // compare minutes
        const diffMinutes = Math.abs(
          timestampNow.getMinutes() - elTimestamp.getMinutes()
        );
        //console.log(diffMinutes);

        // see if sensor is used for less than 5 min
        if (diffMinutes < 5) {
          this.setState({ sensorActive: true });
        }
      }
    }
  };
  componentWillUnmount() {
    this._isMounted = false;
  }

  render() {
    const { sensorActive, isLoading } = this.state;

    if (isLoading === true) {
      return <Preloader />;
    }

    return (
      <section className="dashboard">
        <div className="row">
          {sensorActive === true ? (
            //green card
            <div className="col s12 center-align">
              <div className="card green darken-1 z-depth-4">
                <div className="card-content white-text">
                  <span className="card-title">Table is in use!</span>
                </div>
              </div>
            </div>
          ) : (
            // red card
            <div className="col s12 center-align">
              <div className="card red darken-1 z-depth-4">
                <div className="card-content white-text">
                  <span className="card-title">Table is not in use!</span>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>
    );
  }
}