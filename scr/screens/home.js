import { View, FlatList, Pressable, StyleSheet, Platform, StatusBar, TextInput } from 'react-native'
import React, { useState } from 'react'
import Text from '../component/text/text'
import PlannetHeader from '../component/PlannetHeader/PlannetHeader';
import { colors } from '../theme/color';
import { PLANET_LIST } from '../data/data';
import { spacing } from '../theme/spacing';
import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native'


// planet item component
const PlanetItem = ({ item }) => {
    const navigation = useNavigation();
    const { name, color } = item;
    return (
        <Pressable
            onPress={() => {
                navigation.navigate('Details', { planet: item })
            }}
            style={styles.item}>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <View style={[styles.circle, { backgroundColor: color }]} />
                {/* eksathe jodi stylesheet and other style add korar dorkar lage tobe ekta array er moddhe dite hoy */}
                <Text preset='h4' style={styles.itemName}>{name}</Text>
            </View>
            <Feather name="chevron-right" size={16} color="white" />
        </Pressable>
    )
}


export default function Home() {
    // planet list 
    const renderItem = ({ item }) => {
        return (
            <PlanetItem item={item}></PlanetItem>
        );
    }

    // use state from react
    const [list, setList] = useState(PLANET_LIST);


    // filtering function 
    const searchFilter = (text) => {

        // list filter logic
        const filteredList = PLANET_LIST.filter((item) => {
            const itemName = item.name.toLocaleLowerCase();
            const typedName = text.toLocaleLowerCase();
            // logic that return something in filtered list (er mane item er sathe mile jay emn name er list ta filtered list e return korbe)
            return itemName.indexOf(typedName) > -1;
        });
        setList(filteredList);
    }



    // main return object
    return (
        <View style={styles.AndroidSafeArea}>
            <PlannetHeader></PlannetHeader>
            <TextInput
                style={styles.searchInput}
                placeholder="Type The Planet Name"
                placeholderTextColor={colors.white}
                autoCorrect={false}
                onChangeText={(text) => { searchFilter(text) }}
            />
            <FlatList
                contentContainerStyle={styles.list}
                data={list}
                keyExtractor={(item) => item.name}
                // renderItem ekta function ney, jekhane
                renderItem={renderItem}
                ItemSeparatorComponent={() => <View style={styles.separator} />}
            />
        </View>
    )
}


// style sheet 
const styles = StyleSheet.create({
    AndroidSafeArea: {
        flex: 1,
        backgroundColor: colors.black,
        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0
    },
    item: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: spacing[4]
    },
    list: {
        padding: spacing[4]
    },
    circle: {
        width: 30,
        height: 30,
        borderRadius: 15,
    },
    itemName: {
        textTransform: 'uppercase',
        marginLeft: spacing[5]
    },
    separator: {
        borderBottomWidth: .5,
        borderBottomColor: colors.white,
    },
    searchInput: {
        color: colors.white,
        borderBottomColor: colors.white,
        borderBottomWidth: .7,
        margin: spacing[4],
        fontSize: 16,
        padding: spacing[2]

    }
});

// flatlist e style koraar jonoo contentcontainerstyle use kora lage