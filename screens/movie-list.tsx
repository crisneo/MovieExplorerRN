import React, {Component} from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  DrawerLayoutAndroid,
  Image,
  TouchableOpacity,
} from 'react-native';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faSlidersH} from '@fortawesome/free-solid-svg-icons';
import {faSearch} from '@fortawesome/free-solid-svg-icons';

import {CardList} from '../components/CardList';
import {getMovies} from '../services/movieService';
import MovieDetails from './movie-details';
import PredFilters from './predefined-filters';
import Config from 'react-native-config';
import translate from '../services/translateService';
import {getData} from '../services/storageService';

const MovieList = ({navigation}: any) => {
  const [movies, setMovies] = React.useState<any[]>([]);
  const [inputText, setInputText] = React.useState<string>('');
  const drawer = React.useRef(null);
  const [drawerPosition, setDrawerPosition] = React.useState<string>('left');
  const [searchText, setSearchText] = React.useState<string>('');
  const [lang, setLang] = React.useState<string>('en-EN');
  const loadLang = async () => {
    const llang = await getData('lang');
    setLang(llang);
  };
  const changeDrawerPosition = () => {
    if (drawerPosition === 'left') {
      setDrawerPosition('right');
    } else {
      setDrawerPosition('left');
    }
  };
  const navigationView = () => (
    <View style={styles.navigationContainer}>
      <PredFilters />
      <Button
        title="Close drawer"
        onPress={() => drawer.current.closeDrawer()}
      />
    </View>
  );
  const getMoviesData = async (input: string) => {
    if (input && input !== '') {
      const res = await getMovies(input);
      var items: any[] = [];
      res.data.results.forEach((element: any) => {
        items.push({
          id: '1',
          title: element.title,
          picture: {
            uri: `${Config.MOVIE_API_BASEURL}${element.poster_path}`,
          },
          content: (
            <MovieDetails
              key={element.id}
              movieInfo={element}
              navigation={navigation}
            />
          ),
        });
      });
      setMovies(items);
    }
  };

  const executeSearch = (text: string) => {
    getMoviesData(text);
  };
  React.useEffect(() => {
    loadLang();
  }, []);
  return (
    <>
      <View style={styles.searchRow}>
        <TouchableOpacity onPress={() => drawer.current.openDrawer()}>
          <FontAwesomeIcon
            icon={faSlidersH}
            style={styles.searchIcon}
            size={25}
          />
        </TouchableOpacity>
        <View style={styles.composedSearchInput}>
          <TextInput
            onChangeText={text => setInputText(text)}
            defaultValue={inputText}
            placeholder={translate(lang, 'searchMovie')}
            style={styles.searchBox}
          />
          <TouchableOpacity
            onPress={() => executeSearch(inputText)}
            style={{height: '100%'}}>
            <View style={styles.searchButton}>
              <FontAwesomeIcon
                icon={faSearch}
                style={{
                  color: '#fff',
                }}
                size={20}
              />
            </View>
          </TouchableOpacity>
        </View>
      </View>
      <DrawerLayoutAndroid
        ref={drawer}
        drawerWidth={300}
        drawerPosition={drawerPosition}
        renderNavigationView={navigationView}>
        <View style={styles.container}>
          {movies.length > 0 ? (
            <CardList cards={movies} />
          ) : (
            <Text style={{color: 'white'}}>
              {translate(lang, 'specifyText')}
            </Text>
          )}
        </View>
      </DrawerLayoutAndroid>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#14182a',
  },
  navigationContainer: {
    backgroundColor: 'rgb(61,51,61)',
    height: '100%',
  },
  paragraph: {
    padding: 16,
    fontSize: 15,
    textAlign: 'center',
  },
  searchRow: {
    display: 'flex',
    flexWrap: 'wrap',
    flexDirection: 'row',
    justifyContent: 'center',
    backgroundColor: '#1b2039',
    height: 80,
    alignItems: 'center',
    paddingLeft: 5,
    paddingRight: 5,
    paddingTop: 15,
  },
  searchIcon: {
    color: '#fff',
    width: '20%',
    height: '60%',
    paddingRight: 5,
  },
  composedSearchInput: {
    display: 'flex',
    flexDirection: 'row',
    width: '80%',
    height: '60%',
    marginLeft: 5,
  },
  searchBox: {
    height: '100%',
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderColor: '#ccc',
    borderWidth: 1,
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 0,
    borderTopLeftRadius: 5,
    borderTopRightRadius: 0,
    fontSize: 16,
    color: '#777',
    backgroundColor: 'white',
    width: '80%',
  },
  searchButton: {
    backgroundColor: 'rgb(59,200,231)',
    borderBottomRightRadius: 5,
    borderTopRightRadius: 5,
    minWidth: 50,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '20%',
    height: '100%',
  },
});

export default MovieList;
