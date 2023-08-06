import getUser from "./getUser";

const getBadgeData = async () => {
  const user = await getUser();
  const userid = user?.id;
  const res = await fetch(`${process.env.HOST}/api/getBadge?id=${userid}}`);
  const data = await res.json();
  console.log(data);
  const result = data.badges.sort((a: any, b: any) => {
    if (a.disable === false && b.disable === true) {
      return -1;
    } else if (a.disable === true && b.disable === false) {
      return 1;
    } else {
      return 0;
    }
  });

  return JSON.stringify({ badges: result, carbonFootprint: data.carbonFootprint });
};

export default getBadgeData;
