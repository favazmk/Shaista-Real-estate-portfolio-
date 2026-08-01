const https = require('https');
const http = require('http');

const urls = [
  "https://upload.wikimedia.org/wikipedia/commons/4/41/Emaar_Properties_Logo.svg",
  "https://upload.wikimedia.org/wikipedia/en/thumb/f/f3/Nakheel_Properties_Logo.svg/1200px-Nakheel_Properties_Logo.svg.png",
  "https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/Sobha_Realty_Logo.svg/1200px-Sobha_Realty_Logo.svg.png",
  "https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/DAMAC_Properties_Logo.svg/1200px-DAMAC_Properties_Logo.svg.png",
  "https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Meraas_Holding_Logo.svg/1200px-Meraas_Holding_Logo.svg.png",
  "https://ellingtonproperties.ae/wp-content/themes/ellington/assets/images/logo.svg",
  "https://upload.wikimedia.org/wikipedia/commons/thumb/1/15/St._Regis_Hotels_%26_Resorts_Logo.svg/1200px-St._Regis_Hotels_%26_Resorts_Logo.svg.png",
  "https://upload.wikimedia.org/wikipedia/commons/thumb/7/77/The_Ritz-Carlton_Hotel_Company_Logo.svg/1200px-The_Ritz-Carlton_Hotel_Company_Logo.svg.png"
];

async function checkUrl(url) {
  return new Promise((resolve) => {
    const req = url.startsWith('https') ? https.request : http.request;
    const request = req(url, { method: 'HEAD' }, (res) => {
      resolve(`${res.statusCode} ${url}`);
    });
    request.on('error', (err) => {
      resolve(`ERROR ${url}: ${err.message}`);
    });
    request.end();
  });
}

async function main() {
  for (const url of urls) {
    console.log(await checkUrl(url));
  }
}
main();
