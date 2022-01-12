import { IsNotEmpty } from 'class-validator';
export class CreateCatDto {
  @IsNotEmpty()
  readonly name: string;

  @IsNotEmpty()
  readonly age: number;
  
  @IsNotEmpty()
  readonly breed: string;
}
