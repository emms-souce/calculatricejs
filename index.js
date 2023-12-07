 touches = [...document.querySelectorAll('.btn')];

//  listTouches = touches.map(touche => touche.value);

 const ecran = document.querySelector('.ecran')

 document.addEventListener('click', (e) => {
  const valeur = e.target.value
  console.log(valeur)
  calculer(valeur)
 })


const calculer = (valeur) =>{
  if(valeur != undefined)
  switch(valeur){
    case 'c':
      ecran.textContent = "";
      break;

      case '=':
        var calcul = eval(ecran.textContent);
        console.log(ecran.textContent);
        calcul = String(calcul)
        calcul = calcul.substring(0, 10)
        console.log(calcul, typeof(calcul))
        ecran.textContent = calcul;
        break;

        case"del":
          valEcran = ecran.textContent;
          valEcran = valEcran.substring(0, valEcran.length - 1);
          ecran.textContent = valEcran;
          break

        default:
        if (ecran.textContent.length < 19){
          String(valeur)
          ecran.textContent += valeur ;
        }

        
         
  }

}

window.addEventListener('error', (e) => {
  alert ("operation invalide! :")
})
 


