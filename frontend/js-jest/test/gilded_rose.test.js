const {Shop, Item, TYPES} = require("../src/gilded_rose");

describe("Gilded Rose", function() {
  const gildedRose = new Shop([
    new Item("Skinning Knife", 10, 10, TYPES.DEFAULT),
    new Item("The Ashbringer", 10, 50, TYPES.LEGENDARY),
    new Item("Stormwind Brie", 10, 49, TYPES.BRIE),
    new Item("Conjured Cinnamon", 10, 10, TYPES.CONJURED),
    new Item("I AM MURLOC", 1, 10, TYPES.BACKSTAGE_PASS),
    new Item("Elite Tauren Chieftain", 3, 10, TYPES.BACKSTAGE_PASS),
    new Item("Power of the Horde", 9, 10, TYPES.BACKSTAGE_PASS),
    new Item("Leeroy Jenkins (Paladin of the Horde)", 15, 10, TYPES.BACKSTAGE_PASS),

  ]);
  const items = gildedRose.updateQuality();

  it("Test `Skinning Knife` Properties", function() {
    const item = items[0];
    expect(item.type).toBe(TYPES.DEFAULT);
    expect(item.name).toBe("Skinning Knife");
    expect(item.quality).toBe(9);
    expect(item.sellIn).toBe(9);
  });

  it("Test `The Ashbringer` Properties", function() {
    const item = items[1];
    expect(item.type).toBe(TYPES.LEGENDARY);
    expect(item.name).toBe("The Ashbringer");
    expect(item.quality).toBe(50);
    expect(item.sellIn).toBe(10);
  });

  it("Test `Stormwind Brie` Properties", function() {
    const item = items[2];
    expect(item.type).toBe(TYPES.BRIE);
    expect(item.name).toBe("Stormwind Brie");
    expect(item.quality).toBe(50);
    expect(item.sellIn).toBe(9);
  });

  it("Test `Conjured Cinnamon` Properties", function() {
    const item = items[3];
    expect(item.type).toBe(TYPES.CONJURED);
    expect(item.name).toBe("Conjured Cinnamon");
    expect(item.quality).toBe(8);
    expect(item.sellIn).toBe(9);
  });

  it("Test `I AM MURLOC` Backstage Pass Properties", function() {
    const item = items[4];
    expect(item.type).toBe(TYPES.BACKSTAGE_PASS);
    expect(item.name).toBe("I AM MURLOC");
    expect(item.quality).toBe(0);
    expect(item.sellIn).toBe(0);
  });
  it("Test `Elite Tauren Chieftain` Backstage Pass Properties", function() {
    const item = items[5];
    expect(item.type).toBe(TYPES.BACKSTAGE_PASS);
    expect(item.name).toBe("Elite Tauren Chieftain");
    expect(item.quality).toBe(13);
    expect(item.sellIn).toBe(2);
  });
  it("Test `Power of the Horde` Backstage Pass Properties", function() {
    const item = items[6];
    expect(item.type).toBe(TYPES.BACKSTAGE_PASS);
    expect(item.name).toBe("Power of the Horde");
    expect(item.quality).toBe(12);
    expect(item.sellIn).toBe(8);
  });
  it("Test `Leeroy Jenkins (Paladin of the Horde)` Backstage Pass Properties ", function() {
    const item = items[7];
    expect(item.type).toBe(TYPES.BACKSTAGE_PASS);
    expect(item.name).toBe("Leeroy Jenkins (Paladin of the Horde)");
    expect(item.quality).toBe(11);
    expect(item.sellIn).toBe(14);
  });
});
