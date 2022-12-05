import React from 'react';
import {
    BarChart, Bar, XAxis, YAxis, 
    Tooltip, LabelList, Legend, ResponsiveContainer
} from 'recharts';


let data=[
    [
      {
        "month": "May",
        "messages": {
          "name": "messages",
          "growth": 3,
          "value": 35
        },
        "views": {
          "name": "views",
          "growth": 13,
          "value": 61
        },
        "shares": {
          "name": "shares",
          "growth": 17,
          "value": 193
        },
        "favorites": {
          "name": "favorites",
          "growth": 12,
          "value": 164
        }
      },
      {
        "month": "June",
        "messages": {
          "name": "messages",
          "growth": 22,
          "value": 203
        },
        "views": {
          "name": "views",
          "growth": 6,
          "value": 31
        },
        "shares": {
          "name": "shares",
          "growth": 21,
          "value": 231
        },
        "favorites": {
          "name": "favorites",
          "growth": 19,
          "value": 30
        }
      },
      {
        "month": "July",
        "messages": {
          "name": "messages",
          "growth": 16,
          "value": 196
        },
        "views": {
          "name": "views",
          "growth": 16,
          "value": 107
        },
        "shares": {
          "name": "shares",
          "growth": 13,
          "value": 59
        },
        "favorites": {
          "name": "favorites",
          "growth": 2,
          "value": 175
        }
      }
    ],
    [
      {
        "month": "May",
        "messages": {
          "name": "messages",
          "growth": 20,
          "value": 25
        },
        "views": {
          "name": "views",
          "growth": 21,
          "value": 104
        },
        "shares": {
          "name": "shares",
          "growth": 14,
          "value": 124
        },
        "favorites": {
          "name": "favorites",
          "growth": 1,
          "value": 164
        }
      },
      {
        "month": "June",
        "messages": {
          "name": "messages",
          "growth": 10,
          "value": 168
        },
        "views": {
          "name": "views",
          "growth": 16,
          "value": 128
        },
        "shares": {
          "name": "shares",
          "growth": 14,
          "value": 79
        },
        "favorites": {
          "name": "favorites",
          "growth": 8,
          "value": 187
        }
      },
      {
        "month": "July",
        "messages": {
          "name": "messages",
          "growth": 21,
          "value": 136
        },
        "views": {
          "name": "views",
          "growth": 9,
          "value": 241
        },
        "shares": {
          "name": "shares",
          "growth": 20,
          "value": 29
        },
        "favorites": {
          "name": "favorites",
          "growth": 0,
          "value": 56
        }
      }
    ],
    [
      {
        "month": "May",
        "messages": {
          "name": "messages",
          "growth": 7,
          "value": 212
        },
        "views": {
          "name": "views",
          "growth": 19,
          "value": 90
        },
        "shares": {
          "name": "shares",
          "growth": 6,
          "value": 175
        },
        "favorites": {
          "name": "favorites",
          "growth": 6,
          "value": 66
        }
      },
      {
        "month": "June",
        "messages": {
          "name": "messages",
          "growth": 8,
          "value": 179
        },
        "views": {
          "name": "views",
          "growth": 12,
          "value": 81
        },
        "shares": {
          "name": "shares",
          "growth": 9,
          "value": 200
        },
        "favorites": {
          "name": "favorites",
          "growth": 2,
          "value": 236
        }
      },
      {
        "month": "July",
        "messages": {
          "name": "messages",
          "growth": 10,
          "value": 200
        },
        "views": {
          "name": "views",
          "growth": 4,
          "value": 105
        },
        "shares": {
          "name": "shares",
          "growth": 17,
          "value": 188
        },
        "favorites": {
          "name": "favorites",
          "growth": 8,
          "value": 77
        }
      }
    ],
    [
      {
        "month": "May",
        "messages": {
          "name": "messages",
          "growth": 17,
          "value": 148
        },
        "views": {
          "name": "views",
          "growth": 16,
          "value": 152
        },
        "shares": {
          "name": "shares",
          "growth": 24,
          "value": 79
        },
        "favorites": {
          "name": "favorites",
          "growth": 12,
          "value": 129
        }
      },
      {
        "month": "June",
        "messages": {
          "name": "messages",
          "growth": 17,
          "value": 202
        },
        "views": {
          "name": "views",
          "growth": 3,
          "value": 132
        },
        "shares": {
          "name": "shares",
          "growth": 15,
          "value": 186
        },
        "favorites": {
          "name": "favorites",
          "growth": 15,
          "value": 105
        }
      },
      {
        "month": "July",
        "messages": {
          "name": "messages",
          "growth": 11,
          "value": 83
        },
        "views": {
          "name": "views",
          "growth": 19,
          "value": 192
        },
        "shares": {
          "name": "shares",
          "growth": 6,
          "value": 114
        },
        "favorites": {
          "name": "favorites",
          "growth": 2,
          "value": 109
        }
      }
    ],
    [
      {
        "month": "May",
        "messages": {
          "name": "messages",
          "growth": 9,
          "value": 104
        },
        "views": {
          "name": "views",
          "growth": 24,
          "value": 54
        },
        "shares": {
          "name": "shares",
          "growth": 17,
          "value": 60
        },
        "favorites": {
          "name": "favorites",
          "growth": 1,
          "value": 108
        }
      },
      {
        "month": "June",
        "messages": {
          "name": "messages",
          "growth": 6,
          "value": 80
        },
        "views": {
          "name": "views",
          "growth": 22,
          "value": 214
        },
        "shares": {
          "name": "shares",
          "growth": 23,
          "value": 38
        },
        "favorites": {
          "name": "favorites",
          "growth": 15,
          "value": 156
        }
      },
      {
        "month": "July",
        "messages": {
          "name": "messages",
          "growth": 21,
          "value": 247
        },
        "views": {
          "name": "views",
          "growth": 16,
          "value": 72
        },
        "shares": {
          "name": "shares",
          "growth": 17,
          "value": 158
        },
        "favorites": {
          "name": "favorites",
          "growth": 12,
          "value": 74
        }
      }
    ],
    [
      {
        "month": "May",
        "messages": {
          "name": "messages",
          "growth": 2,
          "value": 193
        },
        "views": {
          "name": "views",
          "growth": 6,
          "value": 250
        },
        "shares": {
          "name": "shares",
          "growth": 18,
          "value": 167
        },
        "favorites": {
          "name": "favorites",
          "growth": 20,
          "value": 98
        }
      },
      {
        "month": "June",
        "messages": {
          "name": "messages",
          "growth": 25,
          "value": 84
        },
        "views": {
          "name": "views",
          "growth": 21,
          "value": 212
        },
        "shares": {
          "name": "shares",
          "growth": 0,
          "value": 172
        },
        "favorites": {
          "name": "favorites",
          "growth": 14,
          "value": 246
        }
      },
      {
        "month": "July",
        "messages": {
          "name": "messages",
          "growth": 14,
          "value": 90
        },
        "views": {
          "name": "views",
          "growth": 6,
          "value": 47
        },
        "shares": {
          "name": "shares",
          "growth": 7,
          "value": 234
        },
        "favorites": {
          "name": "favorites",
          "growth": 14,
          "value": 181
        }
      }
    ],
    [
      {
        "month": "May",
        "messages": {
          "name": "messages",
          "growth": 10,
          "value": 140
        },
        "views": {
          "name": "views",
          "growth": 1,
          "value": 112
        },
        "shares": {
          "name": "shares",
          "growth": 20,
          "value": 191
        },
        "favorites": {
          "name": "favorites",
          "growth": 12,
          "value": 58
        }
      },
      {
        "month": "June",
        "messages": {
          "name": "messages",
          "growth": 2,
          "value": 250
        },
        "views": {
          "name": "views",
          "growth": 14,
          "value": 109
        },
        "shares": {
          "name": "shares",
          "growth": 16,
          "value": 159
        },
        "favorites": {
          "name": "favorites",
          "growth": 12,
          "value": 89
        }
      },
      {
        "month": "July",
        "messages": {
          "name": "messages",
          "growth": 24,
          "value": 46
        },
        "views": {
          "name": "views",
          "growth": 6,
          "value": 189
        },
        "shares": {
          "name": "shares",
          "growth": 11,
          "value": 197
        },
        "favorites": {
          "name": "favorites",
          "growth": 19,
          "value": 179
        }
      }
    ],
    [
      {
        "month": "May",
        "messages": {
          "name": "messages",
          "growth": 19,
          "value": 52
        },
        "views": {
          "name": "views",
          "growth": 11,
          "value": 86
        },
        "shares": {
          "name": "shares",
          "growth": 2,
          "value": 63
        },
        "favorites": {
          "name": "favorites",
          "growth": 17,
          "value": 133
        }
      },
      {
        "month": "June",
        "messages": {
          "name": "messages",
          "growth": 9,
          "value": 225
        },
        "views": {
          "name": "views",
          "growth": 1,
          "value": 68
        },
        "shares": {
          "name": "shares",
          "growth": 23,
          "value": 220
        },
        "favorites": {
          "name": "favorites",
          "growth": 7,
          "value": 124
        }
      },
      {
        "month": "July",
        "messages": {
          "name": "messages",
          "growth": 9,
          "value": 171
        },
        "views": {
          "name": "views",
          "growth": 1,
          "value": 221
        },
        "shares": {
          "name": "shares",
          "growth": 22,
          "value": 191
        },
        "favorites": {
          "name": "favorites",
          "growth": 4,
          "value": 95
        }
      }
    ]
  ]
