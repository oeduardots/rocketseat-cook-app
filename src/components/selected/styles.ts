import { StyleSheet } from 'react-native'

import { theme } from '@/theme'

export const styles = StyleSheet.create({
  container: {
    alignSelf: 'center',
    backgroundColor: theme.colors.black,
    borderRadius: theme.borderRadius.lg,
    bottom: 24,
    padding: 24,
    position: 'absolute',
    width: '100%',
  },
  header: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 34,
  },
  label: {
    color: theme.colors.white,
    fontFamily: theme.fonts.family.regular,
    fontSize: theme.fonts.size.body.sm,
  },
})
