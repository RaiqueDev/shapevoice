// REACT 
import { useEffect } from "react";

// CHAKRA
import { Center, Flex, Input, SimpleGrid, Text } from "@chakra-ui/react";

// FRAMER MOTION
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

// IMAGE
import { SocialFooter } from "../../images/SocialFooter";

export const Footer = () => {

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
      <Center mt="59px" py="64px" w="full">

        <Flex
          as={motion.div}
          ref={ref}
          initial="hidden"
          animate={controls}
          variants={boxVariants}
          flexDir="column" maxW="90%" w="1140px">

          <SimpleGrid maxW="full" w="full" columns={[1, 2, 3, 4]} spacing={10}>

            <Flex flexDir="column" gap="31px">

              <Text fontFamily="Manrope" fontWeight="700" fontSize="21px" lineHeight="28px" letterSpacing="-0.02em" color="#1B1C31">
                AR Shakir
              </Text>

              <Text fontFamily="Manrope" fontWeight="500" fontSize="16px" lineHeight="28px" letterSpacing="-0.02em" color="#757095">
                Finance helps companies manage payments easily.
              </Text>

              <SocialFooter />
            </Flex>

            <Flex flexDir="column" gap="18px">

              <Text fontFamily="Manrope" fontWeight="700" fontSize="21px" lineHeight="28px" letterSpacing="-0.02em" color="#1B1C31">
                Company
              </Text>

              <Text fontFamily="Manrope" fontWeight="500" fontSize="16px" lineHeight="28px" letterSpacing="-0.02em" color="#181433">
                About Us
              </Text>

              <Text fontFamily="Manrope" fontWeight="500" fontSize="16px" lineHeight="28px" letterSpacing="-0.02em" color="#181433">
                Careers
              </Text>

              <Text fontFamily="Manrope" fontWeight="500" fontSize="16px" lineHeight="28px" letterSpacing="-0.02em" color="#181433">
                Blog
              </Text>

              <Text fontFamily="Manrope" fontWeight="500" fontSize="16px" lineHeight="28px" letterSpacing="-0.02em" color="#181433">
                Pricing
              </Text>

            </Flex>

            <Flex flexDir="column" gap="18px">

              <Text fontFamily="Manrope" fontWeight="700" fontSize="21px" lineHeight="28px" letterSpacing="-0.02em" color="#1B1C31">
                Resources
              </Text>

              <Text fontFamily="Manrope" fontWeight="500" fontSize="16px" lineHeight="28px" letterSpacing="-0.02em" color="#181433">
                Proposal Template
              </Text>

              <Text fontFamily="Manrope" fontWeight="500" fontSize="16px" lineHeight="28px" letterSpacing="-0.02em" color="#181433">
                Invoice Template
              </Text>

              <Text fontFamily="Manrope" fontWeight="500" fontSize="16px" lineHeight="28px" letterSpacing="-0.02em" color="#181433">
                Tuturoial
              </Text>

              <Text fontFamily="Manrope" fontWeight="500" fontSize="16px" lineHeight="28px" letterSpacing="-0.02em" color="#181433">
                How to write a contract
              </Text>

            </Flex>

            <Flex flexDir="column" gap="18px">

              <Text fontFamily="Manrope" fontWeight="700" fontSize="21px" lineHeight="28px" letterSpacing="-0.02em" color="#1B1C31">
                Join Our Newsletter
              </Text>

              <Input placeholder='Your email address' h="52px" bg="#F9F9F9" borderRadius="none" />

              <Text fontFamily="Manrope" fontWeight="500" fontSize="16px" lineHeight="28px" letterSpacing="-0.02em" color="#181433" opacity="0.5">
                *  Will send you weekly updates for your better
                finance management.
              </Text>

            </Flex>
          </SimpleGrid>

          <Center mt="59px" borderTop="1px solid #E5E5EA">

            <Text mt="40px" fontFamily="Manrope" fontWeight="500" fontSize="16px" lineHeight="26px" textAlign="center" letterSpacing="-0.02em" color="#181433">
              Copyright @ AR Shakir 2022. All Rights Reserved.
            </Text>
          </Center>
        </Flex>
      </Center>
    </>
  );
}