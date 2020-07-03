import React, { Component } from "react";
import Preloader from "../../components/UI/Preloader";
import { db } from "../../API/FirebaseConfig";
import RealTimeChart from "../../components/Charts/RealTimeChart";

const elWatchCollection = "elWatchData";

export default class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      elData: [],
      sensorActive: false,
      isLoading: false,
      timestamps: null,
    };
  }

  _isMounted = false;
  async componentDidMount() {
    this.setState({ isLoading: true });
    this._isMounted = true;

    //firebase config and setup
    // await db
    //   .collection(elWatchCollection)
    //   .get()
    //   .then((snapshot) => {
    //     const sensorData = [];
    //     snapshot.forEach((doc) => {
    //       const data = doc.data();
    //       sensorData.push(data);
    //     });
    //     //this.getData(sensorData);
    //     if (this._isMounted) {
    //       this.setState({ elData: sensorData, isLoading: false });
    //       this.computeTime();
    //     }
    //   })
    //   .catch((error) => console.log(error));

    let data = [];
    try {
      await db.collection(elWatchCollection).onSnapshot((querySnapshot) => {
        data = querySnapshot.docs.map((doc) => doc.data());
        //console.log(data);
        //data.push(dT);
        this.setState({ elData: data, isLoading: false });
        this.computeTime();
      });
    } catch (error) {
      console.log("Couldn't connect to database | Error: " + error);
    }
  }

  computeTime = () => {
    const { elData } = this.state;
    const timestampNow = new Date();
    const ts = [];
    const tsI = [];

    elData.forEach((item) => {
      ts.push(item.timestamp);
      tsI.push(parseInt(item.timestamp));
    });

    this.setState({ timestamps: tsI });

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

    //console.log(ts);
  };

  componentWillUnmount() {
    this._isMounted = false;
  }

  render() {
    const { sensorActive, isLoading, timestamps, elData } = this.state;

    // console.log(timestamps);

    elData.forEach((item) => {});

    if (isLoading === true) {
      return <Preloader />;
    }

    return (
      <section className="dashboard">
        <div className="row">
          {sensorActive === true ? (
            // red card
            <div className="col s12 center-align">
              <div className="card red darken-1 z-depth-4">
                <div className="card-content white-text">
                  <span className="card-title">Table Unavialable!</span>
                </div>
              </div>
            </div>
          ) : (
            //green card
            <div className="col s12 center-align">
              <div className="card green darken-1 z-depth-4">
                <div className="card-content white-text">
                  <span className="card-title">Table Aailable!</span>
                </div>
              </div>
            </div>
          )}

          {/* Real time chart section */}
          {timestamps !== null && timestamps.length > 0 ? (
            <div className="col s12 m12 l12 center-align">
              <div className="card z-depth-2">
                <div className="card-content">
                  <RealTimeChart elData={elData} />
                </div>
              </div>
            </div>
          ) : null}
        </div>
      </section>
    );
  }
}
