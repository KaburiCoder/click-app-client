import { WardTab } from "@/features/root/enums";
import { useInfiniteEmit } from "@/shared/hooks/socket-io";
import { usePatientStore } from "@/shared/stores";
import { useSearchStore } from "@/shared/stores/search.store";

export const useNursingRecord = () => {
  const dateRange = useSearchStore((state) => state.dateRange);
  const tab = useSearchStore((state) => state.tab);
  const searchString = useSearchStore(state => state.searchString)
  const { patient } = usePatientStore();
  const enabled = tab === WardTab.간호 && !!patient;

  const result = useInfiniteEmit({
    path: "getNursingRecords",
    dtoFn({ page, count }) {
      return {
        count,
        page,
        chartNo: patient!.chartNo,
        startYmd: dateRange.startYmd,
        endYmd: dateRange.endYmd,
        searchString: searchString?.[tab ?? ""] ?? "",
      };
    },
    queryKey: [patient?.chartNo],
    enabled,
  });

  return result;
}
