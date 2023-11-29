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
  useToast

} from '@chakra-ui/react'

import { useState } from 'react'
import { useForm } from 'react-hook-form';
import { useRouter } from 'next/navigation'

export default function Login() {

  const router = useRouter()
  const { register, handleSubmit } = useForm();
  const [isLoading, setIsLoading] = useState(false);
  const toast = useToast()

  const onSubmit = handleSubmit(async (data) => {
    if (data.email === '' || data.password === '') {
      toast({
        title: "Ops",
        description: "Preencha todos os campos",
        status: "error",
        duration: 1500,
      })
      return
    }
    setIsLoading(true)
    router.push('/dashboard')

  });
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

        <form onSubmit={onSubmit}>
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
                <FormLabel>Email</FormLabel>
                <Input
                  {...register("email")}
                  type="email"
                  size={"lg"}
                  borderRadius="8px"
                  bg="brandDark.600" />

                <FormLabel>Senha</FormLabel>
                <Input
                  {...register("password")}
                  type="password"
                  size={"lg"}
                  borderRadius="8px"
                  bg="brandDark.600" />

                <Stack spacing={10}>
                  <Stack
                    direction={{ base: 'column', sm: 'row' }}
                    align={'start'}
                    justify={'space-between'}>
                    <Checkbox>Lembrar de mim</Checkbox>
                    <Link href='/recover' color={'brand.500'}>Esquecei minha senha</Link>
                  </Stack>

                  <Button
                    p={3}
                    borderRadius={'4px'}
                    textAlign={'center'}
                    size="lg"
                    bg={'brand.500'}
                    color={'white'}
                    isLoading={isLoading}
                    type='submit'
                    _hover={{
                      bg: 'brand.200',
                    }}>
                    Entrar
                  </Button>
                </Stack>
              </Stack>
            </Box>
          </Stack>
        </form>
      </Flex>
      <Footer />
    </>
  )
}
