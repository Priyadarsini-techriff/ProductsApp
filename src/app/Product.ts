
// export interface IProduct {
//     productId: number,
//     productName: string,
//     description: string,
//     releaseDate: string,
//     price: number,
//     rating: number,
//     isActive: boolean,
//     imageUrl: string,
//     createdDate: string,
//     lastUpdatedDate?: string
 
// }
export class IProduct {
    productId: number=0;
    productName: string="";
    description: string=""
    releaseDate: string=""
    price: number | undefined;
    rating: number | undefined;
    isActive: boolean =false;
    imageUrl: string="";
    createdDate: string="";
    lastUpdatedDate: string="";
 
}