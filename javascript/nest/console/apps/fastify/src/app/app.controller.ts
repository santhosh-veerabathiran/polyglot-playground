import { Controller, Get, Req, Res } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
    constructor(private readonly appService: AppService) {}

    @Get()
    index(@Res() res) {
        res.status(302).redirect('/login');
    }

    @Get('login')
    login() {
        return `Please login`;
    }

    @Get('route')
    routeConfig(@Req() req) {
        return { output: 'Hello World!' };
    }
}
