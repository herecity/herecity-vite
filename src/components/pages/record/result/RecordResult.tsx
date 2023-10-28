import Navbar from '@components/common/Navbar';
import { useEffect, useState } from 'react';
import { SongType } from './types/record.result.types';
import { startTagSearch } from './utils/createPlaylist';
import '@styles/record/record.result.styles.css';
import { images } from '@assets/images';
import {
  bugsClickListener,
  genieClickListener,
  melonClickListener,
} from './utils/createDepplink';

const RecordResult = () => {
  const [tags, setTags] = useState<Set<string>>(new Set());
  const [songs, setSongs] = useState<SongType[]>([]);

  const loadSongs = async (tags: string[]) => {
    const songs = await startTagSearch(tags);
    setSongs(songs);
  };

  const loadTags = () => {
    const urlSearchParams = new URLSearchParams(window.location.search);
    const tagParams = Object.fromEntries(urlSearchParams.entries());
    const tmpTagArr = tagParams.tags.split(',');
    loadSongs(tmpTagArr);
    setTags(new Set(tmpTagArr));
  };

  useEffect(() => {
    loadTags();
  }, []);

  return (
    <div className='record-result-root'>
      <Navbar />
      <main className='main'>
        <h2 className='header'>
          {`#${Array.from(tags).join(' #')}에\n 적합한 ${
            songs.length
          }개의 곡을 추천합니다`}
        </h2>
        <div className='share-container'>
          <button onClick={() => bugsClickListener(songs)}>
            <img src={images.bugs} alt='' />
          </button>
          <button onClick={() => melonClickListener(songs)}>
            <img src={images.melon} alt='' />
          </button>
          <button onClick={() => genieClickListener(songs)}>
            <img src={images.genie} alt='' />
          </button>
        </div>
        <section className='playlist-section'>
          <ul>
            {songs.map((song) => {
              return (
                <li className='song-container'>
                  <div className='item thumbnail'>
                    <img className='thumbnail ' src={song.image} alt='' />
                  </div>
                  <div className='item title'>{song.title}</div>
                  <div className='item artist'>{song.artist}</div>
                  <div className='item tags'>
                    {song.tags
                      .filter((tag) => tags.has(tag))
                      .map((_) => (
                        <div className='bar' />
                      ))}
                    {Array(3 - song.tags.filter((tag) => tags.has(tag)).length)
                      .fill(0)
                      .map((_) => (
                        <div className='bar not' />
                      ))}
                  </div>
                </li>
              );
            })}
          </ul>
        </section>
      </main>
    </div>
  );
};

export default RecordResult;
