import axios from "axios";

const baseUrl = process.env.REACT_APP_API_BASE_URL;

export const contactApi = {
  get: async (id = undefined) => {
    if (id) return (await axios.get(`${baseUrl}/contact/${id}`)).data.data;
    return (await axios.get(`${baseUrl}/contact`)).data.data;
  },
  put: async ({ id, firstName, lastName, photo, age }) => {
    return (await axios.put(`${baseUrl}/contact/${id}`, { firstName, lastName, photo, age })).data;
  },
  post: async ({ firstName, lastName, photo, age }) => {
    return (await axios.post(`${baseUrl}/contact`, { firstName, lastName, photo, age })).data;
  },
  del: async (id) => {
    return (await axios.delete(`${baseUrl}/contact/${id}`)).data;
  }

}
