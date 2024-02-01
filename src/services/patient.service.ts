import { Request, Response } from "express";
import IPatient from "../interfaces/patient.interface";
import Patient from "../models/patient.model";

class PatientRecord {

  constructor() { };

  /**@desc add a new patient record */
  async create(req: Request, res: Response) {
    const { }: IPatient = req.body;

    try {
      // Save patient record
      await Patient.create(req.body)
        .then((patient: Buffer | any) => {
          res.status(201).json({
            message: 'Records Added',
            patient
          })
        })
        .catch((err: any) => {
          if (err.name === 'ValidationError') {

            // Handle validation errors
            if (err.errors['firstName']) {
              return res.status(406).json({
                message: err.errors['firstName'].message
              });
            }
            else if (err.errors['emergencyContact.lastName']) {
              return res.status(406).json({
                message: err.errors['emergencyContact.lastName'].message
              });
            }
          }
        })
    }
    catch (e: any) {
      return res.status(500).json({
        message: `Something went wrong: ${e.message}`
      });
    }
  };

  /** @desc view all patients */
  async viewAll(req: Request, res: Response) {
    try {
      await Patient.find()
        .then((patient: Buffer | any) => {

          // Checking if there's record
          if (patient.length != 0) {
            return res.status(200).json({
              count:patient.length,
              patient
            })
          }
          res.status(404).json({
            count: patient.length,
            message: 'No records found'
          });
        });
    } catch (e: Error | any) {
      res.status(500).json({
        message: `Something went wrong: ${e.message}`
      });
    }
  };
};

export default PatientRecord;