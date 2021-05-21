import axios from 'axios';

export const getFaqData = () => {
  return axios.get('/api/faqs')
    .then((res) => {
      console.log(res.data);
      return res.data
    })
}