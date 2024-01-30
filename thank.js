var form = document.getElementById("sheet-db")
form.addEventListener("submit", e=>{
    e.preventDefault()
    fetch(form.action,{
        method:"POST",
        body: new FormData(document.getElementById("sheet-db")),
    }).then((html) =>{
        window.open('message.html','_blank');
    });
})