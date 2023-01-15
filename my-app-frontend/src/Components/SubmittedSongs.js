import React, {useState} from "react"
import SongInformation from "./SongInformation"

function SubmittedSongs({submittedSongs}){

    return (
    <div>
        {submittedSongs.map((song) => {
        return <SongInformation submittedSongs = {submittedSongs} key={song.id} name={song.name} album={song.album} writer={song.songwriter} rating={song.songRating}/>
    })}</div>
    )
}

export default SubmittedSongs