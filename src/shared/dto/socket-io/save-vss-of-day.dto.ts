import { Vs } from "./get-vss-of-day.dto";

export interface SaveVssOfDayDto {
  chartNo: string;
  ymd: string;
  vss: Vs[];
}

export type SaveVssOfDayResultDto = Vs[];