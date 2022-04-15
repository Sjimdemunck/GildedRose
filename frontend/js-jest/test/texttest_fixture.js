
const { Shop, Item, TYPES } = require("../src/gilded_rose");

const items = [
  new Item("+5 Dexterity Vest", 10, 20, TYPES.DEFAULT ),
  new Item("Aged Brie", 2, 0, TYPES.BRIE),
  new Item("Elixir of the Mongoose", 5, 7, TYPES.DEFAULT),
  new Item("Sulfuras, Hand of Ragnaros", 0, 80, TYPES.LEGENDARY),
  new Item("Sulfuras, Hand of Ragnaros", -1, 80, TYPES.LEGENDARY),
  new Item("Backstage passes to a TAFKAL80ETC concert", 15, 20, TYPES.BACKSTAGE_PASS),
  new Item("Backstage passes to a TAFKAL80ETC concert", 10, 49, TYPES.BACKSTAGE_PASS),
  new Item("Backstage passes to a TAFKAL80ETC concert", 5, 49, TYPES.BACKSTAGE_PASS),

  // This Conjured item does not work properly yet
  new Item("Conjured Mana Cake", 3, 6, TYPES.CONJURED),
];

const days = Number(process.argv[2]) || 2;
const gildedRose = new Shop(items);

console.log("OMGHAI!");
for (let day = 0; day < days; day++) {
  console.log(`\n-------- day ${day} --------`);
  console.log("name, sellIn, quality");
  items.forEach(item => console.log(`${item.name}, ${item.sellIn}, ${item.quality}`));
  gildedRose.updateQuality();
}
