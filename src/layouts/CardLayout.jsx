import React from 'react'
import Container from '../components/Container'
import Flex from '../components/Flex'
import CommonHeading from '../components/CommonHeading'
import Button from '../components/Button'
import Card from '../components/Card'

const CardLayout = () => {
  return (
    <section className='bg-[#F6F5FF]'>
        <Container className="pt-[100px]">
            <Flex className='gap-6 flex-wrap'>
                <div className='w-[370px]'>
                    <CommonHeading text="What We Do"/>
                    <p className='w-[390px] font-openSans text-[#6C7D93] font-normal text-lg tracking-[0.5px] pt-[20px] pb-[56px]'>We are now a team of strategists, engineers, designers, and marketers who both use and develop technology </p>
                    <Button className="hover:text-primary" text="Contact Us"/>
                </div>
                <Card/>

            </Flex>
        </Container>
    </section>
  )
}

export default CardLayout