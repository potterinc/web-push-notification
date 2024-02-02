import express, { Request, Response, Router } from 'express';
import PatientRecord from '../services/patient.service';

const baseRouter: Router = express.Router();
const patientRecord = new PatientRecord();

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
  .post(patientRecord.create)

  // View all record
  .get(patientRecord.viewAll)

baseRouter.route('/patient/:id')

  // View a patient
  .get(patientRecord.viewOne)

  // Update a patient record
  .patch(patientRecord.update)

  // Delete a patient record
  .delete(patientRecord.remove);

export default baseRouter