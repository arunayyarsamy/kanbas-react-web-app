import React, { useState } from "react";
import "./index.css";
import { modules } from "../../Database";
import { FaEllipsisV, FaCheckCircle, FaPlusCircle, FaPlus } from "react-icons/fa";
import { useParams } from "react-router";
function ModuleList() {
  const { courseId } = useParams();
  const modulesList = modules.filter((module) => module.course === courseId);
  const [selectedModule, setSelectedModule] = useState(modulesList[0]);
  return (
    <>
      {/* <!-- Add buttons here --> */}
      <div className="button-group text-end wd-button">
        <button className="btn">Collapse All</button>
        <button className="btn">View Progress</button>
        <div className="btn-group" role="group">
          <button
            type="button"
            className="btn btn-primary dropdown-toggle"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            {/* <i className="fa fa-check-circle text-success"></i> */}
            <FaCheckCircle className="text-success" />
            Publish All
            <ul className="dropdown-menu">
              <li>
                <a className="dropdown-item" href="#">
                  Publish 1
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Publish 2
                </a>
              </li>
            </ul>
          </button>
        </div>
        <button className="btn btn-primary">
          {/* <i className="fa fa-plus"></i> */}
          <FaPlus />
          Module
        </button>
        <button className="btn btn-primary">
          {/* <i className="fa fa-ellipsis-v"></i> */}
          <FaEllipsisV />
        </button>
      </div>
      <ul className="list-group wd-modules">
        {modulesList.map((module, index) => (
          <li
            key={index}
            className="list-group-item"
            onClick={() => setSelectedModule(module)}
          >
            <div>
              <FaEllipsisV className="me-2" />
              {module.name}
              <span className="float-end">
                <FaCheckCircle className="text-success" />
                <FaPlusCircle className="ms-2" />
                <FaEllipsisV className="ms-2" />
              </span>
            </div>
            {selectedModule._id === module._id && (
            // { module._id && (
              <ul className="list-group">
                {module.lessons?.map((lesson, index) => (
                  <li className="list-group-item" key={index}>
                    <FaEllipsisV className="me-2" />
                    {lesson.name}
                    <span className="float-end">
                      <FaCheckCircle className="text-success" />
                      <FaEllipsisV className="ms-2" />
                    </span>
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </>
  );
}
export default ModuleList;
