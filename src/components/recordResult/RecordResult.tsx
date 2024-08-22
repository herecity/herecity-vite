import Navbar from '@/components/common/Header/Header';
import { useEffect, useRef, useState } from 'react';
import { TagType } from './types/record.result.types';
import './styles/record.result.styles.scss';
import { images } from '@/assets/images';
import Loading from '@/components/common/Loading/Loading';
import Song from './components/Song';
import { createDeeplink } from './libs/createDeeplink';
import { getDevice } from './utils/getDevice';
import { usePlaylist } from './hooks/usePlaylist';
import { useSearchParams } from 'react-router-dom';

const RecordResult = () => {
  const { musicAppClickListener } = createDeeplink(getDevice());
  const [tags, setTags] = useState<Set<TagType>>(new Set());
  const keywordsRef = useRef<HTMLDivElement>(null);
  const [scrollY, setScrollY] = useState(0);
  const [params] = useSearchParams();

  const loadTags = async () => {
    const tagParams = params.get('tags')?.split(',') as TagType[];
    setTags(new Set(tagParams));
  };

  const getTagStyle = (idx: number) => {
    return `translateX(${(scrollY * (idx + 1)).toFixed(0)}px)`;
  };

  const getShareContainerStyle = () => {
    return `translateY(${scrollY / 10}px)`;
  };

  const { playlist, isLoading } = usePlaylist(tags);

  useEffect(() => {
    loadTags();
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 400) return;
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
          <button onClick={() => musicAppClickListener(playlist, 'bugs')}>
            <img src={images.bugs} alt='' />
          </button>
          <button onClick={() => musicAppClickListener(playlist, 'melon')}>
            <img src={images.melon} alt='' />
          </button>
          <button onClick={() => musicAppClickListener(playlist, 'genie')}>
            <img src={images.genie} alt='' />
          </button>
        </div>
      </main>
      <section
        style={{
          transform: `translateY(${tags ? 200 + 70 * tags.size : 0}px)`,
        }}
        className='playlist-section'>
        <ul>
          {isLoading ? (
            <Loading />
          ) : (
            <>
              <div className='song-cnt'>{`${playlist.length}개의 곡`}</div>
              {playlist.map((song, idx) => {
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
