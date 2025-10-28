"use client"
import { useState } from "react";
import { useParams } from "next/navigation";
import ModulesControls from "./ModulesControls";
import { ListGroup, ListGroupItem } from "react-bootstrap";
import { BsGripVertical } from "react-icons/bs";
import ModuleControlButtons from "./ModuleControlButtons";
import LessonControlButtons from "./LessonControlButtons";
import { FormControl } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { addModule as addModuleAction, deleteModule as deleteModuleAction, updateModule as updateModuleAction, editModule as editModuleAction } from "./reducer";

export default function Modules() {
    const { cid } = useParams();
    console.log("Modules cid:", cid);
    const dispatch = useDispatch();

    // Read modules from Redux store
    const modules = useSelector((state: any) => state.modules.modules);

    const deleteModule = (moduleId: string) => {
        dispatch(deleteModuleAction(moduleId));
    };

    const editModule = (moduleId: string) => {
        dispatch(editModuleAction(moduleId));
    };

    const updateModule = (module: any) => {
        dispatch(updateModuleAction(module));
    };

    const [moduleName, setModuleName] = useState("");
    console.log("Modules moduleName:", moduleName);
    const addModule = () => {
        dispatch(addModuleAction({ name: moduleName, course: cid }));
        setModuleName("");
    };
    console.log("Modules render", modules);

    return (
        <div>
            <ModulesControls moduleName={moduleName} setModuleName={setModuleName} addModule={addModule} />
            <br /><br /><br /><br />
            <ListGroup id="wd-modules" className="rounded-0">
                {modules
                    .filter((module: any) => module.course === cid)
                    .map((module: any) => (
                        <ListGroupItem
                            key={module._id}
                            className="wd-module p-0 mb-5 fs-5 border-gray"
                        >
                            <div className="wd-title p-3 ps-2 bg-secondary">
                                <BsGripVertical className="me-2 fs-3" />

                                {!module.editing && module.name}
                                {module.editing && (
                                    <FormControl
                                        className="w-50 d-inline-block"
                                        onChange={(e) => updateModule({ ...module, name: e.target.value })}
                                        onKeyDown={(e) => {
                                            if (e.key === "Enter") {
                                                updateModule({ ...module, editing: false });
                                            }
                                        }}
                                        defaultValue={module.name}
                                    />
                                )}

                                <ModuleControlButtons
                                    moduleId={module._id}
                                    deleteModule={deleteModule}
                                    editModule={editModule}
                                />
                            </div>

                            <ListGroup className="wd-lessons rounded-0">
                                {module.lessons?.map((lesson: any) => (
                                    <ListGroupItem
                                        key={lesson._id}
                                        className="wd-lesson p-3 ps-1 bg-light"
                                    >
                                        <div className="d-flex align-items-center justify-content-between">
                                            <div>
                                                <BsGripVertical className="me-2 fs-3" />
                                                {lesson.name}
                                            </div>
                                            <LessonControlButtons />
                                        </div>

                                        {lesson?.objectives && lesson?.objectives?.length > 0 && (
                                            <ListGroup className="wd-objectives rounded-0 mt-2 ms-4">
                                                {lesson?.objectives?.map((obj: any, i: number) => (
                                                    <ListGroupItem
                                                        key={`${lesson?._id}-obj-${i}`}
                                                        className="wd-lesson p-3 ps-4"
                                                    >
                                                        <BsGripVertical className="me-2 fs-3" />
                                                        {obj}
                                                        <LessonControlButtons />
                                                    </ListGroupItem>
                                                ))}
                                            </ListGroup>
                                        )}
                                    </ListGroupItem>
                                ))}
                            </ListGroup>
                        </ListGroupItem>
                    ))}
            </ListGroup>
        </div>
    );
}