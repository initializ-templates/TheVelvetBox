import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Box, Text, Flex, Image, Heading, Spacer, Button, Divider } from '@chakra-ui/react';
import { BsStarFill } from 'react-icons/bs';
import Navbar from '../Components/Navbar';
import { Products } from './Products'; // Import local product data
import Footer from './Footer/Footer';
import { useCart } from './User/Cart/CartContext'; // Adjust the import path accordingly

const ProductPage = () => {
  const { id } = useParams(); // Access the id parameter from the URL
  const navigate = useNavigate(); // Use navigate to redirect

  const [item, setItem] = useState(null); // Initialize with null initially
  const [qty, setQty] = useState(1); // Default quantity

  const { addProduct } = useCart();

  useEffect(() => {
    // Find the product with matching id from Products array
    const product = Products.find((product) => product.productId === parseInt(id));
    if (product) {
      setItem(product);
    }
  }, [id]);

  if (!item) return null; // Return null or a loading indicator while item is null

  const handleAddToCart = () => {
    const productWithQuantity = { ...item, quantity: qty };
    addProduct(productWithQuantity);
  };

  return (
    <>
      <Navbar />
      <Box maxW="960px" mx="auto" pt="100px" px={4}>
        <Flex flexWrap="wrap" alignItems="flex-start" mt="111px">
          <Box flex="1 1 300px" pr={4}>
            <Image
              src={item.imageUrl[0]}
              alt={item.productName}
              borderRadius="md"
              borderWidth="1px"
              borderColor="gray.200"
              p="2"
              mb={4}
            />
            <Flex justifyContent="center" alignItems="center">
              {Array(5)
                .fill('')
                .map((_, i) => (
                  <BsStarFill
                    key={i}
                    fontSize="20px"
                    color={i < item.rating ? 'teal.500' : 'gray.300'}
                  />
                ))}
              <Text ml="2" color="gray.600" fontSize="sm">
                ({item.ratings} ratings)
              </Text>
            </Flex>
          </Box>
          <Box flex="1 1 600px">
            <Heading as="h1" size="lg" mb={2}>
              {item.productName}
            </Heading>
            <Text fontSize="lg" fontWeight="bold" color="teal.500" mb={2}>
              ₹{item.sale_price}
            </Text>
            <Text fontSize="sm" color="gray.600" mb={4}>
              MRP ₹{item.sale_price}
            </Text>
            <Text mb={4}>{item.description}</Text>
            <Flex alignItems="center">
              <Button
                colorScheme="teal"
                size="md"
                onClick={handleAddToCart}
              >
                Add to Cart
              </Button>
              <Spacer />
              <Button
                colorScheme="teal"
                size="md"
                ml={2}
                onClick={() => navigate('/cart')}
              >
                View Cart
              </Button>
            </Flex>
          </Box>
        </Flex>
        <Divider my={6} />
        <Box>
          {/* Additional sections or details can be added here */}
        </Box>
      </Box>
      <Footer />
    </>
  );
};

export default ProductPage;