const RenderChart = ()=>{

    const labels = {
        messages:'Messages',
        views:'Views',
        shares:'Shares',
        favorites:'Favorites'
    };
    
    const legendFormatter = (value,entry,index) => labels[value.split('.')[0]];
    const tooltipFormatter = (value,name,props) => [value,legendFormatter(name)]
    
    const renderCustomizedLabel = (fill) =>{
        return (props) => {
            const { x, y, width, value } = props;
    
            console.log(props)
    
            return (
                <g>
                    <rect width={width} height={30} x={x} y={y-30}  fill="#fff" />
                    <text x={x + width / 2} y={y - 12} fill={fill} textAnchor="middle" dominantBaseline="middle">
                    {value > 0 ?('+'+value):value}
                    </text>
                </g>
            );
        };
    };
return (<ResponsiveContainer height={400}>
    <BarChart data={data}
        style={{ backgroundColor:'#F4F4F4' }}
        margin={{ top: 45, right: 20, left: -10, bottom: 15 }}
    >
        <XAxis dataKey="month" />
        <YAxis/>
        <Tooltip formatter={tooltipFormatter} />
        <Legend formatter={legendFormatter} />
        <Bar dataKey="messages.value" fill="#4A8A95" minPointSize={5}>
            <LabelList dataKey="messages.growth" content={renderCustomizedLabel('#4A8A95')} />
        </Bar>
        <Bar dataKey="views.value" fill="#FBBE52" minPointSize={5}>
            <LabelList dataKey="views.growth" content={renderCustomizedLabel('#FBBE52')} />
        </Bar>
        <Bar dataKey="shares.value" fill="#EA4646" minPointSize={5}>
            <LabelList dataKey="shares.growth" content={renderCustomizedLabel('#EA4646')} />
        </Bar>
        <Bar dataKey="favorites.value" fill="#0467BA" minPointSize={5}>
            <LabelList dataKey="favorites.growth" content={renderCustomizedLabel('#0467BA')} />
        </Bar>
    </BarChart>
</ResponsiveContainer>
)
};

export default RenderChart