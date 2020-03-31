import React from 'react'
import Img from 'gatsby-image'
import { Container } from 'theme-ui'
import { Box, Flex } from 'rebass'
import Layout from './layout'
import Header from './header'
import Agency from './grid'
import Card from './card'
import Hero from './hero'
import Item from './item'
import Name from './name'
import Avatar from './avatar'
import Location from './location'
import Slogan from './slogan'
import Breadcrumb from './breadcrumb'

const List = ({ data: { page } }) => {
  const icons = page.items
  return (
    <Layout>
      <Header>
        <Breadcrumb>{page.name}</Breadcrumb>
      </Header>
      <Container>
        <Hero>
          世界各地很棒的<br />
          {page.name}
        </Hero>
        <Agency>
          {icons.map(item => {
            return (
              <Card
                key={item.name}
                href={item.link}
                title={item.name}
              >
                <Item>
                  <Flex>
                    <Avatar>
                      <Img fixed={item.logo.childImageSharp.fixed} />
                    </Avatar>
                    <Box pl={2}>
                      <Name>
                        {item.name}
                        <Location>{item.location}</Location>
                      </Name>
                      <Slogan>{item.slogan}</Slogan>
                    </Box>
                  </Flex>
                </Item>
              </Card>
            )
          })}
        </Agency>
      </Container>
    </Layout>
  )
}

export default React.memo(List)
