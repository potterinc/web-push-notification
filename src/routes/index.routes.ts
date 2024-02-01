import express, { Request, Response, Router } from 'express';

const baseRouter: Router = express.Router();

baseRouter
  .route('')
  .get((_req: Request, res: Response) => {
    res.status(200).json({
      message: "This is the entry point for the remote health architecture \
    API. Please ensure you study the documentations before proceeding\
    or contact admin"
    });
  })

  // Patient Route
  baseRouter.route('/patient')
  // Add patient record
  .post()

  // View all record
  .get()

  baseRouter.route('patient/:id')

  // View a patient
  .get()

  // Update a patient record
  .patch()

  // Delete a patient record
  .delete()

  export default baseRouter