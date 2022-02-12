import React, { useEffect, useState } from "react";
import AppHeader from "./components/AppHeader";
import { createReactEditorJS } from "react-editor-js";
import { EDITOR_JS_TOOLS } from "./tools";
import { Input } from "antd";
import { useParams } from "react-router-dom";
import axios from "axios";
import TagsInput from "./components/TagsInput";
import { Layout, Button } from "antd";
const { Header, Footer, Sider, Content } = Layout;
const ReactEditorJS = createReactEditorJS();

export default function NoteEdit() {
  const { id } = useParams();
  const [note, setNote] = useState([]);
  useEffect(() => {
    axios.get(`http://127.0.0.1:8000/api/notes/${id}/`).then((response) => {
      setNote(response.data);
    });
  }, []);
  function handleSelecetedTags(items) {
    console.log(items);
  }
  return (
    <Layout>
      <AppHeader />
      <Content style={{ padding: "0 50px" }}>
        <div style={{ padding: "0 100px" }}>
          <div style={{ padding: "0 100px" }}>
            <Input placeholder="Title" />
            <div style={{ padding: "0 10px", marginTop: "10px" }}>
              <ReactEditorJS tools={EDITOR_JS_TOOLS} default="Start Here" />
            </div>
            <div style={{ padding: "0 10px", marginTop: "10px" }}>
             <Input placeholder="Tags" />
            </div>

          </div>
        </div>
      </Content>
    </Layout>
    //   <Container>
    //   <Header />

    //   <Container style={{ marginTop: "10px" }}>
    //     <Container>
    //       <center>
    //         <Box
    //           sx={{
    //             width: 600,
    //             maxWidth: "100%",
    //           }}
    //         >
    //           <TextField fullWidth label="Title" id="fullWidth" />
    //         </Box>
    //       </center>
    //     </Container>

    //     <Container style={{ marginTop: "10px" }}>
    //       <ReactEditorJS tools={EDITOR_JS_TOOLS} />
    //     </Container>
    //     <Container>
    //       <center>
    //       <TagsInput
    //       selectedTags={handleSelecetedTags}
    //       fullWidth
    //       variant="outlined"
    //       id="tags"
    //       name="tags"
    //       placeholder="add Tags"
    //       label="tags"
    //     />
    //       </center>

    //     </Container>
    //   </Container>
    // </Container>
  );
}
