export default {
  name: data => data.length < 2 || data.length >= 50,
  phone: data => data.length < 9,
  age: data => Number(data) < 1 || Number(data) > 200
};