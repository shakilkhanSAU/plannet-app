import { View, StyleSheet, Pressable } from 'react-native'
import React from 'react'
import Text from '../text/text'
import { spacing } from '../../theme/spacing'
import { colors } from '../../theme/color'
import { AntDesign } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native'

export default function PlannetHeader({ backBtn, title = 'THE PLANETS' }) {
    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            {backBtn && (
                <Pressable onPress={() => { navigation.goBack() }}>
                    <AntDesign style={{ marginRight: spacing[4] }} name="left" size={24} color="white" />
                </Pressable>
            )}
            <Text preset='h2'>{title}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: spacing[5],
        borderBottomWidth: .2,
        borderBottomColor: colors.white,
    }
})