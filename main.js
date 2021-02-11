let first=new Date('1/1/' + (new Date().getFullYear()));
let today=new Date();

let diff= today - first;

let days = diff / (1000*60*60*24);

let daysEl = document.getElementsByTagName("div");
daysEl.innerHTML = days;
