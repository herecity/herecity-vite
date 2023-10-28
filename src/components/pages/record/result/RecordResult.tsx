import Navbar from '@components/common/Navbar';
import React, { useEffect, useState } from 'react';
import { SongType } from './types/record.result.types';
import { startTagSearch } from './utils/createPlaylist';
import '@styles/record/record.result.styles.css';

const RecordResult = () => {
  const [tags, setTags] = useState<Set<string>>(new Set());
  const [songs, setSongs] = useState<SongType[]>([]);

  const loadSongs = async (tags: string[]) => {
    const songs = await startTagSearch(tags);
    setSongs(songs);
    console.log(songs);
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
        <div></div>
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
                  {/* <div className='item tags'>
                    {song.tags.filter((tag) => tags.has(tag)).join(', ')}
                  </div> */}
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
