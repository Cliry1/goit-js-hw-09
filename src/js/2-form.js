const form = document.querySelector(".feedback-form");
const storage = "feedback-form-state";


if(localStorage.getItem(storage)){
  form.elements.email.value=JSON.parse(localStorage.getItem(storage)).email.trim();
  form.elements.message.value = JSON.parse(localStorage.getItem(storage)).message.trim();
}
else{
  form.elements.email.value="";
  form.elements.message.value="";
}


form.addEventListener("input", () =>{
  localStorage.setItem(storage, JSON.stringify({email:form.elements.email.value, message:form.elements.message.value}))
})

form.addEventListener("submit", event=> {
  event.preventDefault();
  if(form.elements.message.value.trim()===""||form.elements.email.value.trim()===""){
    alert("All form fields must be filled in");
    return;
  }
  console.log(localStorage.getItem(storage))
  localStorage.removeItem(storage);
  form.reset();
})
console.log()
