import axios from "axios";

axios.defaults.baseURL = "https://api.unsplash.com";

export const fetchImagesApi = async (topik, currentPage, imgSize) => {
  const response = await axios.get(`/search/photos`, {
    params: {
      query: topik,
      page: currentPage,
      per_page: 10,
      urls: imgSize,
      client_id: "KoSiC5hiTAikIxrBYGkBPEKqdDRBs_ratr8eu5iwpY0",
    },
  });
  return response.data.results;
};
