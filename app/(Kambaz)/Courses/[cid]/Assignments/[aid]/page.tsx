export default function AssignmentEditor() {
    return (
        <div id="wd-assignments-editor">
            <label htmlFor="wd-name">Assignment Name</label>
            <input id="wd-name" /><br /><br />
            <textarea id="wd-description" rows={10} cols={60}>
                The assignment is available online Submit a link to the landing page of
            </textarea>
            <br />
            <table>
                <tr>
                    <td align="right" valign="top">
                        <label htmlFor="wd-points">Points</label>
                    </td>
                    <td>
                        <input id="wd-points" value={100} />
                    </td>
                    <td>
                        <label htmlFor="wd-group-label">
                            <select name="wd-group" id="wd-group-name">
                                <option value="Assignments">Assignments</option>
                                <option value="quizzes">Quizzes</option>
                                <option value="Exams">Exams</option>
                                <option value="Project">Projects</option>
                            </select>
                        </label>
                    </td>

                    <td>
                        <label htmlFor="wd-display-grade-as-label">
                            <select name="wd-display-grade-as" id="wd-display-grade-as">
                                <option value="percentage">Percentage</option>
                                <option value="points">Points</option>
                            </select>
                        </label>
                    </td>
                    <td>
                        <label htmlFor="wd-submission-type-label">
                            <select name="wd-submission-type" id="wd-submission-type">
                                <option value="online">Online</option>
                                <option value="in-person">In Person</option>
                            </select>
                        </label>

                        <input type="checkbox" id="wd-text-entry" />
                        <label htmlFor="wd-text-entry">Text Entry</label>

                        <input type="checkbox" id="wd-website-url" />
                        <label htmlFor="wd-website-url">Website URL</label>

                        <input type="checkbox" id="wd-media-recordings" />
                        <label htmlFor="wd-media-recordings">Media Recordings</label>

                        <input type="checkbox" id="wd-student-annotation" />
                        <label htmlFor="wd-student-annotation">Student Annotation</label>

                        <input type="checkbox" id="wd-file-upload" />
                        <label htmlFor="wd-file-upload">File Upload</label>

                    </td>

                    <td>
                        <label htmlFor="">Assign to
                            <input id="wd-assign-to" />
                        </label>                    </td>
                </tr>
                <tr>
                    <label htmlFor="due">Due
                        <input defaultValue="2000-01-01" type="date" id="wd-due-date" /><br />

                    </label>
                </tr>

                <tr>
                    <label htmlFor="available-from">Available From
                        <input defaultValue="2000-01-01" type="date" id="wd-available-from" />

                    </label>
                    <label htmlFor="available-until">Until
                        <input defaultValue="2000-01-01" type="date" id="wd-available-until" />

                    </label>
                </tr>

                <button>Cancel</button>
                <button>Save</button>
            </table>
        </div>
    )
}