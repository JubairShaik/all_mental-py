/* tslint:disable */
/* eslint-disable */
import "sst"
declare module "sst" {
  export interface Resource {
    AuthPostgresPrismaURL: {
      type: "sst.sst.Secret"
      value: string
    }
    AuthPostgresURLNonPooling: {
      type: "sst.sst.Secret"
      value: string
    }
    LIGMAS3: {
      name: string
      type: "sst.aws.Bucket"
    }
    StripeKey: {
      type: "sst.sst.Secret"
      value: string
    }
  }
}
export {}