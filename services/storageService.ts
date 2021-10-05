import AsyncStorage from '@react-native-async-storage/async-storage';

const storeData = async (key: string, value: any) => {
  try {
    await AsyncStorage.setItem(`@${key}`, value);
  } catch (e) {
    // saving error
  }
};
const getData = async (key: string) => {
  try {
    const value = await AsyncStorage.getItem(`@${key}`);
    return value;
  } catch (e) {
    // error reading value
  }
};

export {storeData, getData};
