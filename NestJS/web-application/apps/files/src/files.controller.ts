import { Controller, Get, Logger, Param, Post, Res, UploadedFile, UseInterceptors } from '@nestjs/common';
import { FilesService } from './files.service';
import { Response } from 'express';
import { diskStorage } from 'multer';
import { frameResponse } from '@app/utils';
import { FileInterceptor } from '@nestjs/platform-express';

@Controller('files')
export class FilesController {
  private logger: Logger = new Logger('FILES_CONTROLLER');
  constructor(private readonly filesService: FilesService) { }

  @Get('download/:filename')
  downloadFile(@Param('filename') fileName: string, @Res() res: Response) {
    try {
      this.logger.log(`Request received to download the file: ${fileName}`);
      return res.sendFile(this.filesService.downloadFile(fileName));
    }
    catch (e) {
      this.logger.error(`Error occured during download the file: ${e}`);
      return frameResponse('ERROR', `Cannot download the file with error: ${e.message}`);
    }
  }

  @Post('upload')
  @UseInterceptors(FileInterceptor('file', {
    storage: diskStorage({
      destination: './apps/files/download-files',
      filename: (req, file, callback) => {
        callback(null, `${file.originalname}`)
      }
    }),
  }))
  uploadFile(@UploadedFile() file: Express.Multer.File) {
    try {
      this.logger.log(`Request received to upload the file with data: ${JSON.stringify(file, null, 2)}`);
      return frameResponse('SUCCESS', `file successfully uploaded`, { fileName: file.filename })
    }
    catch (e) {
      this.logger.error(`Error occured, when saving the file: ${e}`);
      return frameResponse('ERROR', `Cannot upload the file with error: ${e.message}`);
    }
  }
}
