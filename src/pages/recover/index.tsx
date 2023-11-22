'use client'

import Footer from '@/components/footer'
import NavBar from '@/components/navbar'
import {
  Button,
  FormControl,
  Flex,
  Heading,
  Input,
  Stack,
  Text,
  useColorModeValue,
  Link,
} from '@chakra-ui/react'

type ForgotPasswordFormInputs = {
  email: string
}

export default function Recover() {
  return (
    <>
      <NavBar />
      <Flex
        minH={'93vh'}
        align={'center'}
        justify={'center'}
        bg={useColorModeValue('gray.50', 'gray.800')}>
        <Stack
          spacing={4}
          w={'full'}
          maxW={'md'}
          bg={useColorModeValue('white', 'gray.700')}
          rounded={'xl'}
          boxShadow={'lg'}
          p={6}
          my={12}>
          <Heading lineHeight={1.1} fontSize={{ base: '2xl', md: '3xl' }}>
            Esqueceu sua senha?
          </Heading>
          <Text
            fontSize={{ base: 'sm', sm: 'md' }}
            color={useColorModeValue('gray.800', 'gray.400')}>
            Sem problemas, basta nos informar seu e-mail e enviaremos um link de recuperação.
          </Text>
          <FormControl id="email">
            <Input
              placeholder="Email"
              _placeholder={{ color: 'gray.500' }}
              type="email"
            />
          </FormControl>
          <Stack spacing={6}>
            <Link
              p={2}
              borderRadius={'4px'}
              textAlign={'center'}
              size="lg"
              bg={'brand.500'}
              color={'white'}
              href={'/forgot-password'}
              _hover={{
                bg: 'brand.200',
              }}>
              Enviar
            </Link>
          </Stack>
        </Stack>
      </Flex>
      <Footer />
    </>
  )
}
