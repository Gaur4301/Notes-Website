console.log("project");
showNotes();
let addbtn=document.getElementById("addBtn");
addbtn.addEventListener("click",function(e){

    let addtxt=document.getElementById("addTxt");
    let notes=localStorage.getItem("notes");

    if(notes==null){
        NotesObj=[];
    }else{
        NotesObj=JSON.parse(notes);
    }
    NotesObj.push(addtxt.value)
    localStorage.setItem("notes",JSON.stringify(NotesObj))
    addtxt.value="";
    console.log(NotesObj)
    showNotes();
});

function showNotes(){
    let notes=localStorage.getItem("notes");
    if(notes==null){
        NotesObj=[];
    }else{
        NotesObj=JSON.parse(notes);
    }
    let html="";
    NotesObj.forEach((element,index) => {  
        html+=`
        <div class="noteCard mx-2 my-2 card" style="width: 18rem;">
              
              <div class="card-body">
                <h5 class="card-title">Note ${index+1}</h5>
                <p class="card-text">${element}</p>
                <button href="#" id=${index} onclick="deleteNode(this.id)" class="btn btn-primary">Delete Note</button>
              </div>
            </div>

        `
        
    });
    let noteElm=document.getElementById("notes");
    if(NotesObj.length!=0){
        noteElm.innerHTML=html;
    }else{
        noteElm.innerHTML=`Nothing to show! Use "Add a note" section above to add notes `;
    }

}
function deleteNode(index){
    console.log("I am deleteing",index);
    let notes=localStorage.getItem("notes");
    if(notes==null){
        NotesObj=[];
    }else{
        NotesObj=JSON.parse(notes);
    }
    NotesObj.splice(index,1);
    localStorage.setItem("notes",JSON.stringify(NotesObj))
    showNotes();

}
let search=document.getElementById("searchTxt");
search.addEventListener("input",function(e){
    let inputVal=search.value.toLowerCase();
    console.log("Input Fired")
    let noteCard=document.getElementsByClassName("noteCard");
    Array.from(noteCard).forEach((element)=>{
        let cardTxt=element.getElementsByTagName("p")[0].innerText;
        console.log(cardTxt)
        if(cardTxt.toLowerCase().includes(inputVal)){
            element.style.display="block";
        }else{
            element.style.display="none";
        }


    })

})

