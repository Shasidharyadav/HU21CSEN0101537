const axios = require('axios');

const getAuthToken = async () => {
  try {
    const response = await axios.post('http://20.244.56.144/test/auth', {
      companyName: 'goMart',
      clientID: process.env.CLIENT_ID,
      clientSecret: process.env.CLIENT_SECRET,
      ownerName: 'Shasidhar',
      ownerEmail: 'srodda@gitam.in',
      rollNo: '1',
    });

    return response.data.access_token;
  } catch (error) {
    console.error('Error fetching authentication token:', error.message);  
    throw new Error('Error fetching authentication token');
  }
};

module.exports = { getAuthToken };
