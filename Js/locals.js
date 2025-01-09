const nameInput = document.getElementById("nameInput");
const saveBtn = document.getElementById("saveBtn")
const clearBtn = document.getElementById("clearBtn")
const output = document.getElementById("output")

document.addEventListener("DOMContentLoaded ", ()=> {
    const savedName = localStorage.getItem("name");
    if(savedName){
        output.textContent = `Hello,${savedName}!`;
    }
});
saveBtn.addEventListener("click", () => {
    const name = nameInput.value;
    if (name) {
        localStorage.setItem("name", name);
        output.textContent = `Hello, ${name}!`;
    } else {
        alert("Please enter a name.");
    }
});

clearBtn.addEventListener("click",()=>{
    localStorage.removeItem("name");
    output.textContent = "";
    nameInput= "";
})