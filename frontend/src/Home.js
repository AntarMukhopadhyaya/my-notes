import Note from "./components/Note";
import Container from "@mui/material/Container";

import Grid from "@mui/material/Grid";
import { useEffect, useState } from "react";
import AppHeader from "./components/AppHeader";
import axios from "axios";
const Home = () => {
  const [notes, setnotes] = useState([]);
  useEffect(() => {
    axios.get('http://127.0.0.1:8000/api/notes/').then(response => {
   
      setnotes(response.data)
    }).catch(err => console.error(err));
  },[])


  return (
    <Container>
      <AppHeader />
      <br />
      <Grid container spacing={2}>
        {notes.map((note) =>{
          return(
        
         <Grid item key={note.id}>
              {" "}
              <Container style={{ marginTop: "10px !important " }}>
                <Note id={note.id} content={note.content} date={note.created_date} title={note.title} tags={note.tags} />
              </Container>
            </Grid>
       
          )
        })}
      
      </Grid>

    
    </Container>
  );
};
export default Home;
