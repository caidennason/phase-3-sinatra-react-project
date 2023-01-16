import React, {useState} from "react"
import SongInformation from "./SongInformation"

function SubmittedSongs({submittedSongs, submittedReviews}){

    return (
    // <div>
    //     {submittedSongs.map((song) => {
    //     return <SongInformation submittedSongs = {submittedSongs} key={song.id} name={song.name} album={song.album} writer={song.songwriter} rating={song.songRating}/>
    // })}</div>

    <div>
        {submittedReviews.map((r) => {
            console.log(r)
            return <SongInformation key={r.id} writer={r.name} name={r.songs[0].song_name} review={r.songs[0].reviews[0].review}/>
        })}
    </div>
    )
}

export default SubmittedSongs