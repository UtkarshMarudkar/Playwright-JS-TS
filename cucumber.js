import { format } from "node:path";

export default{
    default:{
        require : [
            "features/step_define/*.js"
        ],
        format: [
            "progres",
            "json:reports/report.json"
        ],
        publishQuiet: true
    }
}
