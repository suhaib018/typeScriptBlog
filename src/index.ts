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
const color = <HTMLInputElement>document.querySelector("#color");
const cardContainer = document.querySelector(".blog-card");
const search = document.getElementById("search-blogs");
const searchIcon = document.getElementById("search-icon");
const cardContainerGrid =document.querySelector(".card-container");












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




function searchBlogs() {
 
  const searchQuery = (<HTMLInputElement>document.getElementById("search-blogs")).value;
  searchedBlog = searchQuery; 
  console.log(`Searching for blogs with query: ${searchedBlog}`);
}

search?.addEventListener("change",searchBlogs);
searchIcon?.addEventListener("click",function(){
  
  searchedBlog == ""  
})



myArray.forEach((blog) => {
  
    let cardContainer = document.createElement("div"); // create a separate div for each card container
    let cardHeader = document.createElement("div");
    let cardBody = document.createElement("div");
    let image = document.createElement("img");
    let h4Heading = document.createElement("h4");
    let authorName = document.createElement("p");
  
    cardContainer.className = "blog-card"; // add a class to the card container
    cardHeader.className ="card-header";
    cardBody.className = "card-body"
    image.src =blog.image;
    h4Heading.innerText = blog.title;
    authorName.innerText = blog.name
  
    cardHeader.append(image);
    cardBody.append(h4Heading);
    cardBody.append(authorName);
  
    cardContainer.append(cardHeader); // append header and body to the card container
    cardContainer.append(cardBody);
  
    cardContainerGrid?.append(cardContainer); // append the card container to the grid container
  
})


function loadImage(){
  let file :any
  if (imageInput && imageInput.files && imageInput.files.length > 0) {
   file = imageInput.files[0];
    // do something with file
  } else {
    console.log("No file selected");
  }
  if (previewImage){
    previewImage.src = URL.createObjectURL(file);
    blogImageChange =  previewImage.src;
}
}


//BLOG EVENTS
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
color?.addEventListener("change",() => colorHandler());
imageInput?.addEventListener("change",loadImage);






function HeadingHandler() {
  // Get the selected text
  const selection = window.getSelection();
  let level = Heading.value;
  // Check if there is any selected text
  if (selection && selection.rangeCount > 0) {
    // Get the selected range
    const range = selection.getRangeAt(0);
    // Get the desired heading level from the select element
    // Create a new heading element with the desired level
    const heading = document.createElement(level);
    // Get the selected text and set it as the content of the heading element
    const selectedText = range.extractContents();
    heading.appendChild(selectedText);
    // Wrap the selected text in the heading element
    range.insertNode(heading);
  }
}

function colorHandler() {
  // Get the selected text
  const selection = window.getSelection();
  // Check if there is any selected text
  if (selection && selection.rangeCount > 0) {
    // Get the selected range
    const range = selection.getRangeAt(0);
    // Create a new <span> element to wrap the selected text in
    const span = document.createElement("span");
    span.style.color= color.value;
    // Wrap the selected text in the <span> element
    range.surroundContents(span);
  }
}


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
Name?.addEventListener("change",function (){
    personName = Name.value;
})

blogAuthor?.addEventListener("change",function (){
  blogAuthorChange = blogAuthor.value;
})

blogTitle?.addEventListener("change",function (){
  blogTitleChange = blogTitle.value;
})

editor?.addEventListener("input",function (){
    blogBodyChange = editor.innerText;
})  

postBtn?.addEventListener('submit',function(event){
    event.preventDefault();
    blogs.push({image:blogImageChange,name:blogAuthorChange,title:blogTitleChange,body:blogBodyChange});
    localStorage.setItem("myBlogs",JSON.stringify(blogs));    
})

