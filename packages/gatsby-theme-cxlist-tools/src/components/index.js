import React from 'react'
import Img from 'gatsby-image'
import { Container } from 'theme-ui'
import { Box, Flex } from 'rebass'
import Section from './section'
import Layout from './layout'
import Header from './header'
import Grids from './grid'
import Card from './card'
import Hero from './hero'
import Item from './item'
import Name from './name'
import Avatar from './avatar'
import Slogan from './slogan'
import Topic from './topic'
import Breadcrumb from './breadcrumb'

const Index = ({ data: { allToolsYaml } }) => {
  const tools = allToolsYaml.edges
  return (
    <Layout>
      <Header>
        <Breadcrumb>工具</Breadcrumb>
      </Header>
      <Container>
        <Hero>
          为自由职业者准备的<br />
          最佳工具列表
        </Hero>
        {tools.map(({ node }) => {
          const topic = node.items
          return (
            <Section>
              <Topic>{node.title}</Topic>
              <Grids>
                {topic.map(item => {
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
                            <Name>{item.name}</Name>
                            <Slogan>{item.slogan}</Slogan>
                          </Box>
                        </Flex>
                      </Item>
                    </Card>
                  )
                })}
              </Grids>
            </Section>
          )
        })}
      </Container>
    </Layout>
  )
}

export default React.memo(Index)
