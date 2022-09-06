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
import TestimonialsImg from '../../images/TestimonialsImg.svg';

// ICON
import { FaLongArrowAltLeft, FaLongArrowAltRight } from "react-icons/fa";
import { QuotationMarks } from "../../images/QuotationMarks";

export const Testimonails = () => {

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
      <Center mt="125px" w="full">

        <Flex
          as={motion.div}
          ref={ref}
          initial="hidden"
          animate={controls}
          variants={boxVariants}
          flexDir="column" maxW="90%" w="1200px">

          <Flex flexDir="column" gap="15px" textAlign={{ base: "center", md: "start" }}>

            <Text fontFamily="Manrope" fontWeight="700" fontSize="14px" lineHeight="17px" textTransform="uppercase" color="#3734A9">
              Testimonials
            </Text>

            <Text fontFamily="Manrope" fontWeight="800" fontSize="40px" lineHeight="48px" letterSpacing="-0.03em" color="#000">
              Check what our <br />
              clients are saying
            </Text>
          </Flex>

          <Flex flexDir={{ base: "column", lg: "row" }} mt="40px" maxW="full" gap="40px">

            <Flex maxW="full" flexDir="column" gap="37px" pos="relative">

              <Flex maxW="full">
                <Image src={TestimonialsImg} alt="test" />

                <Flex mt={{ base: "50px", sm: "148px" }} maxW="full" w="689px" justifyContent="flex-end" pos="absolute">
                  <QuotationMarks />
                </Flex>
              </Flex>

              <Flex maxW="full" gap="11px">
                <Button borderRadius="full" py="24px" bg="#3734A9" color="#fff">
                  <FaLongArrowAltLeft />
                </Button>

                <Button borderRadius="full" py="24px" color="#453232">
                  <FaLongArrowAltRight />
                </Button>
              </Flex>
            </Flex>

            <Flex maxW="full" w="455px" flexDir="column" gap="16px">

              <svg xmlns="http://www.w3.org/2000/svg" width="37" height="27" fill="none" viewBox="0 0 37 27">
                <path fill="#FF7F5C" d="M36.541.266 35.62 5.89c-1.844-.131-3.343.132-4.495.79-1.153.624-1.96 1.545-2.421 2.762-.423 1.183-.5 2.564-.23 4.143h8.069V27h-15.68V13.584c0-4.735 1.288-8.32 3.862-10.753C27.3.365 31.239-.49 36.542.266Zm-20.864 0-.922 5.623c-1.845-.131-3.343.132-4.496.79-1.152.624-1.96 1.545-2.42 2.762-.423 1.183-.5 2.564-.231 4.143h8.07V27H0V13.584C0 8.849 1.287 5.264 3.862 2.83 6.436.365 10.374-.49 15.677.266Z" />
              </svg>

              <Text fontFamily="Manrope" fontWeight="800" fontSize="20px" lineHeight="30px" letterSpacing="-0.03em" color="#000">
                Save Time Managing Social<br />
                Media For Your Business
              </Text>

              <Text fontFamily="Manrope" fontSize="16px" lineHeight="24px" letterSpacing="-0.02em" color="#757095">
                Is be upon sang fond must shew. Really boy law county she unable her sister. Feet you off its like like six. Among sex are leave law built now. In built table in an rapid blush. Merits behind on afraid or warmly.
                <br /><br />
                Believing neglected so so allowance existence departure in. In design active temper be uneasy.
              </Text>

              <svg xmlns="http://www.w3.org/2000/svg" width="91" height="17" fill="none" viewBox="0 0 91 17">
                <path fill="#F9896B" d="M9.086 2.438c.328-.856 1.54-.856 1.867 0l1.07 2.793a1 1 0 0 0 .934.642h3.063c1.008 0 1.383 1.323.525 1.852l-2.18 1.343a1 1 0 0 0-.41 1.21l.897 2.34c.342.892-.645 1.71-1.459 1.208l-2.849-1.756a1 1 0 0 0-1.05 0l-2.848 1.756c-.815.502-1.801-.316-1.459-1.209l.896-2.34a1 1 0 0 0-.409-1.209l-2.18-1.343c-.858-.53-.483-1.852.525-1.852h3.063a1 1 0 0 0 .934-.642l1.07-2.793Zm17.681 0c.328-.856 1.54-.856 1.868 0l1.07 2.793a1 1 0 0 0 .933.642h3.064c1.008 0 1.382 1.323.524 1.852l-2.18 1.343a1 1 0 0 0-.409 1.21l.896 2.34c.342.892-.644 1.71-1.458 1.208l-2.85-1.756a1 1 0 0 0-1.049 0l-2.85 1.756c-.813.502-1.8-.316-1.458-1.209l.897-2.34a1 1 0 0 0-.41-1.209l-2.18-1.343c-.858-.53-.483-1.852.525-1.852h3.064a1 1 0 0 0 .933-.642l1.07-2.793Zm17.681 0c.328-.856 1.54-.856 1.868 0l1.07 2.793a1 1 0 0 0 .933.642h3.064c1.008 0 1.383 1.323.525 1.852l-2.18 1.343a1 1 0 0 0-.41 1.21l.897 2.34c.342.892-.645 1.71-1.459 1.208l-2.85-1.756a1 1 0 0 0-1.049 0l-2.849 1.756c-.814.502-1.8-.316-1.458-1.209l.896-2.34a1 1 0 0 0-.41-1.209l-2.18-1.343c-.857-.53-.483-1.852.525-1.852h3.064a1 1 0 0 0 .934-.642l1.07-2.793Zm17.682 0c.328-.856 1.54-.856 1.867 0l1.07 2.793a1 1 0 0 0 .934.642h3.063c1.008 0 1.383 1.323.525 1.852l-2.18 1.343a1 1 0 0 0-.41 1.21l.897 2.34c.342.892-.645 1.71-1.459 1.208l-2.849-1.756a1 1 0 0 0-1.05 0l-2.848 1.756c-.814.502-1.801-.316-1.459-1.209l.896-2.34a1 1 0 0 0-.409-1.209l-2.18-1.343c-.858-.53-.483-1.852.525-1.852h3.063a1 1 0 0 0 .934-.642l1.07-2.793Zm17.68 0c.329-.856 1.54-.856 1.869 0l1.07 2.793a1 1 0 0 0 .933.642h3.064c1.008 0 1.382 1.323.524 1.852l-2.18 1.343a1 1 0 0 0-.409 1.21l.896 2.34c.342.892-.644 1.71-1.458 1.208l-2.85-1.756a1 1 0 0 0-1.049 0l-2.85 1.756c-.813.502-1.8-.316-1.458-1.209l.896-2.34a1 1 0 0 0-.409-1.209l-2.18-1.343c-.858-.53-.483-1.852.525-1.852h3.063a1 1 0 0 0 .934-.642l1.07-2.793Z" />
              </svg>

              <Text fontFamily="Manrope" fontWeight="800" fontSize="16px" lineHeight="30px" letterSpacing="-0.03em" color="#000">
                AR Shakir
              </Text>

              <Text>
                CEO GetNextDesign
              </Text>
            </Flex>
          </Flex>
        </Flex>
      </Center>
    </>
  );
}