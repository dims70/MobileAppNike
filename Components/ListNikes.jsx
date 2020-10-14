import React from 'react'
import { FlatList, View } from 'react-native'
import styled from 'styled-components'


function ListNikes(params) {
    return(
        <FlatList  />
    )
}

const ItemNike = ({})=>(
<CardContainer>
    <LeftChunk>
        {/* изображение прим 110х110 */}
        {/* Название прим 110х20 */}
    </LeftChunk>
    <RightChunk>

    </RightChunk>
</CardContainer>)

const CardContainer = styled.View`
flex:1;
width:250px;

`
const LeftChunk = styled.View`
flex:1;
width:250px;

`
const RightChunk = styled.View`
flex:1;
width:250px;

`

export default ListNikes