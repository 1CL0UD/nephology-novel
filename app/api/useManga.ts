import { useEffect, useState } from 'react';
import yumemiru from '../mock-data/yumemiru';
import MangaData from '../types/manga';
import topManga from '../mock-data/topManga';
import apiClient from './api-client';

export const fetchData = async (): Promise<MangaData> => {
  try {
    const response = await apiClient.get<MangaData>('/top/manga');
    // const response = { data: topManga, isLoading: false, error: null };
    return response.data;
  } catch (error) {
    throw new Error('Failed to fetch data');
  }
};

const useManga = () => {
  const [data, setData] = useState<MangaData | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchDataFromAPI = async () => {
      try {
        const result = await fetchData();
        setData(result);
      } catch (error) {
        setError('Failed to fetch data');
      } finally {
        setLoading(false);
      }
    };

    fetchDataFromAPI();
  }, []);

  return { data, loading, error };
};

export default useManga;
