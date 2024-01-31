import express, { Request, Response, Router } from 'express';

const baseRouter: Router = express.Router();

baseRouter
  .route('')
  .get((req: Request, res: Response) => {
    res.status(200).json({
      message: "This is the entry point for the remote health architecture \
    API. Please ensure you study the documentations before proceeding\
    or contact admin"
    });
  })

  export default baseRouter
