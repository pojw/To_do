
import "./styles.css";

import { project_list } from "./functionailtiy/projects";
import { project_loader } from "./functionailtiy/project_loader";
import { task_loader } from "./functionailtiy/task_loader";
import { buttons } from "./functionailtiy/buttons";


project_loader()
task_loader()
buttons()
document.getElementById("reset-btn").addEventListener("click", resetProjects);

function resetProjects() {
    localStorage.removeItem("project_list"); //  Delete stored data
    location.reload(); // 🔄 Refresh the page
}
//functions that are required
//project loader
// task loader
//add new project//it will need three different arrays and for teir of deadlikne and then combine them 
//add new task
//class for task stating time, and the remaing thigns
//array for projects which will store the task details 
// let content=document.getElementById("test")
// content.innerHTML=`${project_list[0].priority}`

// console.log(project_list)