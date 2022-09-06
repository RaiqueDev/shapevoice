// REACT 
import { useEffect } from "react";

// CHAKRA
import { Button, Center, Flex, Input, SimpleGrid, Text } from "@chakra-ui/react";

// FRAMER MOTION
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

export const CTA = () => {

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
      <Center mt="100px" w="full" py="75px" bg="#3734A9">

        <Center
          as={motion.div}
          ref={ref}
          initial="hidden"
          animate={controls}
          variants={boxVariants}
          flexDir={{ base: "column", lg: "row" }} textAlign={{ base: "center", lg: "start" }} gap="100px" maxW="90%" w="1089px" justifyContent="space-between">

          <Flex maxW="full" w="483px" flexDir="column" gap="29px">

            <Text fontFamily="Manrope" fontWeight="700" fontSize="14px" lineHeight="17px" textTransform="uppercase" color="#fff">
              Why Choose Us
            </Text>

            <Text fontFamily="Manrope" fontWeight="800" fontSize="50px" lineHeight="60px" letterSpacing="-0.03em" color="#fff">
              Partiality on or
              continue in the
              particular principles
            </Text>

            <Text fontFamily="Manrope" fontWeight="600" fontSize="18px" lineHeight="30px" letterSpacing="-0.02em" color="#fff">
              End-to-end payments and financial management in a single solution. Meet the right platform to help realize.
            </Text>
          </Flex>

          <Flex maxW="full" w="371px" flexDir="column" gap="24px">

            <Input h="60px" bg="#F2F3F4" opacity="0.2" borderRadius="5px"
              placeholder='Email Address' />

            <Input h="60px" bg="#F2F3F4" opacity="0.2" borderRadius="5px"
              placeholder='Password' />

            <Button h="60px" bg="#FF7F5C" color="#fff" borderRadius="5px">
              Get Started
            </Button>
          </Flex>
        </Center>
      </Center>
    </>
  );
}