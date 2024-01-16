import axios from 'axios';

const key = '40838413-487c32a1982a33454d1384abb';
const url = 'https://pixabay.com/api/';
const filter = `&image_type=photo&orientation=horizontal&safesearch=true`;

const pixabayInstance = axios.create({
  baseURL: url,
  params: {
    key,
    per_page: 12,
    ...filter,
  },
});

export const getImages = async (query, page) => {
  const { data } = await pixabayInstance.get('', {
    params: {
      q: query,
      page,
    },
  });

  return data;
};
