function validaArray(array, num) {
    try {
        if(!array && !num) throw ReferenceError('Envie os parâmetros');

        if(typeof array !== 'object') throw TypeError('O array precisa ser do tipo Object');

        if(typeof num !== 'number') throw TypeError('O num precisa ser do tipo Number');

        if(array.length !== num) throw new RangeError('Tamanho inválido');

        return array;
    }
    catch(e) {
        if(e instanceof ReferenceError) {
            console.log('Este erro é um ReferenError!');
            console.log(e.message);
        } else if(e instanceof TypeError) {
            console.log('Este erro é um TypeError!');
            console.log(e.message);
        } else if(e instanceof RangeError) {
            console.log('Este erro é um RangeError!');
            console.log(e.message);
        } else {
            console.log('Ocorreu um tipo de erro não esperado: ' + e);
            console.log(e.message);
        }
    }
}

console.log(validaArray());

console.log(validaArray(5, 5));

console.log(validaArray([], '5'));

console.log(validaArray([], 5));

console.log(validaArray([1, 2, 3, 4, 5], 5));
