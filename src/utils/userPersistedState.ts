import { useState, useEffect, Dispatch, SetStateAction } from 'react';
import { AsyncStorage } from 'react-native';

type Response<T> = [T, Dispatch<SetStateAction<T>>];

export default function UserPersistedState<T>(key: string, initialState: T): Response<T> {

  const [state, setState] = useState(initialState);

  useEffect(() => {
    async function getItem() {
      const storageValue = await AsyncStorage.getItem(key);
      if (storageValue) setState(JSON.parse(storageValue));
    }
    getItem();
  }, []);

  useEffect(() => {
    AsyncStorage.setItem(key, JSON.stringify(state));
  }, [key, state]);

  return [state, setState];
}