# Panier d'achat — manipulation du DOM

Exercice réalisé pendant la formation GoMyCode (« Workshop DOM ») : rendre interactive une page de panier d'achat en JavaScript natif.

## Ce que fait le projet

Le panier contient trois produits (baskets, chaussettes, sac), chacun avec son prix unitaire :

- les icônes **+** et **−** augmentent ou diminuent la quantité (jamais en dessous de 0) ;
- le **prix total** est recalculé à chaque changement ;
- l'icône **corbeille** retire le produit de la page et met le total à jour ;
- l'icône **cœur** marque le produit comme favori (il passe en rouge).

## Notions travaillées

- Sélection d'éléments (`querySelector`, `querySelectorAll`)
- Écouteurs d'événements (`addEventListener('click', ...)`)
- Modification du contenu (`textContent`) et des classes (`classList.toggle`)
- Suppression d'éléments du DOM (`remove()`)
- Calcul d'un total à partir des données affichées

## Stack

HTML5, CSS3, JavaScript (ES6), Bootstrap 5.1 et Font Awesome 6 (chargés par CDN).

## Lancer le projet

Les fichiers sont référencés avec des chemins absolus (`/style/style.css`, `/js/script.js`, `/assets/...`). Il faut donc servir le dossier du dépôt à la racine d'un serveur local, par exemple :

- avec l'extension **Live Server** de VS Code, en ouvrant le dossier du dépôt ;
- ou avec Python : `python -m http.server 8000`, puis ouvrir http://localhost:8000.

Ouvrir `index.html` par double-clic n'appliquera ni les styles ni le script.
