import React from "react";
import "./Playlist.css";
import TrackList from "../Tracklist/Tracklist";

function Playlist(props) {

    return (
        <div id="playlist">
            <h2>PLAYLIST</h2>
            <input defaultValue={'New Playlist'} />
            <TrackList tracks={props.playlistTracks} isRemoval={true} onRemove={props.onRemove} />
            <button id="playlist-button" onClick={props.onSave}>ADD TO PLAYLIST</button>
        </div>
    );
};

export default Playlist;