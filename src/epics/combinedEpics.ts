import { combineEpics } from "redux-observable";

import {configurationEpic} from "./openApiConfigurationEpics";

const epics = combineEpics(
    configurationEpic,
)

export default epics;
