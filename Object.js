class Produit{constructor(id, nom, prix){
    this.id = id;
    this.nom = nom;
    this.prix = prix;
    }
}

class ArticlePanier {constructor(produit, quantite){
    this.produit = produit;
    this.quantite = quantite;
    }

    // Calcul du prix total de l'élément du panier
    getTotal(){
        return this.produit.prix * this.quantite
    } 
}


// Classe représentant le panier d'achat
class Panier {
    constructor() {
        this.articles = []; // Tableau d'articles dans le panier
    }

    // Ajoute un article au panier
    ajouterArticle(produit, quantite) {
        this.articles.push(new ArticlePanier(produit, quantite));
    }

    // Supprime un article du panier en fonction du nom du produit
    supprimerArticle(nomProduit) {
        this.articles = this.articles.filter(article => article.produit.nom !== nomProduit);
    }

    // Calcule le total du panier
    calculerTotal() {
        return this.articles.reduce((total, article) => total + article.getTotal(), 0);
    }

    // Affiche le contenu du panier
    afficherPanier() {
        this.articles.forEach(article => {
            console.log(`${article.quantite} x ${article.produit.nom} - ${article.produit.prix}€ = ${article.getTotal()}€`);
        });
        console.log(`Total du panier : ${this.calculerTotal()}€`);
    }
}
