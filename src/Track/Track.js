import React, {useCallback} from "react";


function Track(props) {
    const addTrack = useCallback((event) => props.onAdd(props.track), [props.onAdd, props.track]);
    const removeTrack = useCallback((event) => props.onRemove(props.track), [props.onRemove, props.track]);

    const buttons = () => {

        if(props.isRemoval) {

            return (<buttons onClick={removeTrack}>-</buttons>)
        }
        return (<buttons onClick={addTrack}>+</buttons>)
    };

    return (
        <div>
            <div>
                <h3>{props.track.name}</h3>
                <p>
                    {props.track.name} {props.track.album}
                </p>
            </div>
            {buttons}
        </div>
    );
};

export default Track;