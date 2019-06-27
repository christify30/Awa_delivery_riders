import React from 'react';
import {StyleSheet,Text} from 'react-native'
import {View} from 'native-base';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';

 const map=({region}) =>{
    return (
        <View style={styles.container}>
            <MapView
                provider={PROVIDER_GOOGLE} // remove if not using Google Maps
                style={styles.map}
                region={region}
                >
               <MapView.Marker coordinate={region} pinColor='#339966'/>
            </MapView> 
        </View>
    );
}
const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    },
    map:{
        ...StyleSheet.absoluteFillObject
    }
})
export default map;