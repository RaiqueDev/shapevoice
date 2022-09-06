// REACT 
import { useEffect } from "react";

// CHAKRA
import { Center, Flex, SimpleGrid, Text } from "@chakra-ui/react";

// NEXT
import Image from "next/image";

// FRAMER MOTION
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

// ICON
import { BsCheckCircleFill } from "react-icons/bs";

// IMAGE
import Cards from '../../images/Cards.svg';

export const Content = () => {

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
      <Center mt="169px" w="full">

        <Flex maxW="90%" gap="102px" justifyContent="space-between" alignItems="center" flexDir={{ base: "column", lg: "row" }} w="1156px">

          <Center maxW="90%" w="564px" h="522px">
            <Image src={Cards} />
          </Center>

          <Flex
            as={motion.div}
            ref={ref}
            initial="hidden"
            animate={controls}
            variants={boxVariants} maxW="full" w="490px" flexDir="column" gap="15px" alignItems={{ base: "center", lg: "flex-start" }} textAlign={{ base: "center", lg: "start" }}>

            <Text fontFamily="Manrope" fontWeight="700" fontSize="14px" lineHeight="17px" textTransform="uppercase" color="#3734A9">
              Why Choose Us
            </Text>

            <Text fontFamily="Manrope" fontWeight="800" fontSize="44px" lineHeight="60px" letterSpacing="-0.03em" color="#000000">
              Thirty for remove
              plenty regard you
              summer though.
            </Text>

            <Text fontFamily="Manrope" fontWeight="500" fontSize="17px" lineHeight="30px" letterSpacing="-0.02em" color="#64607D">
              The its enable direct men depend highly. Ham windows sixteen who inquiry fortune demands.
            </Text>

            <Flex maxW="full" mt="35px" flexDir="column" gap="15px" textAlign="start">

              <Flex gap="11px" alignItems="center">
                <BsCheckCircleFill size="24px" color="#FDBC64" />

                <Text fontFamily="Manrope" fontWeight="500" fontSize="16px" lineHeight="30px" letterSpacing="-0.02em" color="#64607D">
                  Get Overview at a glance
                </Text>
              </Flex>

              <Flex gap="11px" alignItems="center">
                <BsCheckCircleFill size="24px" color="#FDBC64" />

                <Text fontFamily="Manrope" fontWeight="500" fontSize="16px" lineHeight="30px" letterSpacing="-0.02em" color="#64607D">
                  Deoposit funds easily, securlity
                </Text>
              </Flex>

              <Flex gap="11px" alignItems="center">
                <BsCheckCircleFill size="24px" color="#FDBC64" />

                <Text fontFamily="Manrope" fontWeight="500" fontSize="16px" lineHeight="30px" letterSpacing="-0.02em" color="#64607D">
                  Get Live Support
                </Text>
              </Flex>
            </Flex>
          </Flex>
        </Flex>
      </Center>
    </>
  );
}