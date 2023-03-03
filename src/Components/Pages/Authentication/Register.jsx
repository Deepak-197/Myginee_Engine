import { useState } from "react";
import {
  Flex,
  Heading,
  Input,
  Button,
  InputGroup,
  Stack,
  InputLeftElement,
  chakra,
  Box,
  Link,
  Avatar,
  FormControl,
  FormHelperText,
  InputRightElement
} from "@chakra-ui/react";
import { PhoneIcon, AddIcon, WarningIcon, EmailIcon } from '@chakra-ui/icons'
import { FaUserAlt, FaLock } from "react-icons/fa";

const CFaUserAlt = chakra(FaUserAlt);
const CFaLock = chakra(FaLock);

export const Register = () => {
  const [showPassword, setShowPassword] = useState(false);

  const handleShowClick = () => setShowPassword(!showPassword);

  return (
    <Flex
      flexDirection="column"
      width="100wh"
      height="100vh"
      backgroundColor="gray.200"
      justifyContent="center"
      alignItems="center"
    >
      <Stack
        flexDir="column"
        mb="2"
        justifyContent="center"
        alignItems="center"
      >
        <Avatar bg="#be1516" />
        <Heading color="#be1516">Welcome</Heading>
        <Box minW={{ base: "90%", md: "468px" }}>
          <form>
            <Stack
              spacing={4}
              p="1rem"
              backgroundColor="whiteAlpha.900"
              boxShadow="md"
              borderRadius={"10px"}
            >
              <FormControl>
                <InputGroup>
                  <InputLeftElement
                    pointerEvents="none"
                    children={<CFaUserAlt color="#be1516" />}
                  />
                  <Input type="email" placeholder="First Name"  />
                </InputGroup>
              </FormControl>
                 {/* input-1 */}
              <FormControl>
                <InputGroup>
                  <InputLeftElement
                    pointerEvents="none"
                    children={<CFaUserAlt color="#be1516" />}
                  />
                  <Input type="email" placeholder="Last Name" />
                </InputGroup>
              </FormControl>
                {/* input-2 */}
              <FormControl>
                <InputGroup>
                  <InputLeftElement
                    pointerEvents="none"
                    children={<PhoneIcon color="#be1516" />}
                  />
                  <Input type="email" placeholder="Username" />
                </InputGroup>
              </FormControl>
               {/* input-3 */}
              <FormControl>
                <InputGroup>
                  <InputLeftElement
                    pointerEvents="none"
                    children={<EmailIcon color="#be1516" />}
                  />
                  <Input type="email" placeholder="Email address" />
                </InputGroup>
              </FormControl>
              
                {/* input-4 */}

              <FormControl>
                <InputGroup>
                  <InputLeftElement
                    pointerEvents="none"
                    color="gray.300"
                    children={<CFaLock color="#be1516" />}
                  />
                  <Input
                    type={showPassword ? "text" : "password"}
                    placeholder="Password"
                  />
                  <InputRightElement width="4.5rem">
                    <Button h="1.75rem" size="sm" onClick={handleShowClick}>
                      {showPassword ? "Hide" : "Show"}
                    </Button>
                  </InputRightElement>
                </InputGroup>

                {/* input-5 */}

                <FormHelperText textAlign="center">
                  <Link>By signing up you accept the Terms of service and Privacy Policy</Link>
                </FormHelperText>
              </FormControl>

                 {/* terms & conditions */}
                  
              <Button
                borderRadius={0}
                type="submit"
                variant="solid"
                colorScheme="red"
                backgroundColor="#be1516"
                width="full"
              >
                Register
              </Button>
            </Stack>
          </form>
        </Box>
      </Stack>
      <Box>
        Already have an Account?{" "}
        <Link to={"/login"} color="#be1516" href="/login">
          Login
        </Link>
      </Box>
    </Flex>
  );
};


