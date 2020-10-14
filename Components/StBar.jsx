import  React  from "react";
import { View,Image, Alert } from "react-native";
import styled from 'styled-components'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

function StBar() {
    return (
        <ContainerImagesStBar>
            <IconContainer>
                <FontAwesome5 name={'bars'} size={25} color={"#ffffff"} onPress={()=>Alert.alert("Сообщение","Меню")} />
            </IconContainer>
            <IconContainer>
                <FontAwesome5 name={'cogs'} size={25} color={"#ffffff"} onPress={()=>Alert.alert("Сообщение","Настройки")} />
            </IconContainer>
        </ContainerImagesStBar>
    )
}


const ContainerImagesStBar=styled.View`
flex-direction:row;
background-color:#414141;
margin-top:30px;
height:46px;
justify-content:space-between;
`
const IconContainer=styled.View`
flex:1;
justify-content:center;
align-items:center;
`

export default StBar

