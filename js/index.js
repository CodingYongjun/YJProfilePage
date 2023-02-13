const outTyping=document.querySelector('.outTyping');
const typingArea=document.querySelector('.typing');
const textSource=outTyping.innerText;
const textArray=textSource.split('');
const ptf=document.getElementById('portfolio');
const ptfB=document.querySelector('.portfolio_box');

let index=0;

const typing=()=>{
    if(typingArea.style.display=='block'){
        if(index<textArray.length){
            typingArea.append(textArray[index]);
            index++;
        }else{
            clearInterval(typ);
        }
    }
}
let typ=setInterval(typing,100);

const sction1=()=>{
    const logo=document.querySelector('.hi');

    let logoY=logo.offsetHeight;
    console.log(logoY);
    console.log(window.pageYOffset>logoY)

    if(window.pageYOffset>logoY==true){
        typingArea.style.display='block';
    }else{
        typingArea.style.display='none';
    }
}

const sction2=()=>{
    const openDoor=document.querySelector('.opendoor');
    let doorY=openDoor.getBoundingClientRect().bottom;
    // console.log(doorY);
    const doorL=document.querySelector('.door_l');
    const doorR=document.querySelector('.door_r');

    if(doorY<0){
        doorL.classList.add('open_l')
        doorR.classList.add('open_r')
        typingArea.style.display='none';
    }else{
        doorL.classList.remove('open_l');
        doorR.classList.remove('open_r');
    }

    const doorUp=document.querySelector('.door_up');
    let upY=doorUp.getBoundingClientRect().bottom;
    const door=document.querySelector('.door_box');
    let inc=0.1;
    let zoom=1;
    if(upY<0){
        door.style.transform=`translateX(-50%) scale(${zoom+=inc})`
    }else{
        door.style.transform=`translateX(-50%) scale(${zoom-=inc})`
    }
}
const sction3=()=>{
    const skill=document.getElementById('skill');
    let skillY=skill.getBoundingClientRect().top;
    if(skillY<0){
        ptf.style.zIndex=2;
    }
}

const sction4=()=>{
    const ptfTo=ptf.offsetTop;
    const ptfH2=document.querySelector('.ptf_h2');
    const fk=document.querySelector('.fork');
    const fks=document.querySelector('.fork_s');
    const kn=document.querySelector('.knife');
    const sp=document.querySelector('.spoon');
    let scrollTop=window.pageYOffset;
    let offset=scrollTop - ptfTo;
    // console.log(lastL);
    // console.log(scrollTop,offset);
    if(scrollTop>=ptfTo){
        ptfH2.style.position='fixed';
        ptfB.style.position='fixed';
        fk.style.position='fixed';
        fks.style.position='fixed';
        kn.style.position='fixed';
        sp.style.position='fixed';
        ptfB.style.left=`-${offset}px`;

    }else{
        ptfH2.style.position='absolute';
        ptfB.style.position='relative';
        fk.style.position='absolute';
        fks.style.position='absolute';
        kn.style.position='absolute';
        sp.style.position='absolute';
        ptfB.style.left=0+'px';
    }
}

window.addEventListener('scroll',()=>{
    sction1();
    sction2();
    sction3();
    sction4();
})