import { Controller, Get, Post, Body } from '@nestjs/common';
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

    @Post()
    async addBook(@Body() book:AddBookDto): Promise<Book>{
        return this.bookService.addBook(book);
    }
}
