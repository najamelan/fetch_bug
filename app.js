main().then();


async function main()
{
    const JsonUrl = "data.json";
    const resp = await fetch(JsonUrl);
    console.log(resp);
}
