const maxQuality = 50;
const TYPES = {
    BRIE: "brie",
    BACKSTAGE_PASS: "backstage_pass",
    LEGENDARY: "legendary",
    CONJURED: "conjured",
    DEFAULT: "default"
}

class Item {
    constructor(name, sellIn, quality, type) {
        this.name = name;
        this.sellIn = sellIn;
        this.quality = quality;
        this.type = type;
    }

    updateItem() {
        if (this.type !== TYPES.LEGENDARY) {
            this.decreaseSellIn(1);
        }

      switch(this.type) {
        case TYPES.BRIE:
            this.updateBrieItem();
          break;

        case TYPES.BACKSTAGE_PASS:
            this.updateBackstagePassItem();
            break;

        // Only if you have the Eye of Sulfaras!!
        case TYPES.LEGENDARY:
            this.updateLegendaryItem();
          break;

        case TYPES.CONJURED:
            this.updateConjuredItem();
            break;

        case TYPES.DEFAULT:
            this.updateDefaultItem();
          break;
      }
    }

    decreaseSellIn(amount) {
        this.sellIn -= amount;
    }

    decreaseQuality(amount) {
        if (this.quality - amount < 0) {
            // quality can never be negative
            this.quality = 0;
            return;
        }

        this.quality -= amount;
    }

    increaseQuality(amount) {
        if ((this.quality + amount) >= maxQuality ) {
            // if an Item overflows the maxQuality set value to the max that is allowed
            this.quality = maxQuality;

            return;
        }

        this.quality += amount;
    }

    updateDefaultItem() {
        this.decreaseQuality(1);
    }

    updateConjuredItem() {
        this.decreaseQuality(2);
    }

    updateLegendaryItem() {
        return 'Disenchant this, worst item in game';
    }

    updateBackstagePassItem() {
        if (this.sellIn < 5) {
            this.increaseQuality(3);
        }
        else if (this.sellIn < 10) {
            this.increaseQuality(2);
        } else {
            this.increaseQuality(1);
        }

        if (this.sellIn === 0) {
            this.quality = 0;
        }
    }

    updateBrieItem() {
        this.increaseQuality(1);
    }
}

class Shop {
    constructor(items = []) {
        this.items = items;
    }

    updateQuality() {
        this.items.forEach((item) => {
            if (item instanceof Item) {
                if (item.sellIn > 0) {
                    item.updateItem();
                }
            }
        });

        return this.items;
    }
}

module.exports = {
    Item,
    Shop,
    TYPES
}
