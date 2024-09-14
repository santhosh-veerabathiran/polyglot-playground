import { Injectable, Logger } from '@nestjs/common';
import { join } from 'path';

@Injectable()
export class FilesService {
  private logger: Logger = new Logger('FILES_SERVICE');
  constructor() { }

  downloadFile(fileName: string) {
    return join(process.cwd(), `/apps/files/download-files/${fileName}`);
  }
}
