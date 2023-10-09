import ApplicationSection from '@/components/application-section'
import FooterSection from '@/components/footer-section'
import HomePage from '@/components/home-page'
import HowWeWorkSection from '@/components/how-we-work-section'
import Navbar from '@/components/navbar'
import ProductPage from '@/components/product-page'
import StartCreatingSection from '@/components/start-creating-section'
import TestimonySection from '@/components/testimony-section'
import WorkSection from '@/components/works-section'

export default function Home() {
  return (
    <>
      <Navbar />
      <HomePage />
      <ProductPage />
      <TestimonySection />
      <WorkSection />
      <HowWeWorkSection />
      <ApplicationSection />
      <StartCreatingSection />
      <FooterSection />
    </>
  )
}
