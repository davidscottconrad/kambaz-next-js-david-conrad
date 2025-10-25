"use client"
import { useState } from "react";
import { useParams } from "next/navigation";
import * as db from "../../../Database";
import ModulesControls from "./ModulesControls";
import { ListGroup, ListGroupItem } from "react-bootstrap";
import { BsGripVertical } from "react-icons/bs";
import ModuleControlButtons from "./ModuleControlButtons";
import LessonControlButtons from "./LessonControlButtons";
import { v4 as uuidv4 } from "uuid";
import { FormControl } from "react-bootstrap";
export default function Modules() {

    const { cid } = useParams();
    const [modules, setModules] = useState<any[]>(db.modules);
    const deleteModule = (moduleId: string) => {
        setModules(modules.filter((m) => m._id !== moduleId));
    };
    const editModule = (moduleId: string) => {
        setModules(modules.map((m) => (m._id === moduleId ? { ...m, editing: true } : m)));
    };
    const updateModule = (module: any) => {
        setModules(modules.map((m) => (m._id === module._id ? module : m)));
    };

    interface Lesson {
        _id: string;
        name: string;
        description?: string;
        module: string;
        objectives?: string[];
    }

    interface Module {
        _id: string;
        name: string;
        description?: string;
        course: string;
        lessons?: Lesson[];
    }
    const [moduleName, setModuleName] = useState("");
    const addModule = () => {
        setModules([...modules, { _id: uuidv4(), name: moduleName, course: cid, lessons: [] }]);
        setModuleName("");
    };


    return (
        <div>

            <ModulesControls moduleName={moduleName} setModuleName={setModuleName} addModule={addModule} /><br /><br /><br /><br />
            <ListGroup id="wd-modules" className="rounded-0">
                {modules
                    .filter((module) => module.course === cid)
                    .map((module) => (
                        <ListGroupItem
                            key={module._id}
                            className="wd-module p-0 mb-5 fs-5 border-gray"
                        >
                            <div className="wd-title p-3 ps-2 bg-secondary">
                                <BsGripVertical className="me-2 fs-3" />

                                {!module.editing && module.name}
                                {module.editing && (
                                    <FormControl className="w-50 d-inline-block"
                                        onChange={(e) => updateModule({ ...module, name: e.target.value })}
                                        onKeyDown={(e) => {
                                            if (e.key === "Enter") {
                                                updateModule({ ...module, editing: false });
                                            }
                                        }}
                                        defaultValue={module.name} />
                                )}

                                <ModuleControlButtons
                                    moduleId={module._id}
                                    deleteModule={deleteModule}
                                    editModule={editModule}
                                />
                            </div>

                            <ListGroup className="wd-lessons rounded-0">
                                {module.lessons?.map((lesson) => (
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
                                                {lesson?.objectives?.map((obj, i) => (
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
