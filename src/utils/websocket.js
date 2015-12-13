/**
 * Created by talc on 12/13/15.
 */
export default class ChatWS {
    constructor(url, token, dispatcher) {

        this.websocket = new WebSocket("ws://"+url);

        this.websocket.onmessage = function (event) {
            alert("yyy")
            dispatcher(JSON.parse(event.data));
        }

    }

    postMessage(text, fromID, toID) {
        this.websocket.send(
            JSON.stringify({
                event_type: 1,
                message: text,
                from: fromID,
                to: toID
            })
        );
    }

    close() {
        this.websocket.close();
    }

}