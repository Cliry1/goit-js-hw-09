import"./assets/modulepreload-polyfill-ec808ebb.js";/* empty css                      */const e=document.querySelector(".feedback-form"),t="feedback-form-state";localStorage.getItem(t)?(e.elements.email.value=JSON.parse(localStorage.getItem(t)).email.trim(),e.elements.message.value=JSON.parse(localStorage.getItem(t)).message.trim()):(e.elements.email.value="",e.elements.message.value="");e.addEventListener("input",()=>{localStorage.setItem(t,JSON.stringify({email:e.elements.email.value,message:e.elements.message.value}))});e.addEventListener("submit",l=>{if(l.preventDefault(),e.elements.message.value.trim()===""||e.elements.email.value.trim()===""){alert("All form fields must be filled in");return}console.log(localStorage.getItem(t)),localStorage.removeItem(t),e.reset()});
//# sourceMappingURL=commonHelpers2.js.map