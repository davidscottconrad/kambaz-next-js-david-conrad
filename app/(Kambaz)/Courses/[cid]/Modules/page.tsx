"use client"

import { useParams } from "next/navigation";
import * as db from "../../../Database";
import ModulesControls from "./ModulesControls";
import { ListGroup, ListGroupItem } from "react-bootstrap";
import { BsGripVertical } from "react-icons/bs";
import ModuleControlButtons from "./ModuleControlButtons";
import LessonControlButtons from "./LessonControlButtons";
export default function Modules() {

    const { cid } = useParams();
    const modules: Module[] = db.modules;

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

    return (
        <div>

            <ModulesControls /><br /><br /><br /><br />
            <ListGroup id="wd-modules" className="rounded-0">
                {modules
                    .filter((module) => module.course === cid)
                    .map((module) => (
                        <ListGroupItem
                            key={module._id}
                            className="wd-module p-0 mb-5 fs-5 border-gray"
                        >
                            <div className="wd-title p-3 ps-2 bg-secondary">
                                <BsGripVertical className="me-2 fs-3" /> {module.name}{" "}
                                <ModuleControlButtons />
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
