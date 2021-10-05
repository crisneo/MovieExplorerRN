import React, {Component} from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';
import LineSeparator from '../components/Separator/LineSeparator';
import Subtitle from '../components/SubTitle/Subtitle';
import SButton from '../components/StyledButton/SButton';
import translate from '../services/translateService';
import {getData} from '../services/storageService';

const MovieDetails = ({navigation, movieInfo}: any) => {
  const [lang, setLang] = React.useState<string>('en-EN');
  const loadLang = async () => {
    const llang = await getData('lang');
    setLang(llang);
  };
  React.useEffect(() => {
    loadLang();
  }, []);
  return (
    <View key={movieInfo.id} style={styles.container}>
      <Subtitle text={translate(lang, 'overview')} />
      <Text style={styles.text}>{movieInfo.overview}</Text>
      <Subtitle text={translate(lang, 'language')} />
      <Text style={styles.text}>{movieInfo.original_language}</Text>
      <Subtitle text={translate(lang, 'releaseDate')} />
      <Text style={styles.text}>{movieInfo.release_date}</Text>
      <SButton
        handleAction={() =>
          navigation.navigate('MovieInfo', {movieInfo: movieInfo})
        }
        text={translate(lang, 'viewMore')}
        height={40}
        width={80}></SButton>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#14182a',
  },
  text: {
    fontSize: 15,
    color: '#FFF',
    lineHeight: 30,
    fontFamily: 'JosefinSans-VariableFont_wght',
  },
});

export default MovieDetails;
