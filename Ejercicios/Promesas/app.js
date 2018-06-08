const calculadora=(accion, num1, num2, callback)=>{
    let resultado;

    if (accion==='suma'){
    resultado = sumar(num1, num2);
}

if (accion==='resta'){
    resta(num1, num2);
}

if (accion==='multiplicar'){
   mult(num1, num2);
}

if (accion==='dividir'){
    divi(num1, num2); 
}

callback(resultado)
}


const sumar = (num1,num2)=>{
    resultado = num1 + num2;
    return resultado;
} ;
   const  resta = (num1, num2)=> {
        resultado=num1 - num2;
        return resultado;
    }; 

  const  mult= (num1, num2)=>{
        resultado = num1 * num2;
        return resultado;
    };

   const divi=(num1, num2)=>{
        resultado = num1 / num2;
        return resultado;
    }; 

    calculadora('suma',2,5,(cb)=>{
        console.log(cb);
    }
);
   


