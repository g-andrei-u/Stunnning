import React, {useCallback} from "react";
import "./Playlist.css";
import TrackList from "../Tracklist/Tracklist";

const inputStyle = {
    textAlign: 'center',
    fontSize: 18,
    fontWeight: '600',
    padding: 10,
    color: '#651e5e',
    border: '1px solid #4d0c47',
    borderRadius: 20
  
  };

function Playlist(props) {

    const handleNameChange = useCallback((e) => {props.onNameChange(e.target.value)}, [props.onNameChange]);

    return (
        <div id="playlist">
            <h2>PLAYLIST</h2>
            <input style={inputStyle} onChange={handleNameChange} defaultValue={'New Playlist'} />
            <TrackList tracks={props.playlistTracks} isRemoval={true} onRemove={props.onRemove} />
            <button id="playlist-button" onClick={props.onSave}>ADD TO PLAYLIST</button>
        </div>
    );
};

export default Playlist;