let createBtn = document.querySelector(".button");
let ContentInputArea = document.querySelector(".contentInputArea");
let notes = document.querySelector(".input");

function showNotes(){
    ContentInputArea.innerHTML = localStorage.getItem("notes")
}
showNotes();

function createNoteElement(){
    createBtn.addEventListener("click", () => {
        console.log("alo");
            let input =document.createElement("div")
            let inputBox = document.createElement("p");
            let deleteBtn = document.createElement("h3")
            inputBox.className = 'inputNote'
            inputBox.setAttribute("contenteditable", "true");
            deleteBtn.className = 'delete'
            input.className = 'input'
            deleteBtn.innerText = 'Delete'
            deleteBtn.setAttribute("contenteditable", "false");
            input.append(inputBox)
            input.appendChild(deleteBtn)
            ContentInputArea.appendChild(input)
        
        })
}
createNoteElement();

function updateStorage(){
    localStorage.setItem("notes",ContentInputArea.innerHTML)
}

ContentInputArea.addEventListener("click",(e)=>{
    console.log(e.target.tagName)
    if(e.target.tagName === "H3"){
        e.target.parentElement.remove();
        updateStorage();
    }
    else if(e.target.tagName === "P"){
        notes = document.querySelectorAll(".input");
        notes.forEach(e => (
            e.onkeyup =function(){
                updateStorage();
            }
        )
            
        );   
    }
})

document.addEventListener("keydown",(e)=>{
    if(e.key === "Enter"){
        document.execCommand("insertLineBreak");
        e.preventDefault();
    }
})