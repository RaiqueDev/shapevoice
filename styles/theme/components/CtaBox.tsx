// REACT 
import { useEffect } from "react";

// CHAKRA
import { Button, Center, Text } from "@chakra-ui/react";

// FRAMER MOTION
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

export const CtaBox = () => {

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
      <Center mt="114px" w="full">

        <Center
          as={motion.div}
          ref={ref}
          initial="hidden"
          animate={controls}
          variants={boxVariants}
          flexDir={{ base: "column", md: "row" }} textAlign={{ base: "center", md: "start" }} maxW="90%" gap={{ base: "40px", md: "160px" }} px={{ base: "40px", md: "70px" }} py="38px" borderRadius="10px" bg="#F8F9FD">

          <Text maxW="full" w="561px" fontFamily="Manrope" fontWeight="800" fontSize="32px" lineHeight="56px" letterSpacing="-0.03em" color="#000">
            Track your crytpo portfolio on the
            best way possible
          </Text>

          <Button maxW="full" py="28px" px="40px" bg="#4F46BA" _hover={{ bg: "none" }} color="#fff">
            Check It Out
          </Button>
        </Center>
      </Center>
    </>
  );
}