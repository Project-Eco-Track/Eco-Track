import {
  Card,
  Metric,
  Text,
  Flex,
  BadgeDelta,
  DeltaType,
  Color,
  Grid,
} from "@tremor/react";

const colors: { [key: string]: Color } = {
  increase: "emerald",
  moderateIncrease: "emerald",
  unchanged: "orange",
  moderateDecrease: "rose",
  decrease: "rose",
};

const categories: {
  title: string;
  metric: string;
  metricPrev: string;
  delta: string;
  deltaType: DeltaType;
}[] = [
  {
    title: "Footprint",
    metric: "12,699",
    metricPrev: "9,456",
    delta: "34.3%",
    deltaType: "moderateIncrease",
  },
  {
    title: "Something",
    metric: "40,598",
    metricPrev: "45,564",
    delta: "10.9%",
    deltaType: "moderateDecrease",
  },
];

export default function Footprint({ footprint }: { footprint: string }) {
  return (
    <Grid numItems={1} className="gap-3 flex-1">
      {categories.map((item) => (
        <Card key={item.title}>
          <Text>{item.title}</Text>
          <Flex
            justifyContent="start"
            alignItems="baseline"
            className="truncate space-x-3"
          >
            <Metric>{footprint}</Metric>
            {/* <Text className="truncate">from {item.metricPrev}</Text> */}
          </Flex>
          <Flex justifyContent="start" className="space-x-2 mt-4">
            <BadgeDelta deltaType={item.deltaType} />
            <Flex justifyContent="start" className="space-x-1 truncate">
              <Text color={colors[item.deltaType]}>{item.delta}</Text>
              <Text className="truncate">to previous month</Text>
            </Flex>
          </Flex>
        </Card>
      ))}
    </Grid>
  );
}
