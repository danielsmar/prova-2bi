'use client'

import {
  Button,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Icon,
  IconButton,
  Input,
  InputGroup,
  InputRightElement,
  Link,
  Stack,
  useColorModeValue,
  useToast,
} from '@chakra-ui/react'
import React from 'react';


import { VscEye, VscEyeClosed } from 'react-icons/vsc';

export default function ResetPasswordForm() {
  const [showPassword, setShowPassword] = React.useState(false);
  const [showRepeatedPassword, setShowRepeatedPassword] = React.useState(false);

  return (
    <Flex
      minH={'100vh'}
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
          Recuperação de Senha
        </Heading>
        <FormControl id="password" isRequired>
          <FormLabel>Digite a nova senha</FormLabel>
          <InputGroup alignItems="center">
            <Input
              typeof='password'
              size="lg"
              borderRadius="8px"
              bg="brandDark.600"
              type={showPassword ? 'text' : 'password'}
              focusBorderColor="brand.400"
            />
            <InputRightElement mt="5px" mr={3}>
              <IconButton
                bg="transparent"
                _hover={{ bg: 'transparent' }}
                onClick={() => setShowPassword(!showPassword)}
                aria-label={showPassword ? 'Ocultar senha' : 'Mostrar senha'}
                icon={
                  showPassword ? (
                    <Icon boxSize={7} as={VscEyeClosed} />
                  ) : (
                    <Icon boxSize={7} as={VscEye} />
                  )
                }
              />
            </InputRightElement>
          </InputGroup>
        </FormControl>
        <FormControl id="password" isRequired>
          <FormLabel>Repita a nova senha</FormLabel>
          <InputGroup alignItems="center">
            <Input
              typeof='password'
              size="lg"
              borderRadius="8px"
              bg="brandDark.600"
              type={showRepeatedPassword ? 'text' : 'password'}
              focusBorderColor="brand.400"
            />
            <InputRightElement mt="5px" mr={3}>
              <IconButton
                bg="transparent"
                _hover={{ bg: 'transparent' }}
                onClick={() => setShowRepeatedPassword(!showRepeatedPassword)}
                aria-label={showRepeatedPassword ? 'Ocultar senha' : 'Mostrar senha'}
                icon={
                  showRepeatedPassword ? (
                    <Icon boxSize={7} as={VscEyeClosed} />
                  ) : (
                    <Icon boxSize={7} as={VscEye} />
                  )
                }
              />
            </InputRightElement>
          </InputGroup>
        </FormControl>
        <Stack spacing={6}>
          <Button as={'a'}
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
            Enviar
          </Button>
        </Stack>
      </Stack>
    </Flex>
  )
}
