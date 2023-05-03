import AsyncStorage from '@react-native-async-storage/async-storage';
import React, {useEffect, useState} from 'react';

const useAuth = () => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const getAuthInfo = async () => {
    try {
      const response = await AsyncStorage.getItem('accessToken');

      if (response) {
        setIsAuthenticated(true);
        console.log('TOKEN', response);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getAuthInfo();
  }, []);

  return {isAuthenticated, getAuthInfo};
};

export {useAuth};
