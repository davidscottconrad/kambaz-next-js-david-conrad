"use client"
import { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import ModulesControls from "./ModulesControls";
import { ListGroup, ListGroupItem } from "react-bootstrap";
import { BsGripVertical } from "react-icons/bs";
import ModuleControlButtons from "./ModuleControlButtons";
import LessonControlButtons from "./LessonControlButtons";
import { FormControl } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { addModule as addModuleAction, deleteModule as deleteModuleAction, updateModule as updateModuleAction, editModule as editModuleAction, setModules } from "./reducer";
import * as client from "../../client";

export default function Modules() {
    const { cid } = useParams();
    const dispatch = useDispatch();

    const modules = useSelector((state: any) => state.modules.modules);

    const [moduleName, setModuleName] = useState("");

    const fetchModules = async () => {
        const fetchedModules = await client.findModulesForCourse(cid as string);
        dispatch(setModules(fetchedModules));
    };

    useEffect(() => {
        fetchModules();
    }, []);

    const addModule = async () => {
        if (!cid) return;
        const newModule = { name: moduleName, course: cid };
        const createdModule = await client.createModuleForCourse(cid as string, newModule);
        dispatch(setModules([...modules, createdModule]));
        setModuleName("");
    };

    const deleteModule = async (moduleId: string) => {
        await client.deleteModule(moduleId);
        dispatch(setModules(modules.filter((m: any) => m._id !== moduleId)));
    };

    const editModule = (moduleId: string) => {
        dispatch(editModuleAction(moduleId));
    };

    const updateModule = (moduleData: any) => {
        dispatch(updateModuleAction(moduleData));
    };

    const saveModule = async (moduleData: any) => {
        await client.updateModule(moduleData);
        const newModules = modules.map((m: any) => m._id === moduleData._id ? moduleData : m);
        dispatch(setModules(newModules));
    };

    return (
        <div>
            <ModulesControls moduleName={moduleName} setModuleName={setModuleName} addModule={addModule} />
            <br /><br /><br /><br />
            <ListGroup id="wd-modules" className="rounded-0">
                {modules.map((moduleItem: any) => (
                    <ListGroupItem
                        key={moduleItem._id}
                        className="wd-module p-0 mb-5 fs-5 border-gray"
                    >
                        <div className="wd-title p-3 ps-2 bg-secondary">
                            <BsGripVertical className="me-2 fs-3" />

                            {!moduleItem.editing && moduleItem.name}
                            {moduleItem.editing && (
                                <FormControl
                                    className="w-50 d-inline-block"
                                    onChange={(e) => updateModule({ ...moduleItem, name: e.target.value })}
                                    onKeyDown={(e) => {
                                        if (e.key === "Enter") {
                                            saveModule({ ...moduleItem, editing: false });
                                        }
                                    }}
                                    defaultValue={moduleItem.name}
                                />
                            )}

                            <ModuleControlButtons
                                moduleId={moduleItem._id}
                                deleteModule={deleteModule}
                                editModule={editModule}
                            />
                        </div>

                        <ListGroup className="wd-lessons rounded-0">
                            {moduleItem.lessons?.map((lesson: any) => (
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