import { task } from "./task_class";
import { task_loader } from "./task_loader";
let project_list=JSON.parse(localStorage.getItem("project_list"))

export let current=project_list[0]
 function current_project(index){
    current=index
    task_loader()
}

export function project_loader(){

let projects=document.getElementById("projects")
projects.textContent=""

for(let i=0; i<project_list.length;i++){
    const btn = document.createElement("button");
btn.textContent = `${project_list[i][0]}`
btn.addEventListener("click", function() {current_project(project_list[i]) })
btn.classList.add('project-box')
projects.appendChild(btn)
}

}

