import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { BookService } from './book.service';
import { Book } from './schemas/book.schema';
import { AddBookDto } from './dto/add-book.dto';

@Controller('books')
export class BookController {
    constructor(private bookService: BookService){}

    @Get()
    async getAllBooks(): Promise<Book[]> {
        return this.bookService.findAllBooks()
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
}
