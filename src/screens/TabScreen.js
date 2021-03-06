import React from 'react';
import { Text, View } from 'react-native';
import { TabNavigator } from 'react-navigation';
import { Icon } from 'react-native-elements';

import Home from './Home';
import Chat from './Chat';
import Contact from './Contact';

class HomeScreen extends React.Component {
    static navigationOptions = {
        header: null,
      };
  render() {
    return (
      <Home>
          </Home>
    );
  }
}

class ChatScreen extends React.Component {
  render() {
    return (
      <Chat>
          </Chat>
    );
  }
}

class ContactScreen extends React.Component {
    render() {
      return (
        <Contact>
            </Contact>
      );
    }
  }
export default TabNavigator({
  Chat: {
    screen: ChatScreen,
    navigationOptions: {
      tabBarIcon: ({ tintColor }) => <Icon name="chat"  size={35} color={tintColor} />
    },
},
  Home: {
    screen: HomeScreen,
    navigationOptions: {
      tabBarIcon: ({ tintColor }) => <Icon name="home"  size={35} color={tintColor} />
    },
},
  Contact: {
    screen: ContactScreen,
    navigationOptions: {
      tabBarIcon: ({ tintColor }) => <Icon name="contacts" size={35} color={tintColor} />
    },
},
},
{
    tabBarOptions: {
      activeTintColor: '#ff7371',
      inactiveTintColor: '#6e757f',
      style: {
          backgroundColor: '#2a313d',
          height: 70,
          paddingTop: 20,
      },
      indicatorStyle: {
          backgroundColor: '#2a313d'
      },
      showIcon: true,
      showLabel: false,
    },
    swipeEnabled : true,
    backBehavior: false,
    
},
 
);