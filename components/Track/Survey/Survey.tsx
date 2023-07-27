"use client";

import React from "react";
import { Model } from "survey-core";
import { Survey } from "survey-react-ui";
import { json } from "./json";
import "survey-core/defaultV2.css";
import postCarbonFootprint from "@libs/postCarbonFootprint";
import { useUser } from "@clerk/clerk-react";
import "./Survey.scss";

const TakeSurvey = () => {
  const { isSignedIn, user, isLoaded } = useUser();

  const survey = new Model(json);
  survey.onComplete.add(async (sender, options) => {
    const result = JSON.stringify(sender.data, null, 3);
    if (isSignedIn && isLoaded) {
      await postCarbonFootprint(result.replace(/\\|\n/g, ""), user.id);
      window.location.href = "/track/statistics";
    }
  });
  return <Survey model={survey} />;
};

export default TakeSurvey;
