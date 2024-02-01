import { Document } from 'mongoose';

interface IPatient extends Document{
  firstName: string;
  lastName: string;
  telephone: string;
  residentialAddress: string;
  dateOfBirth: string;
  gender: string;
  email?: string;
  maritalStatus?: string;
  weight?: number;
  height?: number;
  genotype?: string;
  bloodGroup?: string;
  HealthStatus?:any,
  emergencyContact?: {
    firstName: string;
    lastName: string;
    telephone: string;
    address?: string;
    email?: string;
  },
  MedicalHistory?:any;
}

export default IPatient;