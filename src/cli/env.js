export const parseEnv = () => {
    const envVariable = process.env;
    let parsedEnvVariable = (Object.entries(envVariable)
    .map(([key, value]) => [`RS_${key}=`, `${value}`])).join(';  ');
    process.stdout.write(parsedEnvVariable);
};
parseEnv();