import React, { useState, useCallback } from 'react';
import './App.css';
import SearchBar from './SearchBar/SearchBar';
import SearchResults from './SearchResults/SearchResults';
import Playlist from './Playlist/Playlist';
import Spotify from './Spotify/Spotify';


function App() {

  const [searchResults, setSearchResults] = useState([]);
  const [playlistName, setPlaylistName] = useState('New Playlist')
  const [playlistTracks, setPlaylistTracks] = useState([]);


  const search = useCallback((term) => {

    Spotify.search(term).then(setSearchResults);
  }, []);

  const addTraks = useCallback((track) => {

    if(playlistTracks.some((savedTrack) => savedTrack.id === track.id)) {

      return;
    };

    setPlaylistTracks((prev) => [ track, ...prev]);
  }, [playlistTracks]);

  const removeTrack = useCallback((track) => {

    setPlaylistTracks((prev) => prev.filter((curent) => curent.id !== track.id));
  }, [])


  return (
    <div className="App">
      <header>
        <h1>Jammming</h1>
        <h6>Party at the disco!</h6>
      </header>

      <main>
        <section id="section1">
          <SearchResults searchResults={searchResults} onAdd={addTraks} />
        </section>
        <section id="section2">
          <Playlist playlistName={playlistName} playlistTracks={playlistTracks} onRemove={removeTrack} />
        </section>
        <section id="section3">
          <SearchBar onSearch={search} />
        </section>
      </main>
    </div>
  );
}

export default App;
