// CHAKRA UI
import { Box, Button, Center, Flex, Input, Text } from '@chakra-ui/react';

// FRAMER MOTION
import { motion } from 'framer-motion';

// VARIANTS
import { fadeIn, fadeInSides, staggerContainer } from '../../theme/variants';

// ICON
import { FaPlay } from 'react-icons/fa';

export const Header = () => {
  return (
    <>
      <Center mt="131px" w="full">

        <Flex flexDir={{ base: "column", lg: "row" }} gap="35px" maxW="90%" w="1037px" justifyContent="space-between">

          <Flex as={motion.div}
            variants={staggerContainer}
            initial="initial"
            animate="animate" maxW="full" flexDir="column" textAlign={{ base: "center", lg: "start" }} alignItems={{ base: "center", lg: "start" }}>

            <Text as={motion.div} variants={fadeInSides()} fontFamily="Manrope" fontWeight="800" fontSize="60px" lineHeight="74px" letterSpacing="-0.03em" color="#000">
              Managing business
              payments has never
              been easier
            </Text>

            <Text as={motion.div} variants={fadeInSides()} mt="19px" fontFamily="Manrope" fontWeight="500" fontSize="20px" lineHeight="30px" letterSpacing="-0.02em" color="#64607D">
              Yet bed any for travelling assistance indulgence
              unpleasing. Not thoughts all exercise blessing.
              Indulgence way everything.
            </Text>

            <Flex as={motion.div} variants={fadeInSides()} flexDir={{ base: "column", sm: "row" }} mt="47px" alignItems="center" gap="50px">

              <Button py="25px" px="26px" borderRadius="full" bg="#3734A9" _hover={{ bg: "#3734A8" }} color="#Fff">
                Our Process
              </Button>

              <Flex gap="11px" alignItems="center">

                <Center bg="#22D497" borderRadius="full" p="15px">
                  <FaPlay color="#fff" />
                </Center>

                <Text fontFamily="Manrope" fontWeight="600" fontSize="17px" lineHeight="30px" letterSpacing="-0.02em" color="#3734A9">
                  See How It Works
                </Text>
              </Flex>
            </Flex>
          </Flex>

          <Flex as={motion.div}
            variants={staggerContainer}
            initial="initial"
            animate="animate"
            mt={{ base: "60px", lg: "0px" }} maxW="full" gap="24px" flexDir="column" textAlign="start" alignItems="center">

            <Text as={motion.div} variants={fadeIn("up")} fontFamily="Manrope" fontWeight="700" fontSize="24px" lineHeight="30px" letterSpacing="-0.02em" color="#3734A9">
              Get Started for Free
            </Text>

            <Box maxW="full" as={motion.div} variants={fadeIn("up")}>
              <Input
                maxW="full" w="356px" h="60px" bg="#FFFFFF" border="1px solid #DFE4F1" borderRadius="5px"
                placeholder='Email Address' />
            </Box>

            <Box maxW="full" as={motion.div} variants={fadeIn("up")}>
              <Input
                maxW="full" w="356px" h="60px" bg="#FFFFFF" border="1px solid #DFE4F1" borderRadius="5px"
                placeholder='Password' />
            </Box>

            <Button as={motion.div} variants={fadeIn("up")} maxW="full" w="356px" py="26px" bg="#FF7F5C" color="#fff" borderRadius="5px">
              Get Started
            </Button>
          </Flex>
        </Flex>
      </Center>
    </>
  );
}