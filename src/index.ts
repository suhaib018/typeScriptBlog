const Name =<HTMLInputElement>document.querySelector("#contact-name");
const contactForm = <HTMLFormElement>document.querySelector(".contact-form");
const blogTitle =<HTMLInputElement>document.querySelector("#blog-title");
const blogAuthor =<HTMLInputElement>document.querySelector("#blog-author");
const postBtn = <HTMLButtonElement>document.querySelector(".post-blog-submit");
const bold  = <HTMLButtonElement>document.getElementById("bold");
const editor = <HTMLButtonElement>document.getElementById("editor");
const italick = <HTMLButtonElement>document.getElementById("italic");
const underLine = <HTMLButtonElement>document.getElementById("underline");
const textStrke = <HTMLButtonElement>document.getElementById("strikethrough");
const subScript = <HTMLButtonElement>document.getElementById("subscript");
const subperScript = <HTMLButtonElement>document.getElementById("superscript");
const left = <HTMLButtonElement>document.getElementById("justifyLeft");
const right = <HTMLButtonElement>document.getElementById("justifyRight");
const center = <HTMLButtonElement>document.getElementById("justifyCenter");
const orderList = <HTMLButtonElement>document.getElementById("insertOrderedList");
const unOrderList = <HTMLButtonElement>document.getElementById("insertUnorderedList");
const fontColor = <HTMLButtonElement>document.getElementById("foreColor");
const previewImage = document.querySelector("#previewImage");
const imageInput = <HTMLInputElement>document.querySelector("#file");

imageInput?.addEventListener("change",loadImage);

function loadImage(){
    let file = imageInput?.files[0];
    previewImage.src = URL.createObjectURL(file);
   console.log(file)
}













let blogTitleChange:string ="";
let blogAuthorChange:string ="";
let blogBodyChange:string ="";

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
left?.addEventListener("click",() => justifyLeft());
right?.addEventListener("click",() => justifyRight());
center?.addEventListener("click",() => justifyCenter());
orderList?.addEventListener("click",() => createOrderedList());
unOrderList?.addEventListener("click",() => createUnOrderedList());
// fontColor?.addEventListener("click",() => setColor(fontColor));



// function setColor(colorInput: HTMLButtonElement) {
//     const selection = window.getSelection();
//     if (selection && selection.rangeCount > 0) {
//       const range = selection.getRangeAt(0);
//       const color = colorInput.value;
//       const span = document.createElement('span');
//       span.style.color = color;
//       span.appendChild(range.extractContents());
//       range.insertNode(span);
//     }
  
// }

// function setColor(colorInput: any | null, selection= window.getSelection()) {
//     if (selection && selection.rangeCount > 0) {
//       const range = selection.getRangeAt(0);
//       const color = colorInput?.value;
//       const span = document.createElement('span');
//       span.style.color = color;
//       span.appendChild(range.extractContents());
//       range.insertNode(span);
//     }
//   }
  
//   const colorInput = document.getElementById('color-input');
//   colorInput?.addEventListener('input', () => setColor(colorInput));
  
//   document.addEventListener('selectionchange', () => {
//     const selection = window.getSelection();
//     if (selection && selection.rangeCount > 0) {
//       const range = selection.getRangeAt(0);
//       const span = range.commonAncestorContainer.parentNode;
//       if (span?.tagName === 'SPAN') {
//         colorInput?.value = span.style.color;
//       }
//     }
//   });





function createOrderedList() {
    // Get the selected text
    const selection = window.getSelection();
  
    // Check if there is any selected text
    if (selection && selection.rangeCount > 0) {
      // Get the selected range
      const range = selection.getRangeAt(0);
  
      // Create a new <ol> element to wrap the selected text in
      const ol = document.createElement("ol");
  
      // Get the text content of the selection
      const text = range.toString();
  
      // Split the text content into an array of lines
      const lines = text.split("\n");
  
      // Create a new <li> element for each line of text
      for (let i = 0; i < lines.length; i++) {
        const line = lines[i];
  
        // Create a new <li> element for this line of text
        const li = document.createElement("li");
        li.textContent = line;
  
        // Add the <li> element to the <ol> element
        ol.appendChild(li);
      }
  
      // Replace the selected text with the <ol> element
      range.deleteContents();
      range.insertNode(ol);
    }
  }
  

  function createUnOrderedList() {
    // Get the selected text
    const selection = window.getSelection();
  
    // Check if there is any selected text
    if (selection && selection.rangeCount > 0) {
      // Get the selected range
      const range = selection.getRangeAt(0);
  
      // Create a new <ol> element to wrap the selected text in
      const ul = document.createElement("ul");
  
      // Get the text content of the selection
      const text = range.toString();
  
      // Split the text content into an array of lines
      const lines = text.split("\n");
  
      // Create a new <li> element for each line of text
      for (let i = 0; i < lines.length; i++) {
        const line = lines[i];
  
        // Create a new <li> element for this line of text
        const li = document.createElement("li");
        li.textContent = line;
  
        // Add the <li> element to the <ul> element
        ul.appendChild(li);
      }
  
      // Replace the selected text with the <ul> element
      range.deleteContents();
      range.insertNode(ul);
    }
  }
  



function justifyLeft() {
    // Get the selected text
    const selection = window.getSelection();
  
    // Check if there is any selected text
    if (selection && selection.rangeCount > 0) {
      // Get the selected range
      const range = selection.getRangeAt(0);
  
      // Create a new <span> element to wrap the selected text in
      const div = document.createElement("div");
      div.style.textAlign= "left";
  
      // Wrap the selected text in the <span> element
      range.surroundContents(div);
    }
}


function justifyCenter() {
    // Get the selected text
    const selection = window.getSelection();
  
    // Check if there is any selected text
    if (selection && selection.rangeCount > 0) {
      // Get the selected range
      const range = selection.getRangeAt(0);
  
      // Create a new <span> element to wrap the selected text in
      const div = document.createElement("div");
      div.style.textAlign= "center";
  
      // Wrap the selected text in the <span> element
      range.surroundContents(div);
    }
  }

  function justifyRight() {
    // Get the selected text
    const selection = window.getSelection();
  
    // Check if there is any selected text
    if (selection && selection.rangeCount > 0) {
      // Get the selected range
      const range = selection.getRangeAt(0);
  
      // Create a new <span> element to wrap the selected text in
      const div = document.createElement("div");
      div.style.textAlign= "right";
  
      // Wrap the selected text in the <span> element
      range.surroundContents(div);
    }
  }




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
