//import logo from './logo.svg';
//import './App.css';
import React, {useState, useEffect} from 'react'
import SubmissionForm from "./SubmissionForm"
import Card from 'react-bootstrap/Card';


function App() {

  const [submittedSongs, setSubmittedSongs] = useState([])
  const [submittedReviews, setReviews] = useState([])

  function addToPage(newSong){
    setSubmittedSongs([...submittedSongs, newSong])
  }

  useEffect(() => {
    fetch("http://localhost:9292/songwriters")
      .then((r) => r.json())
      .then((reviews) => setReviews(reviews))
      .then((reviews) => console.log(reviews))
  }, [])

  console.log(submittedReviews)



  return (
  <>
    <Card className="m-auto align-self-center"style={{width:'21rem'}}>
      <Card.Title className="m-auto align-self-center">Track Your Favorite Beatles Songs</Card.Title>
    </Card>

    <Card className="m-auto align-self-center"style={{width:'21rem'}}>
      <Card.Img src={"https://i0.wp.com/liveforlivemusic.com/wp-content/uploads/2016/09/abbeyroadpic-e1569437054348.jpg?zoom=2&resize=740%2C390&ssl=1"}/>
    </Card>

    <SubmissionForm submittedReviews={submittedReviews} submittedSongs={submittedSongs} setSubmittedSongs={setSubmittedSongs} addToPage={addToPage}/>
    
  </>
  );
}

export default App;
