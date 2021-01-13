// eslint-disable-next-line filenames/match-regex
import { createProxyMiddleware } from 'http-proxy-middleware';

// Create proxy instance outside of request handler function to avoid unnecessary re-creation
const apiProxy = createProxyMiddleware({
  target: process.env.NEXT_PUBLIC_API_BANCOPPEL_PYME_HOST,
  changeOrigin: true,
  pathRewrite: { '^/api': '' },
  secure: false,
});

// export default function (req, res) {
//   console.log('object');
//   apiProxy(req, res, (result) => {
//     if (result instanceof Error) {
//       throw result;
//     }

//     throw new Error(`Request '${req.url}' is not proxied! We should never reach here!`);
//   });
// }
