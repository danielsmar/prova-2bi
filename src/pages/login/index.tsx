'use client'

import Footer from '@/components/footer'
import NavBar from '@/components/navbar'
import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  Checkbox,
  Stack,
  Button,
  Heading,
  Text,
  useColorModeValue,
  Link,
} from '@chakra-ui/react'

export default function Login() {
  return (
    <>
      <NavBar />
      <Flex
        pb={50}
        minH={'94.4vh'}
        align={'center'}
        display={'flex'}
        justify={'center'}
        alignContent={'center'}
        bg={useColorModeValue('gray.50', 'gray.800')}>
        <Stack spacing={8} mx={'auto'} px={6}>
          <Stack align={'center'}>
            <Heading fontSize={'4xl'}>Faça login em sua conta</Heading>

          </Stack>
          <Box
            rounded={'lg'}
            bg={useColorModeValue('white', 'gray.700')}
            boxShadow={'lg'}
            p={8}>
            <Stack spacing={4}>
              <FormControl id="email">
                <FormLabel>Email</FormLabel>
                <Input type="email" size={"lg"} borderRadius="8px"
                  bg="brandDark.600" />
              </FormControl>
              <FormControl id="password">
                <FormLabel>Senha</FormLabel>
                <Input type="password" size={"lg"} borderRadius="8px"
                  bg="brandDark.600" />
              </FormControl>
              <Stack spacing={10}>
                <Stack
                  direction={{ base: 'column', sm: 'row' }}
                  align={'start'}
                  justify={'space-between'}>
                  <Checkbox>Lembrar de mim</Checkbox>
                  <Link href='/recover' color={'brand.500'}>Esquecei minha senha</Link>
                </Stack>
                <Button as={'a'}
                  p={3}
                  borderRadius={'4px'}
                  textAlign={'center'}
                  size="lg"
                  bg={'brand.500'}
                  color={'white'}
                  href={'/dashboard'}
                  _hover={{
                    bg: 'brand.200',
                  }}>
                  Entrar
                </Button>
              </Stack>
            </Stack>
          </Box>
        </Stack>
      </Flex>
      <Footer />
    </>
  )
}
