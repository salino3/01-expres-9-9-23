import {Request, Response, NextFunction, RequestHandler, ErrorRequestHandler} from 'express';

// tiped RequestHandler is opctional
export const logRequestMiddleare: RequestHandler = async ( req: Request, res: Response, next: NextFunction) => {
  console.error(req.url);
  next();
};

export const logErrorRequestMiddleare: ErrorRequestHandler = async (
  error: Error,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  console.error(error);
  res.sendStatus(500);
};