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
          Conheça a programação do {' '}
          <Text as={'span'} color={'brand.400'}>
            INOVA WEEK 2023
          </Text>
        </Heading>
        <Text color={'gray.500'} maxW={'3xl'}>
          O maior evento universitário de inovação e empreendedorismo do ES está chegando! O InovaWeek 2023, promovido pela Universidade Vila Velha, acontece de 12 a 14 de setembro, no Campus Boa Vista da instituição.
        </Text>

        <Stack spacing={6} direction={'row'}>
          <Button as='a'
            href='https://uvv.br/2023/08/30/conheca-a-programacao-do-inovaweek-2023/'
            rounded={'full'}
            px={6}
            colorScheme={'orange'}
            bg={'brand.500'}
            _hover={{ bg: 'brand.200' }}>
            Conheça a programação
          </Button>

        </Stack>

      </Stack>
    </Container>
  )
}
