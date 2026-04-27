import Banner from "../app/components/Banner";
import FeaturedProducts from "../app/components/FeatureProducts";
import ProductGrid from "../app/components/ProductGrid";
import DiscountSection from "../app/components/DiscountSection";
import Recomended from "../app/components/Recomended";
import Testimonials from "../app/components/Testimonial";

export default function HomePage() {
  return (
    <>
      <Banner />
      <FeaturedProducts />
      <ProductGrid />
      <DiscountSection />
      <Recomended />
      <Testimonials />
    </>
  );
}
