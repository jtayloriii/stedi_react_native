import React from "react";
import { StyleSheet, Text, View, Image, Alert } from 'react-native';
import { Card, ListItem, Button, Icon } from 'react-native-elements';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { clickProps } from "react-native-web/dist/cjs/modules/forwardedProps";


function Setting(props) {
    return(
      <View>
      <Text>
          Welcome {props.loggedInUser}
      </Text>
      <Button
      title="Log In"
      onPress={() => Alert.alert('Simple Button pressed')}
    />
      </View>
    )
  }

export default Setting;