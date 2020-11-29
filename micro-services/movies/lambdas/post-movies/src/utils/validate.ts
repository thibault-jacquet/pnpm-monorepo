import { BadRequestException } from '@mimir/exceptions'
import { plainToClass } from 'class-transformer'
import { validateOrReject } from 'class-validator'

import { MovieDto } from '../dtos/movie.dto'

export const validate = async (movieDto: MovieDto): Promise<void> => {
  try {
    const movie = plainToClass(MovieDto, movieDto)
    await validateOrReject(movie)
  } catch (errors) {
    throw new BadRequestException(errors)
  }
}
