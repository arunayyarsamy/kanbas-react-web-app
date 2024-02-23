import {
  FaArrowCircleRight,
  FaBell,
  FaBullhorn,
  FaCalendar,
  FaCalendarAlt,
  FaChartBar,
  FaCheckCircle,
  FaCircle,
  FaCrosshairs,
  FaFile,
} from "react-icons/fa";
import ModuleList from "../Modules/List";
import "./index.css";

function Home() {
  return (
    <div>
      {/* <h2>Home</h2> */}
      <div className="d-flex">
        <div className="flex-fill">
          <ModuleList />
        </div>
        <div
          className="flex-grow-0 mx-3 d-none d-lg-block"
          style={{ width: "250px" }}
        >
          <h3>Course Status</h3>
          <div className="btn-group text-end wd-button">
            <label>
              <button className="btn">
                {/* <i className="fa fa-circle"></i> */}
                <FaCircle />
                Unpublish
              </button>
            </label>
            <label>
              <button className="btn text-success">
                {/* <i className="fa fa-check-circle"></i> */}
                <FaCheckCircle />
                Published
              </button>
            </label>
          </div>
          <div className="wd-button">
            <ul>
              <li>
                <button className="btn">
                  {/* <i className="fa fa-file"></i> */}
                  <FaFile />
                  Importing Existing content
                </button>
              </li>
              <li>
                <button className="btn">
                  {/* <i className="fa fa-arrow-circle-right"></i> */}
                  <FaArrowCircleRight />
                  Importing From commons
                </button>
              </li>
              <li>
                <button className="btn">
                  {/* <i className="fa fa-crosshairs"></i> */}
                  <FaCrosshairs />
                  Choose home page
                </button>
              </li>
              <li>
                <button className="btn">
                  {/* <i className="fa fa-bar-chart"></i> */}
                  <FaChartBar />
                  View course stream
                </button>
              </li>
              <li>
                <button className="btn">
                  {/* <i className="fa fa-bullhorn"></i> */}
                  <FaBullhorn />
                  New Announcement
                </button>
              </li>
              <li>
                <button className="btn">
                  {/* <i className="fa fa-bar-chart"></i> */}
                  <FaChartBar />
                  New Analytics
                </button>
              </li>
              <li>
                <button className="btn">
                  {/* <i className="fa fa-bell"></i> */}
                  <FaBell />
                  View course Notifications
                </button>
              </li>
            </ul>
          </div>
          <div className="row link-red">
            <div className="col-5">
              <label>
                <b>Coming Up</b>
              </label>
            </div>
            <div className="col text-end">
              {/* <i className="fa fa-calendar"></i> */}
              <FaCalendarAlt />
              <a href="#">View Calendar</a>
            </div>
          </div>
          <hr />
          <ul className="coming-up-list link-red">
            <li>
              <div className="row">
                <div className="col-1">
                  {/* <i className="fa fa-calendar"></i> */}
                  <FaCalendarAlt />
                </div>
                <div className="col-11">
                  <a href="#"> Lecture </a>
                  <br />
                  <label>Lecture CS4550.12631.202410 Sep 7 at 11.45am</label>
                </div>
              </div>
            </li>
            <li>
              <div className="row">
                <div className="col-1">
                  {/* <i className="fa fa-calendar"></i> */}
                  <FaCalendarAlt />
                </div>
                <div className="col-11">
                  <a href="#"> CS5610 06 SP23 Lecture </a>
                  <br />
                  <label>Lecture CS4550.12631.202410 Sep 7 at 11.45am</label>
                </div>
              </div>
            </li>
            <li>
              <div className="row">
                <div className="col-1">
                  {/* <i className="fa fa-calendar"></i> */}
                  <FaCalendarAlt />
                </div>
                <div className="col-11">
                  <a href="#">CS5610 Web Development Summer 1 2023 - LECTURE</a>
                  <br />
                  <label>Lecture CS4550.12631.202410 Sep 7 at 11.45am</label>
                </div>
              </div>
            </li>
          </ul>
          <label className="link-red">
            <a href="#">12 more in the next week ...</a>
          </label>
        </div>
      </div>
      {/* <ModuleList /> */}
      {/* <h2>Status</h2> */}
    </div>
  );
}
export default Home;
