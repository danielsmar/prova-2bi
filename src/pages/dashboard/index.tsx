'use client'

import Image from 'next/image'
import {
  Box,
  Center,
  Heading,
  Text,
  Stack,
  Avatar,
  useColorModeValue,
} from '@chakra-ui/react'
import NavBar from '@/components/navbar'
import Footer from '@/components/footer'

export default function blogPostWithImage() {
  return (
    <>
      <NavBar />
      <Box minHeight="100vh" display="flex" flexDirection="column">
        <Center py={6} flex={1} flexDirection={'column'} >
          <Box
            maxW={'445px'}
            w={'full'}
            bg={useColorModeValue('white', 'gray.900')}
            boxShadow={'2xl'}
            rounded={'md'}
            p={6}
          >

            <Box h={'210px'} bg={'gray.100'} mt={-6} mx={-6} mb={6} pos={'relative'}>
              <Image
                src={
                  '/dashboard-1.png'
                }
                fill
                alt="Example"
              />
            </Box>
            <Stack>
              <Text
                color={'green.500'}
                textTransform={'uppercase'}
                fontWeight={800}
                fontSize={'sm'}
                letterSpacing={1.1}>
                UVV
              </Text>
              <Heading
                color={useColorModeValue('gray.700', 'white')}
                fontSize={'2xl'}
                fontFamily={'body'}>
                Vest UVV Agendado
              </Heading>
              <Text color={'gray.500'}>
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
                eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
                voluptua. At vero eos et accusam et justo duo dolores et ea rebum.
              </Text>
            </Stack>
            <Stack mt={6} direction={'row'} spacing={4} align={'center'}>
              <Avatar src={'https://github.com/danielsmar.png'} />
              <Stack direction={'column'} spacing={0} fontSize={'sm'}>
                <Text fontWeight={600}>Daniel Marculano</Text>
                <Text color={'gray.500'}>Nov 22, 2023 · 16min </Text>
              </Stack>
            </Stack>
          </Box>

          <Box
            maxW={'445px'}
            w={'full'}
            mt={10}
            bg={useColorModeValue('white', 'gray.900')}
            boxShadow={'2xl'}
            rounded={'md'}
            p={6}
          >

            <Box h={'210px'} bg={'gray.100'} mt={-6} mx={-6} mb={6} pos={'relative'}>
              <Image
                src={
                  '/uvvon.png'
                }
                fill
                alt="Example"
              />
            </Box>
            <Stack>
              <Text
                color={'green.500'}
                textTransform={'uppercase'}
                fontWeight={800}
                fontSize={'sm'}
                letterSpacing={1.1}>
                UVV
              </Text>
              <Heading
                color={useColorModeValue('gray.700', 'white')}
                fontSize={'2xl'}
                fontFamily={'body'}>
                UVV ON
              </Heading>
              <Text color={'gray.500'}>
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
                eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
                voluptua. At vero eos et accusam et justo duo dolores et ea rebum.
              </Text>
            </Stack>
            <Stack mt={6} direction={'row'} spacing={4} align={'center'}>
              <Avatar src={'https://github.com/danielsmar.png'} />
              <Stack direction={'column'} spacing={0} fontSize={'sm'}>
                <Text fontWeight={600}>Daniel Marculano</Text>
                <Text color={'gray.500'}>Nov 22, 2023 · 16min </Text>
              </Stack>
            </Stack>
          </Box>
        </Center>
        <Footer />
      </Box>
    </>
  )
}
