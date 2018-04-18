import { Platform, Linking } from 'react-native'

const isValidLatLong = (num, range) => typeof num === 'number' && num <= range && num >= -1 * range

const isValidCoordinates = coords =>
  isValidLatLong(coords.latitude, 90) && isValidLatLong(coords.longitude, 180)


function getDirections ({ destination } = {}) {
    let langLong = '';
    if (destination && isValidCoordinates(destination)) {
        langLong = `${destination.latitude},${destination.longitude}`
    }

    const url = Platform.OS === 'ios'? `maps:0,0?q=${langLng}` : `geo:0,0?q=${langLong}`
    return Linking.canOpenURL(url).then(supported => {
        return (!supported) ? Promise.reject(new Error(`Could not open the url: ${url}`)): Linking.openURL(url);
    })
}

export default getDirections