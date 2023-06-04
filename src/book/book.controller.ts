import { Controller, Get, Post, Body, Param, Put, Delete, Query } from '@nestjs/common';
import { BookService } from './book.service';
import { Book } from './schemas/book.schema';
import { AddBookDto } from './dto/add-book.dto';
import { UpdateBookDto } from './dto/update-book.dto';

import { Query as ExpressQuery} from "express-serve-static-core"
    // importing with name ExpressQuery to avoid conflict with prev Query import

@Controller('books')
export class BookController {
    constructor(private bookService: BookService){}

    @Get()
    async getAllBooks(@Query() query: ExpressQuery): Promise<Book[]> {
        return this.bookService.findAllBooks(query)
    }

    @Get(":id")
    async getBookById(@Param('id') id:string): Promise<Book> {
        return this.bookService.findBookById(id)
    }

    /*
    @Get(":id")
    async getBookById(@Param params:object): Promise<Book[]> {
        const {id} = params;
        return this.bookService.findAllBooks()
    }
    */

    @Post()
    async addBook(@Body() book:AddBookDto): Promise<Book>{
        return this.bookService.addBook(book);
    }

    @Put(":id")
    async updateBook(@Param('id') id:string, @Body() book:UpdateBookDto): Promise<Book> {
        return this.bookService.updateBookById(id, book);
    }

    @Delete(":id")
    async deleteBook(@Param('id') id:string): Promise<Book> {
        return this.bookService.deleteBookById(id);
    }
}
