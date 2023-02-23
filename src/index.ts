const Name =<HTMLInputElement>document.querySelector("#contact-name");
const contactForm = <HTMLFormElement>document.querySelector(".contact-form");
const blogTitle =<HTMLInputElement>document.querySelector("#blog-title");
const blogAuthor =<HTMLInputElement>document.querySelector("#blog-author");
const blogBody =<HTMLTextAreaElement>document.querySelector("#blog-body");
const postBtn = <HTMLButtonElement>document.querySelector(".post-blog-submit");
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

blogBody.addEventListener("change",function (){
    blogBodyChange = blogBody.value;
})

let personName:string ="";

Name.addEventListener("change",function (){
    personName = Name.value;
})

contactForm.addEventListener('submit',function (event){
    event.preventDefault();
    console.log("DSAD");
    console.log(`blogBodyChange ${blogBodyChange}`);
    console.log(`blogTitleChange ${blogTitleChange}`);
    console.log(`blogAuthoeChange ${blogAuthorChange}`);
    alert(`Hello ${personName} will we contact you soon`);
    console.log(`Blogs Array ${blogs}`);

})