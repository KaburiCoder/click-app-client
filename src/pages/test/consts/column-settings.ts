import { Vs } from "@/shared/dto/socket-io";

export const columnSettings: Partial<Record<keyof Vs, { size: number }>> = {
  hulap1: { size: 90 },
  hulap2: { size: 90 },
  maekbak: { size: 90 },
  cheon: { size: 90 },
  hohup: { size: 90 },
  weight: { size: 90 },
  height: { size: 90 },
  bmi: { size: 90 },
  intake: { size: 90 },
  urine: { size: 90 },
  stools: { size: 90 },
  fluids: { size: 90 },
  blood: { size: 90 },
  aspiration: { size: 90 },
  drainage: { size: 90 },
  vomitus: { size: 90 },
  glucose: { size: 90 },
  spo2: { size: 90 },
  etc4: { size: 200 },
};