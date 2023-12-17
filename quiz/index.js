// alert(`Dear User some Keyboard Shortcuts are:\n1.Press x (or X) - To Clear Selection\n2.Press Left Shift Key - for going to previous Question\n3.Press Right Shift Key - for going to next Question\n4.A,B,C,D for selecting respective options`)
let qnID = document.querySelector('.qn-head');
let qnDesc = document.querySelector('.qn-desc');
let op1 = document.querySelector('#option-desc-1');
let op2 = document.querySelector('#option-desc-2');
let op3 = document.querySelector('#option-desc-3');
let op4 = document.querySelector('#option-desc-4');

let i=0; //current_count_of_qn
let ans;
displayAll();

let win = new Audio('./win.mp3');
let lost = new Audio('./lost.wav');
let click = new Audio('./click.mp3');
let page = new Audio('./newpage.mp3');

function displayAll(){
    qnID.innerHTML=`Question &nbsp;${(quizData[i].qn_id)}.`;
    qnDesc.innerHTML=`${quizData[i].qn_desc}`;
    op1.innerHTML=`${quizData[i].opn_obj.A}`;
    op2.innerHTML=`${quizData[i].opn_obj.B}`;
    op3.innerHTML=`${quizData[i].opn_obj.C}`;
    op4.innerHTML=`${quizData[i].opn_obj.D}`;
    ans = quizData[i].ans;
}


function clickPlay(){
    click.play();
}


function autoCheck1(){
    click.play();
    if(document.querySelector('#option-1').checked==true) {document.querySelector('#option-1').checked=false;return false;}
    document.querySelector('#option-1').checked=true;
}
function autoCheck2(){
    click.play();
    if(document.querySelector('#option-2').checked == true) {document.querySelector('#option-2').checked=false;return;}
    document.querySelector('#option-2').checked=true;
}
function autoCheck3(){
    click.play();
    if(document.querySelector('#option-3').checked==true) {document.querySelector('#option-3').checked=false;return;}
    document.querySelector('#option-3').checked=true;
}
function autoCheck4(){
    click.play();
    if(document.querySelector('#option-4').checked==true) {document.querySelector('#option-4').checked=false;return;}
    document.querySelector('#option-4').checked=true;
}



function check(){
    let chk1=document.querySelector('#option-1').checked;
    let chk2=document.querySelector('#option-2').checked;
    let chk3=document.querySelector('#option-3').checked;
    let chk4=document.querySelector('#option-4').checked;
    let exp = document.querySelector('.exp');

    if(!(chk1 || chk2 || chk3 || chk4)) {
        exp.style.backgroundColor='#ff9100';
        exp.style.boxShadow='0px 0px 10px orange';
        exp.innerHTML=`Please Choose an Option!`;
        exp.style.visibility = 'visible';
        return;
    }

    let display = document.querySelector('.disp');

    if(chk1 && ans == 'A') {
        document.querySelector('.exp').innerHTML=`${quizData[i].add_info}`;
        display.innerHTML=`CORRECT ANSWER! 😀`;
        display.classList.remove('wrong');
        display.classList.add('correct');
        exp.style.backgroundColor='#1C86EE';
        exp.style.boxShadow='0px 0px 10px #1C86EE';
        document.querySelector('.disp').style.visibility = 'visible';
        document.querySelector('.exp').style.visibility = 'visible';
        win.play();
    }
    else if(chk2 && ans == 'B') {
        document.querySelector('.exp').innerHTML=`${quizData[i].add_info}`;
        display.innerHTML=`CORRECT ANSWER! 😀`;
        display.classList.remove('wrong');
        display.classList.add('correct');
        exp.style.backgroundColor='#1C86EE';
        exp.style.boxShadow='0px 0px 10px #1C86EE';
        document.querySelector('.disp').style.visibility = 'visible';
        document.querySelector('.exp').style.visibility = 'visible';
        win.play();
    }
    else if(chk3 && ans == 'C') {
        document.querySelector('.exp').innerHTML=`${quizData[i].add_info}`;
        display.innerHTML=`CORRECT ANSWER! 😀`;
        display.classList.remove('wrong');
        display.classList.add('correct');
        exp.style.backgroundColor='#1C86EE';
        exp.style.boxShadow='0px 0px 10px #1C86EE';
        document.querySelector('.disp').style.visibility = 'visible';
        document.querySelector('.exp').style.visibility = 'visible';
        win.play();
    }
    else if(chk4 && ans == 'D') {
        document.querySelector('.exp').innerHTML=`${quizData[i].add_info}`;
        display.innerHTML=`CORRECT ANSWER! 😀`;
        display.classList.remove('wrong');
        display.classList.add('correct');
        exp.style.backgroundColor='#1C86EE';
        exp.style.boxShadow='0px 0px 10px #1C86EE';
        document.querySelector('.disp').style.visibility = 'visible';
        document.querySelector('.exp').style.visibility = 'visible';
        win.play();
    }
    else {
        display.innerHTML=`WRONG ANSWER! 😕`;
        display.classList.remove('correct');
        display.classList.add('wrong');
        document.querySelector('.disp').style.visibility = 'visible';
        document.querySelector('.exp').style.visibility = 'hidden';
        lost.play();
    }
}








function clearRadio(){
    document.querySelector('#option-1').checked=false;
    document.querySelector('#option-2').checked=false;
    document.querySelector('#option-3').checked=false;
    document.querySelector('#option-4').checked=false;
}
function invisible(){
    document.querySelector('.exp').style.visibility = 'hidden';
    document.querySelector('.disp').style.visibility = 'hidden';
}






function bandKar(){
    document.querySelector('.exp').style.visibility = 'hidden';
    console.log('in');

}
function bwd(){
    if(i==0) {
        document.querySelector('.exp').innerHTML=`You are at the first question`;
        document.querySelector('.exp').style.visibility = 'visible';
        setTimeout(bandKar,2000);
        console.log('out');
        return;
    }
    i--;
    clearRadio();
    invisible();
    page.play();
    displayAll();

    
}
function fwd(){
    if(i==quizData.length) {
        document.querySelector('.exp').innerHTML=`You are at the last question`;
        document.querySelector('.exp').style.visibility = 'visible';
        setTimeout(bandKar,2000);
        return;
    }
    i++;
    clearRadio();
    invisible();
    page.play();
    displayAll();

}






/* ADDITIONAL FEATURES! */

function sunleFunc(event){  // sun ne wala!!
    if(event.key=='x' || event.key=='X') clearRadio();
    else if(event.key == 'ArrowRight') fwd();
    else if(event.key == 'ArrowLeft') bwd();
    else if(event.key == 'A' || event.key == 'a')  document.querySelector('#option-1').checked=true;
    else if(event.key == 'B' || event.key == 'b')  document.querySelector('#option-2').checked=true;
    else if(event.key == 'C' || event.key == 'c')  document.querySelector('#option-3').checked=true;
    else if(event.key == 'D' || event.key == 'd')  document.querySelector('#option-4').checked=true;
}

document.addEventListener('keydown',sunleFunc);