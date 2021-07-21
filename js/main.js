// Uma função simples que faz a contagem de 0 a um numero passado como parametro
function contar (n){
    let cont=0
    for(let i=0;i<n;i++){
        cont++
    }
    return cont
}

/*exemplo de que a função não será realozada pois o codigo foi lido porém ele não aguardou
 a resposta, como não foi resolvido ele seguiu direto*/
function contarT (n){
    let cont=0
    let t = setTimeout(()=>{
        for(let i=0;i<n;i++){
            cont++
        }
    },20000)
    
    return cont
}

// Aqui Adicionamos a promise
function contarP (n){
    let cont=0
    let p= new Promise((resolve,rejected)=>{
        for(let i=0;i<n;i++){
            cont++
        }
        if(cont == n){
            resolve(cont)
        }else{
            rejected('ERRO')
        }
    })
    return p
}

function somaPositivos(n1,n2){
    let p = new Promise((res,rej)=>{
        if(n1>=0 && n2>=0){
            res(n1+n2)
        }else(
            rej('Erro')
        )
    })
    return p
}

/*console.log(contar(10000))

//com a promisse feita voce adiciona os metodos .then() e .catch().
contarP(10)
      .then(sucesso => console.log('Sucesso: ' + sucesso))
      .catch(erro => console.log('deu erro: ' + erro))*/

      //Duas maneiras de realizar

// primeira funciona enquanto os 2 numeros forem positivos: 

//console.log(somaPositivos(10,2))

//Segunda:
//somaPositivos(10,2)
//       .then(sucesso => console.log('Sucesso: ' + sucesso))
//       .catch(Erro => console.log('deu erro: ' + Erro))

//Trabalhando com função assincrona (Async)
// p = promise e T= tempo
function contarPT (n){
    let cont=0
        let p= new Promise((resolve,rejected)=>{
            let t= setTimeout(()=>{
                for(let i=0;i<n;i++){
                    cont++
                } 
                if(cont == n){
                    resolve(cont)
                }else{
                    rejected('ERRO')
                }
            },2000)
    })
    return p
}

contarPT(10)
      .then(sucesso => console.log('Sucesso: ' + sucesso))
      .catch(erro => console.log('deu erro: ' + erro))
      
console.log(contar(10000))

console.log(contarT(10))
