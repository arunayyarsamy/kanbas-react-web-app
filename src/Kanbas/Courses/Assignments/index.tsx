import React from "react";
import {
  FaCheckCircle,
  FaEllipsisV,
  FaPen,
  FaPlus,
  FaPlusCircle,
} from "react-icons/fa";
import { Link, useParams, useNavigate } from "react-router-dom";
// import { assignments } from "../../Database";
import "./index.css";
import { FaPencil, FaTrash } from "react-icons/fa6";
import { useSelector, useDispatch } from "react-redux";
import { deleteAssignment, setAssignment } from "./assignmentsReducer";
import { KanbasState } from "../../store";

function Assignments() {
  const { courseId } = useParams();
  // const assignmentList = assignments.filter(
  //   (assignment) => assignment.course === courseId
  // );
  const assignmentList = useSelector(
    (state: KanbasState) => state.assignmentsReducer.assignments
  );
  const assignment = useSelector(
    (state: KanbasState) => state.assignmentsReducer.assignment
  );
  const dispatch = useDispatch();
  const navigate = useNavigate();
  return (
    <>
      <div className="mx-2" style={{ overflow: "hidden" }}>
        {/* {<!-- Add buttons and other fields here -->} */}
        <div className="row">
          <div className="col">
            <div className="input-group">
              <input
                className="form-control w-25"
                placeholder="Search for Assignments"
              />
            </div>
          </div>
          <div className="col text-end">
            <div className="btn-group wd-button">
              <button className="btn me-1">
                {/* <i className="fa fa-plus"></i> */}
                <FaPlus />
                Group
              </button>
              <button
                className="btn btn-red me-1"
                onClick={() => {
                  navigate(`/Kanbas/Courses/${courseId}/Assignments/Editor`);
                }}
              >
                {/* <i className="fa fa-plus"></i> */}
                <FaPlus />
                Assignment
              </button>
              <button className="btn">
                {/* <i className="fa fa-ellipsis-v"></i> */}
                <FaEllipsisV />
              </button>
            </div>
          </div>
        </div>
        <hr />
        <ul className="list-group wd-modules">
          <li className="list-group-item">
            <div className="mb-2">
              <FaEllipsisV className="me-2" /> ASSIGNMENTS
              <span className="float-end">
                <label>40% of Total</label>
                <FaPlusCircle className="ms-2" />
                <FaEllipsisV className="ms-2" />
              </span>
            </div>
            <ul className="list-group">
              {assignmentList
                .filter((assignment) => assignment.course === courseId)
                .map((assignment) => (
                  <li className="list-group-item">
                    <div className="d-flex align-items-center py-10">
                      <FaEllipsisV className="me-2" />
                      <FaPencil className="me-3 fg-green" />
                      <div className="d-flex-column flex-fill">
                        <h6>
                          <Link
                            onClick={() => {
                              dispatch(setAssignment(assignment));
                            }}
                            to={`/Kanbas/Courses/${courseId}/Assignments/${assignment._id}`}
                          >
                            {assignment.title}
                          </Link>
                        </h6>
                        <label>{assignment.moduleDescription}</label>
                        <br />
                        <label>
                          Due {assignment.dueDate} | {assignment.points} pts
                        </label>
                      </div>
                      <span className="float-end">
                        <FaCheckCircle className="text-success" />
                        <FaEllipsisV className="ms-2" />
                        <button
                          onClick={() => {
                            dispatch(setAssignment(assignment));
                            navigate(
                              `/Kanbas/Courses/${courseId}/Assignments/${assignment._id}`
                            );
                          }}
                          className="me-2"
                        >
                          <FaPencil />
                        </button>
                        <button
                          onClick={() => {
                            if (
                              window.confirm("Do you really want to Delete?")
                            ) {
                              dispatch(deleteAssignment(assignment._id));
                            }
                          }}
                          className="me-2"
                        >
                          <FaTrash />
                        </button>
                      </span>
                    </div>
                  </li>
                ))}
            </ul>
          </li>
        </ul>
      </div>
    </>
  );
}
export default Assignments;
