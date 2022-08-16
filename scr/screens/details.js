import { View, StyleSheet, Platform, StatusBar, ScrollView, Pressable, Image, Linking } from 'react-native'
import React from 'react'
import Text from '../component/text/text'
import { colors } from '../theme/color'
import PlannetHeader from '../component/PlannetHeader/PlannetHeader'
import { spacing } from '../theme/spacing'
import { FontAwesome5 } from '@expo/vector-icons';


const PlanetSection = ({ title, value }) => {
    return (
        <View style={styles.planetBar}>
            <Text preset='h3' style={{ textTransform: 'uppercase' }}>{title}</Text>
            <Text preset='h3' style={{ textTransform: 'uppercase' }}>{value}</Text>
        </View>
    )
};

export default function Details({ route }) {
    const planet = route.params.planet;
    const { name, description, rotationTime, revolutionTime, radius, avgTemp, wikiLink } = planet;

    const renderImage = (name) => {
        switch (name) {
            case 'mercury':
                return <Image
                    style={styles.planetImage}
                    source={require('../image/mercury.png')}
                />;
            case 'venus':
                return <Image
                    style={styles.planetImage}
                    source={require('../image/venus.png')}
                />;
            case 'earth':
                return <Image
                    style={styles.planetImage}
                    source={require('../image/earth.png')}
                />;
            case 'mars':
                return <Image
                    style={styles.planetImage}
                    source={require('../image/mars.png')}
                />;
            case 'jupiter':
                return <Image
                    style={styles.planetImage}
                    source={require('../image/jupiter.png')}
                />;
            case 'saturn':
                return <Image
                    style={styles.planetImage}
                    source={require('../image/saturn.png')}
                />;
            case 'uranus':
                return <Image
                    style={styles.planetImage}
                    source={require('../image/uranus.png')}
                />;
            case 'neptune':
                return <Image
                    style={styles.planetImage}
                    source={require('../image/neptune.png')}
                />;
        }
    };

    // linking 
    const handleWikiLink = () => {
        Linking.openURL(wikiLink)
    }

    return (
        <View style={styles.AndroidSafeArea}>
            <PlannetHeader backBtn={true}></PlannetHeader>
            <ScrollView>
                <View style={styles.planetView}>
                    {renderImage(name)}
                </View>
                <View style={styles.detailsView}>
                    <Text preset='h1' style={styles.name}>{name}</Text>
                    <Text style={styles.description}>{description}</Text>
                    <View style={styles.source}>
                        <Text>Source: </Text>
                        <Pressable style={{ flexDirection: 'row', alignItems: 'center' }} onPress={handleWikiLink}>
                            <Text preset='h4' style={styles.wikipedia}>Wikipedia:</Text>
                            <FontAwesome5 style={{ paddingLeft: 3 }} name="external-link-alt" size={14} color="white" />
                        </Pressable>
                    </View>
                </View>
                <View style={styles.planetInfo}>
                    <PlanetSection title="Rotation time" value={rotationTime}></PlanetSection>
                    <PlanetSection title="revolution time" value={revolutionTime}></PlanetSection>
                    <PlanetSection title="radius" value={radius}></PlanetSection>
                    <PlanetSection title="average temp." value={avgTemp}></PlanetSection>
                </View>
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    AndroidSafeArea: {
        flex: 1,
        backgroundColor: colors.black,
        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0
    },
    planetView: {
        padding: spacing[10],
        alignItems: 'center',
        justifyContent: 'center'
    },
    detailsView: {
        marginTop: spacing[5],
        marginHorizontal: spacing[5],
        alignItems: 'center',
        justifyContent: 'center'
    },
    name: {
        textTransform: 'uppercase',
        marginTop: spacing[5],

    },
    description: {
        lineHeight: 22,
        textAlign: 'center',
        marginTop: spacing[6]
    },
    source: {
        flexDirection: 'row',
        marginTop: spacing[5],
    },
    wikipedia: {
        textDecorationLine: 'underline',
    },
    planetImage: {
        width: 300,
        height: 300,
        resizeMode: 'contain'
    },
    planetBar: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: spacing[3],
        borderWidth: .5,
        borderColor: colors.grey,
        marginHorizontal: spacing[5],
        marginBottom: spacing[2],
    },
    planetInfo: {
        marginTop: spacing[10],
        marginBottom: spacing[6]
    }
})