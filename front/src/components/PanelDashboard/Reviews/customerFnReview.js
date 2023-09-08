import axios from 'axios';
import { backendUrl } from '../../../deployConfig';

const customerFnReview = async (userId, tkn, rtkn) => {
  try {
    const response = await axios({
      url: `${backendUrl}/reviews?userId=${userId}`,
      method: 'get',
      headers: {
        Authorization: `Bearer ${tkn}`,
        'refresh-token': rtkn,
      },
    });

    if (response.data.isArray) {
      const reviewsAll = response.data.map(async (review) => {
        const product = await axios({
          url: `${backendUrl}/product/${review.product}`,
          method: 'get',
          headers: {
            Authorization: `Bearer ${tkn}`,
            'refresh-token': rtkn,
          },
        });

        return {
          ...review,
          imageP: product.data.data.image.url,
          nameP: product.data.data.name,
        };
      });

      return reviewsAll;
    }
  } catch (error) {
    return [];
  }
};

export default customerFnReview;
