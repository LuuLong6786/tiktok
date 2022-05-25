import Home from "~/pages/Home/index";
import Following from "~/pages/following/index";
import Upload from "~/pages/Upload/index";
import { HeaderOnly } from "~/Components/Layout/index.js";
import Search from "~/pages/Search/index";
const publishRoutes = [
  { path: "/", component: Home },
  { path: "/following", component: Following },
  { path: "/upload", component: Upload, layout: HeaderOnly },
  { path: "/search", component: Search, layout: null },
];

const privateRoutes = [];
export { privateRoutes, publishRoutes };
