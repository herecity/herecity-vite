import { memo } from 'react';
import { SongType } from '../types/record.result.types';
import '../styles/song.styles.scss';

type Props = {
  song: SongType;
  tags: Set<string>;
};

const Song = memo(({ song, tags }: Props) => {
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
          {[...song.tags, song.artist]
            .filter((tag) => tags.has(tag))
            .map((_, idx) => (
              <div className='bar' key={idx} />
            ))}
          {Array(
            3 -
              [...song.tags, song.artist].filter((tag) => tags.has(tag)).length,
          )
            .fill(0)
            .map((_, idx) => (
              <div className='bar not' key={idx} />
            ))}
        </div>
      </div>
      {hasAdditionalInfo() && (
        <div className='additional-info-container'>
          {song.URL_mv && (
            <button className='button-primary'>{'뮤직비디오'}</button>
          )}
          {song.URL_dance && (
            <button className='button-primary'>{'댄스비디오'}</button>
          )}
        </div>
      )}
    </li>
  );
});

export default Song;
