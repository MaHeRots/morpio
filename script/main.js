var cells = document.querySelectorAll('.cell');
var tourDuJoueur1 = true;
var partieGagnee = false;
var currentPlayer;
var body = document.querySelector('body');
var reset = document.querySelector('.reset');

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
        currentPlayer = 'joueur 1';
      }else {
        currentPlayer = 'joueur 2';
      }
      partieGagnee =true;
      if(partieGagnee == true){
        var alert = document.createElement('div');
  		  alert.innerHTML = 'le ' + currentPlayer + ' a gagné';
        alert.classList.add('alert');
        body.appendChild(alert);
      };
  };
});
};

reset.addEventListener('click', function(){
  cells.forEach(function (cell) {
  cell.classList.replace('dino','cell');
  cell.classList.replace('castor','cell');
  console.log('tomate');
  partieGagnee = false;
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
