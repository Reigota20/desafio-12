//5.1 Rest

const arr = [1, 2, 3, 4, 5, 6]

const [x, ...y] = arr;

console.log(x);
console.log(y);
const somaNumeros = (a, b, c, d, e, f) => a + b + c + d + e + f;
const somaTotal = somaNumeros(1, 2, 3, 4, 5, 6);
console.log(somaTotal);


//5.2 Spread

const usuario = {
    nome: 'Diego',
    idade: 23,
    endereco: {
        cidade: 'Rio do Sul',
        uf: 'SC',
        pais: 'Brasil',
    }
};
const usuario2 = {...usuario, nome: "Paulo"} 
const usuario3 = {...usuario, endereco: {...usuario.endereco, cidade: "Florianopolis"}}
console.log(usuario);
console.log(usuario2);
console.log(usuario3);