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
  const carbonRes = await fetch(
    `https://sangria-swordfish-wrap.cyclic.app/carbonfootprint?id=${userid}`
  );
  const carbonData = await carbonRes.json();
  const carbonFootprint = carbonData.CarbonFootprint;
  return JSON.stringify({
    badges: result,
    carbonFootprint: carbonFootprint,
  });
};

export default getBadgeData;
