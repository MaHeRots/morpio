var cells = document.querySelectorAll('.cell');
var tourDuJoueur1 = true;
var partieGagnee = false;
var currentPlayer;
var la = document.querySelector('.infojoueurs');
var alert = document.querySelector('.alert');
var reset = document.querySelector('.reset');
var newgame = document.querySelector('.newgame');
var ScoreJoueur1 = 0;
var ScoreJoueur2 = 0;
var lancement = document.querySelector('.play');
var joueur1 = document.querySelectorAll('.joueur1 .animalio');
var joueur2 = document.querySelectorAll('.joueur2 .animalio');
var animalio = document.querySelectorAll('.animalio');
var choix = document.querySelectorAll('.choixjoueursparent');
// var form1 = document.querySelectorAll('.animalio1');
// var form2 = document.querySelectorAll('.animalio2');

var afficherSymbole = function(cells){
  //vérifié case remplie ou pas
  if(cells.classList.contains('cell')){
    //Poser les symboles
    if(tourDuJoueur1){
      cells.classList.replace('cell','castor');
    }else{
      cells.classList.replace('cell','dino');
    };
    //changer de joueur
    tourDuJoueur1= !tourDuJoueur1;
  };
};
//Vérifie TOUTES les combinaisons gagnantes
var combinaisons = [[0, 1, 2], [3, 4, 5],[6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]];

var verifierCombinaisons = function(){
  combinaisons.forEach(function(combinaison){
    if(
      cells[combinaison[0]].classList.contains('dino') &&
      cells[combinaison[1]].classList.contains('dino') &&
      cells[combinaison[2]].classList.contains('dino')
      ||
      cells[combinaison[0]].classList.contains('castor') &&
      cells[combinaison[1]].classList.contains('castor') &&
      cells[combinaison[2]].classList.contains('castor')
  ){
      if(tourDuJoueur1){
        currentPlayer = 'Nani';
        ScoreJoueur1 = ScoreJoueur1 + 1;
      }else {
        currentPlayer = 'Papy';
        ScoreJoueur2 = ScoreJoueur2 + 1;
      }
      partieGagnee =true;
      if(partieGagnee == true){
  		  alert.innerHTML = 'Bravo ' + currentPlayer + ' !';
        alert.classList.replace('alert','visible');
      };
  };
});
};


function select(elmt) {
  joueur1.forEach(function(elmt){
   for (i = 0; i < 6; i++) {
     if(joueur1[i].classList.contains('animalio')){
       joueur1[i].classList.replace('animalio', 'animalioselect');
     }else{
       joueur1[i].classList.replace('animalio', 'animalioselect');
     }
   }
   console.log('tomate');
 });
};

function select2(elmt) {
  joueur1.forEach(function(elmt){
   for (m = 0; m < 6; m++) {
     if(joueur2[m].classList.contains('animalio')){
       joueur2[m].classList.replace('animalio', 'animalioselect');
     }else{
       joueur2[m].classList.replace('animalio', 'animalioselect');
     }
   }
   console.log('tomate');
 });
};
// avatars1.forEach(function (avatars1) {
//   avatars1.addEventListener('click',function() {
//     animalio.forEach(function(elmt){
//       var a = document.querySelector('.animalio');
//       for (i = 0; i < a.length; i++) {
//         a[i].classList.replace('animalioselect', 'animalio');
//       }
//       elmt.classList.replace('animalio', 'animalioselect');
//       console.log('tomate');
//     });
//   });
// });


lancement.addEventListener('click', function(){
  choix.classList.replace('choixjoueursparent', 'choixinvisible');
  document.querySelector('.score').innerHTML = 'Nani : ' + ScoreJoueur1 + ' &emsp; Papy: ' + ScoreJoueur2;
  });

reset.addEventListener('click', function(){
  cells.forEach(function (cell) {
  cell.classList.replace('dino','cell');
  cell.classList.replace('castor','cell');
  choix.classList.replace('choixinvisible', 'choixjoueursparent');
  console.log('tomate');
  partieGagnee = false;
  ScoreJoueur1 = 0;
  ScoreJoueur2 = 0;
  alert.classList.replace('alertvisible', 'alert');
  document.querySelector('.score').innerHTML = 'Nani : ' + ScoreJoueur1 + ' &emsp; Papy : ' + ScoreJoueur2;
  });
});

newgame.addEventListener('click', function(){
  cells.forEach(function (cell) {
  cell.classList.replace('dino','cell');
  cell.classList.replace('castor','cell');
  console.log('tomate');
  partieGagnee = false;
  alert.classList.replace('alertvisible', 'alert');
  document.querySelector('.score').innerHTML = 'Nani : ' + ScoreJoueur1 + ' &emsp; Papy: ' + ScoreJoueur2;
  });
});

cells.forEach(function (cell) {
  cell.addEventListener('click', function(){
    if (!partieGagnee){
      afficherSymbole(cell);
      verifierCombinaisons();
    }
  });
});
