// addEdit.js

import { enableInput, inputEnabled, message, setDiv, token } from "./index.js";
import { showJobs } from "./jobs.js";

let addEditDiv = null;
let company = null;
let position = null;
let status = null;
let addingJob = null;

export const handleAddEdit = () => {
    addEditDiv = document.getElementById("edit-job");
    company = document.getElementById("company");
    position = document.getElementById("position");
    status = document.getElementById("status");
    addingJob = document.getElementById("adding-job");
    const editCancel = document.getElementById("edit-cancel");

    addEditDiv.addEventListener("click", (e) => {
        if (inputEnabled && e.target.nodeName === "BUTTON") {
            if (e.target === addingJob) {
                showJobs();
            } else if (e.target === editCancel) {
                showJobs();
            }
        }
    });
};

export const showAddEdit = (job) => {
    message.textContent = "";
    setDiv(addEditDiv);
};
