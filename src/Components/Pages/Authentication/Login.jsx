
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
import { FaUserAlt, FaLock } from "react-icons/fa";
import { useLocation, useNavigate } from "react-router";
import { useRef, useState } from "react";


const CFaUserAlt = chakra(FaUserAlt);
const CFaLock = chakra(FaLock);

export const Login = () => {
  // const [username, setUsername] = useState("");
  //   const [password, setPassword] = useState("");
  //   const dispatch = useDispatch()
  const usernameRef = useRef(null)
  const passwordRef = useRef(null)
    const navigate = useNavigate()
    const location = useLocation()
  const [showPassword, setShowPassword] = useState(false);

  console.log("Location in Login page", location)

    // const comingFrom = location.state?.data || "/";

    const handleLogin = (e) => {
        e.preventDefault();
        const user = {
          username: usernameRef.current.value,
          password: passwordRef.current.value,
        }

        fetch(`https://apis.myginee.com/v1/account/authenticate`,{
           
            method: "POST",
            body: JSON.stringify(user),
            headers: {
              "Content-Type": "application/json",
            },
        }).then((res) => res.json())
        .then((res) => {
          console.log(res)
          localStorage.setItem("access", JSON.stringify(res.access))
          localStorage.setItem("refresh", JSON.stringify(res.refresh))

         

          
        })
        .catch((err) => console.log(err))


          
    }

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
        <Avatar bg="#be1516" size='xl' name='My Ginee' src='data:image/jpeg;base64,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' />
        <Heading color="#be1516">Welcome</Heading>
        <Box minW={{ base: "90%", md: "468px" }}>
          <form onClick={handleLogin}>
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
                  <Input type="text"
                   ref={usernameRef}
                   placeholder="Username or Email address" />
                </InputGroup>
              </FormControl>
              <FormControl>
                <InputGroup>
                  <InputLeftElement
                    pointerEvents="none"
                    color="#be1516"
                    children={<CFaLock color="#be1516" />}
                  />
                  <Input
                    type={showPassword ? "text" : "password"}
                    ref={passwordRef}
                    placeholder="Password"
                  />
                  <InputRightElement width="4.5rem">
                    <Button h="1.75rem" size="sm" onClick={handleShowClick}>
                      {showPassword ? "Hide" : "Show"}
                    </Button>
                  </InputRightElement>
                </InputGroup>
                <FormHelperText textAlign="right">
                  <Link color="#be1516" href="">forgot password?</Link>
                </FormHelperText>
              </FormControl>
              <Button
                borderRadius={10}
                type="submit"
                variant="solid"
                colorScheme="red"
                backgroundColor="#be1516"
                width="full"
                
              >
                Login
              </Button>
            </Stack>
          </form>
        </Box>
      </Stack>
      <Box>
        Don't have an Account?{" "}
        <Link to={""} color="#be1516" href="/register">
          Register
        </Link>
      </Box>
    </Flex>
  );
};


