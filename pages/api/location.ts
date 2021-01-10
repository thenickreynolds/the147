import { NextApiRequest, NextApiResponse } from "next";
import geoip from "geoip-lite";
import publicIp from "public-ip";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  publicIp
    .v4()
    .then((ip) => {
      const location = geoip.lookup(ip);
      res.statusCode = 200;
      res.setHeader("Content-Type", "application/json");
      res.end(JSON.stringify(location));
    })
    .catch((e) => {
      res.statusCode = 500;
      res.statusMessage = e;
      res.end();
    });
}
