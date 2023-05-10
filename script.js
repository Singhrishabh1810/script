function validateform(){
 var x=document.forms["myform"]["name"].value;
if (x == ""){ 
    alert("Fill the first name");
    return false;
}}

function validateform2(){
    var x=document.forms["myform"]["name2"].value;
   if (x == ""){ 
       alert("Fill the Last name");
       return false;
   }}


