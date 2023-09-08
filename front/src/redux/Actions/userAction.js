// import axios from 'axios';
// import { backendUrl } from '../../deployConfig';

// export const PUT_INFO_PROFILE = 'PUT_INFO_PROFILE';

// export const putInfoProfile = (formData, tkn, rtkn) => {
//   return async function (dispatch) {
//     try {
//       const apiData = await axios({
//         url: `${backendUrl}/user/modify`,
//         method: 'post',
//         headers: {
//           Authorization: `Bearer ${tkn}`,
//           'refresh-token': rtkn,
//         },
//         data: formData,
//       });
//       // const apiData = await axios.post(`${backendUrl}/user/modify`, formData);
//       const modifiProfile = apiData.data.data;
//       console.log(modifiProfile);
//       dispatch({ type: PUT_INFO_PROFILE, payload: modifiProfile });
//     } catch (error) {
//       window.alert(error);
//     }
//   };
// };
