import { clsx } from "clsx";
import { addDays, format, subDays } from "date-fns";
import { twMerge } from "tailwind-merge";

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

export function filterDataForPastDays(data, numberOfDays) {
  // Get the current date
  const end = new Date();

  // Calculate the start date based on the number of days to display
  const start = subDays(end, numberOfDays);

  // Filter the data array
  const filteredData = data.filter((item) => {
    const itemDate = new Date(item.x);
    return itemDate >= start && itemDate <= end;
  });

  return filteredData;
}
