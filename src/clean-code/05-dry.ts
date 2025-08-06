
type Size = '' | 'S' | 'M' | 'XL';

class Product {
    constructor(
        public name: string = '',
        public price: number = 0,
        public size: Size = '',
    ) { }

    isProductReady():boolean {
        for (const key in this) {
            switch (typeof this[key]) {
                case 'string':
                    if ((<string><unknown>this[key]).length <= 0) throw Error(`${key}-is-empty`)
                    break;
                case 'number':
                    if (this.price <= 0) throw Error('price-lower-equal-zero');
                    break;            
                default:
                    throw new Error(`${typeof this[key]}-not-supported`);
            }
        }

        return true;
    }

    toString() {
        if (!this.isProductReady()) return;        

        return `${this.name} (${this.price}), ${this.size}`;
    }
}

(() => {

    const bluePants = new Product('White shirt', 1, 'M');

    console.log(bluePants.toString());




})();