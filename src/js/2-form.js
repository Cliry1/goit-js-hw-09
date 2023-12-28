const form = document.querySelector(".feedback-form");
const storage = "feedback-form-state";

const storageItem = JSON.parse(localStorage.getItem(storage));

if(localStorage.getItem(storage)){
  form.elements.email.value=storageItem.email;
  form.elements.message.value = storageItem.message;
}
else{
  form.elements.email.value="";
  form.elements.message.value="";
}


form.addEventListener("input", () =>{
  localStorage.setItem(storage, JSON.stringify({email:form.elements.email.value.trim(), message:form.elements.message.value.trim()}))
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
