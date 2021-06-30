'use strict'

const sign_in_btn = document.querySelector("#sign-in-btn");
const sign_up_btn = document.querySelector("#sign-up-btn");
const container = document.querySelector(".container");

sign_up_btn.addEventListener("click", () => {
  container.classList.add("sign-up-mode");
});

sign_in_btn.addEventListener("click", () => {
  container.classList.remove("sign-up-mode");
});


//Falso login
$(document).ready(function () {
    
    var user_name_record;
    var user_email_record;
    var user_password_record;
    var user_name;
    var user_password;

    $('#record').submit(function (e) { 
        e.preventDefault();
      
        localStorage.setItem('user_name_record',$('#user_name_record').val());
        localStorage.setItem('user_email_record',$('#user_email_record').val());
        localStorage.setItem('user_password_record',$('#user_password_record').val());

        user_name_record = localStorage.getItem('user_name_record');
        user_email_record = localStorage.getItem('user_email_record');
        user_password_record = localStorage.getItem('user_password_record');

        $('#record')[0].reset();
    });

    $('#login').submit(function (e) { 
        e.preventDefault();

        localStorage.setItem('user_name',$('#user_name').val());
        localStorage.setItem('user_password',$('#user_password').val());

        user_name = localStorage.getItem('user_name');
        user_password = localStorage.getItem('user_password');

        if(user_name===user_name_record && user_password===user_password_record){
            window.location='courses.html';
        }else{
            alert("Usuario y/o Clave incorrectos");
        }

    });

    setInterval( () =>{
        const watch = moment().year();
        $('#year_copyright').html(watch);
    },100);

});

