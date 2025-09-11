export default function Modules() {
    return (
        <div>
            <button>Collapse All</button>

            <button>View Progress</button>
            <select name="publish" id="publish">
                <option value="publish-all">Publish All</option>
                <option value="publish-one">Publish One</option>
            </select>
            <button>+Module</button>
            <ul id="wd-modules">
                <ul id="wd-modules">
                    <li className="wd-module">
                        <div className="wd-title">Week 1</div>
                        <ul className="wd-lessons">
                            <li className="wd-lesson">
                                <span className="wd-title">LEARNING OBJECTIVES</span>
                                <ul className="wd-content">
                                    <li className="wd-content-item">Introduction to the course</li>
                                    <li className="wd-content-item">Learn what is Web Development</li>
                                </ul>
                            </li>
                        </ul>
                    </li>
                    <li className="wd-module">
                        <div className="wd-title">Week 2</div>
                        <ul className="wd-lessons">
                            <li className="wd-lesson">
                                <span className="wd-title">LEARNING OBJECTIVES</span>
                                <ul className="wd-content">
                                    <li className="wd-content-item">HTML fundamentals and structure</li>
                                    <li className="wd-content-item">Creating basic web pages</li>
                                    <li className="wd-content-item">Understanding HTML elements and attributes</li>
                                </ul>
                            </li>
                        </ul>
                    </li>
                    <li className="wd-module">
                        <div className="wd-title">Week 3</div>
                        <ul className="wd-lessons">
                            <li className="wd-lesson">
                                <span className="wd-title">LEARNING OBJECTIVES</span>
                                <ul className="wd-content">
                                    <li className="wd-content-item">CSS basics and styling</li>
                                    <li className="wd-content-item">Selectors and properties</li>
                                    <li className="wd-content-item">Layout and positioning</li>
                                </ul>
                            </li>
                        </ul>
                    </li>
                </ul>
            </ul>
        </div>
    );
}
