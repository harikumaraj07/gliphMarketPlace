import {useQuery} from 'react-query';
import {getGifsFormatter} from 'src/Formatter';
import {GliphyItem} from 'src/Models';
import {getTrendingGlifs} from 'src/Services';

interface GetTrendingGifs {
  page: number;
  size?: number;
  onSuccess?: (res: GliphyItem[]) => void;
  onSettled?: () => void;
}

export const useGetTrendingGifs = ({
  page,
  size,
  onSuccess,
  onSettled,
}: GetTrendingGifs) => {
  const {data, isLoading, isError, error} = useQuery({
    queryKey: ['GetTrendingGifs', page, size],
    select: getGifsFormatter,
    queryFn: getTrendingGlifs(page, size),
    onSuccess,
    onSettled,
  });
  return {
    data,
    isLoading,
    isError,
    error,
  };
};
