import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const TravelNetworkApp = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Travel Network</Text>
      </View>
      

      <View style={styles.storyContainer}>
       <Image source={require('./assets/user.png')} style={styles.story} />
       <Image source={require('./assets/user.png')} style={styles.story} />
       <Image source={require('./assets/user.png')} style={styles.story} />
      </View>
      
      <View style={styles.main}>
        <View style={styles.userPost}>
          <Text style={styles.userName}>Tatuli L</Text>
          <Image source={require('./assets/travel.jpg')} style={styles.picture} />
          <Text style={styles.postTitle}>Somewehere In Europe... #travel</Text>
        </View>
      </View>
      
      <View style={styles.footer}>
        <Text style={styles.footerText}>© 2024 Tavel Network by Tatuli L</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    height: 50,
    backgroundColor: 'lightblue',
    justifyContent: 'center',
    paddingLeft: 10, 
    marginTop: 50,
  },
  headerText: {
    fontSize: 20,
  },
  storyContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    padding: 10,
  },
  story: {
    width: 50,
    height: 50,
    backgroundColor: 'gray',
    borderRadius: 25,
    marginRight: 10,
  },
  main: {
    marginTop: 20,
    alignItems: 'flex-start', 
  },
  userPost: {
  },

  userName: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    marginLeft: 10,

  },
  picture: {
    width: 400, 
    height: 500, 
    borderRadius: 10,
    marginBottom: 10,
    marginLeft: 0,
  },
  postTitle: {
    fontSize: 16,
  },
  footer: {
    height: 50,
    backgroundColor: 'lightblue',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
  },
  footerText: {
    fontSize: 14,
    color: '#666',
  },
})

export default TravelNetworkApp
