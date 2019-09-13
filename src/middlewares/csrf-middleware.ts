import { NestMiddleware, Injectable } from '@nestjs/common';
import { NextFunction, Response, Request } from 'express';

interface CsrfRequest extends Request {
  csrfToken: Function;
}

@Injectable()
export class CsrfMiddleware implements NestMiddleware<CsrfRequest, Response> {
  use(req: CsrfRequest, res: Response, next: NextFunction) {
    res.cookie('XSRF-TOKEN', req.csrfToken());
    next();
  }
}
