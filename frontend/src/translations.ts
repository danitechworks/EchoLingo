export const translations = {
  en: {
    randomQuote: 'Random Quote',
    loading: 'Loading...',
    searchAuthor: 'Search by Author',
    searchTopic: 'Search by Topic',
    selectLanguage: 'Select language',
    lightMode: 'Light',
    darkMode: 'Dark',
    tagline: 'Words carry meaning beyond borders',
    quoteError: 'Could not load a quote. Please try again.',
    translationError: 'Could not translate the quote. Please try again.'
  },
  sv: {
    randomQuote: 'Slumpmässigt citat',
    loading: 'Laddar...',
    searchAuthor: 'Sök efter författare',
    searchTopic: 'Sök efter ämne',
    selectLanguage: 'Välj språk',
    lightMode: 'Ljust',
    darkMode: 'Mörkt',
    tagline: 'Ord bär mening över gränser',
    quoteError: 'Kunde inte hämta ett citat. Försök igen.',
    translationError: 'Kunde inte översätta citatet. Försök igen.'
  },
  es: {
    randomQuote: 'Cita aleatoria',
    loading: 'Cargando...',
    searchAuthor: 'Buscar por autor',
    searchTopic: 'Buscar por tema',
    selectLanguage: 'Seleccionar idioma',
    lightMode: 'Claro',
    darkMode: 'Oscuro',
    tagline: 'Las palabras transmiten significado más allá de las fronteras',
    quoteError: 'No se pudo cargar una cita. Inténtalo de nuevo.',
    translationError: 'No se pudo traducir la cita. Inténtalo de nuevo.'
  },
  fr: {
    randomQuote: 'Citation aléatoire',
    loading: 'Chargement...',
    searchAuthor: 'Rechercher par auteur',
    searchTopic: 'Rechercher par thème',
    selectLanguage: 'Choisir la langue',
    lightMode: 'Clair',
    darkMode: 'Sombre',
    tagline: 'Les mots portent du sens au-delà des frontières',
    quoteError: 'Impossible de charger une citation. Réessayez.',
    translationError: 'Impossible de traduire la citation. Réessayez.'
  },
  de: {
    randomQuote: 'Zufälliges Zitat',
    loading: 'Wird geladen...',
    searchAuthor: 'Nach Autor suchen',
    searchTopic: 'Nach Thema suchen',
    selectLanguage: 'Sprache auswählen',
    lightMode: 'Hell',
    darkMode: 'Dunkel',
    tagline: 'Worte tragen Bedeutung über Grenzen hinweg',
    quoteError: 'Ein Zitat konnte nicht geladen werden. Bitte erneut versuchen.',
    translationError: 'Das Zitat konnte nicht übersetzt werden. Bitte erneut versuchen.'
  }
};

export type Language = keyof typeof translations;
export type InterfaceText = typeof translations.en;