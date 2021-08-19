const courses = [
  
    {
        Name: "Complete ReactJS course",
        price:"2.8",
    },
    {
        Name: "Complete Angular course",
        price:"2.4",
    },
  
    {
        Name: "Complete MERN course",
        price:"2.7",
    },
  
    {
        Name: "Complete C++ course",
        price:"2.5",
    },
  
];

//the code written below will make 
//<li class="list-group-item">Complete C++ course
//<span class="float-right">2.9</span>

//</li>

function generateList(){
    const ul = document.querySelector(".list-group")
    ul.innerHTML = "" 
    courses.forEach(course =>{
        const li = document.createElement("li")
        li.classList.add("list-group-item")

        const name = document.createTextNode(course.Name); 
        li.appendChild(name);

        const span = document.createElement("span")
        span.classList.add("float-right");

        const price = document.createTextNode("$ "+course.price)
        span.appendChild(price)

        li.appendChild(span)
        ul.appendChild(li);


    })
}

//generateList(); //or

window.addEventListener("load",generateList);

const button = document.querySelector(".sort-btn");

button.addEventListener("click", ()=>{
    courses.sort((a,b)=>a.price - b.price);
    generateList();
});

