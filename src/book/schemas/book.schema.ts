import { Schema, Prop, SchemaFactory } from "@nestjs/mongoose";


export enum Category {
    ADVENTURE = "Adventure",
    CLASSICS = "Classics",
    CRIME = "crime",
    FANTASY = "Fantasy"
}

@Schema({
    timestamps: true
})

export class Book {
    @Prop()
    title: string;
    
    @Prop()
    desriprion: string;

    @Prop()
    author: string;

    @Prop()
    price: number;

    @Prop()
    category: Category
}

export const BookSchema = SchemaFactory.createForClass(Book)