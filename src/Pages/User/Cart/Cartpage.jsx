import {  Box,
  VStack,
  Text,
  Image,
  Button,
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
Divider } from "@chakra-ui/react";
import React from "react";
import { RiDeleteBin6Line } from "react-icons/ri";
import Navbar from "../../../Components/Navbar";
import { Products } from "../../Products";
import styles from "./cartpage.module.css";
import Footer from "../../Footer/Footer";
import { useCart } from './CartContext'; // Adjust the import path accordingly

const Cartpage = () => {
  const { cartValue, cartProducts, addProduct, removeProduct } = useCart();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const proceedToPayment = () => {
    onOpen();
  };

  return (
    <>
      <Navbar />
      <Box className={styles.mainbox}>
        <Box className={styles.leftbox}>
          <VStack className={styles.cartcount}>
            {cartProducts && cartProducts.length < 1 ? (
              <h1>Your Cart is Empty <span></span></h1>
            ) : (
              <h1>{cartProducts.length} Items in your cart <span></span></h1>
            )}
          </VStack>
          {cartProducts && cartProducts.map((el) => (
            <VStack key={el.productId}>
              <Box className={styles.prodbox}>
                <Box>
                  <Image src={el.imageUrl[0]} alt={el.productName} />
                </Box>
                <Box className={styles.contentdiv}>
                  <Text>{el.productName}</Text>
                  <h3>{el.description}</h3>
                  <h2>
                    <span>MRP ₹{el.sale_price}</span>{" "}
                    <span>₹{(el.sale_price)*.9}*</span>{" "}
                    <span>{'10'}% OFF</span>
                  </h2>
                </Box>
                <Box className={styles.buttonbox}>
                  <RiDeleteBin6Line onClick={() => removeProduct(el)} />
                  <p>{el.quantity} Qty</p>
                </Box>
              </Box>
            </VStack>
          ))}
        </Box>

        <Box className={styles.rightbox}>
          <Box className={styles.buybtnbox}>
            <VStack className={styles.cartcount}>
              <h1>Cart Total <span> ₹{cartValue}</span></h1>
            </VStack>
            <VStack>
              <button className={styles.proceedbuy} onClick={proceedToPayment}>
                Place Order
              </button>
            </VStack>
          </Box>

          <Box className={styles.billingbox}>
            <h1>Bill Summary</h1>
            <Box className={styles.cartprice}>
              <p>
                <span className={styles.subtitle}>Cart Value</span>{" "}
                <span>₹{cartValue}</span>
              </p>
              <p>
                <span className={styles.subtitle}>Delivery charges</span>{" "}
                {cartValue > 400 ? <span>FREE</span> : <span>₹40</span>}
              </p>

              {cartValue > 400 ? (
                ""
              ) : (
                <p>To get free Delivery Add ₹{400 - cartValue} </p>
              )}
            </Box>
            <Divider />

            <h1 className={styles.amountpaid}>
              <span className={styles.subtitle}>Amount to be paid</span>
              <span> ₹{cartValue}</span>
            </h1>
          </Box>
        </Box>
      </Box>

      <Modal isOpen={isOpen} onClose={onClose}>
  <ModalOverlay />
  <ModalContent>
    <ModalHeader>Order Confirmation</ModalHeader>
    <ModalBody>
      Your order has been placed successfully!
    </ModalBody>
    <ModalFooter>
      <Button colorScheme="teal" onClick={onClose}>
        Close
      </Button>
    </ModalFooter>
  </ModalContent>
</Modal>

      <Footer />
    </>
  );
};

export default Cartpage;
