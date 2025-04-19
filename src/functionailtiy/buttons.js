import { project_adder } from "./project-creator";

export function buttons(){


    const close = document.getElementById("close");
    const open = document.getElementById("open");
    const modal = document.getElementById("modal");
    const submit=document.getElementById("Submit")
    
    
    open.addEventListener("click", () => modal.classList.add("show-modal"));
    close.addEventListener("click", () => modal.classList.remove("show-modal"));
    submit.addEventListener("click",()=> project_adder());
    
    window.addEventListener("click", (e) => {
      e.target === modal ? modal.classList.remove("show-modal") : false;
    });

    const close2 = document.getElementById("close2");
    const open2 = document.getElementById("open2");
    const modal2 = document.getElementById("modal2");
    const submit2=document.getElementById("Submit2")
    
    function working2(){
       let name=document.getElementById("task_name")
        alert(name.value)
    }
    
    open2.addEventListener("click", () => modal2.classList.add("show-modal"));
    close2.addEventListener("click", () => modal2.classList.remove("show-modal"));
    submit2.addEventListener("click",()=> working2());
    
    window.addEventListener("click", (e) => {
      e.target === modal2 ? modal2.classList.remove("show-modal") : false;
    });

}