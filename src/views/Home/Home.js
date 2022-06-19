import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { request } from "../../request/Request";
import { setPosts } from "../../store/postSlice/PostSlice";
import { Card, Col, Row } from "antd";
import moment from "moment";
import { socket } from "../../socket/socket";

const Home = () => {
  const { posts } = useSelector((state) => state.post)
  const dispatch = useDispatch()

  useEffect(() => {
    request.get('/post/list').then((res) => {
      dispatch(setPosts(res.data))
    })
  }, [])

  useEffect(() => {
    socket.on('new_post', (data) => {
      const arr = [...posts]
      arr.unshift(data.payload)
      dispatch(setPosts(arr))
    })
  }, [posts])
  
  return (
    <>
      <Row>
        <Col span={24}>
          {posts && posts.map((item) => {
            return (
              <Card style={{ marginBottom: "16px" }}
                actions={[
                  <div>
                    {
                      moment().diff(moment(item.createdAt), 'hour') === 0
                        ? moment().diff(moment(item.createdAt), 'minute') + " dk önce" :
                        moment().diff(moment(item.createdAt), 'hour') + " saat önce"

                    }
                  </div>
                ]}

                key={item._id} title={item.userId?.full_name}>
                {item.text}
              </Card>
            )
          })}
        </Col>
      </Row>
    </>
  )
}
export default Home
