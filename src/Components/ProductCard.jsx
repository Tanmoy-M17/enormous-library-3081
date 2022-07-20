import React from 'react'
import { Box,Image,Stack } from '@chakra-ui/react'
const ProductCard = ({data}) => {
  return (
    <Box>
        <Stack>
        <Image src={data.image}/>
  
        </Stack>
    </Box>
  )
}

export default ProductCard