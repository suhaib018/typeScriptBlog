const Name =<HTMLInputElement>document.querySelector("#contact-name");
const contactForm = <HTMLFormElement>document.querySelector(".contact-form");
const blogTitle =<HTMLInputElement>document.querySelector("#blog-title");
const blogAuthor =<HTMLInputElement>document.querySelector("#blog-author");
const postBtn = <HTMLButtonElement>document.querySelector(".post-blog-submit");
const bold  = <HTMLButtonElement>document.getElementById("bold");
const editor = <HTMLDivElement>document.getElementById("editor");
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
const previewImage =<HTMLImageElement> document.querySelector("#previewImage");
const imageInput = <HTMLInputElement>document.querySelector("#file");
const Heading = <HTMLInputElement>document.querySelector("#formatBlock");
const cardContainer = document.querySelector(".blog-card");
const cardContainerGrid =document.querySelector(".card-container");
const uploadPhotoContainer =document.querySelector(".upload-photo");

type blogObjet = {
  image?:any;
  name:string;
  title:string;
  body:string;
};
let blogs: blogObjet[] = [];
let blogTitleChange:string ="";
let blogAuthorChange:string ="";
let blogBodyChange:string ="";
let blogImageChange:any;
let personName:string ="";
let searchedBlog :string = "";
const myArray: blogObjet[] = JSON.parse(localStorage.getItem("myBlogs") || "[]");
let image :HTMLImageElement = document.createElement("img");
myArray.forEach((blog) => {
  
    let cardContainer = document.createElement("div"); 
    let cardHeader = document.createElement("div");
    let cardBody = document.createElement("div");
    let cardInfo = document.createElement("div");
    let description = document.createElement("p");
    let image = document.createElement("img");
    let h4Heading = document.createElement("h4");
    let authorName = document.createElement("p");
  
    cardContainer.className = "blog-card"; 
    cardHeader.className ="card-header";
    cardBody.className = "card-body"
    image.src =blog.image;
    h4Heading.innerText = blog.title;
    authorName.innerText = blog.name
    cardInfo.className = "card-description";
    description.innerText = blog.body;
    cardInfo.append(description);
    cardHeader.append(image);
    cardBody.append(h4Heading);
    cardBody.append(authorName);
  
    cardContainer.append(cardHeader); 
    cardContainer.append(cardBody);
    cardContainer.append(cardInfo);
    cardContainer.append(cardInfo);
  
    cardContainerGrid?.append(cardContainer); 
  
})
//############ BLOG EVENTS ############
bold?.addEventListener("click",() => boldSelection());
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
Heading?.addEventListener("change",() => HeadingHandler());
fontColor?.addEventListener("input",() => colorHandler());
imageInput?.addEventListener("input",loadImage);

