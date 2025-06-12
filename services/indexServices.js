import api from '../utils/axiosInstance';

export const getPopulationList = async () => {
  const response = await api.post('/V1/populations/list', {
    pagesize: 100,
    currentpage: 1,
    sortorder: {
      field: 'date',
      direction: 'asc',
    },
    searchstring: '',
    filter: {},
  });

  return response.data.data;
};

export const getSliderList = async () => {
  const response = await api.post('/V1/sliders/list', {
    pagesize: 10,
    currentpage: 1,
    sortorder: {
      field: 'created_at',
      direction: 'asc',
    },
  });

  return response.data.data.sliders; // Return just the slider list array
};

export const getEventList = async () => {
  const response = await api.post('/V1/events/list', {
    pagesize: 2,
    currentpage: 1,
    sortorder: {
      field: 'from_date',
      direction: 'desc', // or 'desc' if you want the most recent
    },
    searchstring: '',
    filter: {},
  });

  return response.data.data || [];
};

export const getIndicatorList = async () => {
  const response = await api.post('/V1/keyindicators/list', {
    pagesize: 10,
    currentpage: 1,
    sortorder: {
      field: 'created_at',
      direction: 'desc',
    },
    searchstring: '',
    filter: {},
  });
  // console.log(response.data.data, "response")

  return response.data.data.key_indicators || [];
};


export const getPublicationList = async () => {
  const response = await api.post('V1/publications/list', {
    pagesize: 5,
    currentpage: 1,
    sortorder: {
      field: 'created_at',
      direction: 'desc',
    },
    filter: {
      show_in_home:"true",
    },
  });

  return response.data.data; // Adjust based on actual API structure
};