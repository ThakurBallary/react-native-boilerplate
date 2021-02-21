import { axios, apis } from 'apis';

export async function getUsers() {
  try {
    const response = await axios.get(apis.getUsers);
    console.log(response);
  } catch (error) {
    console.error(error);
  }
}
