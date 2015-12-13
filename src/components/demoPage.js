/**
 * Created by talc on 12/13/15.
 */
import React from "react-native";
import { connect } from "react-redux/native";
import { fetchData } from "../actions";


let {
    Navigator,
    View,
    Text
    } = React;


class DemoPage1 extends React.Component {


    render() {
        return (
            <View style={{flex: 1}}>
<Text>{this.props.message}</Text>
</View>
);
}
}

export default DemoPage1;