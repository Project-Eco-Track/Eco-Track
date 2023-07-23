"use client"
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
    name: "CH4",
    sales: 984888,
    delta: 61.3,
    deltaType: "increase",
    status: "emerald",
  },
  {
    name: "H2O",
    sales: 456700,
    delta: 32.8,
    deltaType: "moderateDecrease",
    status: "emerald",
  },
  {
    name: "H3OH",
    sales: 390800,
    delta: -18.3,
    deltaType: "moderateDecrease",
    status: "rose",
  },
  {
    name: "CO2",
    sales: 190800,
    delta: -19.4,
    deltaType: "moderateIncrease",
    status: "rose",
  },
  {
    name: "N",
    sales: 164400,
    delta: -32.8,
    deltaType: "decrease",
    status: "rose",
  },
];

const valueFormatter = (number: number) => `${Intl.NumberFormat("us").format(number).toString()} tons`;

export default function Pie() {

  return (
    <Card className="max-w-4xl mx-auto">
      <div className="hidden sm:block">
        <Flex className="space-x-4" justifyContent="start" alignItems="center">
          <Title className="truncate">Chemical Output</Title>
        </Flex>
      </div>
      {/* --- Same code snippet as above but with no flex to optmize mobile view --- */}
      <div className="sm:hidden">
        <Title className="truncate">Chemical Output</Title>
      </div>
      <Grid numItemsLg={3} className="mt-8 gap-y-10 gap-x-14">
        <Flex>
          <DonutChart
            data={cities}
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
              <Bold>Chemical</Bold>
            </Text>
            <Text>
              <Bold>+/-% from average </Bold>
            </Text>
          </Flex>
          <div className="hidden sm:block">
            <List className="mt-2">
              {cities.map((city) => (
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
              {cities.map((city) => (
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