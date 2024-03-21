import React, { useState } from "react";
import "./index.css";
import { modules } from "../../Database";
import {
  FaEllipsisV,
  FaCheckCircle,
  FaPlusCircle,
  FaPlus,
  FaTrash,
} from "react-icons/fa";
import { useParams } from "react-router";
import { FaPencil } from "react-icons/fa6";

import { useSelector, useDispatch } from "react-redux";
import { addModule, deleteModule, updateModule, setModule } from "./reducer";
import { KanbasState } from "../../store";

function ModuleList() {
  const { courseId } = useParams();

  // const [moduleList, setModuleList] = useState<any[]>(modules);
  // const [module, setModule] = useState({
  //   name: "New Module",
  //   description: "New Description",
  //   course: courseId,
  // });

  const moduleList = useSelector(
    (state: KanbasState) => state.modulesReducer.modules
  );
  const module = useSelector(
    (state: KanbasState) => state.modulesReducer.module
  );
  const dispatch = useDispatch();

  // const addModule = (module: any) => {
  //   const newModule = { ...module, _id: new Date().getTime().toString() };
  //   const newModuleList = [newModule, ...moduleList];
  //   setModuleList(newModuleList);
  // };

  // const deleteModule = (moduleId: string) => {
  //   const newModuleList = moduleList.filter(
  //     (module) => module._id !== moduleId
  //   );
  //   setModuleList(newModuleList);
  // };

  // const updateModule = (module: any) => {
  //   const newModuleList = moduleList.map((m) => {
  //     if (m._id === module._id) {
  //       return module;
  //     } else {
  //       return m;
  //     }
  //   });
  //   setModuleList(newModuleList);
  // };

  // const modulesList = modules.filter((module) => module.course === courseId);
  // const [selectedModule, setSelectedModule] = useState(moduleList[0]);
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
      <hr />
      <h2> Module Editor</h2>
      <form>
        <div className="form-group">
          <div className="row">
            <div className="col-4">
              <label htmlFor="module-name" className="form-label">
                Module Name
              </label>
            </div>
            <div className="col-8">
              <input
                type="text"
                className="form-control"
                id="module-name"
                value={module.name}
                onChange={(e) =>
                  dispatch(setModule({ ...module, name: e.target.value }))
                }
              />
            </div>
          </div>
        </div>
        <div className="form-group mt-2">
          <div className="row">
            <div className="col-4">
              <label htmlFor="module-description" className="form-label">
                Module Description
              </label>
            </div>
            <div className="col-8">
              <textarea
                className="form-control"
                id="module-description"
                value={module.description}
                onChange={(e) =>
                  dispatch(
                    setModule({ ...module, description: e.target.value })
                  )
                }
              ></textarea>
            </div>
          </div>
        </div>
        <div className="form-group mt-2">
          <button
            className="btn btn-success me-2"
            onClick={() => {
              dispatch(addModule({ ...module, course: courseId }));
            }}
          >
            Add
          </button>
          <button
            className="btn btn-primary"
            onClick={() => {
              dispatch(updateModule(module));
            }}
          >
            Update
          </button>
        </div>
      </form>

      <hr />
      <ul className="list-group wd-modules">
        {/* <li className="list-group-item">
           <input
            value={module.name}
            onChange={(e) =>
              setModule({
                ...module,
                name: e.target.value,
              })
            }
          />
          <textarea
            value={module.description}
            onChange={(e) =>
              setModule({
                ...module,
                description: e.target.value,
              })
            }
          /> 
        </li> */}

        {moduleList
          .filter((module) => module.course === courseId)
          .map((module, index) => (
            <li
              key={index}
              className="list-group-item"
              // onClick={() => setSelectedModule(module)}
            >
              <div>
                <FaEllipsisV className="me-2" />
                {module.name}
                <span className="float-end">
                  <FaCheckCircle className="text-success" />
                  <FaPlusCircle className="ms-2" />
                  <FaEllipsisV className="ms-2" />
                  <button
                    onClick={() => {
                      dispatch(setModule(module));
                    }}
                    className="me-2"
                  >
                    <FaPencil />
                  </button>
                  <button
                    onClick={() => dispatch(deleteModule(module._id))}
                    className="me-2"
                  >
                    <FaTrash />
                  </button>
                </span>
              </div>
              {/* {selectedModule._id === module._id && ( */}
              {module._id && (
                <ul className="list-group">
                  {module.lessons?.map(
                    (
                      lesson: {
                        name:
                          | string
                          | number
                          | boolean
                          | React.ReactElement<
                              any,
                              string | React.JSXElementConstructor<any>
                            >
                          | Iterable<React.ReactNode>
                          | React.ReactPortal
                          | null
                          | undefined;
                      },
                      index: React.Key | null | undefined
                    ) => (
                      <li className="list-group-item" key={index}>
                        <FaEllipsisV className="me-2" />
                        {lesson.name}
                        <span className="float-end">
                          <FaCheckCircle className="text-success" />
                          <FaEllipsisV className="ms-2" />
                        </span>
                      </li>
                    )
                  )}
                </ul>
              )}
            </li>
          ))}
      </ul>
    </>
  );
}
export default ModuleList;
