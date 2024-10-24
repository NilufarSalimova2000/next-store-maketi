import React from "react";
import { Banner } from "../../components/banner";
import { products, topProducts, brends } from "../../data/data";
import { ProductCard } from "../../components/card/product-card";
import { TopProductCard } from "../../components/card/top-product-card";
import { BrendCard } from "../../components/card/brend-card";

export const Home = () => {
    return (
        <main>
            <Banner />
            <section className="categories">
                <div className="container">
                    <h2>Kategoriyalar</h2>
                    <div className="card_list">
                        {products?.map((item) => {
                            return <ProductCard key={item.id} img={item.img} title={item.title} />
                        })}
                    </div>
                </div>
            </section>

            <section className="products">
                <div className="container">
                    <h2>Eng ko’p sotilgan</h2>
                    <div className="top-products-list">
                        {topProducts?.map((item) => {
                            return <TopProductCard key={item.id} img={item.img} price={item.price} title={item.title} count={item.count}/>
                        })}
                    </div>
                </div>
            </section>

            <Banner />

            <section className="products">
                <div className="container">
                    <h2>Eng ommabop</h2>
                    <div className="top-products-list">
                        {topProducts?.map((item) => {
                            return <TopProductCard key={item.id} img={item.img} price={item.price} title={item.title} count={item.count}/>
                        })}
                    </div>
                </div>
            </section>

            <section className="brends">
                <div className="container">
                    <h2>Brendlar bo’yicha</h2>
                    <div className="brends_list">
                        {brends?.map((item) => {
                            return <BrendCard key={item.id} img={item.img}/>
                        })}
                    </div>
                </div>
            </section>

            <Banner />

            <section className="brends">
                <div className="container">
                    <h2>Do’konlarimiz</h2>
                    <div className="brends_list">
                        {brends?.map((item) => {
                            return <BrendCard key={item.id} img={item.img}/>
                        })}
                    </div>
                </div>
            </section>
        </main>
    )
}