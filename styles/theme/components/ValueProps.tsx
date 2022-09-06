// REACT 
import { useEffect } from "react";

// CHAKRA
import { Button, Center, Flex, SimpleGrid, Text } from "@chakra-ui/react";

// FRAMER MOTION
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

// ICON
import { BsArrowRight } from "react-icons/bs";

export const ValueProps = () => {

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
      },
    }
  }

  return (
    <>
      <Center mt="178px" w="full">

        <Flex
          as={motion.div}
          ref={ref}
          initial="hidden"
          animate={controls}
          variants={boxVariants}
          maxW="90%" alignItems="center" flexDir="column" textAlign="center" gap="13px">

          <Text fontFamily="Manrope" fontWeight="800" fontSize="38px" lineHeight="60px" color="#000" letterSpacing="-0.03em">
            Push your code to product with ease.
          </Text>

          <Text maxW="full" w="604px" fontFamily="Manrope" fontWeight="500" fontSize="17px" lineHeight="30px" color="#64607D" letterSpacing="-0.02em">
            Led ask possible mistress relation elegance eat likewise debating. 
            By message or am nothing amongst chiefly address.
          </Text>

          <SimpleGrid mt="59px" maxW="full" w="1200px" columns={[1, 1, 2, 3]} spacing={10} justifyItems="center">

            <Flex textAlign="start" gap="20px" flexDir="column" maxW="full" w="380px" px="33px" py="39px" bg="#fff" border="1px solid #DFDFDF" borderRadius="22px">

              <Text fontFamily="Manrope" fontWeight="800" fontSize="24px" lineHeight="33px" color="#1B1C31" letterSpacing="-0.03em">
                Push your code to product with ease.
              </Text>

              <Text fontFamily="Manrope" fontWeight="500" fontSize="16px" lineHeight="30px" color="#64607D" letterSpacing="-0.02em">
                Is be upon sang fond must shew. Really boy law county she unable her sister. Feet you off its like like six.
              </Text>

              <Flex gap="10px" textAlign="start">
                <Text fontFamily="Manrope" fontWeight="500" fontSize="16px" lineHeight="16px" color="#01966B">
                  Read More
                </Text>

                <BsArrowRight color="#01966B" />
              </Flex>
            </Flex>

            <Flex textAlign="start" gap="20px" flexDir="column" maxW="full" w="380px" px="33px" py="39px" bg="#fff" border="1px solid #DFDFDF" borderRadius="22px">

              <Text fontFamily="Manrope" fontWeight="800" fontSize="24px" lineHeight="33px" color="#1B1C31" letterSpacing="-0.03em">
                Push your code to product with ease.
              </Text>

              <Text fontFamily="Manrope" fontWeight="500" fontSize="16px" lineHeight="30px" color="#64607D" letterSpacing="-0.02em">
                Is be upon sang fond must shew. Really boy law county she unable her sister. Feet you off its like like six.
              </Text>

              <Flex gap="10px" textAlign="start">
                <Text fontFamily="Manrope" fontWeight="500" fontSize="16px" lineHeight="16px" color="#01966B">
                  Read More
                </Text>

                <BsArrowRight color="#01966B" />
              </Flex>
            </Flex>

            <Flex textAlign="start" gap="20px" flexDir="column" maxW="full" w="380px" px="33px" py="39px" bg="#fff" border="1px solid #DFDFDF" borderRadius="22px">

              <Text fontFamily="Manrope" fontWeight="800" fontSize="24px" lineHeight="33px" color="#1B1C31" letterSpacing="-0.03em">
                Push your code to product with ease.
              </Text>

              <Text fontFamily="Manrope" fontWeight="500" fontSize="16px" lineHeight="30px" color="#64607D" letterSpacing="-0.02em">
                Is be upon sang fond must shew. Really boy law county she unable her sister. Feet you off its like like six.
              </Text>

              <Flex gap="10px" textAlign="start">
                <Text fontFamily="Manrope" fontWeight="500" fontSize="16px" lineHeight="16px" color="#01966B">
                  Read More
                </Text>

                <BsArrowRight color="#01966B" />
              </Flex>
            </Flex>
          </SimpleGrid>

          <Button maxW="90%" mt="42px" py="27px" px="50px" bg="#4F46BA" color="#fff" borderRadius="10px">
            More About Platform
          </Button>
        </Flex>
      </Center>
    </>
  );
}