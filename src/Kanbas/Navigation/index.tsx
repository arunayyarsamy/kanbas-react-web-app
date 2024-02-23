import { Link, useLocation } from "react-router-dom";
import "./index.css";
import {
  FaTachometerAlt,
  FaRegUserCircle,
  FaBook,
  FaRegCalendarAlt,
  FaRegQuestionCircle,
} from "react-icons/fa";

import neuLogo from "../../assets/icons/NU_main_logo.png";

function KanbasNavigation() {
  const links = [
    { label: "", icon: <img src={neuLogo} className="main-logo" alt="Northeastern logo"/>},
    { label: "Account", icon: <FaRegUserCircle className="fs-2" /> },
    { label: "Dashboard", icon: <FaTachometerAlt className="fs-2" /> },
    { label: "Courses", icon: <FaBook className="fs-2" /> },
    { label: "Calendar", icon: <FaRegCalendarAlt className="fs-2" /> },
    // { label: "Inbox", icon: <FaInbox className="fs-2" /> },
    // { label: "History", icon: <FaRegClock className="fs-2" /> },
    // { label: "Studio", icon: <FaDesktop className="fs-2" /> },
    // { label: "Commons", icon: <FaArrowCircleRight className="fs-2" /> },
    { label: "Help", icon: <FaRegQuestionCircle className="fs-2" /> },
  ];
  const { pathname } = useLocation();
  return (
    <>
      <ul className="wd-kanbas-navigation d-none d-md-block">
        {/* <li>
          <img src={neuLogo} />
        </li> */}
        {links.map((link, index) => (
          <li
            key={index}
            className={pathname.includes(link.label.length !== 0 ? link.label : "*") ? "wd-active" : ""}
          >
            <Link to={`/Kanbas/${link.label}`}>
              {" "}
              {link.icon} {link.label}{" "}
            </Link>
          </li>
        ))}
      </ul>
      {/* <ul className="mobilescreen d-md-none d-flex flex-column w-100 h-100 justify-content-start align-items-start list-unstyled gap-4 p-4">
        {links.map((link, index) => (
          <li key={index}>
            <Link to={`/Kanbas/${link.label}`}>
              {" "}
              {link.icon} {link.label}{" "}
            </Link>
          </li>
        ))}
      </ul> */}
    </>
  );
}
export default KanbasNavigation;
