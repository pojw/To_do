import { project_list } from "./projects";
import { current } from "./project_loader";

export function task_loader(){
let task_section=document.getElementById("task-section")

task_section.innerHTML=""

for(let i=1; i<current.length;i++){
    task_section.innerHTML+=`<div>${current[i].title}</div>`
}

}