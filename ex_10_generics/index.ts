type Generics<T>={value:T}


function identity <Generics>(value:Generics) : Generics {
    return value;
}
const value = {value:[2,"6",15]} // este valor pode ser o que você desejar mais tambem posso atribuir restrições a esta função
console.log(identity(value)) // 1