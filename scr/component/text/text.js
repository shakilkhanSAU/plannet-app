import { Text as RNtext, StyleSheet } from 'react-native'
import React from 'react'
import { presets } from './text.preset'

export default function Text({ children, preset = "default", style }) {
    const textSyles = StyleSheet.compose(presets[preset], style)
    return (
        <RNtext style={textSyles}>{children}</RNtext>
    )
}