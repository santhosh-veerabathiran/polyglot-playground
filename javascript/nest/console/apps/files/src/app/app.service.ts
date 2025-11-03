import { Injectable, Logger } from '@nestjs/common';
import { existsSync, mkdirSync, writeFileSync } from 'fs';
import { join } from 'path';
import { frameResponse } from '@workspace/utilities';
import { environment } from '../environment';

const { protocol, host, port, fileSavePath } = environment;

@Injectable()
export class AppService {
    private readonly logger = new Logger('FILES_SERVICE');

    constructor() {}

    async save(requestId: string, data: any, directory: string = '', fileName: string) {
        const destination = join(fileSavePath, directory);
        this.logger.log(`[${requestId}] Saving file ${fileName} to ${destination}`);
        if (!existsSync(destination)) mkdirSync(destination, { recursive: true });

        writeFileSync(`${destination}/${fileName}`, data);
        const url = `${protocol}://${host}:${port}/download/${directory}/${fileName}`;
        return frameResponse({ status: 'SUCCESS', message: 'File uploaded successfully', data: { url } });
    }

    send(requestId: string, directory: string = '', fileName: string) {
        const destination = join(fileSavePath, directory, fileName);
        this.logger.log(`[${requestId}] Sending file ${fileName} from ${destination}`);
        if (!existsSync(destination)) throw new Error('Specified file not found in the directory');
        return destination;
    }
}
