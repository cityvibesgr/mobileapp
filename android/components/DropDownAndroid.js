import React, {Component} from 'react';
import {View, Image, Text, StyleSheet, Picker} from 'react-native';
import HeaderImageScrollView, {TriggeringView} from 'react-native-image-header-scroll-view';
import ShopList from '../../screens/ShopList'
import PickerComp from './PickerComp'


export class DropDownAndroid extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <HeaderImageScrollView
        maxHeight={250}
        minHeight={80}
        maxOverlayOpacity={1}
        fadeOutForeground={true}
        renderHeader={() => (
        <View style={styles.content}>
          <Image source={require('../../images/toolbar.jpg')} style={styles.image}>
            <Image
              source={{
              uri: 'http://www.cityvibes.gr/static/main_app/images/logo.png'
            }}
              style={{
              height: 60,
              width: 280,
              marginTop: 40,
              marginBottom: 20,
              paddingLeft: 30
            }}/>
            <Text
              style={{
              color: 'white',
              fontSize: 18
            }}>
              Places near you
            </Text>
          </Image>
        </View>
      )}>
        <PickerComp />
        <View>
         
          <ShopList kappa={this.props.reality}/>
        </View>
      </HeaderImageScrollView>
    );
  }
}

const styles = StyleSheet.create({
  fill: {
    flex: 1,
    alignItems: "stretch",
    backgroundColor: 'black'
  },
  content: {
    flex: 1
  },
  image: {
    flex: 1,
    width: null,
    height: null,
    marginTop: 24,
    alignItems: 'center',
    justifyContent: 'center'
  }
});
