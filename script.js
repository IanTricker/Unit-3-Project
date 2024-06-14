let buttonsOne = document.querySelector(".buttonsOne");
let otherText = document.querySelector(".otherText");
let optionOne = document.querySelector(".option-one");
let titleText = document.querySelector(".titleText");

let buttonsTwo = document.querySelector(".buttonsTwo");
let optionTwo = document.querySelector(".option-two");

let buttonTwo1 = document.getElementsByClassName('buttonsTwo1');
let buttonTwo2 = document.getElementsByClassName('buttonsTwo2');


let fortnite = document.querySelector('.fortnite');
let epic = document.querySelector('.epic');


let f1 = document.querySelector(".fight1");
let r1 = document.querySelector(".run1");
let f1i = document.getElementsByClassName('fight1Image');

let fire = document.querySelector(".fire");
let freeze = document.querySelector(".freeze");
let death = document.querySelector(".death");


let buttonstwotwo = document.getElementsByClassName("buttonstwotwo");
let fight2 = document.querySelector(".fight2");
let run2 = document.querySelector(".run2");

let buttonsthreeone = document.getElementsByClassName("buttonsthreeone");
let water = document.querySelector('.water');
let food = document.querySelector('.food');

let todo = document.getElementsByClassName('todo');
let todo2 = document.querySelector('.todo2');




optionOne.addEventListener('click', function(){
    buttonsOne.remove();
    titleText.remove();
    otherText.innerHTML="Do you fight or Run";
    otherText.style.fontSize="5vw";
    document.body.style.backgroundImage= "url('https://publicinterestnetwork.org/wp-content/uploads/2023/05/Flat-Country-credit-Cascadia-Wildlands-DSC_4323.jpeg')";
    buttonTwo1[0].removeAttribute("hidden");
})


optionTwo.addEventListener('click', function(){
    buttonsOne.remove();
    titleText.remove();
    otherText.innerHTML="Do you fight or Run";
    otherText.style.fontSize="5vw";
    document.body.style.backgroundImage= "url('https://cdn1.epicgames.com/ue/product/Screenshot/Engine%20Scalability%20Settings-1920x1080-1ca10c4b82a44a90644e46702a3381f6.jpg?resize=1&w=1920')";
    buttonstwotwo[0].removeAttribute("hidden");
})


fight2.addEventListener('click', function(){
    run2.remove();
    fight2.remove();
    otherText.innerHTML="Slash the enemy!";
    epic.removeAttribute("hidden");
})

epic.addEventListener('click', function(){
    epic.style.visibility ="hidden";
    otherText.remove();
    document.body.style.backgroundImage= "url('https://i.makeagif.com/media/10-13-2015/FymNEH.gif')";
})

run2.addEventListener('click', function(){
    run2.remove();
    fight2.remove();
    otherText.innerHTML="You run into the ruins.<br> Do you look for water or hunt for food?";
    buttonsthreeone[0].removeAttribute("hidden");
})

water.addEventListener('click', function(){
    water.remove();
    food.remove();
    otherText.innerHTML="You get jumped";
    todo[0].removeAttribute("hidden");
})


todo2.addEventListener('click', function(){
    todo2.style.visibility="hidden";
    otherText.remove();
    document.body.style.backgroundImage= "url('https://i.makeagif.com/media/10-13-2015/FymNEH.gif')";
})

food.addEventListener('click', function(){
    otherText.innerHTML="You look for food and run out of water";
    water.remove();
    food.remove();
    document.body.style.backgroundImage= "url('https://i.ytimg.com/vi/-ZGlaAxB7nI/maxresdefault.jpg')";
})

f1.addEventListener('click', function(){
    f1.remove();
    r1.remove();
    otherText.innerHTML="Slash the enemy!";
    fortnite.removeAttribute("hidden");    
})

fortnite.addEventListener('click', function(){
    fortnite.style.visibility ="hidden";
    otherText.remove();
    document.body.style.backgroundImage= "url('https://i.makeagif.com/media/10-13-2015/FymNEH.gif')";
})
    
r1.addEventListener('click', function(){
    f1.remove();
    r1.remove();
    otherText.innerHTML="You run into the woods.<br> It is nightnight time do you make a fire?";
    buttonTwo2[0].removeAttribute("hidden");
})


fire.addEventListener('click', function()
{
    fire.remove();
    freeze.remove();
    otherText.innerHTML="Another player runs into you<br>Slash him!";
    fortnite.removeAttribute("hidden");    
})

freeze.addEventListener('click', function(){
    fire.remove();
    freeze.remove();
    document.body.style.backgroundImage= "url('https://i.ytimg.com/vi/-ZGlaAxB7nI/maxresdefault.jpg')";
})