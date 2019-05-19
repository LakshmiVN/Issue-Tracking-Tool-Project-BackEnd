let appConfig = {};

appConfig.port = process.env.port || 8081;
appConfig.allowedCorsOrigin = "*";
appConfig.env = "dev";
appConfig.db = {
    uri: "mongodb+srv://VNLakshmi:czeL38HWJioKVS4G@cluster0-9pwmu.mongodb.net/test?retryWrites=true",
}
appConfig.apiVersion = '/api/v1';   

module.exports = {

    port: appConfig.port,
    allowedCorsOrigin: appConfig.allowedCorsOrigin,
    environment: appConfig.env,
    db: appConfig.db,
    apiVersion: appConfig.apiVersion

}// end module exports