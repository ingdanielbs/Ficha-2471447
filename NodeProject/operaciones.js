const getSum = (num1, num2) => {
    return new Promise((resolve, reject) => {
    if(num1, num2){
        if (typeof num1 === "number" && typeof num2 === "number") {
            resolve(num1 + num2);         
        }else{
            reject("Debe ingresar numeros");
        }
    }else{
        reject('No se puede sumar');
    }
});
}

module.exports = {getSum};