
import { project_loader } from "./project_loader"
import { saveProjects } from "./projects"

let project_list=JSON.parse(localStorage.getItem("project_list"))

export function project_adder(){

    let new_project_name= document.getElementById("project_name")
    
    let new_project=[]
    new_project.push(`${new_project_name.value}`)
    project_list.push([new_project])
    localStorage.setItem("project_list", JSON.stringify(project_list));
    alert(project_list)
}