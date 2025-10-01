import { MdDoNotDisturbAlt } from "react-icons/md";
import { FaCheckCircle } from "react-icons/fa";
import { BiImport } from "react-icons/bi";
import { LiaFileImportSolid } from "react-icons/lia";
import { BsHouseFill, BsDisplay, BsMegaphoneFill, BsGraphUp, BsBellFill } from "react-icons/bs";
import { Button } from "react-bootstrap";

export default function CourseStatus() {
  return (
    <div id="wd-course-status" style={{ width: "350px" }}>
      <h2>Course Status</h2>
      <div className="d-flex">
        <div className="w-50 pe-1">
          <Button variant="secondary" size="lg" className="w-100 text-nowrap ">
            <MdDoNotDisturbAlt className="me-2 fs-5" /> Unpublish </Button> </div>
        <div className="w-50">
          <Button variant="success" size="lg" className="w-100">
            <FaCheckCircle className="me-2 fs-5" /> Publish </Button> </div>
      </div>
      <br />
      <Button variant="secondary" size="lg" className="w-100 mt-1 text-start">
        <BiImport className="me-2 fs-5" /> Import Existing Content </Button>
      <Button variant="secondary" size="lg" className="w-100 mt-1 text-start">
        <LiaFileImportSolid className="me-2 fs-5" /> Import from Commons </Button>
      {/* Complete the rest of the buttons */}
      <Button variant="secondary" size="lg" className="w-100 mt-1 text-start">
        <BsHouseFill className="me-2 fs-5" />Choose Home Page</Button>
      <Button variant="secondary" size="lg" className="w-100 mt-1 text-start">
        <BsDisplay className="me-2 fs-5" />View Course Screen</Button>

      <Button variant="secondary" size="lg" className="w-100 mt-1 text-start">
        <BsMegaphoneFill /> New Announcement </Button>

      <Button variant="secondary" size="lg" className="w-100 mt-1 text-start">
        <BsGraphUp className="me-2 fs-5" />New Analytics </Button>

      <Button variant="secondary" size="lg" className="w-100 mt-1 text-start">
        <BsBellFill className="me-2 fs-5" />View Course Notifications </Button>
    </div>

    // <div id="wd-course-status">
    //   <h2>Course Status</h2>
    //   <button>Unpublish</button> <button>Publish</button><br />
    //   {/* Complete on your own */}
    //   <button>Import Existing Content</button><br />
    //   <button>Import from Commons</button><br />
    //   <button>Choose home Page</button><br />
    //   <button>View Course Stream</button><br />
    //   <button>New Annoucement</button><br />
    //   <button>New Analytics</button> <br />   
    //   <button>View Course Notifications</button><br />
    // </div> 

  );
}
