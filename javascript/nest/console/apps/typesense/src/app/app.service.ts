import { Injectable } from '@nestjs/common';
import { frameResponse } from '@workspace/utilities';

@Injectable()
export class AppService {
    async searchMovies(payload: { query: string }) {
        return frameResponse({ status: 'SUCCESS', message: 'Request processed successfully', data: payload });
    }
}
