import axios from 'axios';
import firebaseConfig from '../apiKeys.json';

const baseUrl = firebaseConfig.firebaseKeys.databaseURL;

const getMyOrders = uid => new Promise((resolve, reject) => {
  axios.get(`${baseUrl}/orders.json?orderBy="uid"&equalTo="${uid}"`)
    .then((res) => {
      const orders = [];
      Object.keys(res.data).forEach((fbKey) => {
        res.data[fbKey].id = fbKey;
        orders.push(res.data[fbKey]);
      });
      resolve(orders);
    })
    .catch(err => reject(err));
});

const postOrder = newOrder => axios.post(`${baseUrl}/orders.json`, newOrder);

const deleteOrder = orderId => axios.delete(`${baseUrl}/orders/${orderId}.json`);

const putOrder = (orderId, updateOrder) => axios.put(`${baseUrl}/orders/${orderId}.json`, updateOrder);

export default {
  getMyOrders,
  deleteOrder,
  postOrder,
  putOrder,
};
