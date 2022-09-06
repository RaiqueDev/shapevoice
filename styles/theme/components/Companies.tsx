// CHAKRA
import { Box, Center, SimpleGrid, Text } from "@chakra-ui/react";

// FRAMER MOTION
import { motion } from "framer-motion";

// IMAGE
import { Monday } from "../../images/Companies/Monday";
import { Morpheus } from "../../images/Companies/Morpheus";
import { Oracle } from "../../images/Companies/Oracle";
import { Samsung } from "../../images/Companies/Samsung";
import { Segment } from "../../images/Companies/Segment";

// ANIMATE
import { fadeIn, fadeInSides, staggerContainer } from "./../variants";

export const Companies = () => {

  return (
    <>
      <Center mt="105px" w="full" textAlign="center">

        <Center
          as={motion.div}
          variants={staggerContainer}
          initial="initial"
          animate="animate"
          flexDir="column" gap="36px" maxW="90%">

          <Text
            as={motion.div} variants={fadeInSides()}
            fontFamily="Manrope" fontWeight="700" fontSize="22px" lineHeight="30px" letterSpacing="-0.02em" color="#000">
            Trusted By Over 100+ Startups and freelance business
          </Text>

          <SimpleGrid
            as={motion.div}
            variants={staggerContainer}
            initial="initial"
            animate="animate"
            justifyItems="center" maxW="full" w="884px" columns={[1, 2, 3, 5]} spacing={50}>

            <Box as={motion.div} variants={fadeIn("down")}>
              <Oracle />
            </Box>

            <Box as={motion.div} variants={fadeIn("down")}>
              <Morpheus />
            </Box>

            <Box as={motion.div} variants={fadeIn("down")}>
              <Samsung />
            </Box>

            <Box as={motion.div} variants={fadeIn("down")}>
              <Monday />
            </Box>

            <Box as={motion.div} variants={fadeIn("down")}>
              <Segment />
            </Box>
          </SimpleGrid>
        </Center>
      </Center>
    </>
  );
}