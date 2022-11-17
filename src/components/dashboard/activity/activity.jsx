import React,{ useRef } from 'react';
import {LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip} from 'recharts';

import Header from '../../common/header/header.jsx';

import './activity.sass';

//data, title,
const Activity = (props) => {
    const tooltipRef = useRef();

    const CustomTooltip = ({ active, payload, label }) => {
        if (active && payload && payload.length) {
            return (
                <div className="custom-tooltip">
                <p className="label">{`${payload[0].value} Task`}</p>
                </div>
            );
        }
      
        return null;
    };

    return (
        <div className={props.className?`activity ${props.className}`:'activity'}>
            <Header className="activity__header" small={true} title="Activity" options={[
                {
                    value: 'td',
                    description: 'today'
                },
                {
                    value: 'tw',
                    description: 'this week'
                },
                {
                    value: 'tm',
                    description: 'this month'
                },
                {
                    value: 'ty',
                    description: 'this year'
                },
            ]}/>

            <LineChart 
                width={29.3 * window.innerWidth / 100}
                height={9.1 * window.innerWidth / 100}
                data={props.data}
                margin={{
                    left: 16,
                    top: 16,
                    right: 16,
                    bottom: 16 
                }}
                style={{
                    backgroundColor: "#ffffff",
                    borderRadius: "10px"
                }}
            > 
                <XAxis 
                    dataKey="name"
                    axisLine={false}
                    tick={{
                        fill: "#141522"
                    }}
                    fontSize={0.8 * window.innerWidth / 100}
                />

                <YAxis
                    type="number"
                    tickCount={3}
                    domain={[1,3]}
                    allowDecimals={false}
                    tickLine={false}
                    tick={{
                        fill: "#141522"
                    }}
                    axisLine={false}
                    padding={{
                        top: 10,
                        bottom: 0
                    }}
                    width={1.4 * window.innerWidth / 100}
                    fontSize={0.8 * window.innerWidth / 100}
                    textAnchor="middle"
                />
                
                <Tooltip 
                    wrapperStyle={{
                        outline: "none",
                        display: "none"
                    }}
                    ref={tooltipRef}
                    content={<CustomTooltip />}
                    allowEscapeViewBox={{
                        x:true,
                        y:true
                    }}
                    isAnimationActive={false}
                />
                
                <CartesianGrid 
                    horizontal={false} 
                /> 

                <Line
                    cursor="none"
                    type="monotone"
                    dataKey="uv"
                    stroke="#141522"
                    strokeWidth={0.2 * window.innerWidth / 100}
                    dot={false}
                    activeDot={{
                        stroke: "#546FFF",
                        strokeWidth: 0.2 * window.innerWidth / 100,
                        r: 0.5 * window.innerWidth / 100,
                        fill: "#ffffff",
                        style: {
                            cursor: "pointer"
                        },
                        onMouseOver: () => {
                            tooltipRef.current.wrapperNode.style.display = "block"
                        },
                        onMouseOut: () => {
                            tooltipRef.current.wrapperNode.style.display = "none"
                            },
                    }}
                    style={{
                        filter: "drop-shadow( 0px 24px 0px rgba(0, 0, 0, .2))"
                    }}
                />

            </LineChart>
        </div>
    )
}

export default Activity;