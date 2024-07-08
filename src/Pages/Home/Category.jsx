import React from 'react';
import { Box, Grid, GridItem, Text, Image, Heading, useDisclosure } from '@chakra-ui/react'; // Import necessary Chakra UI components and hooks

const Category = () => {
  const categories = [
    {
      name: 'Bangels',
      imageUrl: 'https://m.media-amazon.com/images/I/81LWpXfWICL._UL1500_.jpg'
    },
    {
      name: 'Earings',
      imageUrl: 'https://kinclimg6.bluestone.com/f_webp,c_scale,w_1024,b_rgb:f0f0f0/giproduct/BIDG0396D05_YAA18DIG6XXXXXXXX_ABCD00-PICS-00004-1024-31382.png'
    },
    {
      name: 'Neckless',
      imageUrl: 'https://thelittlejewelboxonline.com/wp-content/uploads/2021/12/nnn4-864x1068.jpg'
    },
    {
      name: 'Pendent',
      imageUrl: 'https://images.jdmagicbox.com/quickquotes/images_main/heart-diamond-silver-pendent-chain-383623124-yzm64.jpeg'
    },
    {
      name: 'Bracelets',
      imageUrl: 'https://media.istockphoto.com/id/1195942083/photo/woman-neck-with-hand-with-many-bracelets.jpg?s=612x612&w=0&k=20&c=QYn_gwsnn3Nn6o8IoqVDMsg894rxdruQwddrCN9xZ2k='
    },
    {
      name: 'Rings',
      imageUrl: 'https://rukminim1.flixcart.com/image/832/832/kkcwo7k0/ring/x/h/h/adjustable-kjrg224-ring-kanak-jewels-original-imafzq3k3n7ks8ah.jpeg?q=70'
    }
  ];

  const { isOpen, onToggle } = useDisclosure(); // Hook for controlling animation state

  return (
    <Box w='80%' m='auto' pt={10}>
      <Text color='red' fontSize='xl'>Special Category</Text>
      <Heading pb={2} fontSize="3xl" color={"#30363C"}>Collections Category</Heading>
      <hr />
      <Text w='60%' m='auto' pb={10} fontSize='md'>
        Explore our exquisite collection of jewelry, meticulously crafted to enhance your style and elegance.
      </Text>
      <Grid templateColumns='repeat(3, 1fr)' gap={10}>
        {categories.map((category, index) => (
          <GridItem key={index} border='2px solid black' borderRadius='lg' overflow='hidden' position='relative' transition='transform 0.3s ease-in-out' _hover={{ transform: 'scale(1.1)' }}>
            <Image
              h={300}
              w="100%"
              objectFit="cover"
              src={category.imageUrl} // Original image URL
              alt={category.name}
            />
            <Box
              position="absolute"
              bottom={0}
              left={0}
              right={0}
              bg="rgba(0, 0, 0, 0.5)" // Semi-transparent black background
              color="white"
              p={2}
              textAlign="center"
              opacity={1}
              transition="opacity 0.3s ease-in-out"
            >
              <Text fontSize="lg">{category.name}</Text>
            </Box>
          </GridItem>
        ))}
      </Grid>
    </Box>
  );
};

export default Category;
