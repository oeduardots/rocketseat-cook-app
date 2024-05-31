import * as ingredientes from './ingredients-service'
import * as preparations from './preparations-service'
import * as recipes from './recipes-service'

export const services = {
  recipes,
  ingredientes,
  preparations,
  storage: {
    imagePath:
      'https://boxmgrbgmrhtnefdllhm.supabase.co/storage/v1/object/public/ingredients',
  },
}
