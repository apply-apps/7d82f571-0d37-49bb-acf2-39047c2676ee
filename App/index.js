// Filename: index.js
// Combined code from all files

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { SafeAreaView, StyleSheet, Text, TouchableOpacity, View, ScrollView } from 'react-native';

const Stack = createStackNavigator();

const HomeScreen = ({ navigation }) => {
    const tales = [
        { id: '1', title: 'Cinderella', content: 'Once upon a time, there was a beautiful girl named Cinderella...' },
        { id: '2', title: 'Little Red Riding Hood', content: 'Once upon a time, there was a little girl who always wore a red riding hood...' },
        { id: '3', title: 'Three Little Pigs', content: 'Once upon a time, there were three little pigs who went off to build their own houses...' },
    ];

    return (
        <SafeAreaView style={styles.homeContainer}>
            <Text style={styles.homeTitle}>Select a Tale</Text>
            {tales.map(tale => (
                <TouchableOpacity key={tale.id} style={styles.homeButton} onPress={() => navigation.navigate('Tale', { title: tale.title, content: tale.content })}>
                    <Text style={styles.homeButtonText}>{tale.title}</Text>
                </TouchableOpacity>
            ))}
        </SafeAreaView>
    );
};

const TaleScreen = ({ route }) => {
    const { title, content } = route.params;

    return (
        <SafeAreaView style={styles.taleContainer}>
            <Text style={styles.taleTitle}>{title}</Text>
            <ScrollView>
                <Text style={styles.taleContent}>{content}</Text>
            </ScrollView>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    homeContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        margin: 20,
    },
    homeTitle: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    homeButton: {
        backgroundColor: '#CE8ABD',
        padding: 15,
        borderRadius: 10,
        marginVertical: 10,
        width: '80%',
        alignItems: 'center',
    },
    homeButtonText: {
        color: '#FFFFFF',
        fontSize: 18,
    },
    taleContainer: {
        flex: 1,
        padding: 20,
    },
    taleTitle: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
        textAlign: 'center',
    },
    taleContent: {
        fontSize: 16,
        lineHeight: 24,
    },
});

export default function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Home">
                <Stack.Screen name="Home" component={HomeScreen} options={{ title: 'Tales for Kids' }} />
                <Stack.Screen name="Tale" component={TaleScreen} options={({ route }) => ({ title: route.params.title })} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}