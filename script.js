const courses = [

    {
        name: "Javascript course",
        price: "2.1",
    },

    {
        name: "ReactJS course",
        price: "2.3",
    },

    {
        name: "Django course",
        price: "1.3",
    },

    {
        name: "Tailwind CSS course",
        price: "1.7",
    },

    {
        name: "NodeJS course",
        price: "1.6",
    }


];

const ul = document.querySelector(".list-group");
const first = document.createElement("li");
first.classList.add("list-group-item");
const firstName = document.createTextNode(courses[0].name);
const firstPrice = document.createElement("span");
const firstAmount = document.createTextNode("$ " + courses[0].price);
firstPrice.appendChild(firstAmount);
firstPrice.classList.add("float-right");


window.addEventListener("load", () => {
    first.appendChild(firstName);
    first.appendChild(firstPrice);
    ul.appendChild(first);
    console.log('page is fully loaded');
});

let flag = true;
function list() {
  
    ul.innerHTML = "";
   
    courses.forEach((element) => {
       
        const li = document.createElement("li");
        li.classList.add("list-group-item");
        li.classList.add("wrap");
        const child = document.createTextNode(element.name);
        li.appendChild(child);
        ul.appendChild(li);

        const price = document.createElement("span");
        price.classList.add("float-right");
        const amount = document.createTextNode("$ " + element.price);
        price.appendChild(amount);
        li.appendChild(price);
        


    });
    flag = false;

}

function wrap() {

    ul.innerHTML = "";
    ul.appendChild(first);
    flag = true;
}

const button = document.querySelector(".sort-btn");
const box = document.querySelector(".box");
box.removeChild(button);

function moreCourse() {
    if (!flag) {

        wrap();
        box.removeChild(button);
       
        document.querySelector(".btn").innerText = "More courses";
    }
    else {
        list();
        box.appendChild(button);
        document.querySelector(".btn").innerText = "collapse";

    }
}





let sort = false;
button.addEventListener("click",() => {
    if(!sort){
        courses.sort((a,b) => a.price - b.price);
        sort = !sort;
        button.innerText = "Sort Decreasing";
    }
    else{
        courses.sort((a,b) =>  b.price - a.price );
        sort = !sort;
        button.innerText = "Sort Increasing";
    }
    
    if(!flag){

        list();
    }
    
})