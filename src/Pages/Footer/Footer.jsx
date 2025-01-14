import { Image, Stack, Text } from "@chakra-ui/react";
import React from "react";
import {
  Categories,
  Company,
  NeedHelp,
  OurServices,
  Partners,
  PolicyInfo,
} from "./FooterLinks";
import styles from "./footer.module.css";
import { BsFacebook, BsInstagram, BsYoutube, BsTwitter } from "react-icons/bs";
const Footer = () => {
  return (
    <div className={styles.container}>
      <Stack direction="horizontal" justify="space-between">
        <Stack gap="10px">
          <Text fontSize="16px" fontWeight="700">
            Company
          </Text>
          {Company.map((el, i) => (
            <Text key={i} fontSize="14px" fontWeight="500" cursor="pointer">
              {el.link}
            </Text>
          ))}
          <Text fontSize="16px" fontWeight="700" paddingTop="20px">
            Our Services
          </Text>
          {OurServices.map((el, i) => (
            <Text key={i} fontSize="14px" fontWeight="500" cursor="pointer">
              {el.link}
            </Text>
          ))}
        </Stack>
        <Stack gap="10px">
          <Text fontSize="16px" fontWeight="700">
            Featured Categories
          </Text>
          {Categories.map((el, i) => (
            <Text key={i} fontSize="14px" fontWeight="500" cursor="pointer">
              {el.link}
            </Text>
          ))}
        </Stack>
        <Stack gap="10px">
          <Text fontSize="16px" fontWeight="700">
            Need Help
          </Text>
          {NeedHelp.map((el, i) => (
            <Text key={i} fontSize="14px" fontWeight="500" cursor="pointer">
              {el.link}
            </Text>
          ))}
          {/* <Text fontSize="16px" fontWeight="700" paddingTop="20px">
            Policy Info
          </Text> */}
          {/* {PolicyInfo.map((el, i) => (
            <Text key={i} fontSize="14px" fontWeight="500" cursor="pointer">
              {el.link}
            </Text>
          ))} */}
        </Stack>
        <Stack gap="10px" marginRight="20px">
          <Text fontSize="16px" fontWeight="700">
            Follow us on
          </Text>
          <Stack direction="horizontal" gap="25px">
            <a href="https://www.instagram.com/initializ.ai/" target="blank">
            <BsInstagram
              style={{ width: "25px", height: "25px", cursor: "pointer" }}
            /> </a>
            <a href="https://www.facebook.com/profile.php?id=61556962362662" target="blank">
            <BsFacebook
              style={{ width: "25px", height: "25px", cursor: "pointer" }}
            /></a>
            <a href="https://www.youtube.com/@initializAI" target="blank">
            <BsYoutube
              style={{ width: "25px", height: "25px", cursor: "pointer" }}
            /></a>
            <a href="https://x.com/initializ" target="blank">
            <BsTwitter
              style={{ width: "25px", height: "25px", cursor: "pointer" }}
            /></a>
          </Stack>
        </Stack>
      </Stack>
      <Stack gap="10px" marginBottom="40px" marginTop="30px">
        {/* <Text fontSize="16px" fontWeight="700">
          Our Payment Partners
        </Text> */}
        <Stack direction="horizontal" justify="space-between">
          <Stack direction="horizontal" gap="40px" width="784px" height="24px">
            {Partners.map((el, i) => (
              <Image key={i} src={el.img} height="18px" />
            ))}
          </Stack>
          <Text fontSize="14px">© 2024 Initializ Inc. All Rights Reserved</Text>
        </Stack>
      </Stack>
    </div>
  );
};

export default Footer;