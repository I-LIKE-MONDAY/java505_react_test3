import React from "react";
import App4Main03 from "./App4Main03";

const list = [
  {foodName: "Bread Basket", foodDetail: "Assortment of fresh baked fruit breads and muffins 5.50"},
  {foodName: "Honey Almond Granola with Fruits", foodDetail: "Natural cereal of honey toasted oats, raisins, almonds and dates 7.00"},
  {foodName: "Belgian Waffle", foodDetail: "Vanilla flavored batter with malted flour 7.50"},
  {foodName: "Scrambled eggs", foodDetail: "Scrambled eggs, roasted red pepper and garlic, with green onions 7.50"},
  {foodName: "Blueberry Pancakes", foodDetail: "With syrup, butter and lots of berries 8.50"},
]

function App4Main03Item() {
  return (
    <div>
      {list.map((item) => {
        return <App4Main03 foodName={item.foodName} foodDetail={item.foodDetail} />
      })}
    </div>
  );
}
export default App4Main03Item;