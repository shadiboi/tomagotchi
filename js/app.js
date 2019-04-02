// console.log("running")

// // 1.) stop negative nums
// // 2.) 10 = dead 
// // 3.) levels/time ++

// /////////////GLOBAL VARIBALES/////////////////////
let timePassing;
let seconds = 55;
let minutes = 0;
let gamePlay = false;

class Tomagotchi {
    constructor(name) {
      this.name = name;
      this.hunger = 0;
      this.sleepiness = 0;
      this.boredom = 0;
      this.age = 0;
    }
  }
const pet = new Tomagotchi()

//////////////FUNCTIONS//////////////////////////////
const ageCt = () => {
    $('.age').text("Age: " + pet.age)
}

const boredomCt= () => {
//     let $boredom = $('.boredom').text()
// console.log($boredom)
    
    $('.boredom').text("Boredom: " + pet.boredom)
    $('#playBtn').on('click', function () {
        $('.boredom').text(`Boredom: ${pet.boredom--}`)
    })
    // if ($boredom == 0){
    //     console.log("you dead")
    // }
}

const sleepinessCt = () => {
    $('.sleepiness').text("Sleepiness: " + pet.sleepiness)
    $('#lightsBtn').on('click', function () {
        console.log('wokring')
        $('.sleepiness').text(`Sleepiness: ${pet.sleepiness--}`)
    })
}

const hungerCt = () => {
    $('.hunger').text("Hunger: " + pet.hunger)
    $('#feedBtn').on('click', function () {
        $('.hunger').text(`Hunger: ${pet.hunger--}`)
    })
    // if (hunger >= 10){
    //     console.log("your dead!")           // NOt WOKRING
    // }
}

const displayTime = () => {
    $('.time').text(`Time: ${minutes}Mins ${seconds}Secs`)
}

const secondsGoUp = () => {
    $('.time').text(`Time: ${minutes}Mins ${seconds}Secs`)
    if (gamePlay === true){
        seconds++;
    } if(seconds % 3 === 0){
        pet.hunger++;
       $('.hunger').text("Hunger: " + pet.hunger);
    } if (seconds % 5 === 0){
        pet.boredom++;
        $('.boredom').text("Boredom: " + pet.boredom)
    } if (seconds % 8 === 0){
        pet.sleepiness++;
        $('.sleepiness').text("Sleepiness: " + pet.sleepiness)
    } if (seconds % 60 === 0){
        minutes++;
        seconds = 0;
        pet.age++;
        $('.age').text("Age: " + pet.age)

    } 
}

$('.start').click(function(){
    gamePlay = true;
    timePassing = setInterval(secondsGoUp, 100);
    const $inputName = $('#inputName').val();
    console.log($inputName)

    $('#headName').text($inputName)
    // if (pet.hunger > 10){
    //     alert("your dead");
    // }


//     let $headName = $('#headName').text()
//    console.log($headName)
//     $headName = $inputName
})

$('.stop').click(function(){
    clearInterval(timePassing);
})

// ///////////////MAIN//////////////////////////////////
displayTime();
ageCt();
hungerCt();
sleepinessCt();
boredomCt();