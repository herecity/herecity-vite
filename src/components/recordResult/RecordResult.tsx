import Navbar from '@components/common/Navbar/Navbar';
import { useEffect, useRef, useState } from 'react';
import { SongType, TagType } from './types/record.result.types';
import './styles/record.result.styles.scss';
import { images } from '@assets/images';
import Loading from '@components/common/Loading/Loading';
import Song from './components/Song';
import { useDeeplink } from './hooks/useDeeplink';
import { getDevice } from './utils/getDevice';
import { usePlaylist } from './hooks/usePlaylist';

const RecordResult = () => {
  const { musicAppClickListener } = useDeeplink(getDevice());
  const { getSongList } = usePlaylist();
  const [isLoading, setIsLoading] = useState(true);
  const [tags, setTags] = useState<Set<string>>(new Set());
  const [songs, setSongs] = useState<SongType[]>([]);
  const keywordsRef = useRef<HTMLDivElement>(null);
  const [scrollY, setScrollY] = useState(0);

  const loadSongs = async (tags: string[]) => {
    const songs = await getSongList(tags as TagType[]);
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

  const getTagStyle = (idx: number) => {
    return `translateX(${(scrollY * (idx + 1)).toFixed(0)}px)`;
  };

  const getShareContainerStyle = () => {
    return `translateY(${scrollY / 10}px)`;
  };

  useEffect(() => {
    loadTags();
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.screenY > 400) return;
      setScrollY(window.scrollY);
    });
  }, []);

  return (
    <div className='record-result-root'>
      <main className='main'>
        <Navbar />
        <div className='keywords-container' ref={keywordsRef}>
          {Array.from(tags).map((tag, idx) => {
            return (
              <div
                style={{ transform: getTagStyle(idx) }}
                className={`tag`}>{`#${tag}`}</div>
            );
          })}
        </div>
        <div
          style={{ transform: getShareContainerStyle() }}
          className='share-container'>
          <button onClick={() => musicAppClickListener(songs, 'bugs')}>
            <img src={images.bugs} alt='' />
          </button>
          <button onClick={() => musicAppClickListener(songs, 'melon')}>
            <img src={images.melon} alt='' />
          </button>
          <button onClick={() => musicAppClickListener(songs, 'genie')}>
            <img src={images.genie} alt='' />
          </button>
        </div>
      </main>
      <section
        style={{ transform: `translateY(${200 + 70 * tags.size}px)` }}
        className='playlist-section'>
        <ul>
          {isLoading ? (
            <Loading />
          ) : (
            <>
              <div className='song-cnt'>{`${songs.length}개의 곡`}</div>
              {songs.map((song, idx) => {
                return <Song song={song} tags={tags} key={idx} />;
              })}
            </>
          )}
        </ul>
      </section>
    </div>
  );
};

export default RecordResult;
