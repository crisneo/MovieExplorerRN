const texts: any = {
  'en-EN': {
    overview: 'Overview',
    language: 'Language',
    releaseDate: 'Release Date',
    viewMore: 'View More',
    specifyText: 'Please specify a text to search movies!',
    searchMovie: 'Search Movie',
    search: 'search',
    about: 'about',
  },
  'es-ES': {
    overview: 'Resumen',
    language: 'Idioma',
    releaseDate: 'Fecha de estreno',
    viewMore: 'Ver Mas',
    specifyText: 'Ingrese un texto para buscar!',
    searchMovie: 'Buscar pelicula',
    search: 'buscar',
    about: 'acerca de',
  },
};

const translate = (lang: string, key: string) => {
  return texts[lang][key];
};

export default translate;
