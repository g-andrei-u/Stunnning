import React from "react";
import Track from "../Track/Track";

function TrackList(props) {
    return (
        <div>
            {props.tracks.map((track) => {
                return (<Track track={track} key={track.id} onAdd={props.onAdd} isRemoval={props.isRemoval} onRemoval={props.onRemoval} />);
            })}
        </div>
    );
};

export default TrackList;