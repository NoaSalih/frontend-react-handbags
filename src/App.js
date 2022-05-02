import React from 'react';
import './App.css';
import Button from "./components/button/Button";
import Product from "./components/product/Product";
import Tile from "./components/tile/Tile";

import bag_1 from "./assets/bag_1.png"
import bag_2 from "./assets/bag_2.png"
import bag_3 from "./assets/bag_3.png"
import bag_4 from "./assets/bag_4.png"
import brand from "./assets/brand.png"
import our_story from "./assets/our_story.png"


function App() {
    return (<>
        <h1>Handbags & Purses</h1>
        <nav>
            <Button
                type="button"
                description="to the collection"
                consoleLog="to the collection"
                disabled={false}/>
            <Button
                type="button"
                description="shop all bags"
                consoleLog="shop all bags"
                disabled={false}/>
            <Button
                type="button"
                description="pre-orders"
                consoleLog="disabled"
                disabled={true}/>
        </nav>
        <main>
            <Product
                labelText="Best seller"
                productImage={bag_1}
                bagName="The handy bag"
                bagPrice="€ 400,-"
            />
            <Product
                labelText="Best seller"
                productImage={bag_2}
                bagName="The stylish bag"
                bagPrice="€ 250,-"
            />
            <Product
                labelText="New collection"
                productImage={bag_3}
                bagName="The simple bag"
                bagPrice="€ 300,-"
            />
            <Product
                labelText="New collection"
                productImage={bag_4}
                bagName="The trendy bag"
                bagPrice="€ 150,-"
            />

        </main>
        <footer>
            <section>
                <Tile
                    tileTitle="THE BRAND"
                    tileText="Taste exclusiveness while experiencing the cosiness of an informal diner. In the middle of Veldhoven, located at ‘dorpstraat 27’ is where you will find The Brand. In our newly reformed modern restaurant you will enjoy all sorts of dishes in a variety of arrangements. One of our specialties is a beautiful slow grilled rotisserie chicken. Apart from that we have all manners of salads, appetizers, and of course delicious desserts."/>
            </section>
            <section>
                <Tile
                    image={brand}>
                </Tile>
            </section>
            <section>
                <Tile image={our_story}>
                </Tile>
            </section>
            <section>
                <Tile tileTitle="OUR STORY"
                      tileText="Filiz is a young girl forced to take care of her five younger siblings after her mother left the lower-class family. Her father, Fikri, is an alcoholic. Filiz believes that there is no place for love in her life until she meets Barış (real name Savaş), a young man who does anything for Filiz and her family to win her heart. Cemil, a police officer who is also in love with Filiz, finds out that Barış is a car thief and threatens him to leave if he wants Cemil to hide the truth from Filiz. After">
                </Tile>
            </section>
        </footer>
    </>);
}

export default App;



