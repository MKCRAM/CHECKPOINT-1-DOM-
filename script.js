var produit = document.getElementsByClassName("test")
let totalPrice =document.getElementById("total")
var options = document.getElementsByClassName("option")
var like1 = document.getElementById("aimer1")
var like2 = document.getElementById("aimer2")
var like3 = document.getElementById("aimer3")

// LIKE BUTTON

like1.addEventListener("click", function(){
if (like1.style.color==="red"){
    like1.style.color="black"
}else{
  like1.style.color="red"  
}
})
like2.addEventListener("click", function(){
    if (like2.style.color==="red"){
        like2.style.color="black"
    }else{
      like2.style.color="red"  
    }
    })
like3.addEventListener("click", function(){
if (like3.style.color==="red"){
    like3.style.color="black"
}else{
  like3.style.color="red"  
}
})


//Incrementer // décrementer // supprimer du panier

for (let i=0; i<produit.length;i++){
    let btnPlus = produit[i].children[3].children[0];
    let btnMoins = produit[i].children[3].children[2];
    let deleteBtn = options[i].children[0];
    let quantite = produit[i].children[3].children[1];
    let qty=parseInt(quantite.innerText)
    let tot = produit[i].children[4].children[1];
    let prixUnit =produit[i].children[2]
    let price =parseInt(prixUnit.innerText)
    


// Bouton pour incrementer
    btnPlus.addEventListener("click", function(){
        qty++
        quantite.innerText=qty;
        tot.innerText = price*qty;
        somme()
        
    })
// Bouton pour décrementer
    btnMoins.addEventListener("click",function(){
        if (qty>0){
        qty--
        quantite.innerText=qty
        tot.innerText=price*qty}  
        somme()
    })
        
    
// Bouton pour supprimer du panier
deleteBtn.addEventListener("click",function(){
    if (qty=0)
    qty--
    quantite.innerText=qty
    tot.innerText= price*qty
    somme()
})
    
}
// // TOTAL PRICE
function somme() {
    let sum = 0;
    let soustotal= document.getElementsByClassName("price");
    for (let i = 0; i < soustotal.length; i++){
        let totaux = parseInt(soustotal[i].innerText)
        sum = sum+totaux
    }
totalPrice.innerHTML=sum

}