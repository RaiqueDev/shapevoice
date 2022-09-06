// CHAKRA
import { Button, Center, Flex, Text } from "@chakra-ui/react";

// FRAMER MOTION
import { motion } from "framer-motion";

// ANIMATE
import { fadeInSides, staggerContainer } from "./../variants";

export const AboutInfo = () => {
  return (
    <>
      <Center mt="108px" w="full" flexDir="column" textAlign="center">

        <Flex
          as={motion.div}
          variants={staggerContainer}
          initial="initial"
          animate="animate"
          maxW="90%" w="699px" flexDir="column">

          <Text
            as={motion.div} variants={fadeInSides()}
            fontFamily="Manrope" fontWeight="800" fontSize="38px" lineHeight="60px" letterSpacing="-0.03em" color="#000">
            Believing neglected so so allowance
          </Text>

          <Text as={motion.div} variants={fadeInSides()} mt="19px" fontFamily="Manrope" fontWeight="500" fontSize="17px" lineHeight="30px" letterSpacing="-0.02em" color="#64607D">
            Yet bed any for travelling assistance indulgence
            unpleasing. Not thoughts all exercise blessing.
            Indulgence way everything.
          </Text>

          <Button as={motion.div} variants={fadeInSides()} mt="25px" h="48px" px="102px" bg="#3734A9" color="#fff">

            <Text fontFamily="Manrope" fontWeight="500" fontSize={[12, 17]} lineHeight="30px" letterSpacing="-0.02em" color="#fff">
              We so opinion friends
              me message as delight.
            </Text>
          </Button>
        </Flex>
      </Center>
    </>
  );
}