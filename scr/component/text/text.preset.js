import { colors } from "../../theme/color";
import { typography } from "../../theme/typography";

const Base = {
    fontFamily: typography.primary,
    fontSize: 16,
    color: colors.white
}

const BaseBold = {
    fontFamily: typography.primaryBold,
    color: colors.white
}

const Bold = {
    fontFamily: typography.Bold,
    color: colors.white,
}

export const presets = {
    default: Base,
    bold: Bold,
    h1: {
        ...Bold, fontSize: 30
    },
    h2: {
        ...Bold, fontSize: 28
    },
    h3: {
        ...Bold, fontSize: 24
    },
    h4: {
        ...BaseBold, fontSize: 16
    },
    small: {
        ...Base, fontSize: 14
    }
}

// this is the common component text, very useful for every app or project you might use this every application from this by copying and changing the value only. thanks