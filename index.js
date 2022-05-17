do{
    // coleta dos preços do álcool e da gasolina
    var precoAlcool = parseFloat(prompt('Digite o preço do álcool: '));

    var precoGasolina = parseFloat(prompt('Digite o preço da gasolina: '));

    // cálculo do percentual entre os preços
    var divisaoPrecos = precoAlcool/precoGasolina;
    console.log(`O preço do álcool vale ${(divisaoPrecos*100).toFixed(2)}% do preço da gasolina`)

    // lógica para exibição da mensagem ao usuário 
    if(divisaoPrecos < 0.7){
        console.log('Portanto, vale a pena abastecer com álcool');
    }else if(divisaoPrecos === 0.7){
        console.log('Portanto, tanto faz abastecer com álcool ou com gasolina');
    }else{
        console.log('Portanto, vale a pena abastecer com gasolina');
    }

    // perguntar se deseja um novo cálculo
    var continuar = parseInt(prompt('Quer fazer um novo cálculo? Digite 1, caso queira, ou digite 2 caso não queira: '));

    console.clear();
}while(continuar === 1);