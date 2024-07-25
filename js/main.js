
let hours=0
let mins=0
let secs=0
let count=0  //mileseconds

let startIntarval


// start
$('.start').click(function () { 
    $(this).attr('disabled',true)
   startIntarval=  setInterval(start)
});


function start(){
    count ++;

if(count===1000){
   
    count=0
    secs++;

   

    if(secs===60){
        
        secs=0
        mins++  
    }
    if(mins===60){
        mins=0
        hours++
        
    }
}

displayTimer()
    }

// stop
$('.stop').click(function(){
    stop()
    displayTimer()
    $('.start').removeAttr('disabled');



})
function stop(){
clearInterval(startIntarval)
}




// reset
$('.reset').click(reset)

function reset(){
    stop()
count=0
secs=0
mins=0
hours=0
displayTimer()
$('.start').removeAttr('disabled');
}


// display
function displayTimer(){
    if(count<10){

        $('.count').html(`0${count}`)
    }
    else{
        $('.count').html(`${count}`)
    }

    if(secs<10){
        $('.sec').html(`0${secs} <sub>Sec</sub>`)
        }
        else{
            $('.sec').html(`${secs} <sub>Sec</sub>`)
        }

        if(mins<10){
            $('.mins').html(`0${mins} <sub>Min</sub>`)
            }
            else{
                $('.mins').html(`${mins} <sub>Min</sub>`)
            }
            if(hours<10){
                $('.hours').html(`0${hours} <sub>Hr</sub>`)
                }
                else{
                    $('.hours').html(`${hours} <sub>Hr</sub>`)
                }
}