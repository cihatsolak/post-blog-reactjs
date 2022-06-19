import { Button, Card, Form, Input } from "antd";
import './SignIn.css'
import logo from '../../../assets/logos/logo.png'
import { useNavigate } from "react-router-dom";
import { request } from "../../../request/Request";
import { useDispatch } from "react-redux";
import { setUser } from "../../../store/authSlice/AuthSlice";

const SignIn = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  
  const [form] = Form.useForm()

  const onFinish = (values) => {
    request.post('/user/signIn', {
      user_name: values.username,
      password: values.password
    }).then((res) => {
      dispatch(setUser(res.data))
      navigate('/')
    })
  }
  return (
    <Card className="sign-in-card">
      <div className="sign-in-logo">
        <img alt="logo" src={logo} />
      </div>
      <Form
        form={form}
        name="login_form"
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        autoComplete="off"
        onFinish={onFinish}
      >
        <Form.Item label="Kullanıcı Adı" name="username" rules={[{ required: true, message: "Kullanıcı Adı Gir !" }]}>
          <Input autoFocus placeholder="Kullanıcı Adı .." />
        </Form.Item>
        <Form.Item label="Kullanıcı Parola" name="password" rules={[{ required: true, message: "Kullanıcı Parolası Gir !" }, {
          min: 8, message: "Parola 8 karakter olmalıdır !"
        }]}>
          <Input.Password placeholder="********" />
        </Form.Item>

        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
          <Button type="primary" htmlType="submit" className="w-full">
            Giriş Yap
          </Button>
        </Form.Item>
        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
          <Button type="link" className="w-full" onClick={() => {
            navigate('/auth/sign-up')
          }}>
            Kayıt Ol !
          </Button>
        </Form.Item>
      </Form>
    </Card>
  )
}
export default SignIn
