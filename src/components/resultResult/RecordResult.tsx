import Navbar from '@components/common/Navbar';
import { useEffect, useState } from 'react';
import { SongType } from './types/record.result.types';
import { startTagSearch } from './utils/createPlaylist';
import './styles/record.result.styles.scss';
import { images } from '@assets/images';
import {
  bugsClickListener,
  genieClickListener,
  melonClickListener,
} from './utils/createDepplink';
import Loading from '@components/common/Loading';
import Song from './components/Song';

const RecordResult = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [tags, setTags] = useState<Set<string>>(new Set());
  const [songs, setSongs] = useState<SongType[]>([]);

  const loadSongs = async (tags: string[]) => {
    const songs = await startTagSearch(tags);
    setSongs(songs);
    setIsLoading(false);
  };

  const loadTags = () => {
    const urlSearchParams = new URLSearchParams(window.location.search);
    const tagParams = Object.fromEntries(urlSearchParams.entries());
    const tmpTagArr = tagParams.tags.split(',');
    setTags(new Set(tmpTagArr));
    loadSongs(tmpTagArr);
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
        {isLoading ? (
          <Loading />
        ) : (
          <section className='playlist-section'>
            <ul>
              {songs.map((song, idx) => {
                return <Song song={song} tags={tags} key={idx} />;
              })}
            </ul>
          </section>
        )}
      </main>
    </div>
  );
};

export default RecordResult;
