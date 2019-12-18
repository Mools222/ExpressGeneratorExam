const fetch = require('node-fetch');

exports.getToilets = async () => {
    let url = "https://gist.githubusercontent.com/andracs/e09f344f810d30b6c7bb8930df3d4bdf/raw/2ad18f7a3a063001f49eda0e2e8ba6b1444ec2c2/toiletter.json";
    let res = await fetch(url);
    let json = await res.json();
    return json.features;
};