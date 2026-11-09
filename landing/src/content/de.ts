/** German copy. Wording follows the app's own de-DE strings and App Store
 *  description (informal "du"). German searchers mostly use the English term:
 *  Google autocomplete on 2026-11-09 returned "no spend challenge deutsch",
 *  "… vorlage", "… pdf" and "… app", while "kaufstopp" returned almost
 *  nothing and "sparchallenge" means saving fixed amounts, which the app
 *  does not do. Prices are left out: they vary by storefront. */

import type { Content, Guide } from "./types";

const GUIDES: Guide[] = [
  {
    slug: "no-spend-challenge",
    published: "2026-11-09",
    updated: "2026-11-09",
    title: "No-Spend-Challenge: Regeln, kostenlose Vorlage und Tracker",
    metaTitle: "No-Spend-Challenge auf Deutsch: Regeln und Vorlage (PDF)",
    description:
      "Bei der No-Spend-Challenge zählst du Tage ohne unnötige Ausgaben. So legst du die Regeln fest, hältst durch und trackst jeden Tag, mit kostenloser PDF-Vorlage.",
    intro:
      "Bei einer No-Spend-Challenge zählst du die Tage, an denen du nichts ausgibst, außer für das, was du vorher als notwendig festgelegt hast. Sie funktioniert, wenn die Regeln vor dem ersten Tag feststehen, jeder Tag eingetragen wird und ein Ausrutscher nicht das Ende ist.",
    sections: [
      {
        h: "Was zählt und was nicht",
        p: [
          "Lege vor dem Start fest, was ausgenommen ist. Fast alle nehmen Miete, Rechnungen, den Wocheneinkauf, den Weg zur Arbeit und Medikamente aus. Alles andere zählt: der Coffee to go, die Lieferung am Abend, das Teil, das spät abends im Warenkorb landet.",
          "Schreib deine Regel in einen einzigen Satz, den du in einer Sekunde prüfen kannst. „Miete, Rechnungen und Lebensmittel zählen nicht“ ist eine Regel. „Nur Notwendiges“ ist keine, denn darüber verhandelst du an der Kasse mit dir selbst.",
        ],
      },
      {
        h: "Wie lange?",
        p: [
          "Ein Monat ist für den ersten Versuch ideal, und der Januar bietet sich an: Die Dezember-Ausgaben sind noch auf dem Konto sichtbar, und viele versuchen dasselbe. Wer lieber ohne festes Enddatum startet, macht daraus eine Serie und versucht, die eigene längste Serie zu schlagen.",
        ],
      },
      {
        h: "Jeden Tag eintragen, auch die schlechten",
        p: [
          "Hake jeden Tag ab, an dem du durchgehalten hast, und lass den Tag frei, an dem du etwas ausgegeben hast. Am Monatsende zeigen dir die Lücken genau, welche Tage und Situationen dich erwischt haben.",
          "Das klappt am besten, wenn das Eintragen nur einen Handgriff braucht, jeden Abend zur gleichen Zeit. Das kann ein Stift und die Vorlage unten sein oder ein Widget auf dem Home-Bildschirm.",
        ],
      },
      {
        h: "Ein Ausrutscher ist kein Scheitern",
        p: [
          "Ein Tag mit Ausgabe beendet die Challenge nicht. Trag ihn ehrlich ein und mach am selben Tag weiter. Ein Monat mit 26 abgehakten Tagen ist ein besseres Ergebnis als einer, den du am 9. abgebrochen hast.",
          "FrugalStreak ist genau dafür gebaut: Die aktuelle Serie beginnt neu, aber deine längste Serie und deine Abzeichen bleiben erhalten. Ehrlichkeit kostet dich nichts.",
        ],
      },
      {
        h: "Papier oder App?",
        p: [
          "Die PDF-Vorlage hat für jeden Monat 2027 eine Seite mit einem Kästchen pro Tag und einer Zeile für deine Regel. Am Kühlschrank funktioniert sie gut.",
          "FrugalStreak ist dieselbe Idee auf dem iPhone: Ein Tipp auf das Widget trägt den Tag ein, der Kalender zeigt die letzten fünf Wochen, und eine optionale Erinnerung am Abend kommt nur an Tagen, die du noch nicht eingetragen hast. Kein Konto, keine Bankverbindung.",
        ],
      },
    ],
    faq: [
      {
        q: "Was ist eine No-Spend-Challenge?",
        a: "Eine Challenge, bei der du für eine bestimmte Zeit nur für vorher festgelegte notwendige Dinge Geld ausgibst, etwa Miete, Rechnungen und Lebensmittel. Gezählt werden die Tage, an denen du durchhältst.",
      },
      {
        q: "Ist die Vorlage kostenlos?",
        a: "Ja. Das PDF lässt sich direkt herunterladen, ohne Anmeldung und ohne E-Mail-Adresse.",
      },
    ],
    takeaway:
      "Regel in einem Satz, jeden Abend ein Häkchen, und nach einem Ausrutscher am selben Tag weitermachen.",
    related: [],
    printable: {
      file: "printables/no-spend-calendar-2027-de.pdf",
      label: "Kostenlose No-Spend-Vorlage 2027 herunterladen (PDF)",
    },
  },
];

