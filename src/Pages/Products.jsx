import React, { useEffect, useState } from "react";
import {
  Box,
  Text,
  SimpleGrid,
  Image,
  Heading,
  Flex,
  Select,
  Spacer,
  Radio,
  Divider,
  Checkbox,
  Drawer,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Button,
  useDisclosure,
  RadioGroup,
  Stack,
  DrawerBody,
  CheckboxGroupGroup,
} from "@chakra-ui/react";
import Style from "./ProductPage.module.css";
import { useNavigate } from "react-router-dom";
import Navbar from "../Components/Navbar";
import Footer from "./Footer/Footer";

// Mock Data (Replace with actual backend API calls)
export const Products = [
  {
    productId: 0,
    productName: "Diamond Necklace",
    imageUrl: ["https://2.imimg.com/data2/CG/RE/MY-3025447/diamond-necklace-500x500.jpg"],
    sale_price: 5999,
    description: "Exquisite diamond necklace crafted with 18k white gold. This necklace features a stunning arrangement of brilliant cut diamonds, perfect for any special occasion.",
    ratings: 4.8, // Example rating (out of 5)
    quantity:1
  },
  {
    productId: 1,
    productName: "Gold Ring",
    imageUrl: ["https://i.pinimg.com/originals/56/37/66/56376681bea0c4135a00f87520e9d02e.png"],
    sale_price: 3999,
    description: "Elegant gold ring made with 24k pure gold. This ring is a timeless piece of jewelry that complements both casual and formal attire.",
    ratings: 4.5, // Example rating (out of 5)
    quantity:1
  },
  {
    productId: 2,
    productName: "Silver Earrings",
    imageUrl: ["https://5.imimg.com/data5/SELLER/Default/2022/6/QS/GO/DS/3152346/925-sterling-silver-earring-500x500.jpg"],
    sale_price: 1299,
    description: "Classic silver earrings designed with intricate filigree work. These earrings are lightweight and ideal for daily wear.",
    ratings: 4.2, // Example rating (out of 5)
    quantity:1
  },
  {
    productId: 3,
    productName: "Ruby Pendant",
    imageUrl: ["https://img.freepik.com/premium-photo/ruby-pendant-necklace-uhd-wallpaper-stock-photographic-image_853645-72186.jpg"],
    sale_price: 4599,
    description: "Vivid ruby pendant set in 14k yellow gold. The ruby is surrounded by a halo of sparkling diamonds, making it a standout piece.",
    ratings: 4.7, // Example rating (out of 5)
    quantity:1
  },
  {
    productId: 4,
    productName: "Emerald Bracelet",
    imageUrl: ["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRg-P8WLNc26lFVQEP5fbz4Ksde5Moj3CG6Zg&s"],
    sale_price: 3199,
    description: "Luxurious emerald bracelet crafted with 18k gold. The bracelet features oval-cut emeralds alternating with diamond-studded links.",
    ratings: 4.3, // Example rating (out of 5)
    quantity:1
  },
  {
    productId: 5,
    productName: "Sapphire Ring",
    imageUrl: ["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgScwy-tS7U6a_eVkUwMkB5bp5cgri77q84w&s"],
    sale_price: 2799,
    description: "Sapphire ring with a deep blue hue, set in platinum. The ring's design incorporates delicate floral motifs around the band.",
    ratings: 4.6, // Example rating (out of 5)
    quantity:1
  },
  {
    productId: 6,
    productName: "Platinum Chain",
    imageUrl: ["https://i.pinimg.com/736x/3f/1b/69/3f1b69c2a6dfcb5e43d484bab51361e4.jpg"],
    sale_price: 7999,
    description: "Heavy-duty platinum chain suitable for both men and women. This chain is polished to a high shine and is a durable accessory.",
    ratings: 4.9, // Example rating (out of 5)
    quantity:1
  },
  {
    productId: 7,
    productName: "Pearl Necklace",
    imageUrl: ["https://sukkhi.com/cdn/shop/products/SR00018559_2000x.jpg?v=1660117692"],
    sale_price: 2399,
    description: "Timeless pearl necklace featuring lustrous freshwater pearls. The pearls are individually knotted and secured with a sterling silver clasp.",
    ratings: 4.4, // Example rating (out of 5)
    quantity:1
  },
  {
    productId: 8,
    productName: "Topaz Earrings",
    imageUrl: ["https://m.media-amazon.com/images/I/31vA6XPZtwL._AC_UY1100_.jpg"],
    sale_price: 1699,
    description: "Topaz earrings in a striking sky blue hue, set in 18k gold. These earrings are perfect for adding a pop of color to your ensemble.",
    ratings: 4.1, // Example rating (out of 5)
    quantity:1
  },
  {
    productId: 9,
    productName: "Amethyst Pendant",
    imageUrl: ["https://d17anp2eo56k6j.cloudfront.net/media/catalog/product/cache/69a9f301de1749073166f9043f4fef2a/l/a/large-amethyst-pendant-necklace_3_90-1-12813.jpg"],
    sale_price: 1899,
    description: "Amethyst pendant with a deep purple gemstone, accented with a halo of white diamonds. The pendant is crafted in sterling silver.",
    ratings: 4.3, // Example rating (out of 5)
    quantity:1
  },
  {
    productId: 10,
    productName: "Rose Gold Bracelet",
    imageUrl: ["https://assets.ajio.com/medias/sys_master/root/20230624/Idi9/64964c63eebac147fceecf60/-473Wx593H-465276060-rosegold-MODEL.jpg"],
    sale_price: 3499,
    description: "Chic rose gold bracelet featuring interlocking links. This bracelet is lightweight and comfortable for everyday wear.",
    ratings: 4.2, // Example rating (out of 5)
    quantity:1
  },
  {
    productId: 11,
    productName: "Titanium Ring",
    imageUrl: ["https://m.media-amazon.com/images/I/61qW8t4mF4L._AC_UY1100_.jpg"],
    sale_price: 1499,
    description: "Durable titanium ring with a matte finish. This ring is hypoallergenic and resistant to scratches, making it ideal for active lifestyles.",
    ratings: 4.0, // Example rating (out of 5)
    quantity:1
  },
  {
    productId: 12,
    productName: "Cubic Zirconia Studs",
    imageUrl: ["https://m.media-amazon.com/images/I/512SbJ6PScL._AC_UY1000_.jpg"],
    sale_price: 999,
    description: "Elegant cubic zirconia studs in a classic round cut. These studs are set in sterling silver and are suitable for any occasion.",
    ratings: 4.1, // Example rating (out of 5)
    quantity:1
  },
  {
    productId: 13,
    productName: "White Gold Necklace",
    imageUrl: ["https://content.gemeye.com/Docs/Images/20/2020/01/Large/8d5c83a9-f762-48ab-8369-5dcdc17333e6-48609c5528b879e105d9a7cd9f378d29.jpg"],
    sale_price: 5699,
    description: "White gold necklace featuring a delicate chain and a minimalist pendant. This necklace adds a touch of sophistication to any outfit.",
    ratings: 4.6, // Example rating (out of 5)
    quantity:1
  },
  {
    productId: 14,
    productName: "Diamond Solitaire Ring",
    imageUrl: ["https://www.candere.com/media/jewellery/images/C020948_1.jpeg"],
    sale_price: 8999,
    description: "Timeless diamond solitaire ring with a brilliant-cut diamond. The diamond is set in platinum, showcasing its brilliance and fire.",
    ratings: 4.9, // Example rating (out of 5)
    quantity:1
  },
  {
    productId: 15,
    productName: "Gold Hoop Earrings",
    imageUrl: ["https://kinclimg4.bluestone.com/f_jpg,c_scale,w_828,q_80,b_rgb:f0f0f0/giproduct/BIAB0654H06_YAA18PRWHXXXXXXXX_ABCD00-PICS-00004-1024-50038.png"],
    sale_price: 999,
    description: "Classic gold hoop earrings that are lightweight and versatile. These earrings are essential for every jewelry collection.",
    ratings: 4.3, // Example rating (out of 5)
    quantity:1
  },
  {
    productId: 16,
    productName: "Silver Bracelet",
    imageUrl: ["https://4.imimg.com/data4/WM/XG/MY-1864875/men-s-antique-silver-bracelet-500x500.jpg"],
    sale_price: 799,
    description: "Simple yet elegant silver bracelet suitable for everyday wear. The bracelet has a polished finish and a secure clasp.",
    ratings: 4.0, // Example rating (out of 5)
    quantity:1
  },
  {
    productId: 17,
    productName: "Ruby and Diamond Necklace Set",
    imageUrl: ["https://www.sanvijewels.com/cdn/shop/products/image_zoom_5_bf59963b-035b-45eb-b0b1-f67434b15aa5.jpg?v=1614318121"],
    sale_price: 7999,
    description: "Stunning ruby and diamond necklace set in 18k gold. The necklace features a mix of rubies and diamonds in a sophisticated design.",
    ratings: 4.7, // Example rating (out of 5)
    quantity:1
  },
  {
    productId: 18,
    productName: "Emerald Drop Earrings",
    imageUrl: ["https://therose.in/wp-content/uploads/2023/09/6STK22556-1.jpg"],
    sale_price: 2399,
    description: "Elegant emerald drop earrings with pear-cut emeralds surrounded by diamond accents. These earrings are crafted in 14k yellow gold.",
    ratings: 4.4, // Example rating (out of 5)
    quantity:1
  },
  {
    productId: 19,
    productName: "Sapphire Tennis Bracelet",
    imageUrl: ["https://cdn11.bigcommerce.com/s-y73h7mn55y/images/stencil/1280x1280/products/118272/106722/tb8020bsw__72296.1648178017.jpg?c=2"],
    sale_price: 3899,
    description: "Sapphire tennis bracelet featuring oval-cut sapphires alternating with diamond links. This bracelet is a statement piece.",
    ratings: 4.6, // Example rating (out of 5)
    quantity:1
  },
  {
    productId: 20,
    productName: "Platinum Engagement Ring",
    imageUrl: ["https://kinclimg6.bluestone.com/f_jpg,c_scale,w_828,q_80,b_rgb:f0f0f0/giproduct/BVHJ0175R12_PAA95DIG4XXXXXXXX_ABCD00-PICS-00001-1024-72884.png"],
    sale_price: 12999,
    description: "Exquisite platinum engagement ring with a princess-cut diamond. The ring is designed to showcase the diamond's brilliance and clarity.",
    ratings: 4.9, // Example rating (out of 5)
    quantity:1
  },
  // Add more products as needed
];



