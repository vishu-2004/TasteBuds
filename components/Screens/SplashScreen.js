import React, { useEffect } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import Animated, { useSharedValue, useAnimatedStyle, withSpring } from 'react-native-reanimated';
import { useNavigation } from '@react-navigation/native';

const SplashScreen = () => {
  const ring1padding = useSharedValue(0);
  const ring2padding = useSharedValue(0);

  const navigation = useNavigation();

  useEffect(() => {
    ring1padding.value = 0;
    ring2padding.value = 0;
    setTimeout(() => {
      ring1padding.value = withSpring(ring1padding.value + 40);
    }, 100);
    setTimeout(() => {
      ring2padding.value = withSpring(ring2padding.value + 20);
    }, 200);

    setTimeout(() => {
      navigation.replace('MainApp'); // Navigate to MainApp after splash screen
    }, 2000);

  }, []);

  const outerCircleStyle = useAnimatedStyle(() => {
    return {
      padding: ring1padding.value,
    };
  });

  const innerCircleStyle = useAnimatedStyle(() => {
    return {
      padding: ring2padding.value,
    };
  });

  return (
    <View style={styles.container}>
      <StatusBar style='light' />
      <Animated.View style={[styles.OuterCircle, outerCircleStyle]}>
        <Animated.View style={[styles.innerCircle, innerCircleStyle]}>
          <Image style={styles.image} source={require('../../assets/Bowl.png')} />
        </Animated.View>
      </Animated.View>
      <View style={styles.textContainer}>
        <Text style={styles.text}>TasteBuds</Text>
        <Text style={{ fontSize: 22, color: "white", fontWeight: "500" }}>DIY Cooking!</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: "center",
    backgroundColor: "#FC8019",
    paddingTop: 30,
  },
  OuterCircle: {
    borderRadius: 180,
    backgroundColor: 'rgba(255, 255, 255, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  innerCircle: {
    borderRadius: 160,
    backgroundColor: 'rgba(255, 255, 255, 0.6)',
    opacity: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: 200,
    height: 200,
    zIndex: 1,
    marginTop: 16,
  },
  textContainer: {
    marginTop: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 37,
    color: "white",
    fontWeight: "800",
  }
});

export default SplashScreen;
