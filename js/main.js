'use strict'

$(document).ready(function () {
    $('#user_name').text(`Bienvenido ${localStorage.getItem('user_name')}`);
    $('#user_email').text(localStorage.getItem('user_email_record'));

    $('#close_session').click(function (e) { 
        e.preventDefault();
        localStorage.clear();
        window.location = 'index.html';
    });

    setInterval( () =>{
        const watch = moment().year();
        $('#year_copyright').html(watch);
    },100);
});


const trolley = document.querySelector('#trolley');
const list_courses = document.querySelector('#list-courses');
const cart_container = document.querySelector('#list-trolley tbody');
const empty_trolley = document.querySelector('#empty-trolley');
let counter=0;
let articles_card = [];


load_AddEventListener();


function load_AddEventListener(){
    
    //Añadimos el curso
    list_courses.addEventListener('click', (e) =>{
        e.preventDefault();
        if(e.target.classList.contains('add-trolley')){
            alert("Curso agregado al carrito");
            const selected_course = e.target.parentElement.parentElement;
            selected_course.querySelector('a').style.display='none';
            read_courseData(selected_course);
        }
    })

    //Borramos el curso
    trolley.addEventListener('click', (e) =>{

        if(e.target.classList.contains('delete-course')){
           delete_course(e);
        }
    })

    //vaciamos el carrito
    empty_trolley.addEventListener('click', () =>{
        articles_card.forEach(i =>{
            i.class.style.display='block';
        })
        articles_card = [];
        clear_HTML();
    })

}

function read_courseData(selected_course){
    console.log(selected_course);

    const courseInformation = {
        image: selected_course.querySelector('img').src,
        title: selected_course.querySelector('h4').textContent,
        price: selected_course.querySelector('.price span').textContent,
        class: selected_course.querySelector('a'),
        id: selected_course.querySelector('a').getAttribute('data-id'),
        quantity: 1
    }

    articles_card.push(courseInformation);

    card_HTML();

}

function card_HTML(){
    clear_HTML();

    let row = '';
    let list_trolley = document.querySelector('#list-trolley tbody');

    articles_card.forEach(i =>{
        const {image,title,price,quantity,id} = i;
        row += `
         <tr>
            <td><img src="${image}" width="100"></td>
            <td>${title}</td>
            <td>${price}</td>
            <td>${quantity}</td>
            <td><a href="#" class="delete-course" data-id="${id}">X</a></td>
         </tr>
        `
        list_trolley.innerHTML=row;  
    })
}

function clear_HTML(){
    while(cart_container.firstChild)
        cart_container.removeChild(cart_container.firstChild);
}

function delete_course(e){
    const id_course = e.target.getAttribute('data-id');
    const b = articles_card.filter(course => course.id === id_course);
        b.forEach( i =>{
            i.class.style.display='block';
        })
        articles_card = articles_card.filter(course => course.id !== id_course);
        card_HTML();
}