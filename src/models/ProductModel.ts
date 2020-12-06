import { IProduct, IQuantity } from "../interfaces"; 

class ProductModel implements IProduct {
    barcodeA: string;
    barcodeB: string;
    description: string;
    counts: IQuantity[];
    expectedCount: number;

    constructor(barcodeA: string, description: string, barcodeB: string, expectedCount: string = '0') {
        this.barcodeA = barcodeA;
        this.description = description;
        this.barcodeB = barcodeB;
        this.counts = [{ date: '', quantity: 0, timestamp: -8640000000000000 }];
        this.expectedCount = isNaN(Number(expectedCount)) ? 0 : Number(expectedCount);
    }
}

export default ProductModel;