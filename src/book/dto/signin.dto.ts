import { IsNotEmpty, IsString, IsEmail, MinLength } from "class-validator"

export class SignInDto {

    @IsNotEmpty()
    @IsEmail({}, {message: "Please enter valid email address."})
    readonly email: string

    @IsNotEmpty()
    @IsString()
    @MinLength(6)
    readonly password: string

}