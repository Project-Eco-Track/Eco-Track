import React from "react";
import { Card, Grid, Text, Title, Col } from "@tremor/react";
import "./Tips.scss";

type Props = {};

const ExampleTips = [
  {
    type: "transportation",
    tip: "Use public transportation or carpool to reduce greenhouse gas emissions.",
  },
  {
    type: "electricity",
    tip: "Turn off lights and unplug electronics when you’re not using them.",
  },
  {
    type: "water",
    tip: "Take shorter showers to reduce water use.",
  },
  {
    type: "food",
    tip: "Eat less meat to reduce the amount of methane gas released into the atmosphere.",
  },
  {
    type: "waste",
    tip: "Recycle and compost to reduce the amount of waste that goes to landfills.",
  },
  {
    type: "shopping",
    tip: "Buy less stuff and buy used items when possible.",
  },
  {
    type: "travel",
    tip: "Fly less and take direct flights when possible.",
  },
];

export default function Tips({}: Props) {
  return (
    <Card>
      <div className="w-full">
        <Title className="truncate">AI Tips</Title>
        <Grid className="flex gap-3 w-full tips-grid py-3 px-1">
          {ExampleTips.map((item, index) => (
            <Col numColSpan={1} key={index}>
              <Card className="w-[200px] h-[125px] p-3">
                <Text>{item.tip}</Text>
              </Card>
            </Col>
          ))}
        </Grid>
      </div>
    </Card>
  );
}
