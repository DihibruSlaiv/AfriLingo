
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

const countries = [{ id: 1, name: "The Gambia", language: "English", ISO_currency: "GMD", currency: "Dalasi", tribes: [{ name: "English", spelling: "English", population_rank: 1 },{ name: "Mandinka_GMB", spelling: "Mandinka", population_rank: 2 }, { name: "Fula_GMB", spelling: "Pulaar", population_rank: 3 }, { name: "Wollof_GMB", spelling: "Wollof", population_rank: 4 }, { name: "Jola_GMB", spelling: "Jola", population_rank: 5 }, { name: "Serrehule_GMB", spelling: "Serrehule", population_rank: 6 }] },
{ id: 2, name: "Senegal", language: "French", ISO_currency: "XOF", currency: "CFA franc", tribes: [{ name: "French", spelling: "French", population_rank: 1 },{ name: "Wollof_SEN", spelling: "Wolof", population_rank: 2 }, { name: "Fula_SEN", spelling: "Pulaar", population_rank: 3 }, { name: "Serere_SEN", spelling: "Serere", population_rank: 4 }, { name: "Diola_SEN", spelling: "Diola", population_rank: 5 }, { name: "Mandinka_SEN", spelling: "Mandinka", population_rank: 6 }] },
{ id: 3, name: "Guinea-Bissau", language: "Portuguese", ISO_currency: "XOF", currency: "CFA franc", tribes: [{ name: "Portuguese", spelling: "Portuguese", population_rank: 1 },{ name: "Fulani_GNB", spelling: "Pulaar", population_rank: 2 }, { name: "Balanta_GNB", spelling: "Balanta", population_rank: 3 }, { name: "Mandinka_GNB", spelling: "Mandinka", population_rank: 4 }, { name: "Papel_GNB", spelling: "Papel", population_rank: 5 }, { name: "Manjaco_GNB", spelling: "Manjac", population_rank: 6 }] }];

export { flags, flag, countryCode, intFlag, intCtyLangs, countries };