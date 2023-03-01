import React, { useEffect, useState } from "react";
import Spinner from "../../../components/Spinner/Spinner";
import ProductCard from "../ProductCard/ProductCard";
import { Fade } from "react-reveal";
import { Helmet } from "react-helmet";

const Products = () => {
  const [products, setProducts] = useState([]);
  //   console.log(products);
  useEffect(() => {
    fetch(`https://api.dammamusedfurniture.com/products`)
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((err) => console.error(err));
  }, []);

  if (products.length === 0) {
    return <Spinner></Spinner>;
  }

  return (
    <section className="products-container pt-5 pb-8">
      <Helmet>
        <title>نشتري أثاثك المستعمل في الدمام بأعلى الأسعار - Dammam Used Furniture</title>
        <meta
          name="description"
          content="هل تريد بيع اثاثك المستعمل ومكيفات الهواء والثلاجات في الدمام والقطيف والجبيل والعشا باعلى الاسعار؟  Dammam Used  Furniture 053101 5429  هو المنصة المثالية لبيع جميع أثاثك."
        />
        <meta name="keywords" content="مكيفات هواء مستعمله افران ثلاجه غسالات مطابخ اثاث غرف نوم " />
      </Helmet>
      <div className="section-title mx-2 font-semibold text-xl md:text-2xl text-center pb-6 text-info">
        <Fade left>
          <h1>Our services || خدماتنا</h1>
        </Fade>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-5 lg:mx-10">
        {products.length !== 0 &&
          products.map((product) => <ProductCard key={product.id} product={product}></ProductCard>)}
      </div>
    </section>
  );
};

export default Products;
