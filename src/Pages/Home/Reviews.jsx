import React from "react";
import { Box, Flex, Heading, Text } from "@chakra-ui/react";
import { Swiper, SwiperSlide } from "swiper/react";
import { useMediaQuery } from "react-responsive";
import { Navigation } from "swiper";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/bundle";

import "swiper/css"; // Custom styles for Swiper

const ReviewsData = [
  {
    name: "Rajarshi Sarkar",
    date: "April 22, 2022",
    review:
      "The app is really wonderful. Being a Product Manager myself, I would say that the User experience (UI/UX) of the app is top notch (easy to use, simple and convenient). Coming to services and delivery, I would say Pharmeasy is doing a tremendous job even during this unprecedented pandemic situation.",
  },
  {
    name: "Darpan Dholakia",
    date: "April 23, 2022",
    review:
      "Best service and app amongst all available. I have been using it for more than 3 years, and even during the pandemic, they have kept their standards high and are delivering the order within 24 hours. Keep up the good work.",
  },
  {
    name: "Lipi Chaudhuri",
    date: "April 15, 2022",
    review:
      "This app is a game changer for me. I am unable to go out always to buy medicinal products. Pharmeasy gives me the last liberty to shop essential healthcare products from home. The app is very user friendly and me being an elderly person do not find any difficulty in using it. They deliver well in time. Thanks😊",
  },
  {
    name: "Tirthankar Das Purkayastha",
    date: "April 23, 2022",
    review:
      "Very good app. Would recommend it to everyone requiring fast and efficient delivery of medicinal products at the doorstep.",
  },
  {
    name: "Debanjan Roy",
    date: "April 18, 2022",
    review:
      "Excellent experience. Pharmeasy has not let it's customers down during lockdown. Thanks team. Great job. The application is also very smooth. And does its job well with an attractive UI and easy to use features. Good job developer.",
  },
  {
    name: "Rohini Sarkar",
    date: "April 21, 2022",
    review:
      "Very helpful and friendly app in terms of usability, customer support & money saving from the point of medical necessity of every person.",
  },
];

const Reviews = () => {
  const isBigScreen = useMediaQuery({ query: "(max-width: 100%)" });
  const isTablet = useMediaQuery({ query: "(max-width: 992px)" });
  const isMobile = useMediaQuery({ query: "(max-width: 600px)" });

  return (
    <Box p={5}>
      <Heading
        p={5}
        // textAlign={"start"}
        size="lg"
        color={"#30363C"}
        fontFamily={"sans-serif"}
      >
        What Our Customers have to Say
      </Heading>

      <Flex justifyContent={"space-between"} p={5} w={"100%"}>
        <Swiper
          slidesPerView={isBigScreen ? 4 : isTablet ? 2 : isMobile ? 1 : 4}
          spaceBetween={20}
          loop={true}
          loopFillGroupWithBlank={true}
          modules={[Navigation]}
          className="mySwiper"
        >
          {ReviewsData.map((el, i) => (
            <SwiperSlide key={i} style={{ gap: "10px", color: "black" }}>
              <Box key={i} width="344px" 
              // textAlign="left"
              >
                <Heading fontSize="16px" fontWeight="600" mb="2">
                  {el.name}
                </Heading>
                <Text fontSize="14px" fontWeight="400" color="#666" mb="2">
                  {el.date}
                </Text>
                <Box
                  width="344px"
                  border="1px solid #e2fff2"
                  borderRadius="7px"
                  padding="24px"
                  marginTop="20px"
                  bg="#f0f0f0"
                  height="302px"
                  cursor={"grab"}
                >
                  <Text color="#bfeddd" fontSize="24px">
                    “
                  </Text>
                  <Text fontSize="16px" color="#4f4d4a" fontWeight="500">
                    {el.review}
                  </Text>
                </Box>
              </Box>
            </SwiperSlide>
          ))}
        </Swiper>
      </Flex>
    </Box>
  );
};

export default Reviews;
