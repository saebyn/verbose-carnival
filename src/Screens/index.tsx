import Basic from "./Basic";
import Countdown from "./Countdown";

const screens = {
  'initial': (
    <Basic title="Stream initializing" text="Standby..." />
  ),
  'starting-soon': (
    <Countdown title="starting at t-" text="Stream will be" timeSeconds={300} />
  ),
  'starting':
  (
    <Basic title="starting now" text="Stream is" />
  ),
  'brb': 
  (
    <Basic title="returning shortly" text="Stream will be" />
  )
  ,
  'ending': 
  (
    <Basic title="finished for now" text="Stream is" />
  )
  ,
    'lunch': (
    <Countdown title="resuming after I get some food" text="Stream will be" timeSeconds={60 * 20} />
  ),

};

export default screens;