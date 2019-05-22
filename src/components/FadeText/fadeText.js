/**
 * Libraries
 */

import React,{
    Component
} from 'react';

import {useSpring, animated} from 'react-spring';

/**
 *  Styles
 */

import './fadeText.scss';

/**
 * ConnectedForm component definition and export
 */

function fadeText() {
    const props = useSpring({
        to:{opacity: 1, color: 'green'},
        from: { opacity: 0,
                color: 'red'},
        delay: 1000
      })

    return (
        <animated.div 
            className="fadeText"
            style={props}
        >
            Hello
        </animated.div>
    )
  }

export default fadeText;
