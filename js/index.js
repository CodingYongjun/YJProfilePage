const outTyping=document.querySelector('.outTyping');
const typingArea=document.querySelector('.typing');
const textSource=outTyping.innerText;
const textArray=textSource.split('');
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
let typ=setInterval(typing,80);

const sction1=()=>{
    const logo=document.querySelector('.hi');
    let logoY=logo.offsetHeight;
    if(window.pageYOffset>logoY==true){
        typingArea.style.display='block';
    }else{
        typingArea.style.display='none';
    }
}
const sect2 = document.querySelector("#profile_page");
const ss=document.querySelector('.profile');
const skill=document.getElementById('skill');
const sect2height = sect2.getBoundingClientRect().height;
const openDoor=document.querySelector('.opendoor');
const doorL=document.querySelector('.door_l');
const doorR=document.querySelector('.door_r');

let inc=0.1;
let zoom=1;

const sction2=()=>{
    const sect2top = sect2.getBoundingClientRect().top;
    let doorY=openDoor.getBoundingClientRect().bottom;
	
	if( sect2top<0 ){
		sect2.querySelector('.open').classList.add('fix');
		sect2.querySelector('.profile_box').classList.add('fix');
	}else{
		sect2.querySelector('.open').classList.remove('fix');
		sect2.querySelector('.profile_box').classList.remove('fix');
	}
	
    if((sect2top+doorY)<0){
        doorL.classList.add('open_l');
        doorR.classList.add('open_r');
    }else{
        doorL.classList.remove('open_l');
        doorR.classList.remove('open_r');
    }	

	if((sect2top+sect2height/6)<0){
        sect2.querySelector('.profile_box').classList.add('bg');
		sect2.querySelector('.open').classList.add('scale');
        ss.style.opacity=1;
    }else{
        sect2.querySelector('.profile_box').classList.remove('bg');
		sect2.querySelector('.open').classList.remove('scale');
        ss.style.opacity=0;
    }
}
const sction3=()=>{
    let skillY=skill.getBoundingClientRect().top;
    if(skillY>0){
        ptfB.style.position='relative';
    }
    if(skillY<0){
        ptf.style.zIndex=4;
    }
}

const ptf=document.getElementById('portfolio');
const ptfB=document.querySelector('.portfolio_box');
const ptfH2=document.querySelector('.ptf_h2');
const fk=document.querySelector('.fork');
const fks=document.querySelector('.fork_s');
const kn=document.querySelector('.knife');
const sp=document.querySelector('.spoon');

const sooOhplay=document.querySelector('.vbgs');
const tocoplay=document.querySelector('.vbgt')
const sooOhBox=document.querySelector('.SH');
const tocoBox=document.querySelector('.TO');
const videoEnd=document.querySelectorAll('.toggle');
const videoend=document.querySelectorAll('.mb_content');
const video=document.getElementsByTagName('video')[0];
const video2=document.getElementsByTagName('video')[1];

sooOhplay.addEventListener('click',()=>{
    sooOhBox.style.display='block';
    video.play();
});
tocoplay.addEventListener('click',()=>{
    tocoBox.style.display='block';
    video2.play();
});

for(let i=0; i<videoEnd.length; i++){
    videoEnd[i].addEventListener('click',()=>{
        if(sooOhBox.style.display=='block'){
            sooOhBox.style.display='none';
            video.pause();
            video.load();
        }
        if(tocoBox.style.display=='block'){
            tocoBox.style.display='none';
            video2.pause();
            video2.load();
        }
    });
}
for(let i=0; i<videoend.length; i++){
    videoend[i].addEventListener('click',()=>{
        if(sooOhBox.style.display=='block'){
            sooOhBox.style.display='none';
            video.pause();
            video.load();
        }
        if(tocoBox.style.display=='block'){
            tocoBox.style.display='none';
            video2.pause();
            video2.load();
        }
    });
}

const sction4=()=>{
    const ptfTo=ptf.offsetTop;
    let scrollTop=window.pageYOffset;
    let offset=scrollTop - ptfTo;
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