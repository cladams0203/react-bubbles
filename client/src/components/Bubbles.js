import React, { useState, useEffect } from "react";
import { Pack, Chord } from "@potion/layout";
import { Svg, Circle } from "@potion/element";
import Ribbon from "@potion/element/lib/Ribbon";

const Bubbles = ({ colors }) => {
  const [bubbleData, setBubbleData] = useState([]);
  console.log(bubbleData)
  useEffect(() => {
    const generateBubbleData = colors.map((_, i) => ({
      value: Math.floor(Math.random() * (colors.length * 2)) + 1,
      key: `${i + 1}`
    }));
    setBubbleData(generateBubbleData);
  }, [colors]);
  const codes = colors.map(item => item.code)
  const hexes = codes.map(item => item.hex)
  console.log(hexes)
  return (
    <div className="bubble-wrap">
      <p>bubbles</p>
      <Svg width={400} height={400}>
        <Chord
          data={[
            [11975, 5871, 8916, 2868],
            [1951, 10048, 2060, 6171],
            [8010, 16145, 8090, 8045],
            [1013, 990, 940, 6907],
          ]}
          animate
          nodeEnter={d => ({
            ...d,
            sourceStartAngle: d.sourceStartAngle,
            targetStartAngle: d.targetStartAngle
          })}
        >{nodes => nodes.map((node, i) => (
          <Ribbon 
            {...node}
            fill={hexes[i]}
            stroke={hexes[i + 1]}
            fillOpacity={0.9}
            radius={400 * 0.4}
            transform = {{translate: [200,200]}}
          />
        ))}</Chord>
        {/* <Pack
          data={{
            children: bubbleData
          }}
          sum={datum => datum.value}
          size={[400, 400]}
          includeRoot={false}
          nodeEnter={d => ({ ...d, r: 0 })}
          animate
        >
          {nodes =>
            nodes
              .map(({ x, y, r, key }, i) => {
                if (i < colors.length) {
                  return (
                    <Circle
                      key={key}
                      cx={x}
                      cy={y}
                      r={r}
                      fill={colors[i].code.hex}
                    />
                  );
                }
                return null;
              })
              .filter(v => v)
          }
        </Pack> */}
      </Svg>
    </div>
  );
};

export default Bubbles;
