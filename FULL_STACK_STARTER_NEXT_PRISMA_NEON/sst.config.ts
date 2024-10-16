/// <reference path="./.sst/platform/config.d.ts" />

export default $config({
  app(input) {
    return {
      name: "ligma-stack",
      removal: input?.stage === "production" ? "retain" : "remove",
      home: "aws",
    };
  },
  async run() {
    const secrets = {
      AuthPostgresPrismaURL: new sst.Secret("AuthPostgresPrismaURL"),
      AuthPostgresURLNonPooling: new sst.Secret("AuthPostgresURLNonPooling"),
      StripeKey: new sst.Secret("StripeKey"),
    };
    const allSecrets = Object.values(secrets);
    const bucket = new sst.aws.Bucket("LIGMAS3", {
      public: true,
    });
    new sst.aws.Nextjs("LIGMAWeb", {
      link: [bucket, ...allSecrets],
      domain: {
        name: "fullstacktechnyc.com",
        dns: false,
        cert: "arn:aws:acm:us-east-1:975050151374:certificate/ed2bb17b-e2cc-4110-9ef4-f10fa9e3f50a",
      },
    });
  },
});
