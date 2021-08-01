import axios from "axios";
import { Car } from "./car";
import { environment } from "./environment";

export class Carservice {
    private apiUrl: string;

    constructor() {
        this.apiUrl = `${environment.apiUrl}/car`;
    }

    async list({ skip, offset }: Record<string, number>): Promise<Car[]> {
        const response = await axios.get(this.apiUrl, { params: { skip, offset } })
        return response.data;
    }

    async findById({ id, image }: Record<string, number | string>): Promise<Car> {
        const response = await axios.get(`${this.apiUrl}/${id}/${image}`)
        return response.data;
    }
}