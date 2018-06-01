import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { StyleSheet } from 'react-native';
import MapView from 'react-native-maps';
import { Marker } from 'react-native-maps';
export default class App extends Component {

  state = {
    region: {
      latitude: -8.149407,
      longitude: 115.216667,
      latitudeDelta: 0.8922,
      longitudeDelta: 0.8421,
    },
    markers : [
      {
        key:1,
        latlng: {
          latitude:-8.160609,
          longitude: 115.0299151
        },
        title: 'Pantai Lovina',
        subtitle: ''
      },
      {
        key:2,
        latlng: {
          latitude:-8.2570585,
          longitude: 115.0970101
        },
        title: 'Danau Buyan dan Tamblingan',
        subtitle: ''
      },
      {
        key:3,
        latlng: {
          latitude:-8.1876656,
          longitude: 115.13664
        },
        title: 'Air Terjun Gitgit'
      },
      {
        key:4,
        latlng: {
          latitude:-8.1776622,
          longitude: 115.1845443
        },
        title: 'Sekumpul Waterfall'
      },
       {
        key:5,
        latlng: {
          latitude:--8.0777598,
          longitude: 115.2171964
        },
        title: 'Kolam Renang Air Sanih'
      },
      {
        key:6,
        latlng: {
          latitude:-8.103506,
          longitude: 115.089011
        },
        title: 'Eks Pelabuhan Buleleng'
      },
      {
        key:7,
        latlng: {
          latitude:-8.1221151,
          longitude: 115.0645613
        },
        title: 'Pantai Penimbangan'
      },
   ]
  };

  render() {
    return (
      <View style={styles.contMain}>
        <View style={styles.contHeader}>
            <Text style={styles.textHeader}>
              Objek Wisata Di Kabupaten Buleleng
            </Text>
        </View>
        <View style={styles.contMaps}>
              <MapView
                style={styles.map}
                region={this.state.region}
              >
              {this.state.markers.map(mark => (
              <Marker
                  key = {mark.key}
                  coordinate={mark.latlng}
                  title={mark.title}
                  description={mark.subtitle}
                />
              ))}
              </MapView>
        </View>
        <View style={styles.contFooter}>
           <Text style={styles.textFooter}> Sudarma Yasa Maps</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  map: {
    ...StyleSheet.absoluteFillObject,
  },
  contMain: {
      flex : 1
  },
  contHeader: {
    backgroundColor: 'green',
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    position: 'relative'
  },
  contMaps : {
    flex : 10
  },
  textHeader: {
    fontSize: 20,
    color: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  contFooter: {
    backgroundColor: 'green',
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    position: 'relative'
  },
  textFooter: {
    fontSize: 16,
    color: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  }

});