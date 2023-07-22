"use client";

import React from "react";
import { Model } from "survey-core";
import { Survey } from "survey-react-ui";
import { json } from "./json";
import "survey-core/defaultV2.css";
import postCarbonFootprint from "@libs/postCarbonFootprint";
import "./Survey.scss";

const TakeSurvey = () => {
  window.onbeforeunload = function () {
    return "Refreshing the page may cause unexpected behavior";
  };

  const survey = new Model(json);

  survey.onComplete.add((sender, options) => {
    postCarbonFootprint(JSON.stringify(sender.data, null, 3));
  });

  return <Survey model={survey} />;
};

export default TakeSurvey;
