import React, {useState} from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

function SubmissionForm(){
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
        console.log(formData)
    }

    return (
        <div style={{backgroundColor:'peachpuff'}}>
        <Form onSubmit={handleSongSubmit}>
            <input onChange={handleSongChange} type="text" value={songName}/>
            <input onChange={handleAlbumChange} type="text" value={albumName}/>
            <input onChange={handlesongWriterChange} type="text" value={songwriterName}/>
            <input onChange={handleRatingChange} type="text" value={rating}/>
            <Button type='submit'>Submit</Button>
        </Form>

        </div>
    )
}

export default SubmissionForm