import { StyleSheet } from 'react-native'

import { theme } from '@/theme'

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
  },
  title: {
    fontFamily: theme.fonts.family.bold,
    fontSize: theme.fonts.size.heading.xl,
    lineHeight: 44,
    marginTop: 42,
  },
  subtitle: {
    fontFamily: theme.fonts.family.regular,
  },
  message: {
    color: theme.colors.gray_400,
    fontFamily: theme.fonts.family.regular,
    fontSize: theme.fonts.size.body.md,
    marginBottom: 38,
    marginTop: 12,
  },
  ingredient: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 12,
    paddingBottom: 200,
  },
})
