import React from 'react';
import { View, Text, Button, StyleSheet, TouchableOpacity, ScrollView, TextInput  } from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation';


class NavigationBar extends React.Component {
    render() {
        return (
            <View style={styles.navigationBar}>
                <TouchableOpacity
                    onPress={() => this.props.navigation.navigate('Home')}
                    style={[styles.button, {fontsize: 10, borderRadius: 10}]}
                >
                    <Text style={{}}>Home</Text>
                </TouchableOpacity>
            </View>
        );
    }
}


class HomeScreen extends React.Component {
    static navigationOptions = {
        title: 'Home',
        headerStyle: {
            backgroundColor: 'grey',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
            fontWeight: 'bold',
        },
    };

    render() {
        const logout = <TouchableOpacity
                            style={styles.button}
                            onPress={() => {
                                this.props.navigation.navigate('Home', {
                                    user: "Guest",
                                    login: false,
                                });
                                alert("logout successful");
                            }}
                        >
                            <Text>Logout</Text>
                        </TouchableOpacity>
        const { navigation } = this.props;
        const user = navigation.getParam('user', 'Guest');
        const login = navigation.getParam('login', false);

        return (
            <View style={styles.container}>

                <View style={styles.navigationBar}>
                    <Text>Hello, {JSON.stringify(user)}</Text>
                    {login? logout:null}
                </View>

                <Text>Home Screen</Text>
                <View style={{padding: 10}}>
                    <TouchableOpacity
                        style = {styles.button}
                        onPress={() => {
                            this.props.navigation.navigate('Direction');
                        }}
                    >
                        <Text> Start </Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}

class DirectionScreen extends React.Component {
    static navigationOptions = {
        title: 'Direction Page',
        headerStyle: {
            backgroundColor: 'grey',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
            fontWeight: 'bold',
        },
    };

    render() {
        //const { navigation } = this.props;
        //const itemId = navigation.getParam('itemId', 'NO-ID');
        //const otherParam = navigation.getParam('otherParam', 'some default value');

        return (
            <View style={styles.container}>

                <View style={styles.navigationBar}>
                    <TouchableOpacity
                        onPress={() => this.props.navigation.navigate('Home')}
                        style={[styles.button, {fontsize: 10, borderRadius: 10}]}
                    >
                        <Text style={{}}>Home</Text>
                    </TouchableOpacity>
                </View>

                <Text>Details Screen</Text>
                <View style={{padding: 10}}>
                    <TouchableOpacity
                        style = {styles.button}
                        onPress={() => {
                            this.props.navigation.navigate('Login');
                        }}
                    >
                        <Text> Login </Text>
                    </TouchableOpacity>
                </View>
                <View>
                    <TouchableOpacity
                        style = {styles.button}
                        onPress={() => {
                        this.props.navigation.navigate('Register');
                    }}
                    >
                        <Text> Register </Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}

class LoginScreen extends React.Component {
    state={
        user: "Guest"
    }


    static navigationOptions = {
        title: 'Login',
        headerStyle: {
            backgroundColor: 'grey',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
            fontWeight: 'bold',
        },
    };

    navi = () => {

    }

    render() {
        return (
            <View style={styles.container}>

                <View style={styles.navigationBar}>
                    <TouchableOpacity
                        onPress={() => {
                            this.props.navigation.navigate('Home');
                        }}
                        style={[styles.button, {fontsize: 10, borderRadius: 10}]}
                    >
                        <Text style={{}}>Home</Text>
                    </TouchableOpacity>
                </View>

                <Text>LOGIN</Text>
                <View style={{padding: 10, width: "50%"}}>
                    <TextInput
                        style={{height: 20, borderColor: 'gray', borderWidth: 1}}
                        placeholder={"Username"}
                        onChangeText={(user) => this.setState({user})}
                    />
                    <TextInput
                        style={{height: 20, borderColor: 'gray', borderWidth: 1}}
                        placeholder={"Password"}
                    />
                </View>
                <TouchableOpacity
                    style = {[styles.button, {width: "50%"}]}
                    onPress={() => {
                        this.props.navigation.navigate('Home', {
                            user: this.state.user,
                            login: (this.state.user === "Guest") ? false : true,
                        });
                        {(this.state.user === "Guest")?alert("login FALSE"):alert("login successful")}
                    }}
                >
                    <Text> Login </Text>
                </TouchableOpacity>
                <View style={{padding: 10}}>
                    <TouchableOpacity
                        style={{}}
                        onPress={() => {
                            this.props.navigation.navigate('Register');
                        }}
                    >
                        <Text style={{textDecorationLine: "underline"}}> Register Now!! </Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}

class RegisterScreen extends React.Component {
    static navigationOptions = {
        title: 'register',
        headerStyle: {
            backgroundColor: 'grey',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
            fontWeight: 'bold',
        },
    };

    render() {
        return (
            <View style={styles.container}>

                <View style={styles.navigationBar}>
                    <TouchableOpacity
                        onPress={() => this.props.navigation.navigate('Home')}
                        style={[styles.button, {fontsize: 10, borderRadius: 10}]}
                    >
                        <Text style={{}}>Home</Text>
                    </TouchableOpacity>
                </View>

                <Text>REGISTER</Text>
                <View style={{padding: 10, width: "50%"}}>
                    <TextInput
                        style={{height: 20, borderColor: 'gray', borderWidth: 1}}
                        placeholder={"New Username"}
                    />
                </View>
                <View style={{padding: 10, width: "50%"}}>
                    <TextInput
                        style={{height: 20, borderColor: 'gray', borderWidth: 1}}
                        placeholder={"New Password"}
                    />
                    <TextInput
                        style={{height: 20, borderColor: 'gray', borderWidth: 1}}
                        placeholder={"Confirm Password"}
                    />
                </View>
                <View style={{padding: 10, width: "50%"}}>
                    <TextInput
                        style={{height: 20, borderColor: 'gray', borderWidth: 1}}
                        placeholder={"Your Email"}
                    />
                    <TextInput
                        style={{height: 20, borderColor: 'gray', borderWidth: 1}}
                        placeholder={"Confirm Email"}
                    />
                </View>
                <TouchableOpacity
                    style = {[styles.button, {width: "50%"}]}
                    onPress={() => {
                        this.props.navigation.navigate('Home');
                    }}
                >
                    <Text> Register </Text>
                </TouchableOpacity>
                <View style={{padding: 10}}>
                    <TouchableOpacity
                        style={{}}
                        onPress={() => {
                            this.props.navigation.navigate('Login');
                        }}
                    >
                        <Text style={{textDecorationLine: "underline"}}>  Already have an Account? Login now </Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}

const AppNavigator = createStackNavigator(
    {
        Home: HomeScreen,
        Direction: DirectionScreen,
        Login: LoginScreen,
        Register: RegisterScreen
    },
    {
        initialRouteName: 'Home',
    }
);

const AppContainer = createAppContainer(AppNavigator);

export default class App extends React.Component {
    render() {
        return <AppContainer />;
    }
}





const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',

    },
    button: {
        alignItems: 'center',
        backgroundColor: '#DDDDDD',
        padding: 10,
    },
    navigationBar: {
        backgroundColor: '#bfbfbf',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 5,
        top: 0,
        left: 0,
        right: 0,
        position: "absolute",
    }
});

