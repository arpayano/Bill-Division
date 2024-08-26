function bonAppetit(bill, k, b) {
    // Write your code here.
    // bill es la cuenta la cual es un array con los items consumidos bill =[2,4,6]
    // k indice de lo que no comio Anna/
    // b lo que Brian le cobro a Anna.
    
    // investigar lo que anna debe de pagar en realidad (x)
    // si x no es entero, redondeamos para abajo.
    // comparamos con b
    // si es igual imprimimos 'Bon Appetit'
    // si es distinto imprimimos b -x
    
    let total = 0;
    
    for (let i = 0; i < bill.length ; i++){ //recorremos el bill
        
        if (i !== k){  // Si i es distinto de k (para saltear el indice que ana no comio)
            
            total += bill[i]  //total mas igual bill[i]
            
            
            
        }
        
        // lo que debe pagar Anna 
        let x = Math.floor ( total /2);
        
        if (x === b) {
            
            console.log ('Bon Appetit');
        } else {
            
   total += bill[i]         console.log (b - x);
            
        }
        
        
        
        
        
    }

}