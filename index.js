const cards=document.querySelectorAll(".card");

var isflipped= false;
var firstCard;
var secondCard;

cards.forEach((card) =>card.addEventListener("click",flip))


function flip(){

this.classList.add("flip");
if (!isflipped) {
  isflipped=true;
  firstCard=this;
}
else{
  secondCard=this;
  console.log(firstCard);
  console.log(secondCard);
  checkIt()
}

}
const checkIt= ()=>{
  if (firstCard.dataset.image == secondCard.dataset.image) {
    success();
    
  }
  else{
    fail();
  }
}

const success=() =>{
  Swal.fire({
    position: 'top-end',
    icon: 'success',
    title: 'You won the Match',
    showConfirmButton: false,
    timer: 1500
  });
  setTimeout(() => {
    Swal.fire({
      title: 'Want to play Again',
      
      icon: 'success',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, lets paly!'
    }).then((result) => {
      if (result.isConfirmed){
       location.reload();
      }
    })
  }, 1500);
  firstCard.removeEventListener('click',flip);
  secondCard.removeEventListener('click',flip);
  // reset();
}

const fail=() =>{
  setTimeout(() => {
    firstCard.classList.remove("flip")
    secondCard.classList.remove("flip")
    reset()  
  }, 800);
  
}

const reset=() =>{
  isflipped=false;
  firstCard=null;
  secondCard=null;
}



const shuffle= ()=>{
  cards.forEach(card => {
    var index=Math.floor(Math.random()*16)
    card.style.order=index;
  });
};


window.addEventListener("load",shuffle);
































// const cards = document.querySelectorAll(".card");
// console.log(cards);

// //variables
// var isFlipped = false;
// var firstCard;
// var secondCard;

// cards.forEach((card) => card.addEventListener("click", flip));

// function flip() {
//   //   console.log("Card flipped");
//   // console.log(this);
//   this.classList.add("flip");
//   if (!isFlipped) {
//     isFlipped = true;
//     firstCard = this;
//   } else {
//     secondCard = this;
//     console.log(firstCard);
//     console.log(secondCard);

//     checkIt();
//   }
// }

// function checkIt() {
//   //   console.log("Checking...");
//   if (firstCard.dataset.image === secondCard.dataset.image) {
//     success();
//   } else {
//     fail();
//   }
// }

// function success() {
//   //   console.log("Success");
//   firstCard.removeEventListener("click", flip);
//   secondCard.removeEventListener("click", flip);
//   reset();
// }

// function fail() {
//   //   console.log("Failed");
//   setTimeout(() => {
//     firstCard.classList.remove("flip");
//     secondCard.classList.remove("flip");
//     reset();
//   }, 1000);
// }

// function reset() {
//   isFlipped = false;
//   firstCard = null;
//   secondCard = null;
// }

// //TODO: shuffle

// (function shuffle() {
//   cards.forEach((card) => {
//     var index = Math.floor(Math.random() * 16);
//     card.style.order = index;
//   });
// })();
