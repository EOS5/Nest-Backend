import { IsNotEmpty } from 'class-validator'

export class CreateAdressDto{
    @IsNotEmpty()
    line1: string;

    line2?: string;

    @IsNotEmpty()
    line3: string;

    @IsNotEmpty()
    line4: string;

    @IsNotEmpty()
    line5: string;
}