import { task } from "./task_class"




let code = new task("study","dwill work on code","march","high")
let workout = new task("workout","dwill work on code","march","high")


let project_list=[]
let study_project=[]
study_project.push("study project")
study_project.push(code)
study_project.push(code)
study_project.push(code)

let school_project=[]
school_project.push("first peropd")
school_project.push(workout)
school_project.push(workout)
school_project.push(workout)

project_list.push(study_project)
project_list.push(school_project)
project_list.push(study_project)

localStorage.setItem("project_list", JSON.stringify(project_list))
// Function to save data
export function saveProjects() {
    localStorage.setItem("project_list", JSON.stringify(project_list));
}