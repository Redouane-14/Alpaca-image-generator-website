function change(id,option){
    const image = document.getElementById(id);
    image.setAttribute('src', `assets/imgs/${option}.png`);
}

const button = document.getElementById('background');
button.addEventListener('click', ()=>{
    const hair = document.getElementById('style');
    hair.innerHTML = `
                <button  onclick="change('backgroundd', 'backgrounds/blue50')" >blue50</button>
                <button  onclick="change('backgroundd', 'backgrounds/blue60')" >blue60</button>
                <button  onclick="change('backgroundd', 'backgrounds/blue70')" >blue70</button>
                <br>
                <button  onclick="change('backgroundd', 'backgrounds/darkblue30')" >darkblue30</button>
                <button  onclick="change('backgroundd', 'backgrounds/darkblue50')" >darkblue50</button>
                <button  onclick="change('backgroundd', 'backgrounds/darkblue70')" >darkblue70</button>
                <br>
                <button  onclick="change('backgroundd', 'backgrounds/green50')" >green50</button>
                <button  onclick="change('backgroundd', 'backgrounds/green60')" >green60</button>
                <button  onclick="change('backgroundd', 'backgrounds/green70')" >green70</button>
                <br>
                <button  onclick="change('backgroundd', 'backgrounds/grey40')" >grey40</button>
                <button  onclick="change('backgroundd', 'backgrounds/grey70')" >grey70</button>
                <button  onclick="change('backgroundd', 'backgrounds/grey80')" >grey80</button>
                <br>
                <button  onclick="change('backgroundd', 'backgrounds/red50')" >red50</button>
                <button  onclick="change('backgroundd', 'backgrounds/red60')" >red60</button>
                <button  onclick="change('backgroundd', 'backgrounds/red70')" >red70</button>
                <br>
                <button  onclick="change('backgroundd', 'backgrounds/yellow50')" >yellow50</button>
                <button  onclick="change('backgroundd', 'backgrounds/yellow60')" >yellow60</button>
                <button  onclick="change('backgroundd', 'backgrounds/yellow70')" >yellow70</button>
                `;
});
const button1 = document.getElementById('hair');
button1.addEventListener('click', ()=>{
    const hair = document.getElementById('style');
    hair.innerHTML = `
                <button class="bang" onclick="change('hairr', 'hair/bang')" id="bang">bang</button>
                    <button class="curls" onclick="change('hairr', 'hair/curls')" id="curls">curls</button>
                    <button class="default" onclick="change('hairr', 'hair/default')" id="default">default</button>
                <br>
                    <button class="elegant" onclick="change('hairr', 'hair/elegant')" id="elegant">elegant</button>
                    <button class="fancy" onclick="change('hairr', 'hair/fancy')" id="fancy">fancy</button>
                    <button class="quiff" onclick="change('hairr', 'hair/quiff')" id="quiff">quiff</button>
                <br>
                    <button class="short" onclick="change('hairr', 'hair/short')" id="short">short</button>`;
});
const button2 = document.getElementById('ears');
button2.addEventListener('click', ()=>{
    const hair = document.getElementById('style');
    hair.innerHTML = `
                <button  onclick="change('earss', 'ears/default')" >default</button>
                <button  onclick="change('earss', 'ears/tilt-backward')" >tilt-backward</button>
                <button  onclick="change('earss', 'ears/tilt-forward')" >tilt-forward</button>`;
});
const button3 = document.getElementById('eyes');
button3.addEventListener('click', ()=>{
    const hair = document.getElementById('style');
    hair.innerHTML = `
                <button  onclick="change('eyess', 'eyes/angry')" >angry</button>
                <button  onclick="change('eyess', 'eyes/default')" >default</button>
                <button  onclick="change('eyess', 'eyes/naughty')" >naughty</button>
                <br>
                <button  onclick="change('eyess', 'eyes/panda')" >panda</button>
                <button  onclick="change('eyess', 'eyes/smart')" >smart</button>
                <button  onclick="change('eyess', 'eyes/star')" >star</button>`;
});
const button4 = document.getElementById('mouth');
button4.addEventListener('click', ()=>{
    const hair = document.getElementById('style');
    hair.innerHTML = `
                <button  onclick="change('mouthh', 'mouth/astonished')" >astonished</button>
                <button  onclick="change('mouthh', 'mouth/default')" >default</button>
                <button  onclick="change('mouthh', 'mouth/eating')" >eating</button>
                <br>
                <button  onclick="change('mouthh', 'mouth/laugh')" >laugh</button>
                <button  onclick="change('mouthh', 'mouth/tongue')" >tongue</button>`;
});
const button5 = document.getElementById('neck');
button5.addEventListener('click', ()=>{
    const hair = document.getElementById('style');
    hair.innerHTML = `
                <button  onclick="change('neckk', 'neck/bend-backward')" >bend-backward</button>
                <button  onclick="change('neckk', 'neck/default')" >default</button>
                <button  onclick="change('neckk', 'neck/bend-forward')" >bend-forward</button>
                <br>
                <button  onclick="change('neckk', 'neck/thick')" >thick</button>`;
});
const button6 = document.getElementById('leg');
button6.addEventListener('click', ()=>{
    const hair = document.getElementById('style');
    hair.innerHTML = `
                <button  onclick="change('legg', 'leg/tilt-backward')" >tilt-backward</button>
                <button  onclick="change('legg', 'leg/default')" >default</button>
                <button  onclick="change('legg', 'leg/tilt-forward')" >tilt-forward</button>
                <br>
                <button  onclick="change('legg', 'leg/bubble-tea')" >bubble-tea</button>
                <button  onclick="change('legg', 'leg/cookie')" >cookie</button>
                <button  onclick="change('legg', 'leg/game-console')" >game-console</button>`;
});
const button7 = document.getElementById('accessories');
button7.addEventListener('click', ()=>{
    const hair = document.getElementById('style');
    hair.innerHTML = `
                <button  onclick="change('accessoriess', 'accessories/earings')" >earings</button>
                <button  onclick="change('accessoriess', 'accessories/flower')" >flower</button>
                <button  onclick="change('accessoriess', 'accessories/glasses')" >glasses</button>
                <button  onclick="change('accessoriess', 'accessories/headphone')" >headphone</button>
                <br>`;
});
