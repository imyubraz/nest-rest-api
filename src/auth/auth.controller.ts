import { Controller, Body, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { SignUpDto } from 'src/book/dto/signup.dto';

@Controller('auth')
export class AuthController {
    constructor(private authService: AuthService) {}

    @Post("/signup")
    signUp(@Body() signUpDto: SignUpDto): Promise<{token: string}>{
        return this.authService.signUp(signUpDto)
    }
}