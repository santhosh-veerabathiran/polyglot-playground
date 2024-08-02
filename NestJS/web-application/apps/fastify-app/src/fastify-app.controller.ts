import { Controller, Get, Req, Res } from '@nestjs/common';
import { FastifyAppService } from './fastify-app.service';
import { RouteConfig } from '@nestjs/platform-fastify';

@Controller()
export class FastifyAppController {
	constructor(private readonly fastifyAppService: FastifyAppService) {}

	@Get()
	index(@Res() res) {
		res.status(302).redirect('/login');
	}

	@Get('login')
	login() {
		return `Please login`;
	}

	@RouteConfig({ output: 'Hello World!' })
	@Get('route')
	routeConfig(@Req() req) {
		return req.routeConfig.output;
	}
}
