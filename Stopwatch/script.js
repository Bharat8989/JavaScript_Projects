let [seconde ,  minutes , hours ]=[0,0,0];
let displayTime = document.getElementById("displayTime");
let timer =null;
function stopwatch(){
    seconde++;
    if(seconde == 60){
        seconde=0;
        minutes++;
        if(minutes == 60)
        {
            minutes =0;
            hours++;
        }
    }
    let h=hours < 10 ? "0" +hours :hours;
    let m=minutes < 10 ? "0" +minutes :minutes;
    let s=seconde < 10 ? "0" +seconde :seconde;
    displayTime.innerHTML=h+":" + m + ":" + s;
}
function watchStart(){
    if(timer !== null){
        clearInterval(timer);
    }
    timer = setInterval(stopwatch,1000);
}
function watchStop(){
    clearInterval(timer);
}
function watchReset(){
    clearInterval(timer);
    [secondes ,minutes, hours]=[0,0,0];
    displayTime.innerHTML = "00:00:00";  
}