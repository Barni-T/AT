const player_name=window.prompt("Kérem adja meg a nevét: ");
var target=document.getElementById("target");
var start_button=document.getElementById("start");
var name_display=document.getElementById("name");
name_display.innerText=player_name;
var score=Number(0);
var max_score=Number(0);
var timer=Number(30);
var final_button=document.getElementById("final_button");
document.getElementById("max_score").innerText=max_score;
start_button.addEventListener("click", (e)=>{
    var main_menu=document.getElementById("main_menu");
    main_menu.style.display="none";
    const lol =setInterval(function(){document.getElementById("timer").innerText=timer;timer-- ;document.getElementById("final_name").innerText="Congrats, "+player_name+"!";if(Number(score)>Number(max_score)){
        document.getElementById("final_score").innerText="Score: "+score;max_score=score}else{document.getElementById("final_score").innerText="Score: "+score;};document.getElementById("high_score").innerText="Highscore: "+max_score;;if(timer<0){document.getElementById("final_screen").style.display="block";timer=0;clearInterval(lol)}},1000);
})
target.addEventListener("click", (e)=>{
    score++;
    var rnd_num_vertical=Math.floor(Math.random()*75+1);
    var rnd_num_horizontal=Math.floor(Math.random()*75+1);
    target.style.top=(Number(rnd_num_vertical)-Number(target.style.width)) + "%";
    target.style.left=(Number(rnd_num_horizontal)-Number(target.style.height)) + "%";
    document.getElementById("score").innerText=score;
})
final_button.addEventListener("click",(e)=>{
    document.getElementById("final_screen").style.display="none";
    document.getElementById("max_score").innerText=max_score;
     score=Number(0);
     timer=Number(30);
     document.getElementById("score").innerText=score;
     document.getElementById("target").style.top = "0vh";
     document.getElementById("target").style.left = "0vw";
     const lol =setInterval(function(){document.getElementById("timer").innerText=timer;timer-- ;document.getElementById("final_name").innerText="Congrats, "+player_name+ "!";if(Number(score)>Number(max_score)){
        document.getElementById("final_score").innerText="Score: "+score;max_score=score}else{document.getElementById("final_score").innerText="Score: "+score;};document.getElementById("high_score").innerText="Highscore: "+max_score;;if(timer<0){document.getElementById("final_screen").style.display="block";timer=0;clearInterval(lol)}},1000);
})