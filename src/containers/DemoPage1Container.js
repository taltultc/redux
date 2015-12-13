/**
 * Created by talc on 12/13/15.
 */
/* @flow */
/*eslint-disable prefer-const */

import React from "react-native";
import Main from "../components/main";
import NavigationBar from "../components/navigation-bar";
import DemoPage from "../components/demoPage";
import {connect} from 'react-redux/native';

let {
    Navigator,
    View,
    Text
    } = React;


class DemoPage1Container extends React.Component {


render() {
    return (
       <DemoPage {...this.props} />
    );
}
}



function mapStateToProps(state) {
    const { data} = state;


    return {
        message: data.message
    }
}

export default connect(mapStateToProps)(DemoPage1Container)