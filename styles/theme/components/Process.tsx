// REACT 
import { useEffect } from "react";

// CHAKRA
import { Center, Flex, SimpleGrid, Text } from "@chakra-ui/react";

// FRAMER MOTION
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

// IMAGE
import { Message } from "../../images/Process/Message";
import { Led } from "../../images/Process/Led";
import { One } from "../../images/Process/One";
import { Two } from "../../images/Process/Two";
import { Three } from "../../images/Process/Three";

export const Process = () => {
  
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
      opacity: 0
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
      <Center mt="108px" w="full">

        <Center
          as={motion.div}
          ref={ref}
          initial="hidden"
          animate={controls}
          variants={boxVariants}
          maxW="full">

          <SimpleGrid maxW="90%" w="1200px" justifyItems="center" columns={[1, 1, 2, 3]} spacing={10}>

            <Flex pos="relative" maxW="full" w="280px" flexDir="column" alignItems="flex-start">

              <Center p="10px" borderRadius="20px" bg="#E8F2FF">
                <Led />
              </Center>

              <Text mt="24px" fontFamily="Manrope" fontWeight="800" fontSize="16px" lineHeight="30px" letterSpacing="-0.03em" color="#000">
                Led Ask Possible Mistress
              </Text>

              <Text fontFamily="Manrope" fontWeight="500" fontSize="14px" lineHeight="24px" letterSpacing="-0.02em" color="#757095">
                Connection has put impossible own apartments boisterous. At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by.
              </Text>

              <Flex w="full" justifyContent="end" pos="absolute">
                <One />
              </Flex>
            </Flex>

            <Flex pos="relative" maxW="full" w="280px"  flexDir="column" alignItems="flex-start">

              <Center p="10px" borderRadius="20px" bg="#E8F2FF">
                <Led />
              </Center>

              <Text mt="24px" fontFamily="Manrope" fontWeight="800" fontSize="16px" lineHeight="30px" letterSpacing="-0.03em" color="#000">
                Elegance Eat Likewise
              </Text>

              <Text fontFamily="Manrope" fontWeight="500" fontSize="14px" lineHeight="24px" letterSpacing="-0.02em" color="#757095">
                From they fine john he give of rich he. They age and draw mrs like. Improving end distrusts may instantly was household applauded incommode.
              </Text>

              <Flex w="full" justifyContent="end" pos="absolute">
                <Two />
              </Flex>
            </Flex>

            <Flex pos="relative" maxW="full" w="280px"  flexDir="column" alignItems="flex-start">

              <Center p="10px" borderRadius="20px" bg="#E8F2FF">
                <Message />
              </Center>

              <Text mt="24px" fontFamily="Manrope" fontWeight="800" fontSize="16px" lineHeight="30px" letterSpacing="-0.03em" color="#000">
                Message Oram Nothing
              </Text>

              <Text fontFamily="Manrope" fontWeight="500" fontSize="14px" lineHeight="24px" letterSpacing="-0.02em" color="#757095">
                Why kept very ever home mrs. Considered sympathize ten uncommonly occasional assistance sufficient not. Letter of on become he tended active enable to.
              </Text>

              <Flex w="full" justifyContent="end" pos="absolute">
                <Three />
              </Flex>
            </Flex>
          </SimpleGrid>
        </Center>
      </Center>
    </>
  );
}