import React from 'react'
import type { PropsWithChildren } from 'react' 
import { Circle } from 'react-native-svg';
import Icon from 'react-native-vector-icons/Ionicons'
type IconsProps = PropsWithChildren<{
    name: string;
}>
const Icons = ({name}:IconsProps) => {
 switch(name){
    case 'circle':
        return <Icon name = "circle-thin" size={20}/>
    break;
    case 'cross':
        return <Icon name = "times" size={20}/>
    break;
 }
}

export default Icons