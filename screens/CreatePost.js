import {
  View,
  StyleSheet,
  Image,
  Text,
  SafeAreaView,
  ScrollView,
  Platform,
  StatusBar,
  TextInput,
} from 'react-native';
import React, { Component } from 'react';
import DropDownPicker from 'react-native-dropdown-picker';
import { RFValue } from 'react-native-responsive-fontsize';

export default class CreatePost extends Component {
  constructor(){
    super()
    this.state = {
      previewImage: "image_1",
    };
  }
  render() {
    var preview_images = {
      image_1: require('../assets/image_1.jpg'),
      image_2: require('../assets/image_2.jpg'),
      image_3: require('../assets/image_3.jpg'),
      image_4: require('../assets/image_4.jpg'),
      image_5: require('../assets/image_5.jpg'),
      image_6: require('../assets/image_6.jpg'),
      image_7: require('../assets/image_7.jpg'),
    };
    return (
      <View style={styles.container}>
        <SafeAreaView style={styles.droidSafeArea} />
        <View style={styles.appTitle}>
          <View style={styles.appIcon}>
            <Image
              source={require('../assets/logo.png')}
              style={styles.iconImage}
            />
          </View>
          <View style={styles.appTitleTextContainer}>
            <Text style={styles.appTitleText}>New Post</Text>
          </View>
        </View>
        <View style={styles.feildsContainer}>
          <ScrollView>
            <Image
              source={preview_images[this.state.previewImage]}
              style={styles.previewImage}
            />
            <View style={{ height: RFValue(this.state.dropdownHeight) }}>
              <DropDownPicker
                items={[
                  { label: 'Image1', value: 'image_1' },
                  { label: 'Image2', value: 'image_2' },
                  { label: 'Image3', value: 'image_3' },
                  { label: 'Image4', value: 'image_4' },
                  { label: 'Image5', value: 'image_5' },
                  { label: 'Image6', value: 'image_6' },
                  { label: 'Image7', value: 'image_7' },
                ]}
                defaultValue={this.state.previewImage}
                containerStyle={{
                  height: 40,
                  borderRadius: 20,
                  marginBottom: 10,
                }}
                onOpen={() => {
                  this.setState({
                    dropdownHeight: 170,
                  });
                }}
                onClose={() => {
                  this.setState({
                    dropdownHeight: 40,
                  });
                }}
                style={{ backgroundColor: '#d9b3ff' }}
                itemStyle={{ justifyContent: 'flex-start' }}
                dropDownStyle={{ backgroundColor: '#d9b3ff' }}
                labelStyle={{ color: '#00b3b3' }}
                arrowStyle={{ color: '#00b3b3' }}
                onChangeItem={(item) =>
                  this.setState({
                    previewImage: item.value,
                  })
                }
              />
            </View>
            <TextInput
              style={styles.inputFont}
              onChangeText={(title) =>
                this.setState({
                  title,
                })
              }
              placeholder={'Title'}
              placeholderTextColor={'#d9b3ff'}
            />
            <TextInput
              style={[
                styles.inputFont,
                styles.inputFontExtra,
                styles.inputText,
              ]}
              onChangeText={(description) =>
                this.setState({
                  description,
                })
              }
              placeholder={'Description'}
              placeholderTextColor={'#d9b3ff'}
              multiline={true}
              numberOfLines={6}
            />
            <TextInput
              style={[
                styles.inputFont,
                styles.inputFontExtra,
                styles.inputText,
              ]}
              onChangeText={(Post) =>
                this.setState({
                  Post,
                })
              }
              placeholder={'Post'}
              placeholderTextColor={'#d9b3ff'}
              multiline={true}
              numberOfLines={10}
            />
          </ScrollView>
        </View>
        <View style={{ flex: 0.08 }}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#5900b3',
  },
  droidSafeArea: {
    marginTop:
      Platform.OS === 'android' ? StatusBar.currentHeight : RFValue(35),
  },
  appTitle: {
    flex: 0.07,
    flexDirection: 'row',
  },
  appIcon: {
    flex: 0.3,
    justifyContent: 'center',
    alignItems: 'center',
  },
  iconImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
  },
  appTitleTextContainer: {
    flex: 0.7,
    justifyContent: 'center',
  },
  appTitleText: {
    color: '#d9b3ff',
    fontSize: RFValue(28),
  },
  feildsContainer: {
    flex: 0.85,
  },
  previewImage: {
    width: '93%',
    height: RFValue(250),
    alignSelf: 'center',
    borderRadius: RFValue(10),
    marginVertical: RFValue(10),
    resizeMode: 'contain',
  },
  inputFont: {
    height: RFValue(140),
    borderColor: '#00b3b3',
    borderWidth: RFValue(1),
    borderRadius: RFValue(10),
    paddingLeft: RFValue(10),
    color: '#00b3b3',
  },
  inputFontExtra: {
    marginTop: RFValue(50),
  },
  inputText: {
    textAlignVertical: 'top',
    padding: RFValue(5),
  },
});

