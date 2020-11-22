// 3.1
const arr = [1, 2, 3, 4, 5];
const newArr = arr.map(item => item + 10);
console.log(newArr);


// 3.2

const usuario = { nome: 'Diego', idade: 23 };

const mostraIdade = usuario => usuario.idade;

mostraIdade(usuario);
console.log(usuario);


// 3.3

const nome = "Diego";
const idade = 23;

const mostraUsuario = (nome = 'Diego', idade = 18) => ({ nome, idade });

mostraUsuario(nome, idade);
mostraUsuario(nome);
console.log(nome, idade);

// 3.4
const promise = function () {
    return new Promise(function (resolve, reject) {
        return resolve();
    })
    console.log(resolve);
}