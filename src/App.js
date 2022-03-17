/* eslint-disable no-redeclare */
import React, { useState, useEffect } from "react";
import Item from "./components/Item.js";
import Itemfield from "./components/Itemfield.js";
import "./App.css";
const total = {
  body: 17,
  eyes: 17,
  hair: 73,
  mouth: 24,
  eyebrows: 15,
  glasses: 17,
  clothing1: 5,
  clothing2: 5,
  hats: 28,
};
let body = [];
for (var i = 0; i < total.body; i++) {
  body.push(
    <img
      className="item-img"
      key={i + 1}
      alt={""}
      src={`character/body/${i + 1}.png`}
    />
  );
}
let eyes = [];
for (var i = 0; i < total.eyes; i++) {
  eyes.push(
    <img
      className="item-img"
      key={i + 1}
      alt={""}
      src={`character/eyes/${i + 1}.png`}
    />
  );
}
let hair = [];
for (var i = 0; i < total.hair; i++) {
  hair.push(
    <img
      className="item-img"
      key={i + 1}
      alt={""}
      src={`character/hair/${i + 1}.png`}
    />
  );
}
let mouth = [];
for (var i = 0; i < total.mouth; i++) {
  mouth.push(
    <img
      className="item-img"
      key={i + 1}
      alt={""}
      src={`character/mouths/${i + 1}.png`}
    />
  );
}
let eyebrows = [];
for (var i = 0; i < total.eyebrows; i++) {
  eyebrows.push(
    <img
      className="item-img"
      key={i + 1}
      alt={""}
      src={`character/eyebrows/${i + 1}.png`}
    />
  );
}
let glasses = [];
for (var i = 0; i < total.glasses; i++) {
  glasses.push(
    <img
      className="item-img"
      key={i + 1}
      alt={""}
      src={`character/glasses/${i + 1}.png`}
    />
  );
}
let clothing1 = [];
for (var i = 0; i < total.clothing1; i++) {
  clothing1.push(
    <img
      className="item-img"
      key={i + 1}
      alt={""}
      src={`character/clothes/layer_1/${i + 1}.png`}
    />
  );
}
let clothing2 = [];
for (var i = 0; i < total.clothing2; i++) {
  clothing2.push(
    <img
      className="item-img"
      key={i + 1}
      alt={""}
      src={`character/clothes/layer_2/${i + 1}.png`}
    />
  );
}
let hat = [];
for (var i = 0; i < total.hats; i++) {
  hat.push(
    <img
      className="item-img"
      key={i + 1}
      alt={""}
      src={`character/hats/${i + 1}.png`}
    />
  );
}
function App() {
  const [bodyItem, setBodyItem] = useState(1);
  const [eyesItem, setEyesItem] = useState(2);
  const [hairItem, setHairItem] = useState(3);
  const [mouthItem, setMouthItem] = useState(3);
  const [eyebrowsItem, seteyebrowsItem] = useState(4);
  const [glassesItem, setGlassesItem] = useState(2);
  const [clothing1Item, setClothing1Item] = useState(1);
  const [hatItem, setHatItem] = useState(3);

  const randomize = () => {
    setBodyItem(Math.floor(Math.random() * total.body));
    setEyesItem(Math.floor(Math.random() * total.eyes));
    seteyebrowsItem(Math.floor(Math.random() * total.eyebrows));
    setHairItem(Math.floor(Math.random() * total.hair));
    setMouthItem(Math.floor(Math.random() * total.mouth));
    setGlassesItem(Math.floor(Math.random() * total.glasses));
    setClothing1Item(Math.floor(Math.random() * total.clothing1));
    setHatItem(Math.floor(Math.random() * total.hats));
  };
  useEffect(() => {
    randomize();
  }, []);
  return (
    <div>
      <div className="header">
        <h2>
          <span>👾</span> CHARACTER CUSTOMIZATION
        </h2>
        <img
          alt={""}
          className="key-visual"
          src={"/keyvisuals/keyvisual03.svg"}
        />
      </div>
      <hr />
      <div className="main">
        <div className="avatar-displayer">
          <div className="avatar-container">
            <div className="avatar">
              <Item path={"body"} zindex={1} itemStack={bodyItem} />
              <Item path={"hair"} zindex={2} itemStack={hairItem} />
              <Item path={"eyes"} zindex={3} itemStack={eyesItem} />
              <Item path={"eyebrows"} zindex={4} itemStack={eyebrowsItem} />
              <Item path={"mouths"} zindex={5} itemStack={mouthItem} />
              <Item
                path={"clothes/layer_1"}
                zindex={6}
                itemStack={clothing1Item}
              />
              <Item path={"glasses"} zindex={7} itemStack={glassesItem} />
              <Item path={"hats"} zindex={8} itemStack={hatItem} />
            </div>
            <button onClick={() => randomize()}>RANDOMIZE</button>
          </div>
        </div>
        <div className="item-displayer">
          <Itemfield
            fieldName={"01 BODY"}
            itemArray={body}
            itemState={bodyItem}
            setItemState={setBodyItem}
          />
          <Itemfield
            fieldName={"02 EYES"}
            itemArray={eyes}
            itemState={eyesItem}
            setItemState={setEyesItem}
          />
          <Itemfield
            fieldName={"03 EYEBROWS"}
            itemArray={eyebrows}
            itemState={eyebrowsItem}
            setItemState={seteyebrowsItem}
          />
          <Itemfield
            fieldName={"04 HAIR"}
            itemArray={hair}
            itemState={hairItem}
            setItemState={setHairItem}
          />
          <Itemfield
            fieldName={"05 MOUTH"}
            itemArray={mouth}
            itemState={mouthItem}
            setItemState={setMouthItem}
          />
          <Itemfield
            fieldName={"06 HAT"}
            itemArray={hat}
            itemState={hatItem}
            setItemState={setHatItem}
          />
          <Itemfield
            fieldName={"07 CLOTHING"}
            itemArray={clothing1}
            itemState={clothing1Item}
            setItemState={setClothing1Item}
          />
          <Itemfield
            fieldName={"08 GLASSES"}
            itemArray={glasses}
            itemState={glassesItem}
            setItemState={setGlassesItem}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
