import { CategorySelection } from "../components/storefront/CategorySelection"
import { FeatureProducts } from "../components/storefront/FeatureProducts"
import { Hero } from "../components/storefront/Hero"
import { NavBar } from "../components/storefront/NavBar"

export default function IndexPage() {

  return (
    <div>
      <Hero />
      <CategorySelection/>
      <FeatureProducts/>
    </div>
  )
}