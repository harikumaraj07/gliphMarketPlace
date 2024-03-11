import {useQuery} from 'react-query';
import {getGifsFormatter} from 'src/Formatter';
import {GliphyItem} from 'src/Models';
import {getSearchGlifs} from 'src/Services';

interface GetSearchGifs {
  q: string;
  page: number;
  size?: number;
  onSuccess?: (res: GliphyItem[]) => void;
  enabled?: boolean;
}

export const useGetSearchGifs = ({
  q,
  page,
  size,
  onSuccess,
  enabled,
}: GetSearchGifs) => {
  const {data, isLoading, isError, error} = useQuery({
    queryKey: ['GetSearchGifs', q, page, size],
    select: getGifsFormatter,
    queryFn: getSearchGlifs(q, page, size),
    onSuccess,
    enabled,
  });
  return {
    data,
    isLoading,
    isError,
    error,
  };
};
