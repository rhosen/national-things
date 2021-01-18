import { React } from "react";
import "./Flag.css"

function Flag(props) {
    return (
        <img
            className="natinal-flag"
            alt="national flag"
            src={"https://cdnjs.cloudflare.com/ajax/libs/flag-icon-css/3.5.0/flags/1x1/" + props.countryCode.toLowerCase() +".svg"}
        />
    )
}

export default Flag;