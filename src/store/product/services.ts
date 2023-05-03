import axios from 'axios';

const postSignIn = async (email: string, password: string) => {
  try {
    const response = await axios.post(
      'https://sneakery.herokuapp.com/api/auth/signin',
      {
        email: email,
        password: password,
      },
    );
    if (response) return response;
  } catch (error: any) {
    return error;
  }
};

export {postSignIn};
