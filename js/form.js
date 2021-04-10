let email=document.getElementById("email");
let password=document.getElementById("pwd");
let error=document.getElementById("error");
let errorp=document.getElementById("errorp");
let phno=document.getElementById("phone");
let errorph=document.getElementById("errorph");
function evalidate(){

  let regexp=/^(?!.*\.{2})([A-Za-z][A-Za-z0-9\-._#]+)@([A-Za-z0-9]+).([a-z]{2,3})(.[a-z]{2,3})+?$/
  if(regexp.test(email.value)){
      error.innerText="Email is valid";
      error.style.color="green";
      error.style.backgroundColor="lightcyan";
      return true;
  }
  else{
    error.innerText="Email is invalid";
    error.style.color="red";
    error.style.backgroundColor="lightcyan";
    return false;
  }
}
function CheckPassword() 
{ 
let passw = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
let passl=/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{0,8}$/;
if(password.value.length<4){
  errorp.innerText="Minimum length is 8 with lowercase,uppercase and a number";
  errorp.style.backgroundColor="lightblue"
  return false;
}
else if(password.value.match(passw)) 
{ 
  errorp.innerHTML="<span style='color:green'><b>Strong</b></span>";
  password.style.border="2px solid green";
  return true;
}
else if(password.value.match(passl))
{ 
  errorp.innerHTML="<span style='color:orange'><b>Medium</b></span>";
  password.style.border="2px solid orange";
  return false;
}
else {
  errorp.innerHTML="<span style='color:red'><b>Weak</b></span>";
  password.style.border="2px solid red";
  return false;
}
}

function phonecheck()
{
let pf1=/^\d{10}$/;
let pf2=/^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
if((phno.value.match(pf1)||phno.value.match(pf2))){
  errorph.innerHTML="<b>Valid Format</b>";
  errorph.style.color="green";
  phno.style.border="2px solid green";
  return true;
}
else{
  errorph.innerHTML="<b>Invalid Format;Only numbers,-,. and spaces are accepted</b>";
  errorph.style.color="red";
  phno.style.border="2px solid red";
  return false;
}
}
function logs(){
  let er=evalidate();
  let pwdr=CheckPassword();
  if(er&&pwdr){
    alert("Login has been successful");
    return true;
  }
  else{
    alert("Email/Password is incorrect");
    return false;
  }
}
function sign_v(){
  let er=evalidate();
  let pwdr=CheckPassword();
  let phr=phonecheck();
  if(er&&pwdr&&phr){
    alert("Your account has been created");
    return true;
  }
  else{
    alert("Email/Password/Phone number is incorrect");
    return false;
  }
}
