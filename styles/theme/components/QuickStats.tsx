// REACT JS
import { useEffect, useRef } from 'react';

// NEXT JS
import type { NextPage } from 'next';
import Image from 'next/image';

// CHAKRA UI
import { Box, Button, Center, Drawer, DrawerBody, DrawerContent, DrawerHeader, DrawerOverlay, Flex, Input, Link, Menu, MenuButton, MenuItem, MenuList, SimpleGrid, Text, useDisclosure } from '@chakra-ui/react';

// FRAMER MOTION
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

// IMAGE
import { RemovedIcon } from '../../images/QuickStats/Removed';

export const QuickStats = () => {

  const controls = useAnimation();
  const { ref, inView } = useInView();

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    } if (!inView) {
      controls.start('hidden');
    }
  }, [controls, inView]);

  const boxVariants = {
    hidden: {
      y: -15,
      opacity: 0,
    },
    visible: {
      y: 0,
      x: 0,
      opacity: 1,

      transition: {
        duration: 0.5,
        ease: "easeInOut",
      },
    }
  }

  return (
    <>
      <Center mt="123px" w="full">

        <Center
          as={motion.div}
          ref={ref}
          initial="hidden"
          animate={controls}
          variants={boxVariants}
          textAlign="center" flexDir="column" gap="35px" maxW="90%" w="1200px" px="44px" py="41px" bg="#FFFFFF" border="1px solid #DFDFDF" boxShadow="0px 64px 194px rgba(0, 0, 0, 0.1)" borderRadius="22px">

          <Text fontFamily="Manrope" fontWeight="800" fontSize="34px" lineHeight="46px" letterSpacing="-0.03em" color="#000">
            Preference connect
            astonished
          </Text>

          <SimpleGrid textAlign="start" columns={[1, 2, 3]} gap="40px">

            <Flex gap="18px" alignItems="center">

              <Center p="10px" borderRadius="5px" bg="#E9ECF2">
                <RemovedIcon />
              </Center>

              <Text fontFamily="Manrope" fontWeight="600" fontSize="16px" lineHeight="26px" letterSpacing="-0.02em" color="#64607D">
                Removed Enjoyed
                Explain
              </Text>
            </Flex>

            <Flex gap="18px" alignItems="center">
              <Center p="10px" borderRadius="5px" bg="#E9ECF2">
                <RemovedIcon />
              </Center>

              <Text fontFamily="Manrope" fontWeight="600" fontSize="16px" lineHeight="26px" letterSpacing="-0.02em" color="#64607D">
                Supported
                Allowance
              </Text>
            </Flex>

            <Flex gap="18px" alignItems="center">
              <Center p="10px" borderRadius="5px" bg="#E9ECF2">
                <RemovedIcon />
              </Center>

              <Text fontFamily="Manrope" fontWeight="600" fontSize="16px" lineHeight="26px" letterSpacing="-0.02em" color="#64607D">
                Stable work &
                Lightweight
              </Text>
            </Flex>
          </SimpleGrid>
        </Center>
      </Center>
    </>
  );
}