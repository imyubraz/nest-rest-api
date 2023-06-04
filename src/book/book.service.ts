import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import * as mongoose from "mongoose";

// importing book schema
import { Book } from './schemas/book.schema';

import { Query } from "express-serve-static-core"
@Injectable()
export class BookService {
    constructor(
        @InjectModel(Book.name)       
        private bookModel: mongoose.Model<Book>
        // bookModel will be used to do db operations like find(), findOne()...
    ){}

    async findAllBooks(query: Query): Promise<Book[]>{
        // console.log(query);

        const resultsPerPage = 2
        const currentPage = Number(query.page) || 1

        const limit = resultsPerPage || 0
            // skipping results formula (based on page no.)
        const skip = resultsPerPage * (currentPage - 1)

            // destructuring keyword from query object
        const {keyword} = query;

        let searchObj = keyword ? {
            title: {
                $regex: keyword,
                $options: "i"
            }
        } : {};
        
        const books = await this.bookModel.find({...searchObj}).limit(limit).skip(skip);
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

    async updateBookById(id: string, book: Book): Promise<Book>{
        try {
            const res = await this.bookModel.findByIdAndUpdate(id, book, {
                new: true,
                runValidators: true,
            });

            if(!res){
                throw new Error("Error!")
            }
            return res;
        } catch (error) {
            throw new NotFoundException(`Error occured : ${error}`)
        }
    }

    async deleteBookById(id: string): Promise<Book>{
        try {
            const res = await this.bookModel.findByIdAndDelete(id);

            if(!res){
                throw new Error("Error!")
            }
            return res;
        } catch (error) {
            throw new NotFoundException(`Error occured : ${error}`)
        }
    }
}
