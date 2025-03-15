// Créer des produits
const Produit1 = new Produit( "B1", "Baskets","100")
console.log(Produit1) 
const Produit2 = new Produit( "S1", "Socks","20")
console.log(Produit2) 
const Produit3 = new Produit( "Bg1", "Bag","50")
console.log(Produit3) 

// Créer un panier d'achat
const panier = new Panier();
//ajouter un article au panier
panier.ajouterArticle(Produit1,2)
panier.ajouterArticle(Produit2,2)
panier.ajouterArticle(Produit3,5)
console.log(panier)

//Total du panier
console.log(panier.calculerTotal()+"$")

//Afficher contenu du panier
console.log(panier.afficherPanier())

// Supprimer un article du panier
panier.supprimerArticle("Baskets")
console.log(panier)