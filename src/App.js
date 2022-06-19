import { useEffect } from "react";
import { socket } from "./socket/socket";
import store from './store/store'
import { setSocketID } from "./store/socketSlice/SocketSlice";
import Router from "./router/Router";

function App() {

  useEffect(() => {
    socket.on('connect', () => {
      store.dispatch(setSocketID(socket.id))
    })
  })

  return (
    <>
      <Router />
    </>
  );
}

export default App;
