// CHAKRA UI
import { Button, Center, Drawer, DrawerBody, DrawerContent, DrawerHeader, DrawerOverlay, Flex, Link, Menu, MenuButton, MenuItem, MenuList, useDisclosure } from '@chakra-ui/react';

// FRAMER MOTION
import { motion, useAnimation } from 'framer-motion';

// VARIANTS
import { fadeIn, staggerContainer } from '../../theme/variants';

// IMAGE
import { LogoNav } from '../../images/LogoNav';

// ICON
import { HiChevronDown } from 'react-icons/hi';
import { CgMenuRight } from 'react-icons/cg';

export const NavBar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Center
        as={motion.div}
        variants={staggerContainer}
        initial="initial"
        animate="animate"
        w="full" h="52px">

        <Center
          as={motion.div}
          variants={fadeIn("down")}
          initial="initial"
          animate="animate"
          w="90%" maxW="1200px" justifyContent="space-between">

          <LogoNav />

          <Flex gap="29px" justifyContent="space-between" display={['none', 'none', 'none', 'flex']}>

            <Menu isLazy>
              <MenuButton>
                <Center gap="12px">
                  Product<HiChevronDown />
                </Center>
              </MenuButton>
              <MenuList>
                <MenuItem>New Window</MenuItem>
                <MenuItem>Open Closed Tab</MenuItem>
                <MenuItem>Open File</MenuItem>
              </MenuList>
            </Menu>

            <Menu isLazy>
              <MenuButton>
                <Center gap="12px">
                  Template<HiChevronDown />
                </Center>
              </MenuButton>
              <MenuList>
                <MenuItem>New Window</MenuItem>
                <MenuItem>Open Closed Tab</MenuItem>
                <MenuItem>Open File</MenuItem>
              </MenuList>
            </Menu>

            <Link gap="12px" display="flex" alignItems="center" textDecor="none">
              Blog
            </Link>

            <Link gap="12px" display="flex" alignItems="center">
              Pricing
            </Link>
          </Flex>

          <Center maxW="90%" w="231px" justifyContent="space-between" display={['none', 'none', 'none', 'flex']}>
            <Link>Sign in</Link>

            <Button bg="#4F46BA" _hover={{ bg: "#4F46BA" }} color="#FFFFFF" px="35px" py="17px">
              Start Free
            </Button>
          </Center>

          <Button onClick={onOpen} bg="none" display={['flex', 'flex', 'flex', 'none']}>
            <CgMenuRight size={25} />
          </Button>
          <Drawer onClose={onClose} isOpen={isOpen}>
            <DrawerOverlay />
            <DrawerContent>
              <DrawerHeader borderBottomWidth='1px'>Basic Drawer</DrawerHeader>
              <DrawerBody>
                <p>Some contents...</p>
                <p>Some contents...</p>
                <p>Some contents...</p>
              </DrawerBody>
            </DrawerContent>
          </Drawer>
        </Center>
      </Center>
    </>
  );
}