//########## ACTIONS##########
function loadImage() : void{
  let file :any;
  if (imageInput && imageInput.files && imageInput.files.length > 0) {
  file = imageInput.files[0];
  } else {
    console.log("No file selected");
  }
    image.src= URL.createObjectURL(file);
    image.width = 300;
    image.width = 200;
    image.alt = "Image Not Found"
    uploadPhotoContainer?.append(image);
    blogImageChange =  image.src;
}
function HeadingHandler():void {
  // Get the selected text
  const selection: Selection | null = window.getSelection();
  let level = Heading.value;
  // Check if there is any selected text
  if (selection && selection.rangeCount > 0) {
    // Get the selected range
    const range = selection.getRangeAt(0);
    // Get the desired heading level from the select element
    // Create a new heading element with the desired level
    const heading: HTMLElement = document.createElement(level);
    // Get the selected text and set it as the content of the heading element
    const selectedText = range.extractContents();
    heading.appendChild(selectedText);
    // Wrap the selected text in the heading element
    range.insertNode(heading);
  }
}
function colorHandler():void {
  // Get the selected text
  const selection: Selection | null = window.getSelection();
  // Check if there is any selected text
  if (selection && selection.rangeCount > 0) {
    // Get the selected range
    const range:Range = selection.getRangeAt(0);
    // Create a new <span> element to wrap the selected text in
    const span:HTMLSpanElement = document.createElement("span");
    span.style.color= fontColor.value;
    // Wrap the selected text in the <span> element
    range.surroundContents(span);
  }
}
function createOrderedList():void {
    // Get the selected text
    const selection:Selection |null = window.getSelection();
    // Check if there is any selected text
    if (selection && selection.rangeCount > 0) {
      // Get the selected range
      const range:Range = selection.getRangeAt(0);
      // Create a new <ol> element to wrap the selected text in
      const ol:HTMLOListElement = document.createElement("ol");
      // Get the text content of the selection
      const text:string = range.toString();
      // Split the text content into an array of lines
      const lines = text.split("\n");
      // Create a new <li> element for each line of text
      for (let i:number = 0; i < lines.length; i++) {
        const line = lines[i];
        // Create a new <li> element for this line of text
        const li :HTMLLIElement = document.createElement("li");
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
    const selection:Selection | null = window.getSelection();
    // Check if there is any selected text
    if (selection && selection.rangeCount > 0) {
      // Get the selected range
      const range:Range = selection.getRangeAt(0);
      // Create a new <ol> element to wrap the selected text in
      const ul:HTMLUListElement = document.createElement("ul");
      // Get the text content of the selection
      const text:string = range.toString();
      // Split the text content into an array of lines
      const lines:string[] = text.split("\n");
      // Create a new <li> element for each line of text
      for (let i:number = 0; i < lines.length; i++) {
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
function justifyLeft():void {
    // Get the selected text
    const selection:Selection | null = window.getSelection();
    // Check if there is any selected text
    if (selection && selection.rangeCount > 0) {
      // Get the selected range
      const range:Range = selection.getRangeAt(0);
      // Create a new <span> element to wrap the selected text in
      const div:HTMLDivElement = document.createElement("div");
      div.style.textAlign= "left";
      // Wrap the selected text in the <span> element
      range.surroundContents(div);
    }
}
function justifyCenter():void {
    // Get the selected text
    const selection:Selection |null = window.getSelection();
    // Check if there is any selected text
    if (selection && selection.rangeCount > 0) {
      // Get the selected range
      const range:Range = selection.getRangeAt(0);
      // Create a new <span> element to wrap the selected text in
      const div:HTMLDivElement = document.createElement("div");
      div.style.textAlign= "center";
      // Wrap the selected text in the <span> element
      range.surroundContents(div);
    }
}
function justifyRight():void {
  // Get the selected text
  const selection:Selection | null = window.getSelection();
  // Check if there is any selected text
  if (selection && selection.rangeCount > 0) {
    // Get the selected range
    const range:Range = selection.getRangeAt(0);
    // Create a new <span> element to wrap the selected text in
    const div:HTMLDivElement = document.createElement("div");
    div.style.textAlign= "right";
    // Wrap the selected text in the <span> element
    range.surroundContents(div);
  }
}
function superScriptStyle():void {
    // Get the selected text
    const selection:Selection | null = window.getSelection();
    // Check if there is any selected text
    if (selection && selection.rangeCount > 0) {
      // Get the selected range
      const range:Range = selection.getRangeAt(0);
      // Create a new <span> element to wrap the selected text in
      const span:HTMLSpanElement = document.createElement("span");
      span.style.verticalAlign= "super";
      // Wrap the selected text in the <span> element
      range.surroundContents(span);
    }
}
function subScriptStyle():void {
    // Get the selected text
    const selection:Selection | null = window.getSelection();
    // Check if there is any selected text
    if (selection && selection.rangeCount > 0) {
      // Get the selected range
      const range:Range = selection.getRangeAt(0);
      // Create a new <span> element to wrap the selected text in
      const span:HTMLSpanElement = document.createElement("span");
      span.style.verticalAlign= "sub";
      // Wrap the selected text in the <span> element
      range.surroundContents(span);
    }
}
function boldSelection():void {
  // Get the selected text
  const selection:Selection | null = window.getSelection();
  // Check if there is any selected text
  if (selection && selection.rangeCount > 0) {
    // Get the selected range
    const range:Range = selection.getRangeAt(0);
    // Create a new <span> element to wrap the selected text in
    const span:HTMLSpanElement = document.createElement("span");
    span.style.fontWeight = "bold";
    // Wrap the selected text in the <span> element
    range.surroundContents(span);
  }
}
function underLinStyle():void {
    // Get the selected text
    const selection:Selection | null = window.getSelection();
    // Check if there is any selected text
    if (selection && selection.rangeCount > 0) {
      // Get the selected range
      const range:Range = selection.getRangeAt(0);
      // Create a new <span> element to wrap the selected text in
      const span:HTMLSpanElement = document.createElement("span");
      span.style.textDecoration = "underline";
      // Wrap the selected text in the <span> element
      range.surroundContents(span);
    }
}
function lineThrough():void {
  // Get the selected text
  const selection:Selection | null = window.getSelection();
  // Check if there is any selected text
  if (selection && selection.rangeCount > 0) {
    // Get the selected range
    const range:Range = selection.getRangeAt(0);
    // Create a new <span> element to wrap the selected text in
    const span:HTMLSpanElement = document.createElement("span");
    span.style.textDecoration = "line-through";
    // Wrap the selected text in the <span> element
    range.surroundContents(span);
  }
}
function italicizeSelection():void {
  // Get the selected text
  const selection:Selection | null = window.getSelection();
  // Check if there is any selected text
  if (selection && selection.rangeCount > 0) {
    // Get the selected range
    const range:Range = selection.getRangeAt(0);
    // Create a new <span> element to wrap the selected text in
    const span:HTMLSpanElement = document.createElement("span");
    span.style.fontStyle = "italic";
    // Wrap the selected text in the <span> element
    range.surroundContents(span);
  }
}
Name?.addEventListener("change",function ():void{
    personName = Name.value;
})
blogAuthor?.addEventListener("change",function ():void{
  blogAuthorChange = blogAuthor.value;
})
blogTitle?.addEventListener("change",function ():void{
  blogTitleChange = blogTitle.value;
})
editor?.addEventListener("input",function ():void{
    blogBodyChange = editor.innerText;
})  
postBtn?.addEventListener('submit',function(event):void{
    event.preventDefault();
    blogs.push({image:blogImageChange,name:blogAuthorChange,title:blogTitleChange,body:blogBodyChange});
    localStorage.setItem("myBlogs",JSON.stringify(blogs));    
  })
contactForm.addEventListener('submit',function (event):void{
  event.preventDefault();
  alert(`Hello ${personName} will contact you soon`);
})