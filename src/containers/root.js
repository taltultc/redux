/* @flow */

import React from "react-native";
import { Provider } from "react-redux/native";
import configureStore from "../store/configure-store";
import MainContainer from "./MainContainer.js";
import WSInstance from '../utils/websocket';

const store = configureStore();

class Root extends React.Component {
  render() {
    return (
      <Provider store={store}>
        {() => <MainContainer />}
      </Provider>
    );
  }
}

export default Root;


const URL = 'echo.websocket.org';

const sock = {
  ws: null,
  URL: 'echo.websocket.org',
  wsDipatcher: (msg) => {
    const { session } = store.getState();
    alert(msg);
    //return store.dispatch(ChatActions.receiveEvent(msg, session));
  },
  wsListener: () => {

    return sock.startWS({});
    /*
    const { session, lastAction } = store.getState();

    switch (lastAction.type) {
      case ActionTypes.POST_MESSAGE:
        return sock.ws.postMessage(lastAction.text, lastAction.fromID, lastAction.toID);

      case ActionTypes.AUTH_CONNECTED:
        return sock.startWS(session);

      default:
        return;
    }
    */
  },
  startWS: (session) => {

    if(!!sock.ws){
      sock.ws.close();
    }
    session.token = "fdsf"

    if(session.token){

      //sock.ws = new WSInstance(sock.URL, session.token, sock.wsDipatcher)
      sock.ws = new WebSocket("ws://"+sock.URL);
      sock.ws.onopen = function(evt) {
        sock.ws.send("dsfsd")

      };
      sock.ws.onmessage = function (event) {
        alert(event.data)
        //dispatcher(JSON.parse(event.data));
      }
    }
  }
};

store.subscribe(() => sock.wsListener());