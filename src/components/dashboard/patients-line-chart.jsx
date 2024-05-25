import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";
import { LineChart } from "../line-chart";
import { lineChartData } from "@/lib/dummyData";
import { filterDataForPastDays } from "@/lib/utils";
import { format } from "date-fns";
import { useMemo, useState } from "react";

export const PatientsLineChart = () => {
  const [value, setValue] = useState("30");

  const data = useMemo(() => {
    if (value === "7") {
      return lineChartData.map((item) => {
        return { ...item, data: filterDataForPastDays(item.data, 7) };
      });
    } else if (value === "30") {
      return lineChartData.map((item) => {
        return { ...item, data: filterDataForPastDays(item.data, 30) };
      });
    } else if (value === "90") {
      return lineChartData.map((item) => {
        return { ...item, data: filterDataForPastDays(item.data, 90) };
      });
    } else if (value === "180") {
      return lineChartData.map((item) => {
        return { ...item, data: filterDataForPastDays(item.data, 180) };
      });
    } else if (value === "365") {
      return lineChartData.map((item) => {
        return { ...item, data: filterDataForPastDays(item.data, 365) };
      });
    }
    return lineChartData;
  }, [value]);

  const finalData = data.map((item) => {
    return {
      ...item,
      data: item.data.map(({ x, y }) => {
        return {
          x: value === "7" ? format(x, "eee-dd") : format(x, "LLL-dd"),
          y,
        };
      }),
    };
  });

  return (
    <div className="bg-white rounded-xl">
      <div className="flex items-center justify-between p-4">
        <p className="font-semibold">Patients</p>
        <Select value={value} onValueChange={setValue}>
          <SelectTrigger className="w-fit text-primary font-semibold border-none focus-visible:ring-0 focus-visible:ring-offset-0 focus:ring-0 focus:ring-offset-0">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectItem value="7">7 days</SelectItem>
              <SelectItem value="30">1 Month</SelectItem>
              {/* <SelectItem value="90">3 Months</SelectItem>
          <SelectItem value="180">6 Months</SelectItem>
          <SelectItem value="365">1 Year</SelectItem>
          <SelectItem value="all">All</SelectItem> */}
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>
      <Separator />
      <div className="h-96">
        <LineChart data={finalData} />
      </div>
      <div className="flex justify-between items-center gap-2 px-8 pb-4">
        <div>
          <p className="text-muted-foreground">All time</p>
          <p className="font-semibold">4546</p>
        </div>
        <div>
          <p className="text-muted-foreground">30 days</p>
          <p className="font-semibold">4546</p>
        </div>
        <div>
          <p className="text-muted-foreground">7 days</p>
          <p className="font-semibold">4546</p>
        </div>
      </div>
    </div>
  );
};
