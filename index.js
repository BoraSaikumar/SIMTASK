let container=document.querySelector('.container');
for(var i=0; i<=80;i++){
    let blocks=document.createElement('div');
    blocks.classList.add('block');
    container.appendChild(blocks);
}

function generate(){
    anime ({
        targets: '.block',
        translateX : function(){
            return anime.random(-700,700);
        },
        translateY : function(){
            return anime.random(-500,500);
        },
        scale: function(){
            return anime.random(1,5);
        }
    })
}
generate();
function circle(){
    let circleBtn=document.querySelector('.circleBtn');
    container.classList.toggle('circle');
}
circle();

const getcolor = () =>{
    const randomnumber = Math.floor(Math.random()*16777215);
    const randomcode ="#"+ randomnumber.toString(16);
    document.body.style.backgroundColor= randomcode;
    // document.getElementById("color-code").innerText=randomcode;
}

document.getElementById("generate1").addEventListener(
    "click",
    getcolor

)

document.getElementById("circle1").addEventListener(
    "click",
    getcolor

)

getcolor();