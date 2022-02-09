import React from 'react'
import styled from 'styled-components';
function Seperator({height}) {
  return (
    <div className='seperator'>
        <Box height={height}/>
        <hr
            style={{
                color:`#cecece`,
                opacity:`0.5`
            }}
        />
        <Box height={height}/>
    </div>
  )
}

export default Seperator
const Box = styled.div`
padding-bottom:${({height})=>height};
`