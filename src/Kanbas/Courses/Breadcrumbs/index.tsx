import { HiMiniBars3 } from "react-icons/hi2";
import { useLocation } from "react-router";
import { Link } from "react-router-dom";
import { FaBars, FaCaretDown } from "react-icons/fa6";

import "./index.css";

function BreadCrumbs() {
  const { pathname } = useLocation();
  const baseUrl = "/Kanbas/Courses/";
  const breadCrumbParts = pathname.split(baseUrl)[1].split("/");
  const courseId = breadCrumbParts[0];
  var lastUsedPart = baseUrl + courseId;
  return (
    <>
      <div className="d-none d-md-flex align-items-center mx-2">
        <HiMiniBars3 />
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb m-0">
            <li className="breadcrumb-item link-red">
              <Link to={baseUrl + courseId + "/Home"}>Course {courseId}</Link>
            </li>
            {breadCrumbParts.map((part, index) => {
              if (index !== 0) {
                lastUsedPart = lastUsedPart + "/" + part;
                if (index === breadCrumbParts.length - 1) {
                  return (
                    <li className="breadcrumb-item active" aria-current="page">
                      {part}
                    </li>
                  );
                }
                return (
                  <li className="breadcrumb-item link-red">
                    <Link to={lastUsedPart}>{part}</Link>
                  </li>
                );
              }
              return null;
            })}
          </ol>
        </nav>
      </div>
      <div className="bg-black d-md-none d-flex justify-content-between align-items-center p-2 text-white">
        <a
          href="/Kanbas/navigation/index.html
          "
          className="text-white"
        >
          <FaBars />
        </a>
        <div className="d-flex flex-column justify-content-center align-items-center">
          <h6 className="m-0">{courseId}</h6>
          <br />
          <h6 className="m-0">{breadCrumbParts[1]}</h6>
        </div>
        <a
          href="/Kanbas/Courses/Navigation/index.html"
          className="text-white
        "
        >
          <FaCaretDown />
        </a>
      </div>
    </>
  );
}

export default BreadCrumbs;
