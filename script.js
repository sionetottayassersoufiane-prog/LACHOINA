const chat = document.getElementById("chat");
const music = document.getElementById("bgMusic");

function toggleMusic(){
    if(music.paused){
        music.play();
    } else {
        music.pause();
    }
}

function addMessage(text, type){
    const div = document.createElement("div");
    div.classList.add("message", type);
    div.innerHTML = text;
    chat.appendChild(div);
    chat.scrollTop = chat.scrollHeight;
}

function removeElement(id){
    const el = document.getElementById(id);
    if(el) el.remove();
}

// ------------------- Conversation -------------------

function firstAnswer(){
    removeElement("firstChoice");
    addMessage("Je t’écoute 🥰", "user");

    setTimeout(()=> {
        addMessage("Tu sais… depuis que je te connais 😍", "bot");
        setTimeout(()=> {
            addMessage("Mon cœur bat un peu plus vite 💓", "bot");
            setTimeout(secondQuestion, 1200);
        },1000);
    },500);
}

function secondQuestion(){
    addMessage("Dis-moi… est-ce que je compte un peu pour toi, LACHOINA ? 🥺❤️", "bot");

    const div = document.createElement("div");
    div.classList.add("choices");
    div.id = "secondChoice";

    div.innerHTML = `
        <button onclick="secondAnswer(true)">Oui 💕</button>
        <button onclick="secondAnswer(false)">Non 😅</button>
    `;

    chat.appendChild(div);
}

function secondAnswer(res){
    removeElement("secondChoice");

    if(res){
        addMessage("Oui 💕", "user");
        addMessage("Tu viens de rendre ma journée parfaite 😭❤️", "bot");
    } else {
        addMessage("Non 😅", "user");
        addMessage("Oh LACHOINA… 😢 je comprends mais j’espère un jour 💫", "bot");
    }

    setTimeout(finalQuestion, 1500);
}

function finalQuestion(){
    addMessage("Alors… est-ce que tu accepterais de sortir avec moi, LACHOINA ? ❤️✨", "bot");

    const div = document.createElement("div");
    div.classList.add("choices");
    div.id = "finalChoice";

    div.innerHTML = `
        <button onclick="acceptLove()">Oui mon amour 💖</button>
        <button id="noBtn">Non 😅</button>
    `;

    chat.appendChild(div);

    const noBtn = document.getElementById("noBtn");
    noBtn.addEventListener("mouseover", ()=>{
        noBtn.style.position = "relative";
        noBtn.style.left = Math.random()*150 + "px";
        noBtn.style.transform = "scale(0.5)";
        noBtn.innerText = "Allez LACHOINA 😇";
    });
}

function acceptLove(){
    removeElement("finalChoice");
    addMessage("Oui mon amour 💖", "user");

    setTimeout(()=> {
        addMessage("OUIIIII 😭❤️", "bot");
        addMessage("Tu viens de faire de moi le plus heureux des hommes 🌍✨", "bot");
        addMessage("Je te promets des rires 😂, des câlins 🤗 et un amour sincère ❤️", "bot");
        createHearts();
        fireworkShow();

        // --- POP-UP POUR TE PRÉVENIR ---
        alert("🎉 LACHOINA a accepté ! 💖");
    },800);
}

// ------------------- Animations -------------------

function createHearts(){
    setInterval(()=>{
        const heart = document.createElement("div");
        heart.classList.add("heart");
        heart.innerHTML = "❤️";
        heart.style.left = Math.random()*100 + "vw";
        heart.style.fontSize = Math.random()*20 + 20 + "px";
        heart.style.animationDuration = Math.random()*3 + 2 + "s";
        document.body.appendChild(heart);
        setTimeout(()=>heart.remove(),5000);
    },300);
}

// Mini feu d'artifice
function fireworkShow(){
    for(let i=0;i<30;i++){
        setTimeout(()=>{
            const f = document.createElement("div");
            f.classList.add("firework");
            f.style.left = Math.random()*100 + "vw";
            f.style.top = Math.random()*50 + "vh";
            document.body.appendChild(f);
            setTimeout(()=>f.remove(),1000);
        }, i*100);
    }
}
