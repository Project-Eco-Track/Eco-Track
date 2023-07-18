// type: Library

const postCarbonFootprint = async ( data:any ) => {
    const url = process.env.POST_CARBON_FOOTPRINT_URL;
    console.log("url: ", url);
    const res = await fetch(`${"http://localhost:3001/carbon-footprint"}`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ data }),
    });
    if (!res.ok) {
        return { blogs: null, error: "Something went wrong" };
    }
    return res.json();
};

export default postCarbonFootprint;
