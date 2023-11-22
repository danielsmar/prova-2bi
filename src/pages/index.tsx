import Footer from "@/components/footer"
import NavBar from "@/components/navbar"
import Home from "./home"
import { Box } from "@chakra-ui/react"

export default function Page() {
  return (
    <Box w='100%' minH='100vh'>
      <NavBar />
      <Home />
      <Footer />
    </Box>
  )
}
