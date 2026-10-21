# FTS Aluminium

Site vitrine multipage de FTS Aluminium, entreprise basée à Riviera Faya, Abidjan, spécialisée en menuiserie aluminium, vitrerie, ferronnerie, inox et travaux de bâtiment.

## Pages du site

- `index.html` : accueil et présentation synthétique de l’entreprise.
- `services.html` : prestations proposées.
- `entreprise.html` : présentation de FTS Aluminium.
- `realisations.html` : accès aux vidéos de réalisations publiées sur Facebook.
- `contact.html` : coordonnées et liens de contact.

## Organisation des fichiers

```text
.
├── index.html
├── services.html
├── entreprise.html
├── realisations.html
├── contact.html
├── assets/
│   ├── css/
│   │   └── style.css
│   └── js/
│       └── main.js
└── images/
    ├── logo.png
    ├── photo_Accueil.jpeg
    └── photo_Entreprise.jpeg
```

## Ouvrir le site

Le site est statique : il n’a pas besoin d’installation ni de serveur applicatif.

1. Ouvrir le dossier du projet dans Visual Studio Code.
2. Ouvrir `index.html` directement dans un navigateur, ou utiliser une extension de serveur local comme Live Server.

Une connexion Internet est nécessaire pour charger les polices Google Fonts et ouvrir les vidéos Facebook.

## Technologies

- HTML5 pour les pages.
- CSS3 dans `assets/css/style.css` pour la mise en page responsive et les styles communs.
- JavaScript dans `assets/js/main.js` pour le menu mobile, l’année du pied de page et l’indication de la page active.

## Coordonnées affichées

- Adresse : Riviera Faya, Abidjan, Côte d’Ivoire.
- Téléphone fixe : +225 27 22 24 85 15.
- Mobile / WhatsApp : +225 07 08 82 04 42.
- Téléphone mobile : +225 07 07 39 56 73.
- E-mail : contactfrikiri@gmail.com.
- Facebook : [FTS Aluminium](https://www.facebook.com/FTSaluminium/).

Les vidéos de la page Réalisations s’ouvrent sur Facebook à partir des liens fournis par l’entreprise.

## Modifications courantes

- Modifier le texte et la navigation dans les fichiers HTML concernés.
- Remplacer ou ajouter des images dans `images/`, puis mettre à jour leurs chemins dans les pages HTML.
- Modifier les styles communs dans `assets/css/style.css`.
- Modifier les interactions du menu et l’année dans `assets/js/main.js`.
- Pour remplacer une vidéo de Réalisations, modifier l’URL Facebook de la vignette correspondante dans `realisations.html`.
