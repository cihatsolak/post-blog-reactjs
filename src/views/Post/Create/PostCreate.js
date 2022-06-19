import { Row, Col, Input, Button } from "antd";
import { useState } from "react";
import { useSelector } from "react-redux";
import { request } from "../../../request/Request";
import { useNavigate } from "react-router-dom";

const PostCreate = () => {
  const navigate = useNavigate()

  const { user } = useSelector((state) => state.auth)
  const { socketID } = useSelector((state => state.socketIO))

  const [text, setText] = useState("")

  const createPost = () => {
    request.post('/post/create', {
      text,
      userId: user.user._id,
      socketId: socketID
    }).then((response) => {
      setText('')
      navigate('/')
    })
  }

  return (
    <div>
      <Row>
        <Col span={24}>
          <label>Birşeyler Yaz</label>
          <Input.TextArea value={text} onChange={(e) => {
            setText(e.target.value)
          }} style={{ marginTop: "8px", height: "300px" }} />
        </Col>
      </Row>
      <Row style={{ marginTop: "24px" }}>
        <Col span={24}>
          <Button type="primary" className="w-full" onClick={() => {
            createPost()
          }}>Gönder Gelsin !</Button>
        </Col>
      </Row>
    </div>
  )
}

export default PostCreate
