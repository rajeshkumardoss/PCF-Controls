import { Label } from "@fluentui/react/lib/Label";
import React = require("react");

export interface ILabelControlProps{
    name ? : string
}
export const LabelControl = React.memo((props: ILabelControlProps) => {
return(
<Label> {props.name}</Label>
)

});