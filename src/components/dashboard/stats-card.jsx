import { Card, CardContent } from "../ui/card";

export const StatsCard = ({ title, value, icon: Icon }) => {
  return (
    <Card className="rounded-xl border-none">
      <CardContent className="flex gap-6 p-4 items-center justify-center">
        <Icon className="size-10" />
        <div className="font-bold flex flex-col gap-4">
          <p>{title}</p>
          <p>{value}</p>
        </div>
      </CardContent>
    </Card>
  );
};
