import {
  FaArrowAltCircleLeft,
  FaArrowAltCircleRight,
  FaSearch,
  FaFilter,
} from "react-icons/fa";
import { FaCaretDown, FaGear } from "react-icons/fa6";
import { assignments, enrollments, grades, users } from "../../Database";
import { useParams } from "react-router-dom";
import "./index.css";

function Grades() {
  const { courseId } = useParams();
  const as = assignments.filter((assignment) => assignment.course === courseId);
  const es = enrollments.filter((enrollment) => enrollment.course === courseId);
  return (
    <div className="mx-3">
      <h1>Grades</h1>
      <div className="btn-group wd-button float-end">
        <button className="btn me-2">
          {/* <i className="fa fa-arrow-circle-o-right pe-2"></i> */}
          <FaArrowAltCircleRight />
          Import
        </button>
        <button className="btn me-2">
          {/* <i className="fa fa-arrow-circle-o-left pe-2"></i> */}
          <FaArrowAltCircleLeft />
          Export
        </button>
        <button className="btn">
          {/* <i className="fa fa-gear"></i> */}
          <FaGear />
        </button>
      </div>
      <div className="row mt-5">
        <div className="col">
          <label>
            {" "}
            <b>Student Names</b>
          </label>
          <div className="input-group">
            <span className="input-group-text">
              <FaSearch />
            </span>
            <input
              type="text"
              className="form-control"
              placeholder="Search Students"
            />
            <span className="input-group-text">
              <FaCaretDown />
            </span>
          </div>
        </div>
        <div className="col">
          <label>
            {" "}
            <b>Assingment Names</b>
          </label>
          <div className="input-group">
            <span className="input-group-text">
              <FaSearch />
            </span>
            <input
              type="text"
              className="form-control"
              placeholder="Search Assignments"
            />
            <span className="input-group-text">
              <FaCaretDown />
            </span>
          </div>
        </div>
      </div>
      <div className="wd-button mt-2">
        <button className="btn">
          <FaFilter />
          Apply Filters
        </button>
      </div>
      <div className="table-responsive mt-2">
        <table className="table table-striped text-center">
          <thead>
            <th>Student Name</th>
            {as.map((assignment) => (
              <th>{assignment.title}</th>
            ))}
          </thead>
          <tbody>
            {es.map((enrollment) => {
              const user = users.find((user) => user._id === enrollment.user);
              return (
                <tr>
                  <td>
                    {user?.firstName} {user?.lastName}
                  </td>
                  {assignments.map((assignment) => {
                    const grade = grades.find(
                      (grade) =>
                        grade.student === enrollment.user &&
                        grade.assignment === assignment._id
                    );
                    if (grade?.grade !== undefined) {
                      return <td>{grade.grade}</td>;
                    }
                    return null;
                  })}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
export default Grades;
