import * as React from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import {
  TagsOutlined,
  DeleteOutlined,
  EditOutlined,
  ShareAltOutlined,
  DownloadOutlined,
} from "@ant-design/icons";
import TextTruncate from "react-text-truncate"; // recommend
import { Card, Button } from "antd";
import { useEffect, useState } from "react";
export default function Note(props) {
  const deleteNote = (id) => {
    axios
      .delete(`http://127.0.0.1:8000/api/notes/${id}/`)
      .then(() => window.location.reload(false));
  };
  const [tags, setTags] = useState([]);
  useEffect(() => {
    setTags(props.tags);
  }, [props.tags]);
  const navigate =  useNavigate();
  const redirectEdit = (id) =>{
    navigate(`/note/edit/${id}`)
  }

  return (
    <div>
      <Card
        title={props.title}
        extra={<Button type="success" shape="round"  icon={<DownloadOutlined/>} />}
        style={{ width: 300 }}
      >
        <p>{props.content}</p>
        <span>
          {tags.map((tag, i) => {
            return (
              <span key={i}>
                <a href={"tag/" + tag}>
                  <TagsOutlined />
                  {tag}{" "}
                </a>
              </span>
            );
          })}
        </span>
        <hr />
        <span>
          <Button
            type="secondary"
            shape="round"
            onClick={() => redirectEdit(props.id)}
            icon={<EditOutlined />}
            size="large"
          />

          <Button
            type="danger"
            shape="round"
            icon={<DeleteOutlined />}
            size="large"
            onClick={() => deleteNote(props.id)}
          />

          <Button
            type="primary"
            shape="round"
            icon={<ShareAltOutlined />}
            size="large"
          />
        </span>
      </Card>
    </div>
  );
}
