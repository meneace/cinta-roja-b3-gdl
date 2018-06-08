// console.log("Me ejecuto primero");

// setTimeout(()=>{
//     console.log("Yo voy segundo");
// }, 2000);

// console.log("Yo voy tercero"); //En realidad se ejecuta en segundo lugar
// const sumartodos= (max, callback) => {





//     let resultado = 0;
//     setTimeout(() => {
//         for (let i = 0; i < max; i++){
//             resultado = resultado +i;
//         }
//         callback(resultado);
//     }, 3000);
// }

// const respuestAlCallback = (resultadoDelaSuma)=>{
// const menosDiez = resultadoDelaSuma -10;   
//     console.log(menosDiez);
// }
// sumartodos(20, respuestAlCallback);

// sumartodos(15,(resultadoDelaSuma)=>{
//     console.log(resultadoDelaSuma);
// })

// sumartodos(15,(resultadoDelaSuma)=>{
//     const masDiez = resultadoDelaSuma + 10;
//     console.log(masDiez);
// })

const sumarTodos = (max) => {
    return new Promise((resolve, reject) => {
        if (max <= 0) {
            return reject("debe ser mayor que 0");
        }
        let resultado = 0;

        setTimeout(() => {
            for (let i = 0; i < max; i++ ) {
                resultado = resultado + i;
            }
            resolve(resultado);
        }, 5000);

    })
}

sumarTodos(0).then((res) => {
    console.log(res);
}).catch((err) => {
    console.log(err)
})

sumarTodos(10).then((res) => {
    console.log(res);
})




// let resultado = 0;
// setTimeout(() => {
//     for (let i = 0; i < 10; i++){
//         resultado = resultado +i;
//     }
//     console.log(resultado);
// }, 3000);

