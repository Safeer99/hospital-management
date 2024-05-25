import { AppointmentsTable } from "@/components/dashboard/appointments-table";
import { PatientsLineChart } from "@/components/dashboard/patients-line-chart";
import { RecentDoctorsTable } from "@/components/dashboard/recent-doctors-table";
import { StatsCard } from "@/components/dashboard/stats-card";
import { House, Patient, Suitcase, Syringe } from "@/components/svgs";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { appoitmentData, tableData } from "@/lib/dummyData";

const DashboardPage = () => {
  return (
    <div className="p-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-10">
        <StatsCard title="Total Patient" value={20} icon={Patient} />
        <StatsCard title="Total Doctors" value={20} icon={Syringe} />
        <StatsCard title="Total Wards" value={20} icon={House} />
        <StatsCard title="Total Labs" value={20} icon={Suitcase} />
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-10">
        <PatientsLineChart />
        <div className="bg-background rounded-xl">
          <Tabs defaultValue="appointment">
            <TabsList className="m-4 bg-transparent">
              <TabsTrigger
                className="data-[state=active]:border-destructive border-transparent border-b-2 rounded-none text-base"
                value="appointment"
              >
                Appointments
              </TabsTrigger>
              <TabsTrigger
                className="data-[state=active]:border-destructive border-transparent border-b-2 rounded-none text-base"
                value="twoTabs"
              >
                Two tabs
              </TabsTrigger>
            </TabsList>
            <TabsContent value="appointment">
              <AppointmentsTable data={appoitmentData} />
            </TabsContent>
            <TabsContent value="twoTabs">Two tabs</TabsContent>
          </Tabs>
        </div>
      </div>
      <div className="bg-white rounded-xl">
        <RecentDoctorsTable data={tableData} />
      </div>
    </div>
  );
};

export default DashboardPage;
