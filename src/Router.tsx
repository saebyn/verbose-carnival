import {
  BrowserRouter as Router,
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";

import ClassicSplash from "./ClassicSplash";
import OBSDock from "./OBSDock";
import Root from "./Root";
import ErrorPage from "./ErrorPage";
import Countdown from "./Screens/Countdown";
import Basic from "./Screens/Basic";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Root />} errorElement={<ErrorPage />}>
      <Route index element={<ClassicSplash />} />

      <Route path="/dock" element={<OBSDock />} />
      <Route
        path="/countdown"
        element={
          <Countdown
            title="starting at t-"
            text="Stream will be"
            timeSeconds={300}
          />
        }
      />
      <Route
        path="/brb"
        element={<Basic title="returning shortly" text="Stream will be" />}
      />
      <Route
        path="/lunch"
        element={
          <Countdown
            title="resuming after I get some food"
            text="Stream will be"
            timeSeconds={60 * 20}
          />
        }
      />
      <Route
        path="/ending"
        element={<Basic title="finished for now" text="Stream is" />}
      />
      <Route
        path="/initializing"
        element={<Basic title="Stream initializing" text="Standby..." />}
      />

      <Route path="/:screen" element={<ClassicSplash />} />
    </Route>
  )
);

export default router;
