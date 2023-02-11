
document.getElementById("btn").
addEventListener("click",e=>{
    e.preventDefault(); //predefined function --to stop page load/refresh
    getinputsfun();
});

function getinputsfun(){
   var cname = document.getElementById("user").value;
   var email = document.getElementById("emailid").value;
   var contact = document.getElementById("cno").value;
   var address = document.getElementById("addr").value;
   document.getElementById("tbody").innerHTML += 
   "<tr><td>"+cname+"</td><td>"
   +email+"</td><td>"+contact+
   "</td><td>"+address+"</td></tr>";
}

document.getElementById("btnreset").addEventListener("click",x=>{
    x.preventDefault();
    resetfunc();
});
function resetfunc(){
    document.getElementById("user").value="";
   document.getElementById("emailid").value="";
   document.getElementById("cno").value="";
   document.getElementById("addr").value="";  
}