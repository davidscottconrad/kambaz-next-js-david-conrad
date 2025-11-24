/* eslint-disable @typescript-eslint/no-explicit-any */
"use client" //“This file needs to run in the browser, not on the server.”
import { addModule, editModule, updateModule, deleteModule, setModules } from "./reducer";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "next/navigation";
import * as db from "../../../Database";
import { FormControl } from "react-bootstrap"
import ModulesControls from "./ModulesControls";
import { ListGroup, ListGroupItem } from "react-bootstrap"
import LessonControlButtons from "./LessonControlButtons"
import ModuleControlButtons from "./ModuleControlButtons"
import { BsGripVertical } from "react-icons/bs";
import { useState, useEffect } from "react";
import { RootState } from "../../../store"
import { v4 as uuidv4 } from "uuid";
import * as coursesClient from "../../client";
import * as moduleClient from "./client";

export default function Modules() {
  const { cid } = useParams<{ cid: string }>();
  const [moduleName, setModuleName] = useState(""); //这些还是local state
  const { modules } = useSelector((state: RootState) => state.modulesReducer);
  const dispatch = useDispatch();
  const fetchModules = async () => {
    const modules = await coursesClient.findModulesForCourse(cid as string);
    dispatch(setModules(modules));
    //Without dispatch, the data would live only inside that function; 
    //other components wouldn’t see or update from it.
  };
  const onCreateModuleForCourse = async () => {
    if (!cid) return;
    const newModule = { name: moduleName, course: cid };
    const createdModule = await coursesClient.createModuleForCourse(cid, newModule);
    dispatch(setModules([...modules, createdModule]));
  };
  const onRemoveModule = async (moduleId: string) => {
    await coursesClient.deleteModule(cid, moduleId);
    dispatch(deleteModule(moduleId));
  };

  const onUpdateModule = async (moduleData: any) => {
    //version 1:
    // await coursesClient.updateModule(cid, moduleData);
    // const newModules = modules.map((m: any) => m._id === moduleData._id ? moduleData : m);
    // dispatch(setModules(newModules));
    const result = await coursesClient.updateModule(cid, moduleData);
    dispatch(setModules(result));
  };

  const saveModule = async (moduleData: any) => {
    await moduleClient.updateModule(moduleData);
    dispatch(updateModule(moduleData));
  };

  useEffect(() => {
    fetchModules();
  }, []);


  return (
    <div>
      <ModulesControls moduleName={moduleName} setModuleName={setModuleName}
        addModule={onCreateModuleForCourse} />

      <br /><br /><br />
      <ListGroup className="rounded-0" id="wd-modules">
        {Array.isArray(modules) && modules.map((moduleItem: any) => (
          <ListGroupItem key={moduleItem._id} className="wd-module p-0 mb-5 fs-5 border-gray">
            <div className="wd-title p-3 ps-2 bg-secondary">
              <BsGripVertical className="me-2 fs-3" />
              {!moduleItem.editing && moduleItem.name}
              {moduleItem.editing && (
                <FormControl className="w-50 d-inline-block"
                  defaultValue={moduleItem.name}
                  onChange={(e) => setModuleName(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter") {
                      e.preventDefault();
                      onUpdateModule({ ...moduleItem, name: moduleName, editing: false });
                    }
                  }}
                />
              )}
              <ModuleControlButtons moduleId={moduleItem._id}
                deleteModule={(moduleId) => onRemoveModule(moduleId)}
                editModule={(moduleId) => dispatch(editModule(moduleId))} />
            </div>
            {moduleItem.lessons && (
              <ListGroup className="wd-lessons rounded-0">
                {moduleItem.lessons.map((lesson: any) => (
                  <ListGroupItem key={lesson._id} className="wd-lesson p-3 ps-1">
                    <BsGripVertical className="me-2 fs-3" />
                    {lesson.name} <LessonControlButtons />
                  </ListGroupItem>
                ))}</ListGroup>)}</ListGroupItem>))}
      </ListGroup>
    </div>
  );
}




