import { Weib } from "@/shared/dto/socket-io";
import { Input, ToggleGroup, ToggleGroupItem } from "@/widgets/ui";
import { Search } from "lucide-react";
import { useState } from "react";

interface Props {
  weib: Weib;
  onChange: (value: string) => void;
  onWeibChagne: (weib: Weib) => void;
}

let timeout: any = null;
export function PatSearchInput({ weib, onChange, onWeibChagne }: Props) {
  const [text, setText] = useState("");

  function handleChange(e: React.ChangeEvent<HTMLInputElement>): void {
    setText(e.target.value);

    if (timeout) clearTimeout(timeout);
    timeout = setTimeout(() => {
      onChange(e.target.value);
    }, 300);
  }

  return (
    <div className="flex gap-2">
      <Input
        value={text}
        onChange={handleChange}
        wrapperClassName="flex-1"
        autoFocus
        startComponent={<Search className="ml-2 text-gray-500" />}
      />
      <ToggleGroup
        value={weib.toString()}
        onValueChange={(v) => {
          if (!v) return;
          onWeibChagne(parseInt(v));
        }}
        type="single"
        variant={"outline"}
      >
        <ToggleGroupItem
          className="whitespace-nowrap"
          value={Weib.입원.toString()}
          aria-label="입원"
        >
          입원
        </ToggleGroupItem>
        <ToggleGroupItem
          className="whitespace-nowrap"
          value={Weib.전체.toString()}
          aria-label="전체"
        >
          전체
        </ToggleGroupItem>
      </ToggleGroup>
    </div>
  );
}
