import axios from "axios";

export const getData = async (endpoint, setData) => {
  try {
    const response = await axios.get(endpoint);
    const data = await response.data;

    setData(data);
  } catch (err) {
    console.log(err);
  }
};

export const postData = async (endpoint, payload) => {
  try {
    const response = await axios.post(endpoint, payload);
    const data = await response.data;
  } catch (err) {
    console.log(err);
  }
};

export const putData = async (endpoint, payload) => {
  try {
    const response = await axios.put(endpoint, payload);
    const data = await response.data;
  } catch (err) {
    console.log(err);
  }
};

export const patchData = async (endpoint, payload) => {
  try {
    const response = await axios.patch(endpoint, payload);
    const data = await response.data;
  } catch (err) {
    console.log(err);
  }
};

export const deleteData = async (endpoint, payload) => {
  try {
    const response = await axios.delete(endpoint, payload);
    const data = await response.data;
  } catch (err) {
    console.log(err);
  }
};
