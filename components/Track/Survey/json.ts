export const json = {
  title: "EcoTrack",
  description: "Carbon footprint calculator",
  completedHtml: "<h3>Carbon footprint is: </h3>",
  pages: [
    {
      name: "page1",
      elements: [
        {
          type: "panel",
          name: "panel13",
          elements: [
            {
              type: "radiogroup",
              name: "question6",
              title: "Do you own an electric or hybrid vehicle?",
              choices: [
                {
                  value: "Item 1",
                  text: "Yes, an electric vehicle",
                },
                {
                  value: "Item 2",
                  text: "Yes, a hybrid vehicle",
                },
                {
                  value: "Item 3",
                  text: "No, I own a conventional vehicle",
                },
                {
                  value: "Item 4",
                  text: "I don't own a vehicle",
                },
              ],
            },
          ],
          title: "Transportation",
          isRequired: true,
        },
        {
          type: "panel",
          name: "panel1",
          elements: [
           
            {
              type: "radiogroup",
              name: "question11",
              title: "Do you own an electric or hybrid vehicle?",
              choices: [
                {
                  value: "Item 1",
                  text: "Yes, an electric vehicle",
                },
                {
                  value: "Item 2",
                  text: "Yes, a hybrid vehicle",
                },
                {
                  value: "Item 3",
                  text: "No, I own a conventional vehicle",
                },
                {
                  value: "Item 4",
                  text: "I don't own a vehicle",
                },
              ],
            },
          ],
          title: "Transportation",
          isRequired: true,
        },
        {
          type: "radiogroup",
          name: "question9",
          title: "How frequently do you travel by air?",
          choices: [
            {
              value: "Item 1",
              text: "Multiple times per month",
            },
            {
              value: "Item 2",
              text: "Few times per year",
            },
            {
              value: "Item 3",
              text: "Rarely or never",
            },
            {
              value: "Item 4",
              text: "I don't travel by air",
            },
          ],
        },
        
      ],
    },
    {
      name: "page3",
      elements: [
        {
          type: "panel",
          name: "panel3",
          elements: [
            {
              type: "radiogroup",
              name: "question1",
              title: " ",
              choices: ["Item 1", "Item 2", "Item 3", "Item 4"],
            },
          ],
          title: "Question 2",
          isRequired: true,
        },
      ],
    },
    {
      name: "page4",
      elements: [
        {
          type: "panel",
          name: "panel4",
          elements: [
            {
              type: "radiogroup",
              name: "question2",
              title: " ",
              isRequired: true,
              choices: ["Item 1", "Item 2", "Item 3", "Item 4"],
            },
          ],
          title: "Question 3",
        },
      ],
    },
    {
      name: "page5",
      elements: [
        {
          type: "panel",
          name: "panel7",
          elements: [
            {
              type: "radiogroup",
              name: "question3",
              title: " ",
              isRequired: true,
              choices: ["Item 1", "Item 2", "Item 3", "Item 4"],
            },
          ],
          title: "Question 4",
        },
      ],
    },
  ],
  showQuestionNumbers: "off",
  storeOthersAsComment: false,
  pagePrevText: "Previous",
  pageNextText: "Continue",
  completeText: "Finish",
  requiredText: "",

  widthMode: "responsive",
  showProgressBar: "bottom",
  showCompletedPageTimer: 0,
  showTitle: true,
  showPageTitles: true,

  showCompletedPage: true,
};
