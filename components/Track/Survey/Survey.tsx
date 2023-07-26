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

  window.onbeforeunload = function () {
    return "Refreshing the page may cause unexpected behavior";
  };

  const survey = new Model(json);
  survey.onComplete.add((sender, options) => {
    const result = JSON.stringify(sender.data, null, 3);
    alert(result);
    if (isSignedIn && isLoaded) {
      postCarbonFootprint(
        result.replace(/\\|\n/g , ''),
        user.id,
        user.fullName
      );
    }
  });
  return <Survey model={survey} />;
};

export default TakeSurvey;
