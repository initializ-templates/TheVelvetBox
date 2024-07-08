import React from 'react';
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
  Heading,
} from '@chakra-ui/react';
import Navbar from '../../Components/Navbar';
import Footer from '../Footer/Footer';

const About = () => {
  return (
    <>
      <Navbar />
      <Heading pt={100} textAlign="center">
        Here are some frequently asked questions.
      </Heading>
      <Box pt={20} w="80%" m="auto" pb={20}>
        <Accordion allowToggle p={10} boxShadow="rgba(0, 0, 0, 0.35) 0px 5px 15px">
          <AccordionItem>
            <h2>
              <AccordionButton>
                <Box as="span" fontSize={["15px", "10px", "25px"]} textAlign="center" flex="1">
                  What is VelvetBox?
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
              VelvetBox is a jewelry ecommerce website where customers can purchase unique jewelry items for themselves and loved ones.
            </AccordionPanel>
          </AccordionItem>

          <AccordionItem>
            <h2>
              <AccordionButton>
                <Box as="span" flex="1" fontSize={["15px", "10px", "25px"]} textAlign="center">
                  Who created VelvetBox?
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
              VelvetBox was created by Initializ Labs, a company specializing in ecommerce solutions and website templates.
            </AccordionPanel>
          </AccordionItem>

          <AccordionItem>
            <h2>
              <AccordionButton>
                <Box as="span" flex="1" fontSize={["15px", "10px", "25px"]} textAlign="center">
                  How can I track my order?
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
              Once your order is confirmed and shipped, you will receive a tracking number via email. You can use this number to track your package on our website.
            </AccordionPanel>
          </AccordionItem>

          <AccordionItem>
            <h2>
              <AccordionButton>
                <Box as="span" flex="1" fontSize={["15px", "10px", "25px"]} textAlign="center">
                  What payment methods are accepted?
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
              VelvetBox accepts major credit cards (Visa, MasterCard, American Express) as well as PayPal for online payments.
            </AccordionPanel>
          </AccordionItem>

          <AccordionItem>
            <h2>
              <AccordionButton>
                <Box as="span" flex="1" fontSize={["15px", "10px", "25px"]} textAlign="center">
                  Do you offer international shipping?
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
              Yes, VelvetBox offers international shipping to most countries. Shipping rates and delivery times may vary depending on the destination.
            </AccordionPanel>
          </AccordionItem>

        </Accordion>
      </Box>
      <Footer />
    </>
  );
};

export default About;
