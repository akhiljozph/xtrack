import path from "path";

const loadEnvConfig = () => {
    console.log(process.env.NODE_ENV)
    return path.resolve(__dirname, `../environments/.env.${process.env.NODE_ENV}`);
}

export default loadEnvConfig;