import { object, string } from 'joi'

export const movieSchema = object({
  title: string().required(),
  type: string().required(),
  description: string().required()
})
