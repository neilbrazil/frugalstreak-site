/** French copy. Wording follows the app's own fr-FR strings and App Store
 *  description ("vous"). French searchers use the English term too: Google
 *  autocomplete on 2026-11-09 returned "no spend challenge c'est quoi",
 *  "… pdf" and "… bullet journal", plus "mois sans achat" and "défi janvier
 *  sans achat". "Défi épargne" means saving fixed amounts, which the app does
 *  not do. Prices are left out: they vary by storefront. */

import type { Content, Guide } from "./types";

const GUIDES: Guide[] = [
  {
    slug: "no-spend-challenge",
    published: "2026-11-09",
    updated: "2026-11-09",
    title: "No spend challenge : c'est quoi, et comment tenir un mois sans achat",
    metaTitle: "No spend challenge : c'est quoi ? Règles et calendrier PDF",
    description:
      "Le no spend challenge consiste à compter les jours sans dépense superflue. Les règles, comment tenir un mois sans achat, et un calendrier PDF gratuit.",
    intro:
      "Un no spend challenge, ou défi zéro dépense, consiste à compter les jours où vous ne dépensez rien en dehors de ce que vous avez décidé à l'avance comme essentiel. Il fonctionne quand les règles sont écrites avant le premier jour, que chaque journée est notée et qu'un écart n'y met pas fin.",
    sections: [
      {
        h: "Ce qui compte et ce qui ne compte pas",
        p: [
          "Décidez avant de commencer ce qui est exclu. Presque tout le monde exclut le loyer, les factures, les courses de la semaine, le trajet pour aller au travail et les médicaments. Tout le reste compte : le café à emporter, la livraison du soir, l'article ajouté au panier à 23 h.",
          "Écrivez votre règle en une seule phrase que vous pouvez vérifier en une seconde. « Le loyer, les factures et les courses ne comptent pas » est une règle. « Seulement le nécessaire » n'en est pas une, car vous la renégocierez à la caisse.",
        ],
      },
      {
        h: "Combien de temps ?",
        p: [
          "Un mois est idéal pour un premier essai, et janvier s'y prête bien : les dépenses de décembre sont encore visibles sur le compte, et beaucoup de gens tentent la même chose. Si vous préférez ne pas fixer de date de fin, faites-en une série et essayez de battre votre record.",
        ],
      },
      {
        h: "Notez chaque jour, même les mauvais",
        p: [
          "Cochez chaque journée tenue et laissez vide celle où vous avez dépensé. À la fin du mois, les cases vides montrent exactement quels jours et quelles situations vous ont fait craquer.",
          "Le plus simple est que noter la journée ne demande qu'un geste, chaque soir au même moment : un stylo et le calendrier ci-dessous, ou un widget sur l'écran d'accueil.",
        ],
      },
      {
        h: "Un écart n'est pas un échec",
        p: [
          "Une journée avec une dépense ne met pas fin au défi. Notez-la honnêtement et repartez le jour même. Un mois avec 26 jours cochés vaut bien mieux qu'un mois abandonné le 9.",
          "FrugalStreak est conçue pour cela : la série en cours repart de zéro, mais votre meilleure série et vos badges sont conservés. L'honnêteté ne vous coûte rien.",
        ],
      },
      {
        h: "Papier ou application ?",
        p: [
          "Le calendrier PDF propose une page par mois de 2027, avec une case par jour et une ligne pour votre règle. Sur le frigo, il fonctionne très bien.",
          "FrugalStreak, c'est la même idée sur iPhone : un geste sur le widget enregistre la journée, le calendrier montre les cinq dernières semaines, et un rappel du soir facultatif n'arrive que les jours non enregistrés. Aucun compte, aucune connexion bancaire.",
        ],
      },
    ],
    faq: [
      {
        q: "C'est quoi, un no spend challenge ?",
        a: "Un défi où, pendant une période donnée, vous ne dépensez que pour ce que vous avez décidé à l'avance comme essentiel, comme le loyer, les factures et les courses. On compte les jours où vous tenez.",
      },
      {
        q: "Le calendrier est-il gratuit ?",
        a: "Oui. Le PDF se télécharge directement, sans inscription et sans adresse e-mail.",
      },
    ],
    takeaway:
      "Une règle en une phrase, une case cochée chaque soir, et après un écart, on repart le jour même.",
    related: [],
    printable: {
      file: "printables/no-spend-calendar-2027-fr.pdf",
      label: "Télécharger le calendrier zéro dépense 2027 (PDF gratuit)",
    },
  },
];

