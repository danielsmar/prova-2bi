'use client'

import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  HStack,
  InputRightElement,
  Stack,
  Button,
  Heading,
  Text,
  useColorModeValue,
  Link,
} from '@chakra-ui/react'
import { useState } from 'react'
import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons'
import Footer from '@/components/footer'
import NavBar from '@/components/navbar'

export default function Registro() {
  const [showPassword, setShowPassword] = useState(false)

  return (
    <>
      <NavBar />
      <Flex
        minH={'93vh'}
        align={'center'}
        justify={'center'}
        bg={useColorModeValue('gray.50', 'gray.800')}
        pb={50}>
        <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
          <Stack align={'center'}>
            <Heading fontSize={'4xl'} textAlign={'center'}>
              Crie sua Conta
            </Heading>
          </Stack>
          <Box
            rounded={'lg'}
            bg={useColorModeValue('white', 'gray.700')}
            boxShadow={'lg'}
            p={8}>
            <Stack spacing={4}>
              <HStack>
                <Box>
                  <FormControl id="firstName" isRequired>
                    <FormLabel>Nome</FormLabel>
                    <Input type="text" size={"lg"} borderRadius="8px"
                      bg="brandDark.600" />
                  </FormControl>
                </Box>
                <Box>
                  <FormControl id="lastName" isRequired>
                    <FormLabel>Sobrenome</FormLabel>
                    <Input type="text" size={"lg"} borderRadius="8px"
                      bg="brandDark.600" />
                  </FormControl>
                </Box>
              </HStack>
              <FormControl id="email" isRequired>
                <FormLabel>Email</FormLabel>
                <Input type="email" size={"lg"} borderRadius="8px"
                  bg="brandDark.600" />
              </FormControl>
              <FormControl id="password" isRequired>
                <FormLabel>Senha</FormLabel>
                <InputGroup>
                  <Input type={showPassword ? 'text' : 'password'} size={"lg"} borderRadius="8px"
                    bg="brandDark.600" />
                  <InputRightElement h={'full'}>
                    <Button
                      variant={'ghost'}
                      onClick={() => setShowPassword((showPassword) => !showPassword)}>
                      {showPassword ? <ViewIcon /> : <ViewOffIcon />}
                    </Button>
                  </InputRightElement>
                </InputGroup>
              </FormControl>
              <Stack spacing={10} pt={2}>
                <Link
                  p={3}
                  borderRadius={'4px'}
                  textAlign={'center'}
                  size="lg"
                  bg={'brand.500'}
                  color={'white'}
                  href={'/'}
                  _hover={{
                    bg: 'brand.200',
                  }}>
                  Criar Conta
                </Link>
              </Stack>
              <Stack pt={6}>
                <Text align={'center'}>
                  Já possui conta? <Link color={'blue.400'} href='/login'>Login</Link>
                </Text>
              </Stack>
            </Stack>
          </Box>
        </Stack>
      </Flex>
      <Footer />
    </>

  )
}
