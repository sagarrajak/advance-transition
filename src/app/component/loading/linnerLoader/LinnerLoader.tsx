import React from 'react'
import styled from 'styled-components'
const LinnerProgress = styled.div`
    width: 100%;
    height: 10px;
    border-radius: 2px;
    background-color: #a5a5a5;
    position: relative;
    /* ::before {
        content: "";
        position: absolute;
        background: ;
    } */
`

function LinnerLoader() {
  return (
    <LinnerProgress>

    </LinnerProgress>
  )
}

export default LinnerLoader