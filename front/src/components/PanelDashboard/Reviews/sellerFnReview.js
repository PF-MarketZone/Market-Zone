import axios from 'axios';
import { backendUrl } from '../../../deployConfig';

const sellerFnReview = async (userId, tkn, rtkn) => {
  try {
    const response = await axios({
      url: `${backendUrl}/reviews`,
      method: 'get',
      headers: {
        Authorization: `Bearer ${tkn}`,
        'refresh-token': rtkn,
      },
    });

    if (response.data.isArray) {
      const allReviews = response.data;

      const idStoresByUser = await axios({
        url: `${backendUrl}/store?user=${userId}`,
        method: 'get',
        headers: {
          Authorization: `Bearer ${tkn}`,
          'refresh-token': rtkn,
        },
      });

      const idStores = idStoresByUser.data.data.map((store) => store._id);
    }
  } catch (error) {
    return [];
  }
};

export default sellerFnReview;
