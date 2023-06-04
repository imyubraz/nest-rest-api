import { Injectable, UnauthorizedException} from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { User } from './schemas/user.schema';
import * as bcrypt from "bcryptjs"
import { SignUpDto } from 'src/book/dto/signup.dto';
import { Model } from 'mongoose';
import { JwtService } from '@nestjs/jwt';
import { SignInDto } from 'src/book/dto/signin.dto';

@Injectable()
export class AuthService {
    constructor(
        @InjectModel(User.name)
        private userModel: Model<User>,
        private jwtService: JwtService, // Inject JwtService
    ){}

    async signUp(signUpDto: SignUpDto): Promise<{token: string}> {
        const {name, email, password } = signUpDto

        const hashedPassword = await bcrypt.hash(password, 10)

        const user = await this.userModel.create({
            name,
            email,
            password: hashedPassword
        })

        const token = this.jwtService.sign({id: user._id})

        return {token}

    }

    async signIn(signInDto: SignInDto): Promise<{token: string}>{
        const {email, password} = signInDto;

        const user = await this.userModel.findOne({email})

        if(!user){
            throw new UnauthorizedException("Invalid email or password!")
        }

        const isPasswordMatched = await bcrypt.compare(password, user.password)

        if(!isPasswordMatched){
            throw new UnauthorizedException("Invalid email or password!")
        }

        const token = this.jwtService.sign({id: user._id})

        return {token}
    }
}


