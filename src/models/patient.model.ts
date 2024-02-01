import { Schema, model } from 'mongoose';
import IPatient from "../interfaces/patient.interface";

const patientRecordSchema = new Schema<IPatient>({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  telephone: { type: String, required: true },
  residentialAddress: { type: String, required: true },
  dateOfBirth: { type: String, required: true },
  gender: { type: String, required: true },
  email: String,
  maritialStatus: String,
  weight: Number,
  height: Number,
  genotype: String,
  bloodGroup: String,
  HealthStatus: {
    bloodPressure: {
      SIS: Number,
      DIA: Number,
    },
    heartCondition: {},
    sugarLevel: Number,
  },
  emergencyContact: {
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    telephone: { type: String, required: true },
    address: String,
    email: String,
  },
  MedicalHistory: {}
});

const Patient = model<IPatient>('Patient', patientRecordSchema, 'PatientMedicalRecord')
export default Patient;