{/* <ListGroupItem className="wd-module p-0 mb-5 fs-5 border-gray">
          <div className="wd-title p-3 ps-2 bg-secondary">
            <BsGripVertical className="me-2 fs-3" /> Week 1 <ModuleControlButtons />
          </div>
          <ListGroup className="wd-lessons rounded-0">
            <ListGroupItem className="wd-lesson p-3 ps-1">
              <BsGripVertical className="me-2 fs-3" /> LEARNING OBJECTIVES <LessonControlButtons />
            </ListGroupItem>
            <ListGroupItem className="wd-lesson p-3 ps-1">
              <BsGripVertical className="me-2 fs-3" /> Introduction to the course <LessonControlButtons />
            </ListGroupItem>

          </ListGroup>
        </ListGroupItem> 


   <ListGroupItem className="wd-module p-0 mb-5 fs-5 border-gray">
          <div className="wd-title p-3 ps-2 bg-secondary">
            <BsGripVertical className="me-2 fs-3" /> Week 2 <ModuleControlButtons />
          </div>
          <ListGroup className="wd-lessons rounded-0">
            <ListGroupItem className="wd-lesson p-3 ps-1">
              <BsGripVertical className="me-2 fs-3" /> LEARNING OBJECTIVES <LessonControlButtons />
            </ListGroupItem>
            <ListGroupItem className="wd-lesson p-3 ps-1">
              <BsGripVertical className="me-2 fs-3" /> Building React User Interfaces <LessonControlButtons />
            </ListGroupItem>

          </ListGroup>
        </ListGroupItem>
      </ListGroup>
    </div> 

     <ModulesControls /><br /><br /><br /><br />
    <ListGroup className="rounded-0" id="wd-modules">
      <ListGroupItem className="wd-module p-0 mb-5 fs-5 border-gray">
        <div className="wd-title p-3 ps-2 bg-secondary"> Week 1 </div>
        <ListGroup className="wd-lessons rounded-0">
          <ListGroupItem className="wd-lesson p-3 ps-1">
            LEARNING OBJECTIVES </ListGroupItem>
          <ListGroupItem className="wd-lesson p-3 ps-1">
            Introduction to the course </ListGroupItem>
          <ListGroupItem className="wd-lesson p-3 ps-1">
            Learn what is Web Development </ListGroupItem>
        </ListGroup>
      </ListGroupItem>
      <ListGroupItem className="wd-module p-0 mb-5 fs-5 border-gray">
        <div className="wd-title p-3 ps-2 bg-secondary"> Week 2 </div>
        <ListGroup className="wd-lessons rounded-0">
          <ListGroupItem className="wd-lesson p-3 ps-1">
            LESSON 1 </ListGroupItem>
          <ListGroupItem className="wd-lesson p-3 ps-1">
            LESSON 2 </ListGroupItem>
        </ListGroup>
      </ListGroupItem>
    </ListGroup>
  </div>
    // <div>
    //    Implement Collapse All button, View Progress button, etc.
    //   <button>Collapse All</button>
    //   <button>View Progress</button>
    //   <button>Publish All</button>
    //   <button>+Module</button>
    //   <ul id="wd-modules">
    //     <li className="wd-module">
    //       <div className="wd-title">Week 1</div>
    //       <ul className="wd-lessons">
    //         <li className="wd-lesson">
    //           <span className="wd-title">LEARNING OBJECTIVES</span>
    //           <ul className="wd-content">
    //             <li className="wd-content-item">Introduction to the course</li>
    //             <li className="wd-content-item">Learn what is Web Development</li>
    //           </ul>
    //         </li>
    //       </ul>
    //     </li>
    //     <li className="wd-module">
    //       <div className="wd-title">Week 2</div>
    //       <ul className="wd-lessons">
    //         <li className="wd-lesson">
    //           <span className="wd-title">LEARNING OBJECTIVES</span>
    //           <ul className="wd-content">
    //             <li className="wd-content-item">Object 1</li>
    //             <li className="wd-content-item">Object 2</li>
    //           </ul>
    //         </li>
    //       </ul>
    //     </li>
    //     <li className="wd-module">
    //       <div className="wd-title">Week 3</div>
    //       <ul className="wd-lessons">
    //         <li className="wd-lesson">
    //           <span className="wd-title">LEARNING OBJECTIVES</span>
    //           <ul className="wd-content">
    //             <li className="wd-content-item">Object 1</li>
    //             <li className="wd-content-item">Object 2</li>
    //           </ul>
    //         </li>
    //       </ul>
    //     </li>
    //   </ul>
    // </div>
  );
} */}
