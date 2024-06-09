import { Progress } from "antd";

export default function Skills(props){
    const { skillName, skillLogo, skillPercent } = props;
    return(
        <div>
           <Progress percent={props.skillPercent} percentPosition={{ align: 'center', type: 'inner',}} size={[300, 20]}/>
           <h1>{props.skillName}</h1>
           <img src={props.skillLogo}></img>
           <h2>{}</h2>
        </div>    
    )
}

