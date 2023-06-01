import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import * as mongoose from "mongoose";

// importing book schema
import { Book } from './schemas/book.schema';

@Injectable()
export class BookService {
    constructor(
        @InjectModel(Book.name)       
        private bookModel: mongoose.Model<Book>
        // bookModel will be used to do db operations like find(), findOne()...
    ){}

    async findAllBooks(): Promise<Book[]>{
        const books = await this.bookModel.find();
        return books;
    }

    async findBookById(id: string): Promise<Book>{
        const book = await this.bookModel.findById(id);

        if(!book){
            throw new NotFoundException("Book not found!")
        }
        return book;
    }

    async addBook(book: Book): Promise<Book>{
        const res = await this.bookModel.create(book);
            // using create() function from mongoose to add/create new book
        return res
    }
}
