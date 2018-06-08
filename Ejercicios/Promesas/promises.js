const calculadora=(accion, num1, num2, )=>{
    return new Promise((resolve, reject)=>{
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
    if(num2<=0){
        return reject("No se puede dividir entre 0");
    }
    divi(num1, num2); 
}

resolve(resultado);
})
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

    calculadora('dividir',2,0).then((res)=>{
        console.log(res).catch((err)=>{
            console.log(err);
        });
    })
   


