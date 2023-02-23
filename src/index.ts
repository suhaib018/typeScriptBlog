const Name =<HTMLInputElement>document.querySelector("#contact-name");
const contactForm = <HTMLFormElement>document.querySelector(".contact-form");

let personName:string ="";

Name.addEventListener("change",function (){
    personName = Name.value;
})

contactForm.addEventListener('submit',function (event){
    event.preventDefault();
    alert(`Hello ${personName} will we contact you soon`);
})