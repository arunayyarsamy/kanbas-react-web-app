import { courses } from "../../Kanbas/Database";
import {
  Navigate,
  Route,
  Routes,
  useLocation,
  useParams,
} from "react-router-dom";
import { HiMiniBars3 } from "react-icons/hi2";
import CourseNavigation from "./Navigation";
import Modules from "./Modules";
import Home from "./Home";
import Assignments from "./Assignments";
import AssignmentEditor from "./Assignments/Editor";
import Grades from "./Grades";
import BreadCrumbs from "./Breadcrumbs";
function Courses() {
  const { courseId } = useParams();
  const course = courses.find((course) => course._id === courseId);
  const { pathname } = useLocation();
  console.log(pathname);
  return (
    <>
      {/* BreadCrumb section starts */}
      <BreadCrumbs />
      {/* <HiMiniBars3 /> Course {course?.name} */}
      {/* <nav style={{"--bs-breadcrumb-divider: '>';"}} aria-label="breadcrumb">
          <ol className="breadcrumb">
            <li className="breadcrumb-item">
              <a href="#">Home</a>
            </li>
            <li className="breadcrumb-item active" aria-current="page">
              Library
            </li>
          </ol>
        </nav> */}
      {/* BreadCrumb section ends */}
      <hr className="d-none d-md-block"/>
      <br className="d-md-none d-block "/>
      <div className="d-flex" style={{ height: "100vh" }}>
        <div className="d-none d-md-block" style={{ height: "100vh" }}>
          <CourseNavigation />
        </div>
        <div className="flex-fill overflow-y-scroll ">
          <div>
            <Routes>
              <Route path="/" element={<Navigate to="Home" />} />
              <Route path="Home" element={<Home />} />
              <Route path="Modules" element={<Modules />} />
              <Route path="Piazza" element={<label>Piazza</label>} />
              <Route path="Assignments" element={<Assignments />} />
              <Route
                path="Assignments/:assignmentId"
                element={<AssignmentEditor />}
              />
              <Route path="Grades" element={<Grades />} />
            </Routes>
          </div>
        </div>
      </div>
    </>
  );
}
export default Courses;