export const fr: Content = {
  lang: "fr",
  ogLocale: "fr_FR",
  langName: "Français",
  prefix: "fr/",
  updated: "2026-11-09",

  app: { tagline: "Pas de budget. Juste une série.", price: "Gratuite" },
  meta: {
    title: "Défi zéro dépense : appli avec widget et calendrier – FrugalStreak",
    description:
      "Enregistrez vos jours sans dépense d'un geste sur le widget et voyez-les sur un calendrier. Sans budget ni banque. Gratuite sur iPhone et iPad.",
  },
  hero: {
    h1: "Un suivi zéro dépense qui n'est qu'une série",
    sub:
      "Touchez le widget de l'écran d'accueil chaque jour sans achat impulsif, et regardez le calendrier se remplir. Aucun budget à créer, aucun compte bancaire à connecter.",
    shot: {
      file: "hero",
      alt: "Le grand widget calendrier et le petit widget série de FrugalStreak sur un iPhone, avec une série de 100 jours sans dépense",
      caption: "",
    },
  },
  gallery: {
    h: "En images",
    shots: [
      {
        file: "streak",
        alt: "L'écran principal de FrugalStreak : une série de 100 jours, la règle choisie, un bouton pour enregistrer et le calendrier des cinq dernières semaines",
        caption: "Votre série, votre règle et les cinq dernières semaines",
      },
      {
        file: "widget-style",
        alt: "L'écran de style du widget avec un aperçu clair et sombre et dix couleurs",
        caption: "Choisissez la couleur du widget, clair ou sombre",
      },
      {
        file: "archive",
        alt: "Les badges d'étape et la liste des séries passées avec leur durée et leurs dates",
        caption: "Des badges conservés et toutes vos séries passées",
      },
    ],
  },
  features: [
    {
      h: "Enregistrez depuis l'écran d'accueil",
      p: "Tout le widget est un bouton. Un geste et la journée est enregistrée, sans ouvrir FrugalStreak. Fonctionne aussi depuis le centre de contrôle et avec Siri.",
    },
    {
      h: "Vous décidez de ce qui compte",
      p: "Lors de la configuration, vous écrivez votre règle en une phrase, par exemple sans le loyer, les factures et les courses. Rien n'est catégorisé ni noté : pas de débat avec vous-même à 21 h pour savoir si un café compte.",
    },
    {
      h: "Le calendrier montre votre série",
      p: "Les cinq dernières semaines s'affichent à côté du compteur. Vous avez oublié hier ? Touchez-le dans le calendrier.",
    },
    {
      h: "Un rappel seulement quand il le faut",
      p: "Le rappel du soir facultatif n'arrive que les jours non enregistrés, avec un bouton pour enregistrer depuis la notification. Le soir, l'app et les widgets indiquent aussi quand la journée n'est pas encore enregistrée.",
    },
    {
      h: "Des badges à 3, 7, 14, 30 et 100 jours",
      p: "Ils dépendent de votre meilleure série, pas de la série en cours : repartir de zéro ne vous en retire jamais un.",
    },
    {
      h: "L'honnêteté ne vous coûte rien",
      p: "Vous avez dépensé aujourd'hui ? La série en cours repart de zéro, votre meilleure série reste conservée et affichée. Une app qui vous punirait de dire la vérité ne ferait que vous apprendre à lui mentir.",
    },
    {
      h: "Aucun compte, aucune banque",
      p: "Ni inscription ni connexion. Votre série reste sur votre appareil et l'app fonctionne hors ligne. FrugalStreak ne peut rien lire de vos finances réelles.",
    },
    {
      h: "iPhone, iPad et iPhone Duo",
      p: "Sur iPad et sur l'iPhone Duo déplié, le calendrier s'affiche à côté de votre série, et la mise en page suit quand vous pliez et dépliez. L'app est disponible en français, anglais, allemand et espagnol.",
    },
  ],
  pro: {
    h: "FrugalStreak déverrouillée",
    p: "Tout ce qui précède est gratuit et sans limite de durée. Un achat unique ajoute :",
    points: [
      "L'archive complète de vos séries, avec leur durée et leurs dates",
      "Le widget calendrier en taille moyenne et grande, avec neuf semaines d'un coup d'œil",
      "Des couleurs de widget personnalisées, dont Mono",
      "L'enregistrement de n'importe quel jour passé dans le calendrier",
      "Plus de bannière publicitaire",
      "Aujourd'hui et hier, le compteur, le calendrier et les badges restent gratuits",
    ],
    pricing: "Un seul paiement, sans abonnement.",
  },
  faq: [
    {
      q: "FrugalStreak est-elle gratuite ?",
      a: "Oui. Enregistrer aujourd'hui et hier, le compteur de série, le calendrier, les badges et le rappel du soir sont gratuits et sans limite de durée. Un achat unique facultatif ajoute l'archive des séries, les grands widgets calendrier, des couleurs de widget et l'enregistrement des jours passés, et retire la petite bannière publicitaire.",
    },
    {
      q: "Dois-je connecter mon compte bancaire ?",
      a: "Non, et ce n'est pas possible. FrugalStreak n'a ni connexion bancaire, ni import, ni serveur. La seule information, c'est votre décision : aujourd'hui était-il un jour sans dépense ?",
    },
    {
      q: "Qu'est-ce qui compte comme une dépense ?",
      a: "C'est vous qui décidez. Lors de la configuration, vous écrivez votre règle en une phrase. La plupart des gens excluent le loyer, les factures et les courses, et comptent tout le reste.",
    },
    {
      q: "Dois-je ouvrir l'app tous les jours ?",
      a: "Non. Un geste sur le widget enregistre la journée sans ouvrir l'app. Le centre de contrôle et Siri fonctionnent aussi.",
    },
    {
      q: "Y a-t-il un abonnement ?",
      a: "Non. Il y a un achat unique facultatif, qui vous appartient. Rien ne se renouvelle.",
    },
    {
      q: "Fonctionne-t-elle hors ligne ?",
      a: "Oui. Tout sauf l'achat facultatif fonctionne sans réseau, car votre série est stockée sur l'appareil.",
    },
  ],
  guides: GUIDES,

  ui: {
    navFeatures: "Fonctions",
    navGuides: "Guides",
    navFaq: "Questions",
    download: "Télécharger dans l'App Store",
    downloadAria: "Télécharger {app} dans l'App Store",
    metaLine: "Gratuite · iPhone et iPad · Sans compte · Hors ligne",
    featuresH: "Ce que fait l'app",
    guidesH: "Guides",
    guidesLede: "Les règles, le calendrier et comment repartir après un écart.",
    faqH: "Questions fréquentes",
    guideFaqH: "Questions sur ce sujet",
    readNext: "À lire ensuite",
    callout:
      "compte tout cela en un seul chiffre. Touchez le widget chaque jour sans dépense, sans budget ni connexion bancaire.",
    ctaH: "Commencez votre série aujourd'hui",
    ctaLede:
      "Choisissez votre règle, placez le widget sur l'écran d'accueil et touchez-le ce soir.",
    home: "Accueil",
    privacy: "Confidentialité (anglais)",
    terms: "Conditions d'utilisation (anglais)",
    support: "Assistance",
    madeBy: "{app} est développée par {author}.",
    notAffiliated:
      "Sans lien avec Apple Inc. App Store est une marque d'Apple Inc.",
    moreApps: "Autres apps de Neil",
    languages: "Langue",
    breadcrumb: "Fil d'Ariane",
    updated: "Mis à jour le",
  },
};
