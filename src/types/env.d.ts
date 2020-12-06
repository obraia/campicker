declare module "react-native-config" {
  
  interface Env {
    BASE_URL: string;
  }

  const Config: Env;

  export default Config;
}