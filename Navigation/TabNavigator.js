import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { FavouritesStackNavigator, HomeStackNavigator, PostRecipeStackNavigator, ProfileStackNavigator } from "./StackNavigator";
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';

const TabNav = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <TabNav.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: "#FC8019",
        tabBarInactiveTintColor: "black",
        tabBarStyle: {
         

         
          
          elevation: 10,
          backgroundColor: '#ffffff',
          borderTopLeftRadius: 15,
          borderTopRightRadius: 15,
          height: 76,
          shadowColor: '#000',
          shadowOpacity: 0.1,
          shadowOffset: { width: 0, height: -10 },
          shadowRadius: 10,
         
        },
        tabBarLabelStyle: {
          fontSize: 14,
          paddingBottom: 10,
          marginTop: -10,
          fontWeight: '600',
        },
        keyboardHidesTabBar:true,
        tabBarHideOnKeyboard: true
      }}
    >
      <TabNav.Screen 
        name="Home" 
        component={HomeStackNavigator}
        options={{
          tabBarIcon: ({ focused }) => (
            focused ? (
              <MaterialCommunityIcons name="home" size={26} color="#FC8019" />
            ) : (
              <MaterialCommunityIcons name="home-outline" size={26} color="black" />
            )
          ),
        }}  
      />
      <TabNav.Screen 
        name="Upload" 
        component={PostRecipeStackNavigator}
        options={{
          tabBarIcon: ({ focused }) => (
            focused ? (
              <MaterialCommunityIcons name="file-document-edit" size={26} color="#FC8019" />
            ) : (
              <MaterialCommunityIcons name="file-document-edit-outline" size={26} color="black" />
            )
          ),
        }}
      />
      <TabNav.Screen 
        name="Favourites" 
        component={FavouritesStackNavigator}
        options={{
          tabBarIcon: ({ focused }) => (
            !focused ? (
              <MaterialIcons name="favorite-border" size={26} color="black" />
            ) : (
              <MaterialIcons name="favorite" size={26} color="#FC8019" />
            )
          ),
        }}
      />
      <TabNav.Screen 
        name="Profile" 
        component={ProfileStackNavigator}
        options={{
          tabBarIcon: ({ focused }) => (
            focused ? (
              <MaterialIcons name="person" size={24} color="#FC8019" />
            ) : (
              <MaterialIcons name="person-outline" size={24} color="black" />
            )
          ),
        }}
      />
    </TabNav.Navigator>
  );
}

export default TabNavigator;