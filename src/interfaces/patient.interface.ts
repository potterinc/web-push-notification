import { Document } from 'mongoose';

interface IPatient extends Document{
  firstName: string;
  lastName: string;
  telephone: string;
  residentialAddress: string;
  dateOfBirth: string;
  gender: string;
  email?: string;
  maritialStatus?: string;
  weight?: number;
  height?: number;
  genotype?: string;
  bloodGroup?: string;
  HealthStatus?: {
    bloodPressure: {
      SIS: number;
      DIA: number;
    },
    sugarLevel?:number
  },
  emergencyContact?: {
    firstName: string;
    lastName: string;
    telephone: string;
    address?: string;
    email?: string;
  },
  MedicalHistory:object;
}

export default IPatient;