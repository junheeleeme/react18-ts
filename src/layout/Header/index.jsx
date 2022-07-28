import { Box, Tabs, TabList, Tab } from '@chakra-ui/react'

import { NavLink } from 'react-router-dom'
import routes from '@/routes'

const Header = () => {
  return (
    <Box as="header" className="header">
      <Tabs>
        <TabList>
          {routes.map((p) => (
            <NavLink to={p.path} key={p.id}>
              <Tab>{p.title}</Tab>
            </NavLink>
          ))}
        </TabList>
        {/* 
        <TabPanels>
          <TabPanel>
            <p>one!</p>
          </TabPanel>
          <TabPanel>
            <p>two!</p>
          </TabPanel>
          <TabPanel>
            <p>three!</p>
          </TabPanel>
        </TabPanels> */}
      </Tabs>
    </Box>
  )
}

export default Header
