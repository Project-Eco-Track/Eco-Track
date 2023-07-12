'use client'
import React, { useEffect } from "react";
import { Model } from "survey-core";
import { Survey } from "survey-react-ui";
import { json } from "./json";
import "survey-core/defaultV2.css";
import "./Survey.scss";

const TakeSurvey = () => {
  const survey = new Model(json);

  useEffect(() => {
    survey.onComplete.add((result) => {
      console.log(result.data);
    });

    const handleKeydown = (e:any) => {
      if (e.ctrlKey && e.keyCode === 82) {
        e.preventDefault();
        alert("Refreshing the page at this state is not allowed")
      }
    };

    window.addEventListener("keydown", handleKeydown);

    return () => {
      window.removeEventListener("keydown", handleKeydown);
      // Clean up the survey instance if necessary
      survey.dispose();
    };
  }, []);

  return <Survey model={survey} />;
};

export default TakeSurvey;
