import { Box, Container, Flex, useDisclosure } from '@chakra-ui/react'
import React from 'react'
import SideNav from './SideNav'
import TopNav from './TopNav'
import SideaDrawer from './SideaDrawer'

const DashboardLayout = ({title,children}) => {
  const{isOpen,onClose,onOpen}=useDisclosure();  
  return (
    <Flex>
      
      <Box  display={
      {
        base:"none",
        lg:"flex",
      }
                    }>
        <SideNav />
      </Box>
      <SideaDrawer isOpen={isOpen} onClose={onClose}/>
      <Box flexGrow={1}>
      <TopNav title={title} onOpen={onOpen}/>
      <Container overflowX="hidden" overflowY="auto" h="calc(100vh - 88px)" mt="6" maxW="70rem">{children}</Container>
      </Box>
      </Flex>
  )
}

export default DashboardLayout