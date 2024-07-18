import {
    Drawer,
    DrawerBody,
    
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    Button,
  } from '@chakra-ui/react'
import SideNav from './SideNav'

const SideaDrawer = ({isOpen,onClose}) => {
    
  
    return (
      <>
        
        <Drawer
          isOpen={isOpen}
          placement='left'
          onClose={onClose}
        >
          <DrawerOverlay />
          <DrawerContent>
            <DrawerCloseButton />
  
            <DrawerBody>
              <SideNav/>
            </DrawerBody>
  
            
          </DrawerContent>
        </Drawer>
      </>
    )
}

export default SideaDrawer