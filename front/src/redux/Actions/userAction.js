import axios from 'axios';
import { backendUrl } from '../../deployConfig';


export const PUT_INFO_PROFILE = 'PUT_INFO_PROFILE';

export const putInfoProfile = (formData) => {
  console.log(formData)
  return async function (dispatch) {
    try {
      const apiData = await axios.post(`${backendUrl}/user/modify`, formData);
      const modifiProfile = apiData.data;
      dispatch({ type: PUT_INFO_PROFILE, payload: modifiProfile });
    } catch (error) {
      window.alert(error);
    }
  };
};