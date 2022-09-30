import React from 'react';
import {RadialBarChart, RadialBar, PolarAngleAxis} from 'recharts';

import './patient.sass';

const getWholePercentsFromMax = (value, max) => {
    return Math.ceil(value * 100 / max);
}

//(title, used, max, units)
const Patient = (props) => {

    const supply = 100 - getWholePercentsFromMax(props.used, props.max);

    return (
        <div className={props.className?`patient ${props.className}`:'patient'}>
            <div className="patient__title">
                {props.title}
            </div>

            <div className="patient__used">
                {props.used}
            </div>

            <div className="patient__meter meter">
                <RadialBarChart 
                    width={76}
                    height={76}
                    innerRadius={34}
                    outerRadius={38}
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
                        x={38}
                        y={38}
                        textAnchor="middle"
                        dominantBaseline="middle"
                        fontSize={18}
                        fontStyle="normal"
                        fontWeight={500}
                        fill="#ffffff"
                    >
                        {supply} %
                    </text>

                    <PolarAngleAxis type="number" domain={[0, props.max]} angleAxisId={0} tick={false} />

                </RadialBarChart>

                <div className="meter__course">
                    <span className="course__total">{props.max}</span> 

                    <br/>

                    {props.units}
                </div>                  
            </div>

        </div>
    )
}

export default Patient;