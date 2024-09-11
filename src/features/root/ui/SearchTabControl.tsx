import { PathTypeKey } from "@/shared/hooks/types";
import { TabType } from "@/shared/stores";
import { Button, DateRangePicker, Input } from "@/widgets/ui";
import { CustomRadio, RadioGroup } from "@/widgets/ui/radio";
import { useQueryClient } from "@tanstack/react-query";
import { MedicalTab, WardTab } from "../enums";
import { useSearchTab } from "../hooks";
import { cn } from "@/shared/utils";

const queryObj: {
  [key: string]: PathTypeKey;
} = {
  [MedicalTab.처방]: "getPrescriptions",
  [MedicalTab.초진]: "getFirstCharts",
  [MedicalTab.경과]: "getProgressNotes",

  [WardTab.간호]: "getNursingRecords",
  [WardTab.Vital]: "getVitalSigns",
  [WardTab.IO]: "getIOSheets",
  [WardTab.RI]: "getInsulins",
};

interface Props {
  tabTypes: TabType[];
}

export const SearchTabControl = ({ tabTypes }: Props) => {
  const {
    tab,
    isPending,
    searchString,
    dateRange,
    showKeywords,
    setSearchString,
    setTab,
    setDateRange,
  } = useSearchTab();

  const queryClient = useQueryClient();

  function onSearchStringChange(e: React.ChangeEvent<HTMLInputElement>): void {
    if (tab) setSearchString(tab, e.target.value);
  }

  function handleSubmit(e: React.FormEvent<HTMLFormElement>): void {
    e.preventDefault();
    window.scrollTo({ top: 0 });
    if (tab) {
      const key = queryObj[tab];
      queryClient.invalidateQueries({ queryKey: [key] });
    }
  }

  return (
    <div className={cn("flex w-full justify-between gap-1 border-b bg-white p-2 overflow-hidden", 
      "flex-col sm:flex-row"
    )}>
      <RadioGroup
        className="flex gap-2 rounded border bg-gray-100 p-1"
        value={tab}
        onValueChange={(v) => setTab(v as TabType)}
      >
        {tabTypes.map((tab) => (
          <MedicalRadio key={tab} tab={tab} />
        ))}
      </RadioGroup>

      <form className="flex gap-1" onSubmit={handleSubmit}>
        {showKeywords && (
          <Input
            className="h-full min-w-20 max-w-36"
            placeholder="키워드 검색"
            value={searchString?.[tab ?? ""] ?? ""}
            onChange={onSearchStringChange}
          />
        )}
        <DateRangePicker
          defaultDateRange={dateRange}
          onDateChange={setDateRange}
        />
        <Button type="submit" disabled={isPending} className="h-full">
          조회
        </Button>
      </form>
    </div>
  );
};

interface MedicalRadioProps {
  tab: TabType;
}

function MedicalRadio({ tab }: MedicalRadioProps) {
  return (
    <CustomRadio
      className="min-w-16 rounded p-1 text-center hover:cursor-pointer hover:bg-slate-200"
      classNames={{
        checked: "border !bg-white",
      }}
      value={tab}
    >
      {tab}
    </CustomRadio>
  );
}
