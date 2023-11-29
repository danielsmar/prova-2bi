import {
  Container,
  Heading,
  Stack,
  Text,
  Button,
} from '@chakra-ui/react'


export default function Home() {
  return (
    <Container w='100%'>
      <Stack
        textAlign={'center'}
        align={'center'}
        spacing={{ base: 8, md: 10 }}
        py={{ base: 20, md: 28 }}>
        <Heading
          fontWeight={600}
          fontSize={{ base: '3xl', sm: '4xl', md: '6xl' }}
          lineHeight={'110%'}>
          Programação Avançada para Web {' '}
          <Text as={'span'} color={'brand.400'}>
            Simulado 2º Bimestre
          </Text>
        </Heading>
        <Text color={'gray.500'} maxW={'3xl'}>
          O Projeto foi deselvolvido seguindo os critérios estabelecidos no blog. Foi utilizado no desenvolvimento Next.js, Chakra UI e Typescript.
        </Text>

        <Stack spacing={6} direction={'row'}>
          <Button as='a'
            href='https://github.com/danielsmar/simulado-2bi'
            rounded={'full'}
            px={6}
            colorScheme={'orange'}
            bg={'brand.500'}
            _hover={{ bg: 'brand.200' }}>
            Repositório GitHub
          </Button>

        </Stack>

      </Stack>
    </Container>
  )
}
