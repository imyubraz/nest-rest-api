import { IsNotEmpty, IsString, IsNumber, IsEnum } from "class-validator"
import { Category } from "../schemas/book.schema"

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

}