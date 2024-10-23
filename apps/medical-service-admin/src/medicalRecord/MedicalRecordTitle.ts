import { MedicalRecord as TMedicalRecord } from "../api/medicalRecord/MedicalRecord";

export const MEDICALRECORD_TITLE_FIELD = "cover";

export const MedicalRecordTitle = (record: TMedicalRecord): string => {
  return record.cover?.toString() || String(record.id);
};
