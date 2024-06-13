import { Box, Container, Heading, Image, Img, Stack, Text } from '@chakra-ui/react'
import React from 'react'
import {Carousel} from "react-responsive-carousel"
import "react-responsive-carousel/lib/styles/carousel.min.css"
import img1 from "../assets/1.jpg"
import img2 from "../assets/2.jpg"
import img3 from "../assets/3.jpg"
import img4 from "../assets/4.jpg"
import img5 from "../assets/5.png"
// import { transform } from 'framer-motion'



const Home = () => {
  return (
    <Box>
        <MyCarousel />
        <Container minH={"100vh"} maxW={"container.xl"} p={"16"}>
            <Heading className='legend' textTransform={"uppercase"} py={"2"} w={"fit-content"} borderBottom={"2px solid"} m={"auto"} >Services</Heading>
            <Stack h={"full"} p={"4"} alignItems={"center"} direction={["column","row"]} >
                <Image src={img5} h={["40","400"]} filter={"hue-rotate(-130deg)"} />
                <Text letterSpacing={"widest"} lineHeight={"190%"} p={["4","16"]} textAlign={"center"}>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Totam esse similique corrupti distinctio saepe? Autem distinctio accusamus officia ipsa dolor similique porro ab, iusto quo commodi facilis quia quaerat laudantium maxime molestias consectetur laborum corporis, ut ex voluptates id unde veniam. Exercitationem, corporis, alias facilis voluptates nam fugiat sequi in perferendis voluptate odit saepe dignissimos sapiente, dolorem pariatur officiis neque explicabo ex reiciendis tenetur? Nam ducimus distinctio ipsum quo adipisci possimus deleniti quas asperiores autem error? Molestiae non nam id voluptates incidunt, ab veniam perferendis iste, eos voluptatibus vero libero rerum quo! Error laudantium vero cupiditate. Praesentium aperiam ad voluptate optio fuga necessitatibus nesciunt officiis! Officia consequatur, in rerum natus doloribus perferendis quos quasi quo eos, iure enim magnam, adipisci voluptates expedita? Possimus ad nobis et saepe, debitis nam deserunt sapiente. Laudantium quae distinctio harum quaerat maxime, cum asperiores. Esse delectus exercitationem sapiente ad quas temporibus expedita dolor labore quia.
                </Text>
            </Stack>
        </Container>
    </Box>
  )
}

// const headingOptions = {
//     pos:"absolute",
//     left:"50%",
//     top:"50%",
//     transform:"translate(-50%,-50%)",
//     textTransform:"uppercase",
//     p:"4",
//     size:"2xl"

// }

const MyCarousel = ()=> ( 
    <Carousel autoPlay infiniteLoop interval={"1000"} showStatus={false} showThumbs={false} showArrows={false}  >

        <Box w={"full"} h={"100vh"}>
            <Img src={img1} />
            <Heading className='legend'>Watch The Future</Heading>
        </Box>
        <Box w={"full"} h={"100vh"}>
            <Img src={img2} />
            <Heading className='legend'>Future is Gaming</Heading>
        </Box>
        <Box w={"full"} h={"100vh"}>
            <Img src={img3} />
            <Heading className='legend'>Gaming on Console</Heading>
        </Box>
        <Box w={"full"} h={"100vh"}>
            <Img src={img4} />
            <Heading className='legend'>Night Life is Cool</Heading>
        </Box>
        {/* use this in heading if you want :---> bgColor={"blackAlpha.600"} color={"white"} {...headingOptions} */}

    </Carousel>
);


export default Home;