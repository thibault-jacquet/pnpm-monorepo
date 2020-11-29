import { IMovie } from '@mimir/interfaces'
import { IsString } from 'class-validator'

export class MovieDto implements IMovie {
  @IsString()
  title!: string

  @IsString()
  type!: string

  @IsString()
  description!: string
}
