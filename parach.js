var firstTraining = document.querySelector(".first")
var secondTraining = document.querySelector(".second")
var thirdTraining = document.querySelector(".third")
var fourthTraining = document.querySelector(".fourth")
var firstTrainingPicture = document.querySelector(".ist-training")
var secondTrainingPicture = document.querySelector(".second-training")
var thirdTrainingPicture = document.querySelector(".third-training")
var fourthTrainingPicture = document.querySelector(".fourth-training")
var trainingContent = document.querySelector(".training-content")
var training = document.querySelector(".training");
function trainingColor() {
    training.style.color = "black"   
};



function displayClass1(){
    training.style.color = "black";
    trainingColor();
    firstTrainingPicture.style.display = "block";
    thirdTrainingPicture.style.display = "none"
    fourthTrainingPicture.style.display = "none"
    secondTrainingPicture.style.display = "none"
    
}

firstTraining.addEventListener('click', displayClass1)



function displayClass2(){
    secondTrainingPicture.style.display = "block";
    trainingColor();
    secondTraining.style.color = "orangered";
    firstTrainingPicture.style.display = "none";
    thirdTrainingPicture.style.display = "none"
    fourthTrainingPicture.style.display = "none"
}

secondTraining.addEventListener('click', displayClass2)

function displayClass3(){
    thirdTrainingPicture.style.display = "block";
    trainingColor();
    thirdTraining.style.color = "orangered";
    firstTrainingPicture.style.display = "none";
    secondTrainingPicture.style.display = "none";
    fourthTrainingPicture.style.display = "none";
}

thirdTraining.addEventListener('click', displayClass3)

function displayClass4(){
    fourthTrainingPicture.style.display = "block";
    trainingColor();
    fourthTraining.style.color = "orangered";
    firstTrainingPicture.style.display = "none";
    secondTrainingPicture.style.display = "none";
    thirdTrainingPicture.style.display = "none";
}

fourthTraining.addEventListener('click', displayClass4)