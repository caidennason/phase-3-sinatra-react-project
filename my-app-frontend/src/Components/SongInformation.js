import React from "react"
import Card from 'react-bootstrap/Card'

function SongInformation({name, album, writer, rating}){


    return(
        <>
        <Card style={{width:'18rem', backgroundColor:'peachpuff'}}>
            <Card.Title>{name}</Card.Title>
            <Card.Text>{album}</Card.Text>
            <Card.Text>{writer}</Card.Text>
            <Card.Text>{rating}</Card.Text>
        </Card>
        <br></br>
        </>
    )
}


export default SongInformation