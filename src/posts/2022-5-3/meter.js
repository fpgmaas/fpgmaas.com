import React from 'react'

import * as meterStyles from './meter.module.scss'

export const Meter = ({data}) => {

    return (
        <div>
            <h3>{data.title}</h3>
            <div className={meterStyles.meterContainer}>
                {data.data.text.map((line, lineIndex) => {
                    return (
                        <div className={meterStyles.line}>
                            {line.map((word, wordIndex) => {
                                return (
                                    <div className={`${meterStyles.word} ${data.data.stressed[lineIndex][wordIndex] > 0 ? `${meterStyles.stressed}` : ''}`}>
                                        <p>
                                            {word}
                                        </p>
                                    </div>
                                )
                            })}
                        </div>
                    )
                })
                }
            </div>
        </div>
    )

}
