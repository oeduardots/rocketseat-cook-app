import { StyleSheet } from 'react-native'

import { theme } from '@/theme'

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    backgroundColor: theme.colors.gray_300,
    height: 192,
    width: '100%',
  },
  body: {
    backgroundColor: theme.colors.white,
    borderTopStartRadius: theme.borderRadius.lg,
    borderTopEndRadius: theme.borderRadius.lg,
    marginTop: -24,
  },
  header: {
    padding: 32,
  },
  content: {
    padding: 32,
  },
  name: {
    fontFamily: theme.fonts.family.bold,
    fontSize: theme.fonts.size.heading.md,
    marginTop: 22,
  },
  preparation: {
    fontFamily: theme.fonts.family.medium,
    fontSize: theme.fonts.size.heading.sm,
    marginBottom: 16,
  },
  time: {
    color: theme.colors.gray_400,
    fontSize: theme.fonts.size.body.sm,
    fontFamily: theme.fonts.family.regular,
  },
})
