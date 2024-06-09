import React, { useState } from 'react';
import { Progress } from 'antd';
import VisibilitySensor from 'react-visibility-sensor';

export default function Skills(props) {
  const { skillName, skillLogo, skillPercent, style } = props;
  const [isVisible, setIsVisible] = useState(false);

  const onVisibilityChange = (visible) => {
    if (visible) {
      setIsVisible(true);
    }
  };

  return (
    <div className="skill-container">
      <h1>{skillName}</h1>
      <img src={skillLogo} style={style} alt={`${skillName} logo`} />
      <VisibilitySensor onChange={onVisibilityChange}>
        <Progress
          percent={isVisible ? skillPercent : 0}
          strokeColor={{
            '0%': '#108ee9',
            '100%': '#87d068',
          }}
          style={{ width: '80%', height: '30px' }}
          format={(percent) => <span style={{ fontSize: '22px' }}>{percent}%</span>}
        />
      </VisibilitySensor>
    </div>
  );
}
