const openBtn = document.getElementById("startBtn");
const music = document.getElementById("bgMusic");

openBtn.addEventListener("click", function(){

  

    document.querySelector(".hero").style.display = "none";

    document.getElementById("surpriseSection").style.display = "flex";

});
document.getElementById("continueBtn").addEventListener("click",function(){

    document.getElementById("surpriseSection").style.display="none";

    document.getElementById("memorySection").style.display="flex";

});
document.getElementById("memoryBtn").addEventListener("click",function(){

document.getElementById("memorySection").style.display="none";

document.getElementById("memoryBookSection").style.display="flex";

});

document.getElementById("blowCandles").onclick=function(){
music.play();
confetti({

particleCount:250,

spread:180,

origin:{y:0.6}

});
document.getElementById("cakeSection").style.display="none";

document.getElementById("finalSection").style.display="flex";

}

const memories=[

{

image:"assets/images/photo1.jpg",

text:`Dear Mumma,

your love has always been the purest thing in my life. Whether it's waiting for me to come home, asking me a hundred times if I've eaten, making my favourite food without me asking, or silently praying for me every single day—you've always loved me in the most beautiful way.
Your hugs have always healed the pain that no medicine ever could. Even your scoldings carried care, and today I understand that every word came from love.
If one day I become even half the woman you are—kind, strong, patient, and full of love—I will consider myself truly blessed.

I pray that God blesses you with good health, endless happiness, peaceful days, and all the love that you've spent your whole life giving to everyone else.

You have spent your life making mine beautiful. I promise I'll spend mine trying to make you proud and filling your life with the happiness you deserve.

I love you forever. ❤️`

},

{

image:"assets/images/photo2.jpg",

text:`Dear Mumma,

Life has never been perfect. There have been days filled with happiness and days filled with disappointment, fear, and failure. But through every season of my life, one thing has always remained the same—you.

When I smile, you're the first person who celebrates with me.

When I cry, you're the first person who wipes away my tears.

When I succeed, you're happier than I am.

And when I fail, you never let me face it alone.

You don't judge me for my mistakes or make me feel less because I couldn't do something. Instead, you hold my hand, remind me that tomorrow is another chance, and tell me that everything will be okay. ❤️`

},

{

image:"assets/images/photo3.jpg",

text:`Dear Mumma,

You never bought yourself something if it meant I could have what I wanted.

You skipped your own wishes just so mine could come true.

You worried about whether I had eaten before thinking about your own meal.

You smiled in front of me even when life was hurting you inside because you never wanted me to feel your pain.

Only now am I beginning to understand how many dreams you quietly sacrificed just to build mine.

If love had a face, it would look exactly like you❤️`

},

{

image:"assets/images/photo4.jpg",

text:`Dear Mumma,

There was a time when I couldn't speak, couldn't walk, and couldn't even tell you what I needed. Yet somehow, you always understood me. You held my tiny hands, stayed awake through sleepless nights, wiped away my tears, and smiled even when you were exhausted.

You loved me before I even knew the meaning of love.

As I grew older, I realized that every hug, every meal, every sacrifice, every prayer, and every little thing you did was your silent way of saying,
"I love you more than anything in this world."

No one has ever loved me as selflessly as you have.

I Love You Forever ❤️`

}

];

let currentMemory=0;

function openGift(number){

let message=document.getElementById("giftMessage");

if(number==1){

message.innerHTML=" I promise you a full 24 hours of absolute relaxation. No cooking, no cleaning, and no chores for you today. I will handle everything while you put your feet up and watch your favorite shows!";

}

else if(number==2){

message.innerHTML="I promise to treat you to an evening entirely dedicated to us. We can go out and do whatever you want to do. ❤️";

}

else{

message.innerHTML="I promise only for further 7 days 😂 I will bring everything whatever you want from market without complaining";

}

}

document.getElementById("nextMemory").addEventListener("click",function(){

currentMemory++;

if(currentMemory<memories.length){

document.getElementById("memoryImage").src=memories[currentMemory].image;

document.getElementById("memoryText").innerText=memories[currentMemory].text;

}else{

document.getElementById("memoryBookSection").style.display="none";

document.getElementById("giftSection").style.display="flex";

}

});

const reasons=[

"❤️ Because your hugs heal everything.",

"🌸 Because you always believed in me.",

"💖 Because you sacrificed your happiness for mine.",

"🌹 Because your smile makes my day brighter.",

"🥹 Because you're my safest place.",

"✨ Because you'll always be my first best friend.",

"🌼 Because nobody can ever replace you.",

"💕 Because you're simply the best Mumma in the world."

];

let reasonIndex=0;

document.getElementById("giftNext").onclick=function(){

document.getElementById("giftSection").style.display="none";

document.getElementById("reasonSection").style.display="flex";

}

document.getElementById("nextReason").onclick=function(){

document.getElementById("reasonText").innerHTML=reasons[reasonIndex];

reasonIndex++;

if(reasonIndex==reasons.length){

document.getElementById("nextReason").innerHTML="Continue 🎂";

document.getElementById("nextReason").onclick=function(){

document.getElementById("reasonSection").style.display="none";

document.getElementById("cakeSection").style.display="flex";

}

}

}