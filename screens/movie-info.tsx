import React, {Component} from 'react';
import {
  View,
  Text,
  Button,
  Image,
  ScrollView,
  Dimensions,
  StyleSheet,
} from 'react-native';
import {getReviews} from '../services/movieService';
import Subtitle from '../components/SubTitle/Subtitle';
import SButton from '../components/StyledButton/SButton';
import Config from 'react-native-config';

const MovieInfo = ({navigation, route}: any) => {
  const [reviews, setReviews] = React.useState<any[]>([]);
  const dimensions = Dimensions.get('window');
  const imageHeight = Math.round((dimensions.width * 9) / 16);
  const imageWidth = dimensions.width;

  const getReviewsData = async (movieId: string) => {
    const res = await getReviews(movieId);
    setReviews(res.data.results);
  };
  React.useEffect(() => {
    getReviewsData(route.params.movieInfo.id);
  }, [route.params.movieInfo]);
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.bigTitle}>{route.params.movieInfo.title}</Text>
      <Subtitle text="  Poster"></Subtitle>
      <Image
        source={{
          uri: `${Config.MOVIE_API_BASEURL}${route.params.movieInfo.poster_path}`,
        }}
        style={{height: imageHeight, width: imageWidth}}
      />
      <Subtitle text="  Overview"></Subtitle>
      <Text style={styles.text}>{route.params.movieInfo.overview}</Text>
      {reviews.length > 0 && <Subtitle text="Reviews"></Subtitle>}
      {reviews.map(x => (
        <Text style={styles.text} key={x.id}>{`${x.author}:${x.content}`}</Text>
      ))}
      <Subtitle text="  Backdrop Poster"></Subtitle>
      <Image
        source={{
          uri: `${Config.MOVIE_API_BASEURL}${route.params.movieInfo.backdrop_path}`,
        }}
        style={{height: imageHeight, width: imageWidth}}
      />
      <SButton
        text="Back to search"
        handleAction={() => navigation.navigate('Search')}
        width={80}
        height={40}></SButton>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#14182a',
    paddingLeft: 15,
    paddingRight: 15,
  },
  text: {
    fontSize: 15,
    color: '#FFF',
    lineHeight: 30,
    fontFamily: 'JosefinSans-VariableFont_wght',
  },
  bigTitle: {
    fontFamily: 'JosefinSans-VariableFont_wght',
    fontSize: 25,
    color: '#fff',
  },
});
export default MovieInfo;
