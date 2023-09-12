import { SQSClient } from "@aws-sdk/client-sqs";
import dotenv from 'dotenv';

dotenv.config();

const access_key_id = process.env.ACCESS_KEY_ID;
const secret_key_id  = process.env.SECRET_KEY_ID;


const config = {
    region: "us-east-1",
    accessKeyId: access_key_id,
    secretAccessKey: secret_key_id
}

export const client_sqs = new SQSClient(config);
