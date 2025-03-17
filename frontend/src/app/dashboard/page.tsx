"use client";

import { useState, SetStateAction, useEffect } from "react";
import dynamic from "next/dynamic";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
} from "@/components/ui/drawer";
import {
  MapPin,
  BarChart3,
  Droplet,
  Thermometer,
  CloudSunRain,
} from "lucide-react";
import districtData from "../../lib/districtData";

const Map = dynamic(() => import("../../components/Map"), {
  ssr: false,
  loading: () => (
    <p className="text-center text-[var(--primary-color)]">Loading map...</p>
  ),
});

const unitLabels = {
  rainfall: "Rainfall (mm)",
  temperature: "Temperature (°C)",
  humidity: "Humidity (%)",
};

export default function Dashboard() {
  const [selectedDistrict, setSelectedDistrict] = useState<string | null>(null);
  const [selectedLabel, setSelectedLabel] = useState("rainfall");
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  useEffect(() => {
    setSelectedLabel("rainfall"); 
  }, [selectedDistrict]);

  const handleDistrictClick = (district: SetStateAction<string | null>) => {
    setSelectedDistrict(district);
    setIsDrawerOpen(true);
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold text-center mb-4 text-[var(--primary-color)] flex items-center justify-center">
        <CloudSunRain className="mr-2 text-[var(--accent-color)]" /> Weather
        Dashboard
      </h1>

      <Card>
        <CardContent>
          <Map key={selectedDistrict} onDistrictClick={handleDistrictClick} />
        </CardContent>
      </Card>

      <Drawer open={isDrawerOpen} onOpenChange={setIsDrawerOpen}>
        <DrawerContent className=" w-full text-[var(--primary-color)] px-10">
          <DrawerHeader>
            <DrawerTitle className="text-[var(--primary-color)] flex items-center font-bold text-xl">
              <MapPin className="mr-2 text-[var(--accent-color)] " />
              {selectedDistrict} Weather Data
            </DrawerTitle>
          </DrawerHeader>

          {selectedDistrict && districtData[selectedDistrict] ? (
            <div className="">
              <Tabs value={selectedLabel} onValueChange={setSelectedLabel} className="mb-8">
                <TabsList className="flex gap-2 text-[var(--primary-color)]">
                  <TabsTrigger value="rainfall">
                    <Droplet className="mr-2 text-[var(--accent-color)]" />
                    Rainfall
                  </TabsTrigger>
                  <TabsTrigger value="temperature">
                    <Thermometer className="mr-2 text-[var(--accent-color)]" />
                    Temperature
                  </TabsTrigger>
                  <TabsTrigger value="humidity">
                    <BarChart3 className="mr-2 text-[var(--accent-color)]" />
                    Humidity
                  </TabsTrigger>
                </TabsList>
              </Tabs>

              <ResponsiveContainer width="100%" height={300}>
                <LineChart data={districtData[selectedDistrict]}>
                  <XAxis dataKey="year" />
                  <YAxis label={{ value: unitLabels[selectedLabel], angle: -90, position: "insideLeft" }} />
                  <Tooltip />
                  <Legend />
                  <Line
                    type="monotone"
                    dataKey={selectedLabel}
                    stroke="var(--primary-color)"
                    strokeWidth={2}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
          ) : (
            <p>No data available for {selectedDistrict}</p>
          )}
        </DrawerContent>
      </Drawer>
    </div>
  );
}