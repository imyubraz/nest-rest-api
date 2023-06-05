import { IsNotEmpty, IsString, IsNumber, IsEnum, IsEmpty } from "class-validator"
import { Category } from "../schemas/book.schema"
import { User } from "../../auth/schemas/user.schema"

export class AddBookDto {

    @IsNotEmpty()
    @IsString()
    readonly title: string

    @IsNotEmpty()
    @IsString()
    readonly description: string

    @IsNotEmpty()
    @IsString()
    readonly author: string

    @IsNotEmpty()
    @IsNumber()
    readonly price: number

    @IsNotEmpty()
    // @IsString()
    @IsEnum(Category, {message: "Please enter correct category."})
    readonly category: Category

    @IsEmpty({message: "You cannot pass user id manually."})
    readonly user: User

}