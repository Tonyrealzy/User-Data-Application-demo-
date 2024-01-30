
import { Geo } from "./geo";

export interface Address {
    street: string;
     suite: string;
     city: string;
     zipcode: number;
     geo: Geo;
}