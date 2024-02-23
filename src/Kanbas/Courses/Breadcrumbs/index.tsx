import { HiMiniBars3 } from "react-icons/hi2";
import { useLocation } from "react-router";
import { Link } from "react-router-dom";

import "./index.css";

function BreadCrumbs() {
  const { pathname } = useLocation();
  const baseUrl = "/Kanbas/Courses/";
  const breadCrumbParts = pathname.split(baseUrl)[1].split("/");
  const courseId = breadCrumbParts[0];
  var lastUsedPart = baseUrl + courseId;
  return (
    <>
      <div className="d-flex align-items-center mx-2">
        <HiMiniBars3 />
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb m-0">
            <li className="breadcrumb-item link-red">
              <Link to={baseUrl + courseId + "/Home"}>Course {courseId}</Link>
            </li>
            {breadCrumbParts.map((part, index) => {
              if (
                breadCrumbParts.length === 2 &&
                breadCrumbParts[1] === "Home"
              ) {
                return;
              }
              if (index != 0) {
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
            })}
          </ol>
        </nav>
      </div>
    </>
  );
}

export default BreadCrumbs;
