const getBadgeData = async (userid:string) => {
    const res = await fetch(`${process.env.HOST}/api/getBadge?userid=${userid}}`);
    const data = await res.json();

    const result = data.sort((a:any, b:any) => {
      if (a.disable === false && b.disable === true) {
        return -1;
      } else if (a.disable === true && b.disable === false) {
        return 1;
      } else {
        return 0;
      }
    });

    return JSON.stringify(result);
};

export default getBadgeData;
