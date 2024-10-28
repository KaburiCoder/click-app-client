import { DeleteVsDto, DeleteVsResultDto, GetConsultationsDto, GetConsultationsResultDto, GetFirstChartsDto, GetFirstChartsResultDto, GetInsulinsDto, GetInsulinsResultDto, GetIOSheetsDto, GetIOSheetsResultDto, GetLabsDto, GetLabsResultDto, GetNursingRecordsDto, GetNursingRecordsResultDto, GetPatientsDto, GetPatientsResultDto, GetPrescriptionsDto, GetPrescriptionsResultDto, GetProgressNotesDto, GetProgressNotesResultDto, GetVitalSignsDto, GetVitalSignsResultDto, GetVssOfDayDto, GetVssOfDayResultDto, SaveVssOfDayDto, SaveVssOfDayResultDto, WinAccountVerificationDto, WinAccountVerificationResultDto } from "@/shared/dto/socket-io";

export interface PathTypeMap {
  winAccountVerification: {
    dto: WinAccountVerificationDto;
    result: WinAccountVerificationResultDto;
  };
  getPatients: {
    dto: GetPatientsDto;
    result: GetPatientsResultDto;
  };
  getPrescriptions: {
    dto: GetPrescriptionsDto;
    result: GetPrescriptionsResultDto;
  };
  getFirstCharts: {
    dto: GetFirstChartsDto;
    result: GetFirstChartsResultDto;
  }
  getProgressNotes: {
    dto: GetProgressNotesDto;
    result: GetProgressNotesResultDto;
  }
  getNursingRecords: {
    dto: GetNursingRecordsDto;
    result: GetNursingRecordsResultDto;
  }
  getVssOfDay: {
    dto: GetVssOfDayDto;
    result: GetVssOfDayResultDto;
  }
  saveVssOfDay: {
    dto: SaveVssOfDayDto;
    result: SaveVssOfDayResultDto;
  }
  deleteVs: {
    dto: DeleteVsDto;
    result: DeleteVsResultDto;
  }
  getVitalSigns: {
    dto: GetVitalSignsDto;
    result: GetVitalSignsResultDto;
  }
  getIOSheets: {
    dto: GetIOSheetsDto;
    result: GetIOSheetsResultDto;
  }
  getInsulins: {
    dto: GetInsulinsDto;
    result: GetInsulinsResultDto;
  }
  getLabs: {
    dto: GetLabsDto;
    result: GetLabsResultDto;
  }
  getConsultations: {
    dto: GetConsultationsDto;
    result: GetConsultationsResultDto;
  }
}

export type PathTypeKey = keyof PathTypeMap;