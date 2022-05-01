import { IApiConfig } from '@common/types/api';
import { fetchData } from '../utils';

class Config {
  private config: IApiConfig;

  constructor(config: IApiConfig) {
    this.config = config
  }

  getConfig(): IApiConfig {
    return this.config
  }
}

const configWrapper = new Config({
  apiUrl: "http://localhost:4000/graphql",
  fetch: fetchData
})

export const getConfig = () => configWrapper.getConfig();