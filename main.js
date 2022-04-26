const task = document.querySelector("#container");
const upload = document.querySelector(".icon-upload");
const input = document.querySelector(".input");
upload.addEventListener("click", (eo) => {
    eo.preventDefault;
    const newTask = `
    <div class="task">   
    <span class="icon-star"></span>
    <p class="test"> ${input.value}</p>
    <div>
    <span class="icon-trash-o"></span>
    <span class="icon-sad"></span>
</div>`;
    task.innerHTML += newTask;
    input.value=""
});

task.addEventListener("click", (eo) => {
    if (eo.target.className == "icon-trash-o")
        eo.target.parentElement.parentElement.remove();
    else if (eo.target.className == "icon-sad") {
        eo.target.classList.add("dn");
        const heart = `<span class="icon-heart"></span>`;
        eo.target.parentElement.parentElement.getElementsByClassName("test")[0].classList.add("finish")
        eo.target.parentElement.innerHTML += heart;
    } 
   else if(eo.target.classList=="icon-heart"){
       eo.target.classList.add("dn")
       const sad=` 
       <span class="icon-sad"></span>
       `
       eo.target.parentElement.parentElement.getElementsByClassName("test")[0].classList.remove("finish")
       eo.target.parentElement.innerHTML+=sad

   }
    else if (eo.target.className == "icon-star") {
        eo.target.classList.add("orange")
        task.prepend(eo.target.parentElement)
    }
    else if(eo.target.className=="icon-star orange"){
        eo.target.classList.remove("orange")
        task.append(eo.target.parentElement)
    }
     
});
