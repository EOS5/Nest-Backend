import { IsEmail,
    IsNumberString,
    IsNotEmpty,
    IsString,
    ValidateNested,
    IsNotEmptyObject} from "class-validator";
import { Type } from 'class-transformer'
import { CreateAdressDto } from "./CreateAdress.dto";

export class CreateCustomerDto {

    @IsEmail()
    @IsNotEmpty()
    email: string;


    @IsNumberString()
    @IsNotEmpty()
    id: number;

    @IsNotEmpty()
    @IsString()
    name: string;
    
    @ValidateNested()
    @Type(() => CreateAdressDto)
    
    address: CreateAdressDto
}