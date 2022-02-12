import { Container } from "@mui/material";
import React from "react";
import Header from "./components/AppHeader";
import { createReactEditorJS } from "react-editor-js";
import { EDITOR_JS_TOOLS } from "./tools";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
const ReactEditorJS = createReactEditorJS();

export default function NoteCreate() {
  return (
    <Container>
      <Header />

      <Container style={{ marginTop: "10px" }}>
        <Container>
          <center>
            <Box
              sx={{
                width: 600,
                maxWidth: "100%",
              }}
            >
              <TextField fullWidth label="Title" id="fullWidth" />
            </Box>
          </center>
        </Container>

        <Container style={{ marginTop: "10px" }}>
          <ReactEditorJS tools={EDITOR_JS_TOOLS} />
        </Container>
      </Container>
    </Container>
  );
}
