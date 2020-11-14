import { combineEpics } from "redux-observable";

import { loadOpenApiConfigurationEpic, loadOpenApiConfigurationSuccessEpic } from "./openApiConfigurationEpics"
import { selectCurrentEntityEpic, getAllEntityEpic, getAllEntitySuccessEpic, getFirstEntityEpic } from "./selectCurrentEntityEpics"

const epics = combineEpics(
    loadOpenApiConfigurationEpic,
    loadOpenApiConfigurationSuccessEpic,
    selectCurrentEntityEpic,
    getAllEntityEpic,
    getAllEntitySuccessEpic,
    getFirstEntityEpic
)

export default epics;
