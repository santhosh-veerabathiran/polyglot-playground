import { Controller, Get, Logger, Param, Post, Res, UploadedFile, UseInterceptors } from '@nestjs/common';
import { AppService } from './app.service';
import { FileInterceptor } from '@nestjs/platform-express';
import { memoryStorage } from 'multer';
import { frameResponse, stringifyError } from '@workspace/utilities';
import { generateID } from '@jetit/id';
import { Response } from 'express';

@Controller()
export class AppController {
    private readonly logger = new Logger('FILES_CONTROLLER');
    constructor(private readonly appService: AppService) {}

    @Post('upload/*?')
    @UseInterceptors(FileInterceptor('file', { storage: memoryStorage() }))
    async upload(@UploadedFile() file: Express.Multer.File, @Param('0') directory: string = '', requestId = generateID('HEX')) {
        try {
            const { buffer, ...fileData } = file;
            const path = directory ? `${directory.replace(/\//g, '/')}`.replace(/^\/+|\/+$/g, '') : '';

            this.logger.log(`[${requestId}] Request received to upload the file: ${JSON.stringify({ ...fileData, directory: path })}`);

            return await this.appService.save(requestId, buffer, path, fileData.originalname);
        } catch (error) {
            this.logger.error(`[${requestId}] Error occurred when saving the file with error: ${stringifyError(error)}`);
            return frameResponse({ status: 'ERROR', message: error.message || error });
        }
    }

    @Get('download/*?/:filename')
    downloadFile(@Param('0') directory: string = '', @Param('filename') fileName: string, @Res() res: Response, requestId = generateID('HEX')) {
        try {
            this.logger.log(`[${requestId}] Request received to download the file: ${fileName}, directory: ${directory}`);
            res.sendFile(this.appService.send(requestId, directory, fileName));
        } catch (error) {
            this.logger.error(`[${requestId}] Could not download the file with error: ${stringifyError(error)}`);
            return frameResponse({ status: 'ERROR', message: error.message || error });
        }
    }
}
