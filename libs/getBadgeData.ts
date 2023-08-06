import getUser from "./getUser";

const getBadgeData = async () => {
  const user = await getUser();
  const userid = user?.id;
  const res = await fetch(`${process.env.HOST}/api/getBadge?id=${userid}}`);
  const data = await res.json();
  const result = data.badges.sort((a: any, b: any) => {
    if (a.disable === false && b.disable === true) {
      return -1;
    } else if (a.disable === true && b.disable === false) {
      return 1;
    } else {
      return 0;
    }
  });

  //fetch carbonFootprint data
  let carbonData;
  try {
    const carbonRes = await fetch(
      `https://sangria-swordfish-wrap.cyclic.app/carbonfootprint?id=${userid}`
    );
    if (carbonRes.ok) carbonData = await carbonRes.json();
    else
      console.error(
        "Error: Unable to fetch carbon data. Server returned a non-ok response."
      );
  } catch (error) {
    console.error("Error: Unable to fetch or parse carbon data.", error);
  }

  const carbonFootprint = carbonData?.CarbonFootprint ?? 0;
  console.log(result);

  return JSON.stringify({
    badges: result,
    carbonFootprint: carbonFootprint,
  });
};

export default getBadgeData;
