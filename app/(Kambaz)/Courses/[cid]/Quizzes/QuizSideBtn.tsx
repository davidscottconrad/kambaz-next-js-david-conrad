import { useState, forwardRef, MouseEvent } from "react";
import { Dropdown } from "react-bootstrap";
import { IoEllipsisVertical } from "react-icons/io5";
import GreenCheckmark from "../Modules/GreenCheckmark";
import { BsBan } from "react-icons/bs";


type QuizSideBtnProps = {
    initialPublished?: boolean;              // default: unpublished
    onEdit?: () => void;
    onDelete?: () => void;
    onPublishChange?: (published: boolean) => void;
};

const IconToggle = forwardRef<HTMLButtonElement, { onClick?: (e: MouseEvent) => void }>(
    ({ onClick }, ref) => (
        <button
            ref={ref}
            className="btn p-0 border-0 bg-transparent"
            aria-label="More actions"
            onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                onClick?.(e);
            }}
            onMouseDown={(e) => {
                e.preventDefault();
                e.stopPropagation();
            }}
        >
            <IoEllipsisVertical className="fs-4" />
        </button>
    )
);
IconToggle.displayName = "IconToggle";

export default function QuizSideBtn({
    initialPublished = false,
    onEdit,
    onDelete,
    onPublishChange,
}: QuizSideBtnProps) {
    const [published, setPublished] = useState(initialPublished);

    const togglePublish = (e: MouseEvent) => {
        e.preventDefault();
        e.stopPropagation();
        const next = !published;
        setPublished(next);
        onPublishChange?.(next);
    };

    const stop = (e: MouseEvent) => {
        e.preventDefault();
        e.stopPropagation();
    };

    return (
        // guard so clicks never bubble to the wrapping <Link>
        <div className="ms-auto d-flex align-items-center gap-3" onClick={stop}>
            {published ? (
                <GreenCheckmark aria-label="Published" />
            ) : (
                <BsBan className="text-danger fs-3" title="Unpublished" />
            )}

            {/* Kebab dropdown */}
            <Dropdown align="end">
                <Dropdown.Toggle as={IconToggle} id="quiz-actions-toggle" />
                <Dropdown.Menu onClick={stop}>
                    <Dropdown.Item onClick={onEdit}>Edit</Dropdown.Item>
                    <Dropdown.Item onClick={onDelete}>Delete</Dropdown.Item>
                    <Dropdown.Divider />
                    <Dropdown.Item onClick={togglePublish}>
                        {published ? "Unpublish" : "Publish"}
                    </Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
        </div>
    );
}



// type Props = {
//     initialPublished?: boolean;
//     onEdit?: () => void;
//     onDelete?: () => void;
//     onPublishChange?: (published: boolean) => void;
// };

// export default function AssignmentSideBtn({
//     initialPublished = false,
//     onEdit,
//     onDelete,
//     onPublishChange,
// }: Props) {
//     const [published, setPublished] = useState(initialPublished);

//     const togglePublish = () => {
//         const next = !published;
//         setPublished(next);
//         onPublishChange?.(next);
//     };
//     return (
//         <div className="float-end d-flex align-items-center gap-4">
//             <GreenCheckmark />
//             <Dropdown align="end">
//                 <Dropdown.Toggle
//                     variant="link"
//                     className="p-0 border-0 text-body"
//                     id="assignment-actions"
//                 >
//                     <IoEllipsisVertical className="fs-4" />
//                 </Dropdown.Toggle>

//                 <Dropdown.Menu>
//                     <Dropdown.Item onClick={onEdit}>Edit</Dropdown.Item>
//                     <Dropdown.Item onClick={onDelete}>Delete</Dropdown.Item>
//                     <Dropdown.Divider />
//                     <Dropdown.Item onClick={togglePublish}>
//                         {published ? "Unpublish" : "Publish"}
//                     </Dropdown.Item>
//                 </Dropdown.Menu>
//             </Dropdown>
//         </div>
//     );
// }