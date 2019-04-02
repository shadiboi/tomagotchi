console.log("running")
///////////////PSEUDOCODE/NOTES//////////////////////
// // 1.) stop negative nums DONE!!!!!
// // 2.) 10 = dead DONE!!! 
// // 3.) levels/time ++  //NEEDS WORK

// /////////////GLOBAL VARIBALES/////////////////////
let speed = 1000;
let timePassing;
let seconds = 0;
let minutes = 0;
let gamePlay = false;

///////////////PET CLASS///////////////////////////////
class Tomagotchi {
    constructor(name) {
      this.name = name;
      this.hunger = 8;
      this.sleepiness = 0;
      this.boredom = 0;
      this.age = 0;
    }
  }

let pet = new Tomagotchi('')

//////////////FUNCTIONS//////////////////////////////
$( "form" ).click(function(e) {
    e.preventDefault();
  });

$('.start').click(function(){
    if (gamePlay == false){
    gamePlay = true;
    timePassing = setInterval(secondsGoUp, speed);
    const $inputName = $('#inputName').val();
    console.log($inputName)
    $('#headName').text($inputName)
    pet.name = $inputName;
}})

$('.stop').click(function(){
    clearInterval(timePassing);  //only for debugging will remove after
    //or endGame(); to clear 
})

const ageCt = () => {
    $('.age').text("Age: " + pet.age)
}

const boredomCt= () => {
//     let $boredom = $('.boredom').text()
// console.log($boredom)
    
    $('.boredom').text("Boredom: " + pet.boredom)
    $('#playBtn').on('click', function () {
        if (pet.boredom > 0){
        pet.boredom--
        $('.boredom').text(`Boredom: ${pet.boredom}`)
    }})
    // if ($boredom == 0){
    //     console.log("you dead")
    // }
}

const sleepinessCt = () => {
    $('.sleepiness').text("Sleepiness: " + pet.sleepiness)
    $('#lightsBtn').on('click', function () {
        console.log('wokring')
        if (pet.sleepiness > 0){
        pet.sleepiness--
        $('.sleepiness').text(`Sleepiness: ${pet.sleepiness}`)
    }})
}

const hungerCt = () => {
    $('.hunger').text("Hunger: " + pet.hunger)
    $('#feedBtn').on('click', function () {
        if (pet.hunger > 0){
        pet.hunger--
        $('.hunger').text(`Hunger: ${pet.hunger}`)
    }})
    // if (hunger >= 10){
    //     console.log("your dead!")           // NOt WOKRING
    // }
}

const displayTime = () => {
    $('.time').text(`Time: ${minutes}Mins ${seconds}Secs`)
}

const endGame = () => {
    pet.hunger = 0;
    $('.hunger').text("Hunger: " + pet.hunger)
    pet.sleepiness = 0;
    $('.sleepiness').text("Sleepiness: " + pet.sleepiness)
    pet.boredom = 0;
    $('.boredom').text("Boredom: " + pet.boredom)
    pet.age = 0;
    $('.age').text("Age: " + pet.age)
    seconds = 0;
    minutes = 0;
    $('#headName').text("TAMAGOTCHI!");
    $('.time').text(`Time: ${minutes}Mins ${seconds}Secs`);
    clearInterval(timePassing);
    gamePlay = false;
}

const secondsGoUp = () => {
    $('.time').text(`Time: ${minutes}Mins ${seconds}Secs`)
    if (gamePlay === true){
        seconds++;
    } if(seconds % 3 === 0){
            pet.hunger++;
            $('.hunger').text("Hunger: " + pet.hunger)
    } if (seconds % 5 === 0){
        pet.boredom++;
        $('.boredom').text("Boredom: " + pet.boredom)
    } if (seconds % 8 === 0){
        pet.sleepiness++;
        $('.sleepiness').text("Sleepiness: " + pet.sleepiness)
    } if (seconds % 60 === 0){
        seconds = 0;
        minutes++;
        pet.age++;
        $('.age').text("Age: " + pet.age)
    } if (pet.hunger === 10){
        alert(pet.name + " died of hunger! Try again.")
        endGame();
    } if (pet.sleepiness === 10){
        alert(pet.name + " died of sleepiness! Try again.")
        endGame();
    } if (pet.boredom === 10) {
        console.log(pet.name)
        alert(pet.name + ' died of boredom! Try again.')
        endGame();
    } if (pet.age >= 5){
        console.log("5 working")
        speed-=400
    } if (pet.age >= 8){
        speed-=100
    } if (pet.age >= 10){
        console.log("10 wokring")
        speed-=100
    } if (pet.age >= 15){
        console.log("15 wokring")
        alert("You win! Your pet died of old age")
        endGame()
    }
}

// ///////////////MAIN//////////////////////////////////
displayTime();
ageCt();
boredomCt();
sleepinessCt();
hungerCt();






