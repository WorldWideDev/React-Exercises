setInterval(func => {
    let date = new Date(); 
    let el = document.getElementById("clock")
    el.innerText = `It is now: ${date.toLocaleTimeString()}`;
}, 1000);