const ProductsPage = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();
  const [value, setValue] = React.useState("1");
  const [data, setData] = useState([]);
  const navigate = useNavigate();

  // Function to fetch products based on category (Mocking API call)
  const fetchProducts = (category) => {
    let filteredData = Products;
    if (category === "diamond") {
      filteredData = Products.filter((item) =>
        item.productName.toLowerCase().includes("diamond")
      );
    } else if (category === "gold") {
      filteredData = Products.filter((item) =>
        item.productName.toLowerCase().includes("gold")
      );
    } else if (category === "necklace") {
      filteredData = Products.filter((item) =>
        item.productName.toLowerCase().includes("necklace")
      );
    }
    setData(filteredData);
  };


  const fetchPrice = (price) => {
    let filteredData1 = Products;
    if (price < 1000) {
      filteredData1 = Products.filter((item) =>
        item.sale_price < 1000
      );
    } else if (price>=1000 && price<2000) {
      filteredData1 = Products.filter((item) =>
        item.sale_price >=1000  && item.sale_price<2000
      );
    } else if (price>=2000 && price<3000) {
      filteredData1 = Products.filter((item) =>
        item.sale_price >=2000  && item.sale_price<3000
      );
    } else if (price>=3000 && price<4000) {
      filteredData1 = Products.filter((item) =>
        item.sale_price >=3000  && item.sale_price<4000
      );
    } else if (price>=4000) {
      filteredData1 = Products.filter((item) =>
        item.sale_price >=4000
      );
    }
    setData(filteredData1);
  };



  useEffect(() => {
    fetchProducts("a","g","n"); // Default to fetch gold category products on load
  }, []);

  // Function to handle navigation to single product page
  const handleClick = (el) => {
    navigate(`/products/${el.productId}`);
  };

  const handleSortData = (sortBy) => {
    let sortedData = [...data];
    if (sortBy === "asc") {
      sortedData.sort((a, b) => a.sale_price - b.sale_price);
    } else if (sortBy === "dsc") {
      sortedData.sort((a, b) => b.sale_price - a.sale_price);
    } else if (sortBy ==="rel"){
      sortedData.sort(() => Math.random() - 0.5);
    }

    setData(sortedData);
  };

  

  return (
    <>
      <Navbar />
      {/* <Box pt="110px" bg="#e7e7e7"> */}
        <Box gap={10} display="flex" w="90%" m="auto" className={Style.main} pt="110px">
          <Box
            bg="white"
            borderRadius={10}
            w="30%"
            boxShadow="rgba(99, 99, 99, 0.2) 0px 2px 8px 0px"
            padding="25px"
            className={Style.main1}
          >
            <Box w="90%">
              <Heading
                size="sm"
                fontSize="30px"
                color="rgb(79,88,104)"
                className={Style.heading}
              >
                Filter
              </Heading>
              <Text mt="20px" mb="15px" fontSize="20px">
                Category
              </Text>
              <RadioGroup onChange={setValue} value={value}>
                <Flex onClick={() => fetchProducts("necklace")} mb="10px">
                  <Text>Necklace</Text>
                  <Spacer />
                  <Radio value="necklace"></Radio>
                </Flex>
                <Flex onClick={() => fetchProducts("diamond")} mb="10px">
                  <Text>Diamond</Text>
                  <Spacer />
                  <Radio value="diamond"></Radio>
                </Flex>
                <Flex onClick={() => fetchProducts("gold")} mb="10px">
                  <Text>Gold items</Text>
                  <Spacer />
                  <Radio value="gold"></Radio>
                </Flex>
              </RadioGroup>
              <Divider mt="30px" />
              <Text mt="20px" mb="15px" fontSize="20px">
                Price
              </Text>

              <RadioGroup onChange={setValue} value={value}>
              <Flex onClick ={()=> fetchPrice("700")} mt="20px" mb="20px">
                <Text>Below 1000</Text>
                <Spacer />
                <Text mr="15px">(3)</Text>
                <Radio size="md" colorScheme="green" value="One"></Radio>
              </Flex>

              <Flex onClick ={()=> fetchPrice("1700")} mt="20px" mb="20px">
                <Text>1000 - 1999</Text>
                <Spacer />
                <Text mr="15px">(4)</Text>
                <Radio size="md" colorScheme="green" value="Two"></Radio>
              </Flex>

              <Flex onClick ={()=> fetchPrice("2700")} mt="20px" mb="20px">
                <Text>2000 - 2999</Text>
                <Spacer />
                <Text mr="15px">(3)</Text>
                <Radio size="md" colorScheme="green" value="Three"></Radio>
              </Flex>

              <Flex onClick ={()=> fetchPrice("3700")} mt="20px" mb="20px">
                <Text>3000 - 3999</Text>
                <Spacer />
                <Text mr="15px">(3)</Text>
                <Radio size="md" colorScheme="green" value="Four"></Radio>
              </Flex>

              <Flex onClick ={()=> fetchPrice("4700")} mt="20px" mb="20px">
                <Text>Above 4000</Text>
                <Spacer />
                <Text mr="15px">(7)</Text>
                <Radio size="md" colorScheme="green" value="Five"></Radio>
              </Flex>

              </RadioGroup>

            </Box>
          </Box>

          <Box
            w="70%"
            borderRadius="10px"
            bg="white"
            boxShadow="rgba(99, 99, 99, 0.2) 0px 2px 8px 0px"
            padding="10px"
            className={Style.data_box}
          >
            <Box h="50px" mb="30px">
              <Flex mt="15px">
                <Box>
                  <Heading
                    size="sm"
                    fontSize="30px"
                    color="rgb(79,88,104)"
                    className={Style.heading}
                  >
                    Products
                  </Heading>
                </Box>
                <Spacer />
                <Box>
                  <Flex className={Style.select}>
                    <Text fontSize="18px" mr="20px" mt="5px">
                      Sort By:
                    </Text>

                    {/* Sorting options */}
                    <Select
                      placeholder="Choose Filters"
                      w="250px"
                      onChange={(e) => handleSortData(e.target.value)}
                    >
                      <option value="rel">Relevance</option>
                      <option value="asc">Price low to high</option>
                      <option value="dsc">Price high to low</option>
                    </Select>
                  </Flex>
                </Box>
              </Flex>
            </Box>

            <SimpleGrid columns={[1, 2, 3]} spacing="10px">
              {data.map((el) => (
                <Box
                  border="1px"
                  borderColor="gray.300"
                  padding="8px"
                  borderRadius="6px"
                  mt="10px"
                  key={el.productId}
                  className={Style.main2}
                  onClick={() => handleClick(el)}
                >
                  <Image
                    m="auto"
                    mt="5px"
                    height="200px"
                    src={el.imageUrl[0]}
                    alt="Product"
                  />
                  <Heading
                    size="sm"
                    fontSize="17px"
                    fontWeight="bold"
                    mt="6px"
                    color="rgb(79,88,104)"
                  >
                    {el.productName}
                  </Heading>
                  <Heading size="sm">₹{el.sale_price}</Heading>
                </Box>
              ))}
            </SimpleGrid>
          </Box>
        </Box>
      {/* </Box> */}
      <Footer />
    </>
  );
};

export default ProductsPage;
