//quais açoes meu carrinho pode fazer
//casos de uso

//--adicionar item no carrinho
async function addItem(userCart, item){
    userCart.push(item);
}

//--calcular o total
async function calculateTotal(userCart){
    console.log ("Carrinho da shopee total")
    const result = userCart.reduce((total, item)=> total + item.subtotal(), 0)
    console.log(`\nTotal: ${result}`);
}

//--deletar item do carrinho
async function deleteItem(userCart,name) {
    const index = userCart.findIndex((item)=> item.name ===name);

    if(index!== -1){
        userCart.splice(index, 1);
    }
}

//--remover um item
async function removeItem(userCart, item) {

    //encontrar o indice da lista
    const indexFound = userCart.findIndex((p) => p.name === item.name);

    //caso nao encontre o item
    if(indexFound == -1){
        console.log("item nao encontrado");
        return;
    }
    
    //item >1 subtrair um item 
    if(userCart[indexFound].quantity>1){
        userCart[indexFound].quantity -=1;
        return;
    }


    //item =1 deleta
    if(userCart[indexFound].quantity == 1){
        userCart.splice(indexFound, 1);
        return;
    }

}

//mostra todos os itens do carrinho
async function displaycart(userCart) {
    console.log("\nShopee lista do carrinho ")
    userCart.forEach((item, index) =>{
        console.log(`${index + 1}. ${item.name} - R$ ${item.price} | ${
            item.quantity}x | subtotal ${item.subtotal()}`);
    })
}

export{
    addItem,
    calculateTotal,
    deleteItem,
    removeItem,
    displaycart,
}
