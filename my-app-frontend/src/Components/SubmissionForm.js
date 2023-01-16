import React, {useState} from 'react'
import SubmittedSongs from './SubmittedSongs'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

function SubmissionForm({setSubmittedSongs, submittedSongs, addToPage, submittedReviews}){
    const [songName, setSongName] = useState("Song Name")
    const [albumName, setAlbumName] = useState("Album Name")
    const [songwriterName, setSongwriterName] = useState("Songwriter Name")
    const [rating, setRating] = useState("List a Rating from 1-10")

    function handleSongChange(e){
        setSongName(e.target.value)
        console.log(e.target.value)
    }

    function handleAlbumChange(e){
        setAlbumName(e.target.value)
        console.log(e.target.value)
    }

    function handleRatingChange(e){
        setRating(e.target.value)
        console.log(e.target.value)
    }

    function handlesongWriterChange(e){
        setSongwriterName(e.target.value)
        console.log(e.target.value)
    }

    function handleSongSubmit(e){
        e.preventDefault()
        const formData = {
            name: songName,
            album: albumName,
            songwriter: songwriterName,
            songRating: rating
        }
        //setSubmittedSongs(formData)
        addToPage(formData)
        console.log(submittedSongs)
    }

    return (
        <div>
        <Form onSubmit={handleSongSubmit}>
            <input onChange={handleSongChange} type="text" value={songName}/>
            <input onChange={handleAlbumChange} type="text" value={albumName}/>
            <input onChange={handlesongWriterChange} type="text" value={songwriterName}/>
            <input onChange={handleRatingChange} type="text" value={rating}/>
            <Button type='submit'>Submit</Button>
        </Form>

        <SubmittedSongs submittedSongs={submittedSongs} submittedReviews={submittedReviews}/>

        </div>
    )
}

export default SubmissionForm