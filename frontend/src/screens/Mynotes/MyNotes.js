import React, { useEffect, useState } from 'react'
import MainScreen from '../../Components/MainScreen';
import { Accordion, Badge, Button, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
// import notes, { } from '../../Components/Data/notes';
import axios from 'axios'


const MyNotes = () => {

  const deleteHandler = (id) => {
    if (window.confirm("Are you sure ??")) {

    }
  };

  const [notes, setNotes] = useState([]);

  const fetchNotes = async () => {
    const { data } = await axios.get("/api/notes");


    setNotes(data);




  }
  console.log(notes);

  useEffect(() => {
    fetchNotes();
  }, [])


  return (
    <div>
      <MainScreen title={'Welcome Sounak....'} >
        <Link to="/createnote">
          <Button style={{ marginLeft: 10, marginBottom: 6 }} size="lg">
            Create new Note
          </Button>

        </Link>
        {notes.map((note) => (
          <Accordion key={note._id}>
            <Card style={{ margin: 10 }} >

              <Card.Header style={{ display: 'flex' }}>
                <span style={{
                  color: "black",
                  textDecoration: "none",
                  flex: 1,
                  cursor: "pointer",
                  alignSelf: "center",
                  fontSize: 18

                }}>

                  <Accordion.Header>
                    {note.title}
                  </Accordion.Header>




                </span>
                <div>
                  <Button href={`/note/${note._id}`} className='ml-2'>Edit</Button>
                  <Button variant='danger' className='ml-2' onClick={() => deleteHandler(note._id)}>Delete</Button>
                </div>
              </Card.Header>


              <Accordion.Body>
                <Card.Body >
                  <h4>
                    <Badge variant='success'> Category -{note.category}</Badge>
                  </h4>
                  <blockquote className="blockquote mb-0">
                    <p>
                      {note.content}
                    </p>
                    <footer className="blockquote-footer">
                      Created on date --
                    </footer>
                  </blockquote>
                </Card.Body></Accordion.Body>





            </Card>
            </Accordion>
            )


          )}




          </MainScreen></div>
  )
}

export default MyNotes