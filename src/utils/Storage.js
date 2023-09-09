import AsyncStorage from '@react-native-async-storage/async-storage';

class Storage {
  async store({key, value}) {
    try {
      await AsyncStorage.setItem(key, value);
    } catch (error) {
      throw error;
    }
  }
  async fetch({key}) {
    try {
      const data = await AsyncStorage.getItem(key);
      return data;
    } catch (error) {
      throw error;
    }
  }
}

export default new Storage();
