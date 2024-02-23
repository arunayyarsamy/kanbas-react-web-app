import React from "react";
import { useNavigate, useParams, Link } from "react-router-dom";
import { assignments } from "../../../Database";
import { FaC } from "react-icons/fa6";
import { FaCheck, FaCheckCircle, FaEllipsisV, FaPlus } from "react-icons/fa";
import "../index.css";
function AssignmentEditor() {
  const { assignmentId } = useParams();
  const assignment = assignments.find(
    (assignment) => assignment._id === assignmentId
  );
  const { courseId } = useParams();
  const navigate = useNavigate();
  const handleSave = () => {
    console.log("Actually saving assignment TBD in later assignments");
    navigate(`/Kanbas/Courses/${courseId}/Assignments`);
  };
  return (
    <div>
      <div className="text-end wd-button">
        <label className="text-success pe-3">
          {/* <i className="fa fa-check-circle pe-2"></i> */}
          <FaCheckCircle className="me-2" />
          Published
        </label>
        <button className="btn">
          {/* <i className="fa fa-ellipsis-v"></i> */}
          <FaEllipsisV />
        </button>
      </div>
      <hr />
      <form className="mb-5">
        <label className="form-label">Assignment Name</label>
        <input value={assignment?.title} className="form-control mb-2" />
        <textarea
          className="form-control mt-3"
          placeholder="Assignment description"
          rows={3}
        >
          {assignment?.description}
        </textarea>
        <div className="row mt-3">
          <div className="col-md-3 text-end">
            <label className="form-label">Points</label>
          </div>
          <div className="col-md-9">
            <input
              type="number"
              className="form-control"
              placeholder="Points"
              value={assignment?.marks}
            />
          </div>
        </div>
        <div className="row mt-3">
          <div className="col-md-3 text-end">
            <label className="form-label">Assignment Group</label>
          </div>
          <div className="col-md-9">
            <select className="form-select">
              <option selected>Assignments</option>
              <option>Homework</option>
              <option>Project</option>
              <option>Quiz</option>
            </select>
          </div>
        </div>
        <div className="row mt-3">
          <div className="col-md-3 text-end">
            <label className="form-label">Display Grade as</label>
          </div>
          <div className="col-md-9">
            <select className="form-select">
              <option>Points</option>
              <option selected>Percentage</option>
              <option>Complete/Incomplete</option>
            </select>
          </div>
        </div>
        <div className="row mt-3">
          <div className="col-md-3"></div>
          <div className="col-md-9">
            <label className="form-check">
              <input type="checkbox" /> Do not count this assignment towards the
              final grade
            </label>
          </div>
        </div>
        <div className="row mt-3">
          <div className="col-md-3 text-end">
            <label className="form-label">Submission Type</label>
          </div>
          <div className="col-md-9">
            <div className="card">
              <div className="card-body">
                <select className="form-select w-25">
                  <option selected>Online</option>
                  <option>On Paper</option>
                  <option>No Submission</option>
                </select>
                <label className="form-label mt-2">
                  <b>Online Entry Options</b>
                </label>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    value=""
                    id="flexCheckDefault"
                    checked
                  />
                  <label
                    className="form-check-label"
                    htmlFor="flexCheckDefault"
                  >
                    Text Entry
                  </label>
                </div>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    value=""
                    id="flexCheckChecked"
                    checked
                  />
                  <label
                    className="form-check-label"
                    htmlFor="flexCheckChecked"
                  >
                    Website URL
                  </label>
                </div>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    value=""
                    id="flexCheckChecked"
                    checked
                  />
                  <label
                    className="form-check-label"
                    htmlFor="flexCheckChecked"
                  >
                    Media Recordings
                  </label>
                </div>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    value=""
                    id="flexCheckChecked"
                  />
                  <label
                    className="form-check-label"
                    htmlFor="flexCheckChecked"
                  >
                    Student Annotation
                  </label>
                </div>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    value=""
                    id="flexCheckChecked"
                  />
                  <label
                    className="form-check-label"
                    htmlFor="flexCheckChecked"
                  >
                    File Uploads
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row mt-3">
          <div className="col-md-3 text-end">
            <label className="form-label">Assign</label>
          </div>
          <div className="col-md-9">
            <div className="card">
              <div className="card-body">
                <label className="form-label">
                  {" "}
                  <b>Assign to </b>{" "}
                </label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Assign to"
                  value="Everyone"
                />
                <label className="form-label">Due</label>
                <input
                  type="date"
                  className="form-control"
                  placeholder="Due"
                  value="2021-09-01"
                />
                <div className="row mt-2">
                  <div className="col">
                    <label className="form-label">Available from</label>
                    <input
                      type="date"
                      className="form-control"
                      placeholder="available-from"
                      value="2021-09-01"
                    />
                  </div>
                  <div className="col">
                    <label className="form-label">Until</label>
                    <input
                      type="date"
                      className="form-control"
                      placeholder="Until"
                      value="2021-09-01"
                    />
                  </div>
                </div>
              </div>
              <div className="card-footer text-center">
                <button className="btn">
                  {/* <i className="fa fa-plus"></i> */}
                  <FaPlus />
                  Add
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="row mt-3">
          <div className="col-md-8">
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                value=""
                id="notify_users"
              />
              <label className="form-check-label" htmlFor="notify_users">
                Notify users that this content has changed
              </label>
            </div>
          </div>
          <div className="col-md-4">
            <div className="btn-group wd-button float-end">
              <Link
                to={`/Kanbas/Courses/${courseId}/Assignments`}
                className="btn btn-red me-2"
              >
                Cancel
              </Link>
              <button onClick={handleSave} className="btn btn-green">
                Save
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}
export default AssignmentEditor;
