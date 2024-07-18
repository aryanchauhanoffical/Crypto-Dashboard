import React from 'react'
import { CustomCard } from '../../../chakra/CustomCard'
import { Tag, Text } from '@chakra-ui/react'

const InfoCard = ({imgUrl, text, tagText,inverted}) => {
  return (
    <CustomCard bgImage={imgUrl} bgSize="cover" bgColor={inverted ? "p.purple" : "white"} bgRepeat="no-repeat">
      <Tag color={inverted ? "p.purple" : "white"}
           bg={inverted ? "white" : "p.purple"}
           borderRadius="full">
        {tagText}
      </Tag>
      <Text mt="4"  fontWeight="medium" textStyle="h5" color={inverted ? "white" : "p.purple"}>
        {text}
      </Text>
    </CustomCard>
  )
}

export default InfoCard