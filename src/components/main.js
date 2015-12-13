/**
 * Created by talc on 12/13/15.
 */
/* @flow */
/*eslint-disable prefer-const */

import React from "react-native";
import { connect } from "react-redux/native";
import { fetchData } from "../actions";
import NavigationBar from "./navigation-bar";

let {
    Text,
    ScrollView,
    Navigator
    } = React;

class Main extends React.Component {
    componentDidMount() {
        this.props.dispatch(fetchData());
        NavigationBar.onNext = ()=> {
            navigator.push({
                component: DemoPage1,
                name: 'page 2'
            })
        }
    }

    render() {
        return (
            <ScrollView
        style={{flex: 1}}
    contentContainerStyle={{
    justifyContent: "center",
    alignItems: "center"
}}
>
<Text>{this.props.isFetching ? "Loading" : this.props.message}</Text>
</ScrollView>
);
}
}

Main.propTypes = {
    dispatch: React.PropTypes.func,
    message: React.PropTypes.string,
    isFetching: React.PropTypes.bool
};

Main.defaultProps = {
    dispatch: () => {},
    isFetching: false,
    message: ""
};

export default connect((state) => ({
    isFetching: state.data.isFetching,
    message: state.data.message
}))(Main);