export const de: Content = {
  lang: "de",
  ogLocale: "de_DE",
  langName: "Deutsch",
  prefix: "de/",
  updated: "2026-11-09",

  app: { tagline: "Kein Budget. Nur eine Serie.", price: "Kostenlos" },
  meta: {
    title: "No-Spend-Challenge-App mit Widget und Kalender – FrugalStreak",
    description:
      "Trag No-Spend-Tage mit einem Tipp auf das Home-Screen-Widget ein und sieh sie im Kalender. Kein Budget, keine Bankverbindung. Kostenlos für iPhone und iPad.",
  },
  hero: {
    h1: "Ein No-Spend-Tracker, der nur eine Serie ist",
    sub:
      "Tippe an jedem Tag ohne Impulskauf auf das Widget auf deinem Home-Bildschirm und sieh zu, wie sich der Kalender füllt. Kein Budget zum Einrichten, kein Bankkonto zum Verbinden.",
    shot: {
      file: "hero",
      alt: "Das große Kalender-Widget und das kleine Serien-Widget von FrugalStreak auf einem iPhone, beide mit einer No-Spend-Serie von 100 Tagen",
      caption: "",
    },
  },
  gallery: {
    h: "So sieht es aus",
    shots: [
      {
        file: "streak",
        alt: "Der Hauptbildschirm von FrugalStreak: eine Serie von 100 Tagen, die eigene Regel, eine Taste zum Eintragen und der Kalender der letzten fünf Wochen",
        caption: "Deine Serie, deine Regel und die letzten fünf Wochen",
      },
      {
        file: "widget-style",
        alt: "Der Bildschirm für den Widget-Stil mit heller und dunkler Vorschau und zehn Farben",
        caption: "Widget-Farbe wählen, hell oder dunkel",
      },
      {
        file: "archive",
        alt: "Meilenstein-Abzeichen und eine Liste früherer Serien mit Länge und Datum",
        caption: "Abzeichen, die bleiben, und jede frühere Serie",
      },
    ],
  },
  features: [
    {
      h: "Eintragen direkt vom Home-Bildschirm",
      p: "Das ganze Widget ist eine Taste. Ein Tipp, und der heutige Tag ist eingetragen, ohne dass FrugalStreak sich öffnet. Auch über das Kontrollzentrum und mit Siri.",
    },
    {
      h: "Du entscheidest, was zählt",
      p: "Bei der Einrichtung formulierst du deine eigene Regel in einem Satz, zum Beispiel ohne Miete, Rechnungen und Wocheneinkauf. Nichts wird kategorisiert oder bewertet, also kein Streit mit dir selbst um 21 Uhr, ob ein Kaffee zählt.",
    },
    {
      h: "Der Kalender zeigt deine Serie",
      p: "Neben dem Zähler siehst du die letzten fünf Wochen. Gestern vergessen? Tippe den Tag im Kalender an.",
    },
    {
      h: "Erinnerung nur, wenn nötig",
      p: "Die optionale Erinnerung am Abend kommt nur an Tagen, die du noch nicht eingetragen hast, mit einer Taste zum Eintragen direkt in der Mitteilung. Abends zeigen App und Widgets außerdem, wenn der heutige Tag noch offen ist.",
    },
    {
      h: "Abzeichen nach 3, 7, 14, 30 und 100 Tagen",
      p: "Sie zählen nach deiner längsten Serie, nicht nach der aktuellen. Ein Neustart nimmt dir also nie ein Abzeichen weg.",
    },
    {
      h: "Ehrlichkeit kostet dich nichts",
      p: "Heute etwas ausgegeben? Die aktuelle Serie beginnt neu, deine längste Serie bleibt gespeichert und sichtbar. Eine App, die dich für Ehrlichkeit bestraft, würde dir nur beibringen, sie anzulügen.",
    },
    {
      h: "Kein Konto, keine Bankverbindung",
      p: "Keine Registrierung und kein Login. Deine Serie bleibt auf deinem Gerät, und die App funktioniert auch offline. FrugalStreak kann nichts über deine echten Finanzen auslesen.",
    },
    {
      h: "iPhone, iPad und iPhone Duo",
      p: "Auf dem iPad und dem aufgeklappten iPhone Duo steht der Kalender neben deiner Serie, und das Layout passt sich beim Auf- und Zuklappen an. Die App gibt es auf Deutsch, Englisch, Französisch und Spanisch.",
    },
  ],
  pro: {
    h: "FrugalStreak freigeschaltet",
    p: "Alles oben ist kostenlos und zeitlich unbegrenzt. Ein einmaliger Kauf fügt Extras hinzu:",
    points: [
      "Dein vollständiges Serienarchiv mit Länge und Daten jeder Serie",
      "Das Kalender-Widget in mittlerer und großer Größe, groß mit neun Wochen auf einen Blick",
      "Zusätzliche Widget-Farben, darunter Mono",
      "Jeden früheren Tag im Kalender nachtragen",
      "Kein Werbebanner",
      "Heute und gestern eintragen, der Zähler, der Kalender und die Abzeichen bleiben kostenlos",
    ],
    pricing: "Einmal kaufen, kein Abo.",
  },
  faq: [
    {
      q: "Ist FrugalStreak kostenlos?",
      a: "Ja. Heute und gestern eintragen, der Serienzähler, der Kalender, die Abzeichen und die Erinnerung am Abend sind kostenlos und zeitlich unbegrenzt. Ein optionaler einmaliger Kauf fügt das Serienarchiv, die größeren Kalender-Widgets, Widget-Farben und das Nachtragen früherer Tage hinzu und entfernt das kleine Werbebanner.",
    },
    {
      q: "Muss ich mein Bankkonto verbinden?",
      a: "Nein, und das geht auch gar nicht. FrugalStreak hat keine Bankanbindung, keinen Import und keinen Server. Die einzige Eingabe ist deine Entscheidung, ob heute ein No-Spend-Tag war.",
    },
    {
      q: "Was zählt als Ausgabe?",
      a: "Das bestimmst du. Bei der Einrichtung schreibst du deine Regel in einem Satz auf. Die meisten nehmen Miete, Rechnungen und Lebensmittel aus und zählen alles andere.",
    },
    {
      q: "Muss ich die App jeden Tag öffnen?",
      a: "Nein. Ein Tipp auf das Widget trägt den Tag ein, ohne dass sich die App öffnet. Auch über das Kontrollzentrum oder mit Siri.",
    },
    {
      q: "Gibt es ein Abo?",
      a: "Nein. Es gibt einen optionalen einmaligen Kauf, der dir gehört. Nichts verlängert sich automatisch.",
    },
    {
      q: "Funktioniert die App offline?",
      a: "Ja. Alles außer dem optionalen Kauf funktioniert ohne Internetverbindung, weil deine Serie auf dem Gerät gespeichert ist.",
    },
  ],
  guides: GUIDES,

  ui: {
    navFeatures: "Funktionen",
    navGuides: "Ratgeber",
    navFaq: "Fragen",
    download: "Laden im App Store",
    downloadAria: "{app} im App Store laden",
    metaLine: "Kostenlos · iPhone und iPad · Kein Konto · Offline",
    featuresH: "Was die App macht",
    guidesH: "Ratgeber",
    guidesLede: "Regeln, Vorlage und wie du nach einem Ausrutscher weitermachst.",
    faqH: "Häufige Fragen",
    guideFaqH: "Fragen dazu",
    readNext: "Weiterlesen",
    callout:
      "zählt das als eine Zahl. Tippe an jedem Tag ohne Ausgabe auf das Widget, ohne Budget und ohne Bankverbindung.",
    ctaH: "Starte heute deine Serie",
    ctaLede:
      "Regel festlegen, Widget auf den Home-Bildschirm, heute Abend tippen.",
    home: "Start",
    privacy: "Datenschutz (Englisch)",
    terms: "Nutzungsbedingungen (Englisch)",
    support: "Support",
    madeBy: "{app} wird von {author} entwickelt.",
    notAffiliated:
      "Nicht mit Apple Inc. verbunden. App Store ist eine Marke der Apple Inc.",
    moreApps: "Weitere Apps von Neil",
    languages: "Sprache",
    breadcrumb: "Navigationspfad",
    updated: "Aktualisiert",
  },
};
