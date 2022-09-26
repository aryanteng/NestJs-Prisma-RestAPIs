import { ApiProperty } from '@nestjs/swagger';
import {
  IsBoolean,
  IsOptional,
  IsString,
  MaxLength,
  MinLength,
} from 'class-validator';

export class CreateArticleDto {
  @IsString()
  @MinLength(5)
  @ApiProperty()
  title: string;

  @IsString()
  @IsOptional()
  @MaxLength(300)
  @ApiProperty({ required: false, nullable: true })
  description?: string | null;

  @IsString()
  @ApiProperty()
  body: string;

  @IsBoolean()
  @ApiProperty({ required: false })
  published?: boolean = false;
}
