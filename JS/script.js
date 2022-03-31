let resultado = document.querySelector("form");

resultado.addEventListener("submit", (e) => {
  e.preventDefault();

  function calcular(a, b) {
    let firstNum = parseFloat(document.getElementById("input1").value);
    let secondNum = parseFloat(document.getElementById("input2").value);

    a = firstNum;
    b = secondNum;

    if(firstNum % 1 !== 0 && secondNum % 1 !== 0){
        return alert("Debe ser un numero entero")

    }else if (Math.abs(a) === a && Math.abs(b) === b) {
        //Aquí comienza la primera operacion
        function menor(a, b){

            // switch(a^b){
            //     case true:
            //     span1.innerHTML = Math.min(a, b)
            //     break;
            //     case false:
            //     console.log("los numeros son iguales");
            //     break;
            // }
             let span1 = document.getElementById('span1');
            span1.innerHTML = "El Menor de los dos numeros es " + Math.min(a, b);

        }

        menor(firstNum, secondNum);
        //acá termina la primera operacion

        //Aquí comienza la segunda operacion
        function sonLasMismas(a, b){

            let span2 = document.getElementById('span2');
            if (a^b){
                span2.innerHTML = "No son los mismos";
            }else{
                span2.innerHTML = "Son los mismos";
            }
        
        }
        sonLasMismas(firstNum, secondNum);
      
        //acá termina la sefunda operación;

        //Aquí comienza la tercera operación

        function calcular2(a, b){
            [a, b] = [b, a]
            
            let span3 = document.getElementById('span3');

            span3.innerHTML = "Ahora A = " + a + " y B = " + b; 

        }
        calcular2(firstNum, secondNum)
        
        //acá termina la tercera operación

      //Aquí comienza la cuarta operación

      const getSum = (a, b) => {
        const firstArr = new Array(a).fill(true);
        const secondArr = new Array(b).fill(true);
        return firstArr.concat(secondArr).length;
      };
      let span4 = document.getElementById("span4");
      span4.innerHTML = getSum(a, b);

      //acá termina la cuarta operación
    } else {
      alert("uno, o ninguno número es positivo");
    }
  }
  calcular();
});
