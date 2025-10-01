import { Button } from "react-bootstrap";
import { FaPlus } from "react-icons/fa6";
import { InputGroup, Form } from "react-bootstrap";
import { BsSearch } from "react-icons/bs";


export default function AssignmentControls() {
    return (
        <div id="wd-assignments" className="text-nowrap">
            <Button variant="danger" size="lg" className="me-1 float-end" id="wd-add-assignment-btn">
                <FaPlus className="position-relative me-2" style={{ bottom: "1px" }} />
                Assignment
            </Button>
            <Button variant="secondary" size="lg" className="me-1 float-end text-black" id="wd-add-group-btn" >
                <FaPlus className="position-relative me-2" style={{ bottom: "1px" }} />
                Group
            </Button>

            <div className="position-relative" style={{ width: 400 }}>
                <BsSearch
                    className="position-absolute top-50 start-0 translate-middle-y ms-3 text-muted"
                    aria-hidden="true" />
                <Form.Control type="search" placeholder="Search..." aria-label="Search assignments" className="ps-5" size="lg" />
            </div>

        </div>
    )
}