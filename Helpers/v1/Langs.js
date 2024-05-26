
const flags = {
  1: "🇬🇲 ",
  2: "🇸🇳 ",
  3: "🇬🇼 "
}

const flag = {
  "The Gambia": "🇬🇲 ",
  "Senegal": "🇸🇳 ",
  "Guinea-Bissau": "🇬🇼 "
}

const intFlag = {
  "en": "🇬🇧 ",
  "fr": "🇫🇷 ",
  "pt": "🇵🇹 "
}

const intCtyLangs = {
  "en": "English",
  "fr": "French",
  "pt": "Portuguese"
}

const countryCode = {
  "The Gambia": { "label": "+220", "value": "220" },
  "Senegal": { "label": "+221", "value": "221" },
  "Guinea-Bissau": { "label": "+245", "value": "245" }
}

const countries = [{ id: 1, name: "The Gambia", language: "English", ISO_currency: "GMD", currency: "Dalasi", tribes: [{ name: "Mandinka_GMB", spelling: "Mandinka", population_rank: 1 }, { name: "Fula_GMB", spelling: "Pulaar", population_rank: 2 }, { name: "Wollof_GMB", spelling: "Wollof", population_rank: 3 }, { name: "Jola_GMB", spelling: "Jola", population_rank: 4 }, { name: "Serrehule_GMB", spelling: "Serrehule", population_rank: 5 }] },
{ id: 2, name: "Senegal", language: "French", ISO_currency: "XOF", currency: "CFA franc", tribes: [{ name: "Wollof_SEN", spelling: "Wolof", population_rank: 1 }, { name: "Fula_SEN", spelling: "Pulaar", population_rank: 2 }, { name: "Serere_SEN", spelling: "Serere", population_rank: 3 }, { name: "Diola_SEN", spelling: "Diola", population_rank: 4 }, { name: "Mandinka_SEN", spelling: "Mandinka", population_rank: 5 }] },
{ id: 3, name: "Guinea-Bissau", language: "Portuguese", ISO_currency: "XOF", currency: "CFA franc", tribes: [{ name: "Fulani_GNB", spelling: "Pulaar", population_rank: 1 }, { name: "Balanta_GNB", spelling: "Balanta", population_rank: 2 }, { name: "Mandinka_GNB", spelling: "Mandinka", population_rank: 3 }, { name: "Papel_GNB", spelling: "Papel", population_rank: 4 }, { name: "Manjaco_GNB", spelling: "Manjac", population_rank: 5 }] }];

export { flags, flag, countryCode, intFlag, intCtyLangs, countries };