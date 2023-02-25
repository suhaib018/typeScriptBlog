const Name =<HTMLInputElement>document.querySelector("#contact-name");
const contactForm = <HTMLFormElement>document.querySelector(".contact-form");
const blogTitle =<HTMLInputElement>document.querySelector("#blog-title");
const blogAuthor =<HTMLInputElement>document.querySelector("#blog-author");
const postBtn = <HTMLButtonElement>document.querySelector(".post-blog-submit");
const bold :any = document.getElementById("bold");
const editor = document.getElementById("editor");
const italick = document.getElementById("italic");
const underLine = document.getElementById("underline");
const textStrke = document.getElementById("strikethrough");
const subScript = document.getElementById("subscript");
const subperScript = document.getElementById("superscript");






let blogTitleChange:string ="";
let blogAuthorChange:string ="";
let blogBodyChange:string ="";
let option

type blogObjet = {
    image?:HTMLImageElement;
    name:string;
    title:string;
    body:string;
};




const blogs: blogObjet[] = [];
//List of fontlist
let fontList = [
  "Arial",
  "Verdana",
  "Times New Roman",
  "Garamond",
  "Georgia",
  "Courier New",
  "cursive",
];



bold.addEventListener("click",() => boldSelection());
italick?.addEventListener("click",() => italicizeSelection());
underLine?.addEventListener("click",() => underLinStyle());
textStrke?.addEventListener("click",() => lineThrough());
subScript?.addEventListener("click",() => subScriptStyle());
subperScript?.addEventListener("click",() => superScriptStyle());




function superScriptStyle() {
    // Get the selected text
    const selection = window.getSelection();
  
    // Check if there is any selected text
    if (selection && selection.rangeCount > 0) {
      // Get the selected range
      const range = selection.getRangeAt(0);
  
      // Create a new <span> element to wrap the selected text in
      const span = document.createElement("span");
      span.style.verticalAlign= "super";
  
      // Wrap the selected text in the <span> element
      range.surroundContents(span);
    }
  }

function subScriptStyle() {
    // Get the selected text
    const selection = window.getSelection();
  
    // Check if there is any selected text
    if (selection && selection.rangeCount > 0) {
      // Get the selected range
      const range = selection.getRangeAt(0);
  
      // Create a new <span> element to wrap the selected text in
      const span = document.createElement("span");
      span.style.verticalAlign= "sub";
  
      // Wrap the selected text in the <span> element
      range.surroundContents(span);
    }
  }
  

function boldSelection() {
  // Get the selected text
  const selection = window.getSelection();

  // Check if there is any selected text
  if (selection && selection.rangeCount > 0) {
    // Get the selected range
    const range = selection.getRangeAt(0);

    // Create a new <span> element to wrap the selected text in
    const span = document.createElement("span");
    span.style.fontWeight = "bold";

    // Wrap the selected text in the <span> element
    range.surroundContents(span);
  }
}


function underLinStyle() {
    // Get the selected text
    const selection = window.getSelection();
  
    // Check if there is any selected text
    if (selection && selection.rangeCount > 0) {
      // Get the selected range
      const range = selection.getRangeAt(0);
  
      // Create a new <span> element to wrap the selected text in
      const span = document.createElement("span");
      span.style.textDecoration = "underline";
  
      // Wrap the selected text in the <span> element
      range.surroundContents(span);
    }
  }


  function lineThrough() {
    // Get the selected text
    const selection = window.getSelection();
  
    // Check if there is any selected text
    if (selection && selection.rangeCount > 0) {
      // Get the selected range
      const range = selection.getRangeAt(0);
  
      // Create a new <span> element to wrap the selected text in
      const span = document.createElement("span");
      span.style.textDecoration = "line-through";
  
      // Wrap the selected text in the <span> element
      range.surroundContents(span);
    }
  }
function italicizeSelection() {
  // Get the selected text
  const selection = window.getSelection();

  // Check if there is any selected text
  if (selection && selection.rangeCount > 0) {
    // Get the selected range
    const range = selection.getRangeAt(0);

    // Create a new <span> element to wrap the selected text in
    const span = document.createElement("span");
    span.style.fontStyle = "italic";

    // Wrap the selected text in the <span> element
    range.surroundContents(span);
  }
}




Name.addEventListener("change",function (){
    personName = Name.value;
})

postBtn.addEventListener('submit',function(event){
    event.preventDefault();
    blogs.push({name:blogAuthorChange,title:blogTitleChange,body:blogBodyChange});
    console.log(`Blogs Array ${JSON.stringify(blogs)}`);
})

blogAuthor.addEventListener("change",function (){
    blogAuthorChange = blogAuthor.value;
})

blogTitle.addEventListener("change",function (){
    blogTitleChange = blogTitle.value;
})

let personName:string ="";

Name.addEventListener("change",function (){
    personName = Name.value;
})
