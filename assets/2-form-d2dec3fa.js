const a=document.querySelector(".feedback-form"),t={email:"",message:""},s=e=>{for(const r in e)a.elements[r].value=e[r]};s(JSON.parse(localStorage.getItem("feedback-form-state")));const o=e=>{e.target.name==="email"?t.email=e.target.value:t.message=e.target.value,localStorage.setItem("feedback-form-state",JSON.stringify(t))};a.addEventListener("input",o);document.querySelector(".feedback-form button");const l=e=>{e.preventDefault(),JSON.parse(localStorage.getItem("feedback-form-state")),(t.email===""||t.message==="")&&alert("Fill please all fields"),a.reset()};a.addEventListener("submit",l);
//# sourceMappingURL=2-form-d2dec3fa.js.map
