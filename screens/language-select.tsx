import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import SButton from '../components/StyledButton/SButton';
import {storeData} from '../services/storageService';
const LanguageSelect = ({navigation}: any) => {
  const [open, setOpen] = React.useState(false);
  const [value, setValue] = React.useState(null);
  const [items, setItems] = React.useState([
    {label: 'English', value: 'en-US'},
    {label: 'Español', value: 'es-ES'},
  ]);
  const saveAndRedirect = async () => {
    await storeData('lang', value);
    navigation.navigate('MainPage');
  };
  return (
    <View style={styles.container}>
      <DropDownPicker
        open={open}
        value={value}
        items={items}
        setOpen={setOpen}
        setValue={setValue}
        setItems={setItems}
      />
      <SButton
        text="Ok"
        handleAction={() => saveAndRedirect()}
        width={80}
        height={40}></SButton>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#14182a',
    height: '100%',
  },
});
export default LanguageSelect;
