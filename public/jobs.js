// jobs.js

import {
    inputEnabled,
    setDiv,
    message,
    setToken,
    token,
    enableInput,
} from "./index.js";
import { showLoginRegister } from "./loginRegister.js";
import { showAddEdit } from "./addEdit.js";

let jobsDiv = null;
let jobsTable = null;
let jobsTableHeader = null;

export const handleJobs = () => {
    jobsDiv = document.getElementById("jobs");
    const logoff = document.getElementById("logoff");
    const addJob = document.getElementById("add-job");
    jobsTable = document.getElementById("jobs-table");
    jobsTableHeader = document.getElementById("jobs-table-header");

    jobsDiv.addEventListener("click", (e) => {
        if (inputEnabled && e.target.nodeName === "BUTTON") {
            if (e.target === addJob) {
                showAddEdit(null);
            } else if (e.target === logoff) {
                showLoginRegister();
            }
        }
    });
};

export const showJobs = async () => {
    setDiv(jobsDiv);
};
