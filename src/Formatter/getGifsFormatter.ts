import {AxiosResponse} from 'axios';
import {GliphyListResponse} from '../Services/Types';
import {GliphyItem} from 'src/Models';

export const getGifsFormatter = (
  res: AxiosResponse<GliphyListResponse>,
): GliphyItem[] =>
  res.data.data.map(item => ({
    title: item.title,
    video: item.images.original.mp4,
    image: item.images.original.url,
    height: parseInt(item.images.original.height, 10),
    width: parseInt(item.images.original.width, 10),
  }));
