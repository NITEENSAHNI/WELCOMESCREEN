 //DOM Elements
const time = document.getElementById("time")
const greeting = document.getElementById("greeting")
const name = document.getElementById("name")
const focus = document.getElementById("focus")
const background = document.getElementById("background")
//show time
function showTime()
{
    let today = new Date(),
    hour = today.getHours(),
    min = today.getMinutes(),
    sec  = today.getSeconds()

 

//AM or PM
const ampm = hour>12?"PM":"AM";
//12hr Format
hour = hour % 12 || 12;
//greeting
function greet(value1, value2)
{
    if(value1>=6&&value1<12&&value2=="AM")
    {
        greeting.innerHTML = "Good Morning"
    }
    if(value1>=12&&value1<6&&value2=="PM")
    {
        greeting.innerHTML = "Good Afternoon"
    }
    if(value1>=6&&value1<12&&value2=="PM")
    {
        greeting.innerHTML = "Good Night"
    }
    if(value1>=6&&value1<8&&value2=="PM")
    {
        greeting.innerHTML = "Good Evening"
    }
}
greet(hour, ampm)
// output time
time.innerHTML = `${hour}<span>:</span>${zero(min)}<span>:</span>${zero(sec)}<span></span>${ampm}`;
setTimeout(showTime, 1000);
}
///to add zero to the hour and sec
const zero=(value)=>{
    if(value<10)
    {
      value = ("0"+value)

      return value
    }
    else{
        return value
    }
  }
  //to select the background image
function greetscreen()
{
    let today = new Date()
   let hour = today.getHours()
    if(hour>=12&&hour<18)
    {
        document.body.style.backgroundImage = "url('img/afternoon.jpg')";
        document.body.style.color = "whitesmoke"
    }
    if(hour>6&&hour<12)
    {
        document.body.style.backgroundImage = "url('img/morning.jpg')";
    }
    if(hour>=18)
    {
        document.body.style.backgroundImage = "url('img/night.jpg')";
    }

}
//to get name
function getname()
{
    if(localStorage.getItem('name1')===null)
    {
        name1.textContent = '[enter name]';
    }
    else{
        name1.textContent = localStorage.getItem('name1')
    }
}
//to get focus
function getfocus()
{
    if(localStorage.getItem('focus')===null)
    {
        focus1.textContent = '[EDIT FOCUS]';
    }
    else{
        focus1.textContent = localStorage.getItem('focus')
    }
}
// set name

showTime();
greetscreen()
getname()
getfocus()