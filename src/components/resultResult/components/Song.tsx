import { memo } from 'react';
import { SongType } from '../types/record.result.types';

type Props = {
  song: SongType;
  tags: Set<string>;
};

const Song = memo(({ song, tags }: Props) => {
  return (
    <li className='song-container'>
      <div className='item thumbnail'>
        <img
          loading='lazy'
          className='thumbnail '
          src={song.image}
          alt='앨범 썸네일 이미지'
        />
      </div>
      <div className='item title'>{song.title}</div>
      <div className='item artist'>{song.artist}</div>
      <div className='item tags'>
        {[...song.tags, song.artist]
          .filter((tag) => tags.has(tag))
          .map((_, idx) => (
            <div className='bar' key={idx} />
          ))}
        {Array(
          3 - [...song.tags, song.artist].filter((tag) => tags.has(tag)).length,
        )
          .fill(0)
          .map((_, idx) => (
            <div className='bar not' key={idx} />
          ))}
      </div>
    </li>
  );
});

export default Song;
