import { BadRequestException } from '@mimir/exceptions'
import { IMovie } from '@mimir/interfaces'

import { movieSchema } from '../schemas/movie.schema'

export const validate = async (moviePayload: IMovie): Promise<void> => {
  try {
    await movieSchema.validateAsync(moviePayload)
  } catch (errors) {
    throw new BadRequestException(errors)
  }
}
