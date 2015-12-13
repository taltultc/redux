/* @flow */
/*eslint-disable prefer-const */

import React from "react-native";
import Main from "../components/main";
import NavigationBar from "../components/navigation-bar";
import DemoPage1 from "./DemoPage1Container";
import {connect} from 'react-redux/native';

let {
    Navigator,
    View
    } = React;


class MainContainer extends React.Component {

    goToNext(navigator,route){
        navigator.push({
            component: DemoPage1,
            title: "DemoPage1",
            onNext:false
        })

    }
    renderScene(route:Object, navigator:Object) {

        const Component = route.component;
        return (
            <View style={{flex: 1}}>
                <NavigationBar
                    backgroundStyle={{backgroundColor: "#eee"}}
                    navigator={navigator}
                    route={route}
                    title={route.title}
                    titleColor="#333"
                    onNext={route.onNext}
                    nextTitle={route.nextTitle}
                />
                <Component
                    navigator={navigator}
                    route={route}
                    {...route.passProps}
                />
            </View>
        );
    }

    render() {


        return (
            <Navigator
                style={{flex: 1}}
                renderScene={this.renderScene}
                configureScene={ () =>
                         Navigator.SceneConfigs.FloatFromRight
                    }
                initialRoute={{
                    component: Main,
                        title: "Starter App",
                        nextTitle: "Next1",
                        onNext: this.goToNext
                }}
            />
        );
    }
}

function mapStateToProps(state) {
    const { data} = state;

    //alert(data.currentPage)
    return {
        currentPage: data.currentPage
    }
}

export default connect(mapStateToProps)(MainContainer)
