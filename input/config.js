const fs = require("fs");
const path = require("path");
const width = 1000;
const height = 1000;
const dir = __dirname;
const rarity = [
    { key: "", val: "original" },
    { key: "_r", val: "rare" },
    { key: "_sr", val: "super rare" },
];

   const addRarity = _str => {
    let itemRarity;
  
    rarity.forEach((r) => {
      if (_str.includes(r.key)) {
        itemRarity = r.val;
      }
    });
  
    return itemRarity;
  };
  
  const cleanName = _str => {
    let name = _str.slice(0, -4);
    rarity.forEach((r) => {
      name = name.replace(r.key, "");
    });
    return name;
  };
  
  const getElements = path => {
    return fs
      .readdirSync(path)
      .filter((item) => !/(^|\/)\.[^\/\.]/g.test(item))
      .map((i, index) => {
        return {
          id: index + 1,
          name: cleanName(i),
          fileName: i,
          rarity: addRarity(i),
        };
      });
  };
const layers  = [
    {
    id:1,
    name: "background",
    elements: getElements(`${dir}/background/`),
    location: `${dir}/background/`,
    position: { x: 0, y:0 },
    size: {width: width, height: height },
    },
    {
        id:2,
        name: "techos",
        elements: getElements(`${dir}/techos/`),
        location: `${dir}/techos/`,
        position: { x: 0, y:0 },
        size: {width: width, height: height },
        },
 {
    id:3,
    name: "fachada",
    elements: getElements(`${dir}/fachada/`),
    location: `${dir}/fachada/`,
    position: { x: 0, y:0 },
    size: {width: width, height: height },
    },
{
    id:4,
    name: "puertas",
    elements: getElements(`${dir}/puertas/`),
    location: `${dir}/puertas/`,
    position: { x: 0, y:0 },
    size: {width: width, height: height },
    },
{
    id:5,
    name: "ventanas",
    elements: getElements(`${dir}/ventanas/`),
    location: `${dir}/ventanas/`,
    position: { x: 0, y:0 },
    size: {width: width, height: height },
    },
    {
        id:6,
        name: "escalas",
        elements: getElements(`${dir}/escalas/`),
        location: `${dir}/escalas/`,
        position: { x: 0, y:0 },
        size: {width: width, height: height },
        },                
];

module.exports = {layers, width, height};