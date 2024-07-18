import React from 'react'
import DashboardLayout from '../../components/DashboardLayout'
import PortfolioSection from './components/PortfolioSection'
import PriceSection from './components/PriceSection'
import { Grid, GridItem, Text } from '@chakra-ui/react'
import Transaction from './components/Transactions'
import InfoCard from './components/InfoCard'


const Dashboard = ({}) => {
  return (
    <DashboardLayout title="Dashboard">
        <Grid 
        gridTemplateColumns={{
          base:"repeat(1,fr)",
          xl:"repeat(2,1fr)",
        }}
        gap={6}
        >
          <GridItem colSpan={{
            base:1,
            xl:2,
          }}>
          <PortfolioSection/>
          </GridItem>
          <GridItem colSpan={1}>
          <PriceSection/>
          </GridItem>
          <GridItem colSpan={1}>
          <Transaction/>
          </GridItem>
          <GridItem colSpan={1}>
          <InfoCard imgUrl="dot_bg.svg" text="Learn more about Loans - Keep  your Bitcoin, acces it's value without 
        selling it" tagText="Loan"
        inverted={false}
        />
          </GridItem>
          <GridItem colSpan={1}>
          <InfoCard inverted={true} imgUrl="grid_bg.svg" text="Learn more about real estate, mortagage, and
           corporate account services" tagText="Contact"/>
          </GridItem>
        </Grid>
        <Text pt={"10rem"}>MADE BY ARYAN CHAUHAN</Text>
     
    </DashboardLayout>
  )
}

export default Dashboard


