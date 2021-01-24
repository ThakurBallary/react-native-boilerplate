import AsyncStorage from '@react-native-async-storage/async-storage';

const getData = async (key: string) => {
  let value = null;
  try {
    value = await AsyncStorage.getItem(key);
    if (value && (value[0] === '[' || value[0] === '{')) {
      value = JSON.parse(value);
    }
  } catch (e) {
    // error reading value
  } finally {
    return value;
  }
};

const storeData = async (key: string, value: any) => {
  try {
    if (typeof value !== 'string') {
      value = JSON.stringify(value);
    }
    await AsyncStorage.setItem(key, value);
  } catch (e) {
    // saving error
  }
};

export default {
  getData,
  storeData,
};
