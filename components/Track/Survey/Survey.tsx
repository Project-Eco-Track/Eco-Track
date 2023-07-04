'use client'

import React from "react";
import { Model } from "survey-core";
import { Survey } from "survey-react-ui";
import { json } from "./json";
import "survey-core/defaultV2.css";
import  "./Survey.scss"

const TakeSurvey = () => {
  const survey = new Model(json);
  survey.onComplete.add((result) => {
    console.log(result.data);
  });
  return <Survey model={survey} />;
};

export default TakeSurvey;
