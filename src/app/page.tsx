import Hero from '../components/Hero'
import CompanyCards from '../components/CompanyCards'
import Footer from '@/components/Footer'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Hourani Enterprises',
  description: ' Hourani Enterprises trades & operates as JobsRUs & Enaya.',
}

export default function Home() {
  return (
    <main className="flex  flex-col justify-center items-center bg-gray-900 pt-[100px] min-h-screen ">
       <section className=" flex justify-center items-center min-h-screen z-[5]">
       <Hero  />
       </section>

       <section className='flex justify-center  bg-gray-800 min-h-screen z-10'>
        <CompanyCards  />
       </section>
        <div className='z-10 px-4'>
          <Footer />
        </div>
    </main>
  )
}
