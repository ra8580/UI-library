import { createBrowserRouter } from "react-router-dom";

import Root from './pages/Root.tsx';

import CrossSell from './pages/CrossSell';
import InternetPageLanding from "./pages/InternetPageLanding";
  
  const router = createBrowserRouter (
    [
        {
            path: "/",
            element: <Root/>,
            children: [
                {
                    path: "/",
                    element: <CrossSell/>
                }
            ]
        },
        {
            path: "/",
            element: <Root/>,
            children: [
                {
                    path: "/internet-page-landing",
                    element: <InternetPageLanding />
                }
            ]
        },
    ]
  );

  export default router;