import React from 'react'
import DashboardLayout from '../../components/DashboardLayout'
import SupportCard from './SupportCard'
import ConatctCard from './ConatctCard'
import { IoIosMail } from "react-icons/io";
import { MdMessage } from "react-icons/md";
import InfoCard from '../Dashboard/components/InfoCard';
import { Stack } from '@chakra-ui/react';
const Support = () => {
  return (
    <DashboardLayout>
      <Stack spacing={"5rem"}>
      <SupportCard leftComponent={<ConatctCard/>} title={"Conatct Us"} text={"Have a question or just want to maore? Feel free to reach out to us."}
      icon={IoIosMail}/>
      <SupportCard leftComponent={<InfoCard inverted={true} imgUrl="grid_bg.svg" text="Learn more about real estate, mortagage, and
           corporate account services" tagText="Contact"/>} title={"Live Chat"} text={"Don't have time to wait for ther answer? Chat with us now"}
      icon={MdMessage}/>
      </Stack>
    </DashboardLayout>
  )
}

export default Support