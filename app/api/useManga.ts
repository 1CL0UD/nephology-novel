import useData from './useData';

interface Manga {}

const useManga = () => useData<Manga>('/manga');

export default useManga;
