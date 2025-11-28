import axios from "axios";

export interface Httpadapter {
  get<T>(url: string): Promise<T>;
}

export class PokeApiFetchAdapter implements Httpadapter {
  async get<T>(url: string): Promise<T> {
    const resp = await fetch(url);
    const data: T = await resp.json();
    console.log("Fetch Adapter");
    return data;
  }
}

export class PokeApiAdapter implements Httpadapter {
  private readonly axios = axios;
  async get<T>(url: string): Promise<T> {
    const { data } = await this.axios.get<T>(url);
    console.log("Axios Adapter");
    return data;
  }

  async post(url: string, data: any) {
    return;
  }

  async put(url: string, data: any) {
    return;
  }
  async delete(url: string) {
    return;
  }
}
