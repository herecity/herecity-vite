import { memo } from 'react';
import {
  ArtistType,
  GroupType,
  SongType,
  TagType,
} from '../types/record.result.types';
import '../styles/song.styles.scss';

type Props = {
  song: SongType;
  tags: Set<TagType>;
};

const Song = memo(({ song, tags }: Props) => {
  const isGroupType = (tag: string | ArtistType): tag is GroupType => {
    return (
      tag === 'NCT 127' ||
      tag === 'NCT U' ||
      tag === 'NCT DREAM' ||
      tag === 'WayV'
    );
  };

  const tagArr = [
    ...song.tags,
    ...(isGroupType(song.artist) ? [song.artist] : []),
  ];

  const hasAdditionalInfo = () => {
    return song.URL_dance || song.URL_mv;
  };

  return (
    <li className='song-root'>
      <div className='info-container'>
        <div className='item thumbnail'>
          <img
            loading='lazy'
            className='thumbnail '
            src={song.image}
            alt='앨범 썸네일 이미지'
          />
        </div>
        <div className='default'>
          <div className='item title'>{song.title}</div>
          <div className='item artist'>{song.artist}</div>
        </div>
        <div className='item tags'>
          {tagArr
            .filter((tag) => tags.has(tag))
            .map((_, idx) => (
              <div className='bar' key={idx} />
            ))}
          {Array(3 - tagArr.filter((tag) => tags.has(tag)).length)
            .fill(0)
            .map((_, idx) => (
              <div className='bar not' key={idx} />
            ))}
        </div>
      </div>
      {hasAdditionalInfo() && (
        <div className='additional-info-container'>
          {song.URL_mv && (
            <a target='_blank' href={song.URL_mv} className='button-primary'>
              {'뮤직비디오'}
            </a>
          )}
          {song.URL_dance && (
            <a target='_blank' href={song.URL_dance} className='button-primary'>
              {'댄스비디오'}
            </a>
          )}
        </div>
      )}
    </li>
  );
});

export default Song;
