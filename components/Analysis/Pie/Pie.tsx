"use client";
import type { CarbonFootprintData } from "../Analysis";
import {
  Card,
  Col,
  DeltaType,
  DeltaBar,
  DonutChart,
  Flex,
  List,
  ListItem,
  Text,
  Title,
  Bold,
  Grid,
  Color,
} from "@tremor/react";

interface AssetData {
  name: string;
  sales: number;
  delta: number;
  deltaType: DeltaType;
  status: Color;
}

const cities: AssetData[] = [
  {
    name: "Transportation",
    sales: 984888,
    delta: 61.3,
    deltaType: "increase",
    status: "emerald",
  },
  {
    name: "Diet",
    sales: 456700,
    delta: 32.8,
    deltaType: "moderateDecrease",
    status: "emerald",
  },
  {
    name: "Energy Usage",
    sales: 390800,
    delta: -18.3,
    deltaType: "moderateDecrease",
    status: "rose",
  },
  {
    name: "Purchasing Habit",
    sales: 190800,
    delta: -19.4,
    deltaType: "moderateIncrease",
    status: "rose",
  },
  {
    name: "Waste Management",
    sales: 164400,
    delta: -32.8,
    deltaType: "decrease",
    status: "rose",
  },
];

const valueFormatter = (number: number) =>
  `${Intl.NumberFormat("us").format(number).toString()} tons`;

export default function Pie({ data }: { data: CarbonFootprintData }) {
  function convertDataFormat(inputData: any): any {
    const keysToExclude: string[] = ["Date", "UserID", "CarbonFootprint"];

    const averages: any = {
      CarbonFootprint: 4.8,
      Transportation: 2.4,
      Diet: 1.7,
      EnergyUsage: 2.4,
      WasteManagement: 1.0,
      PurchasingHabit: 0.8,
    };

    const formattedData: any[] = Object.keys(inputData)
      .filter((key: string) => !keysToExclude.includes(key))
      .map((key: string) => {
        const value: number = parseFloat(inputData[key]);
        const average: number = averages[key];

        const delta: number = value - average;
        const deltaType: string = delta > 0 ? "increase" : "decrease";
        const status: string = delta > 0 ? "emerald" : "rose";
        const percentageChange: number = (delta / average) * 100;

        return {
          name: key.replace(/([A-Z])/g, " $1").trim(),
          sales: value,
          delta: percentageChange,
          deltaType: deltaType,
          status: status,
        };
      });

    return formattedData;
  }

  return (
    <Card className="max-w-4xl m-0">
      <div className="hidden sm:block">
        <Flex className="space-x-4" justifyContent="start" alignItems="center">
          <Title className="truncate">Carbon Output</Title>
        </Flex>
      </div>
      {/* --- Same code snippet as above but with no flex to optmize mobile view --- */}
      <div className="sm:hidden">
        <Title className="truncate">Carbon Output</Title>
      </div>
      <Grid numItemsLg={3} className="mt-8 gap-y-10 gap-x-14">
        <Flex>
          <DonutChart
            data={convertDataFormat(data)}
            category="sales"
            index="name"
            variant="donut"
            valueFormatter={valueFormatter}
            className="h-52"
          />
        </Flex>
        <Col numColSpan={1} numColSpanLg={2}>
          <Flex>
            <Text className="truncate">
              <Bold>Weights</Bold>
            </Text>
            <Text>
              <Bold>+/-% from average </Bold>
            </Text>
          </Flex>
          <div className="hidden sm:block">
            <List className="mt-2">
              {convertDataFormat(data).map((city: any) => (
                <ListItem key={city.name}>
                  <Text className="truncate">{city.name}</Text>
                  <div>
                    <Flex justifyContent="end" className="space-x-4">
                      <Text color={city.status} className="truncate">
                        {Intl.NumberFormat("us", {
                          signDisplay: "exceptZero",
                        })
                          .format(city.delta)
                          .toString()}
                        &#37;
                      </Text>
                      <div className="w-44">
                        <DeltaBar
                          value={city.delta}
                          isIncreasePositive={true}
                          tooltip=""
                          showAnimation={true}
                        />
                      </div>
                    </Flex>
                  </div>
                </ListItem>
              ))}
            </List>
          </div>
          {/* --- Same code snippet as above but with less width for data bars to optimize mobile --- */}
          <div className="sm:hidden">
            <List className="mt-2">
              {convertDataFormat(data).map((city: any) => (
                <ListItem key={city.name}>
                  <Text className="truncate">{city.name}</Text>
                  <div>
                    <Flex justifyContent="end" className="space-x-4">
                      <Text color={city.status} className="truncate">
                        {city.delta}%{" "}
                      </Text>
                      <div className="w-20">
                        <DeltaBar
                          value={city.delta}
                          isIncreasePositive={true}
                          tooltip=""
                          showAnimation={true}
                        />
                      </div>
                    </Flex>
                  </div>
                </ListItem>
              ))}
            </List>
          </div>
        </Col>
      </Grid>
    </Card>
  );
}
