import React from 'react';
import {RadialBarChart, RadialBar, PolarAngleAxis} from 'recharts';

import './patient.sass';
import './patient-mobile.sass';

//Убери меня отсюда
const getWholePercentsFromMax = (value, max) => {
    return Math.ceil(value * 100 / max);
}

//(title, used, max, units)
const Patient = (props) => {
    const supply = 100 - getWholePercentsFromMax(props.used, props.max);

    return (
        <div className={props.className?`patient ${props.className}`:'patient'}>
            <div className="patient__item">
                <div className="patient__title">
                    {props.title}
                </div>

                <div className="patient__used">
                    {props.used}
                </div>
            </div>
            
            <div className="patient__item patient__item_orientation_horizontal">
                <RadialBarChart 
                    width={Math.max(5.3 * window.innerWidth / 100, 68)}
                    height={Math.max(5.3 * window.innerWidth / 100, 68)}
                    innerRadius={Math.max(2.4 * window.innerWidth / 100, 30)}
                    outerRadius={Math.max(2.7 * window.innerWidth / 100, 34)}
                    data={[{
                        "value": props.used,
                    }]}
                    startAngle={450}
                    endAngle={90}
                >               
                    <RadialBar 
                        background={{
                            fill: "#546FFF",
                            fillOpacity: 0.1
                        }}
                        fill="#546FFF"
                        dataKey='value'
                        angleAxisId={0}
                    />

                    <text
                        x={Math.max(2.7 * window.innerWidth / 100, 34)}
                        y={Math.max(2.7 * window.innerWidth / 100, 34)}
                        textAnchor="middle"
                        dominantBaseline="middle"
                        fontSize={Math.max(1.25 * window.innerWidth / 100, 18)}
                        fontStyle="normal"
                        fontWeight={500}
                        fill="#ffffff"
                    >
                        {supply} %
                    </text>

                    <PolarAngleAxis type="number" domain={[0, props.max]} angleAxisId={0} tick={false} />

                </RadialBarChart>

                <div className="patient__course">
                    <span className="patient__total">{props.max}</span> 

                    <br/>

                    <span className="patient__units">{props.units}</span>
                </div>                  
            </div>

        </div>
    )
}

export default Patient;