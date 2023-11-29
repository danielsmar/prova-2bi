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
  useToast,
} from '@chakra-ui/react'

import { useState } from 'react'
import { useForm } from 'react-hook-form';
import { useRouter } from 'next/router'

import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons'
import Footer from '@/components/footer'
import NavBar from '@/components/navbar'

export default function Registro() {

  const toast = useToast()
  const router = useRouter()
  const { register, handleSubmit } = useForm();
  const [isLoading, setIsLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false)

  const onSubmit = handleSubmit(async (data) => {
    if (data.firstName === '' || data.lastName === '' || data.email === '' || data.password === '') {
      toast({
        title: "Ops",
        description: "Preencha todos os campos",
        status: "error",
        duration: 1500,
      })
      return
    }
    setIsLoading(true)
    router.push('/')

  });

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

            <form onSubmit={onSubmit}>
              <Stack spacing={4}>
                <HStack>
                  <Box>
                    <FormLabel>Nome</FormLabel>
                    <Input
                      {...register("firstName")}
                      type="text"
                      size={"lg"}
                      borderRadius="8px"
                      bg="brandDark.600" />
                  </Box>

                  <Box>
                    <FormLabel>Sobrenome</FormLabel>
                    <Input
                      {...register("lastName")}
                      type="text"
                      size={"lg"}
                      borderRadius="8px"
                      bg="brandDark.600" />
                  </Box>
                </HStack>

                <FormLabel>Email</FormLabel>
                <Input
                  {...register("email")}
                  type="email"
                  size={"lg"}
                  borderRadius="8px"
                  bg="brandDark.600" />

                <FormLabel>Senha</FormLabel>
                <InputGroup>
                  <Input
                    {...register("password")}
                    type={showPassword ? 'text' : 'password'}
                    size={"lg"}
                    borderRadius="8px"
                    bg="brandDark.600" />

                  <InputRightElement h={'full'}>
                    <Button
                      variant={'ghost'}
                      onClick={() => setShowPassword((showPassword) => !showPassword)}>
                      {showPassword ? <ViewIcon /> : <ViewOffIcon />}
                    </Button>
                  </InputRightElement>
                </InputGroup>

                <Stack spacing={10} pt={2}>
                  <Button
                    p={3}
                    borderRadius={'4px'}
                    textAlign={'center'}
                    size="lg"
                    bg={'brand.500'}
                    color={'white'}
                    type='submit'
                    isLoading={isLoading}
                    _hover={{
                      bg: 'brand.200',
                    }}>
                    Criar Conta
                  </Button>
                </Stack>

                <Stack pt={6}>
                  <Text align={'center'}>
                    Já possui conta? <Link color={'blue.400'} href='/login'>Login</Link>
                  </Text>
                </Stack>

              </Stack>
            </form>
          </Box>
        </Stack>
      </Flex>
      <Footer />
    </>

  )
}
