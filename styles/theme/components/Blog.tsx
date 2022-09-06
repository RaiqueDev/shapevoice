// REACT 
import { useEffect } from "react";

// CHAKRA
import { Button, Center, Flex, SimpleGrid, Text } from "@chakra-ui/react";

// NEXT
import Image from "next/image";

// FRAMER MOTION
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

// IMAGE
import BlogOne from '../../images/BlogOne.svg';
import BlogTwo from '../../images/BlogTwo.svg';
import ImgBlogOne from '../../images/ImgBlogOne.svg';
import ImgBlogTwo from '../../images/ImgBlogTwo.svg';
import ImgBlogThree from '../../images/ImgBlogThree.svg';
import ImgBlogFour from '../../images/ImgBlogFour.svg';

export const Blog = () => {

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
      opacity: 1,

      transition: {
        duration: 0.5,
        ease: "easeInOut",
      },
    }
  }

  return (
    <>
      <Center mt="96px" w="full">

        <Flex
          as={motion.div}
          ref={ref}
          initial="hidden"
          animate={controls}
          variants={boxVariants} 
          maxW="90%" w="1200px" flexDir="column">

          <Flex flexDir={{ base: "column", md: "row" }} gap="35px" maxW="full" w="full" textAlign={{ base: "center", md: "start" }} alignItems="center" justifyContent="space-between">

            <Text fontFamily="Manrope" fontWeight="800" fontSize="42px" lineHeight="50px" letterSpacing="-0.03em" color="#000">
              Our Latest Blog Posts
            </Text>

            <Button bg="#4F46BA" color="#fff" h="60px" px="30px" borderRadius="10px">
              See All Blog Posts
            </Button>
          </Flex>

          <SimpleGrid mt="56px" maxW="full" w="full" justifyItems="center" columns={[1, 1, 2, 3]} gap={10}>

            <Flex flexDir="column" maxW="full" w="378px">

              <Image src={BlogOne} />

              <Flex mt="14px" gap="19px">
                <Text fontFamily="Manrope" fontWeight="500" fontSize="16px" lineHeight="30px" letterSpacing="-0.02em" color="#64607D">
                  08-11-2021
                </Text>

                <Text fontFamily="Manrope" fontWeight="500" fontSize="16px" lineHeight="30px" letterSpacing="-0.02em" color="#64607D">
                  Category
                </Text>
              </Flex>

              <Text fontFamily="Manrope" fontWeight="800" fontSize="20px" lineHeight="36px" letterSpacing="-0.03em" color="#000">
                Believing neglected so so allowance existence departure.
              </Text>

              <Text fontFamily="Manrope" fontWeight="500" fontSize="16px" lineHeight="30px" letterSpacing="-0.02em" color="#64607D">
                End-to-end payments and financial management in a single solution. Meet the right platform to help realize.
              </Text>
            </Flex>

            <Flex flexDir="column" maxW="full" w="378px">

              <Image src={BlogTwo} />

              <Flex mt="14px" gap="19px">
                <Text fontFamily="Manrope" fontWeight="500" fontSize="16px" lineHeight="30px" letterSpacing="-0.02em" color="#64607D">
                  08-11-2021
                </Text>

                <Text fontFamily="Manrope" fontWeight="500" fontSize="16px" lineHeight="30px" letterSpacing="-0.02em" color="#64607D">
                  Category
                </Text>
              </Flex>

              <Text fontFamily="Manrope" fontWeight="800" fontSize="20px" lineHeight="36px" letterSpacing="-0.03em" color="#000">
                In design active temper be uneasy. Thirty for remove plenty regard you.
              </Text>

              <Text fontFamily="Manrope" fontWeight="500" fontSize="16px" lineHeight="30px" letterSpacing="-0.02em" color="#64607D">
                End-to-end payments and financial management in a single solution. Meet the right platform to help realize.
              </Text>
            </Flex>

            <Flex flexDir="column" gap="26px" maxW="full" w="378px">

              <Flex gap="16px" w="full" h="110px" borderBottom="1px solid #DEE1E6">

                <Image src={ImgBlogOne} />

                <Flex flexDir="column">

                  <Flex gap="19px">
                    <Text fontFamily="Manrope" fontWeight="500" fontSize="14px" letterSpacing="-0.02em" color="#64607D">
                      08-11-2021
                    </Text>

                    <Text fontFamily="Manrope" fontWeight="500" fontSize="14px" letterSpacing="-0.02em" color="#64607D">
                      Category
                    </Text>
                  </Flex>

                  <Text fontFamily="Manrope" fontWeight="800" fontSize="15px" letterSpacing="-0.03em" color="#000">
                    Partiality on or continuing in particular principles
                  </Text>
                </Flex>
              </Flex>

              <Flex gap="16px" w="full" h="110px" borderBottom="1px solid #DEE1E6">

                <Image src={ImgBlogTwo} />

                <Flex flexDir="column">

                  <Flex gap="19px">
                    <Text fontFamily="Manrope" fontWeight="500" fontSize="14px" letterSpacing="-0.02em" color="#64607D">
                      08-11-2021
                    </Text>

                    <Text fontFamily="Manrope" fontWeight="500" fontSize="14px" letterSpacing="-0.02em" color="#64607D">
                      Category
                    </Text>
                  </Flex>

                  <Text fontFamily="Manrope" fontWeight="800" fontSize="15px" letterSpacing="-0.03em" color="#000">
                    Partiality on or continuing in particular principles
                  </Text>
                </Flex>
              </Flex>

              <Flex gap="16px" w="full" h="110px" borderBottom="1px solid #DEE1E6">

                <Image src={ImgBlogThree} />

                <Flex flexDir="column">

                  <Flex gap="19px">
                    <Text fontFamily="Manrope" fontWeight="500" fontSize="14px" letterSpacing="-0.02em" color="#64607D">
                      08-11-2021
                    </Text>

                    <Text fontFamily="Manrope" fontWeight="500" fontSize="14px" letterSpacing="-0.02em" color="#64607D">
                      Category
                    </Text>
                  </Flex>

                  <Text fontFamily="Manrope" fontWeight="800" fontSize="15px" letterSpacing="-0.03em" color="#000">
                    Partiality on or continuing in particular principles
                  </Text>
                </Flex>
              </Flex>

              <Flex gap="16px" w="full" h="110px" borderBottom="1px solid #DEE1E6">

                <Image src={ImgBlogFour} />

                <Flex flexDir="column">

                  <Flex gap="19px">
                    <Text fontFamily="Manrope" fontWeight="500" fontSize="14px" letterSpacing="-0.02em" color="#64607D">
                      08-11-2021
                    </Text>

                    <Text fontFamily="Manrope" fontWeight="500" fontSize="14px" letterSpacing="-0.02em" color="#64607D">
                      Category
                    </Text>
                  </Flex>

                  <Text fontFamily="Manrope" fontWeight="800" fontSize="15px" letterSpacing="-0.03em" color="#000">
                    Partiality on or continuing in particular principles
                  </Text>
                </Flex>
              </Flex>
            </Flex>
          </SimpleGrid>

        </Flex>
      </Center>
    </>
  );
}