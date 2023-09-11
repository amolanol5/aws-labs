import { SQSClient, SendMessageCommand } from "@aws-sdk/client-sqs";
import dotenv from 'dotenv';

dotenv.config();

const access_key_id = process.env.ACCESS_KEY_ID;
const secret_key_id  = process.env.SECRET_KEY_ID;


const config = {
    region: "us-east-1",
    accessKeyId: access_key_id,
    secretAccessKey: secret_key_id
}

console.log(access_key_id , secret_key_id)

// const client = new SQSClient(config);
// const input = {
//     QueueUrl: "STRING_VALUE",
//     MessageBody: "STRING_VALUE",
//     DelaySeconds: Number("int"),
//     MessageAttributes: {
//         "<keys>": {
//             StringValue: "STRING_VALUE",
//             BinaryValue: "BLOB_VALUE",
//             StringListValues: [
//                 "STRING_VALUE",
//             ],
//             BinaryListValues: [
//                 "BLOB_VALUE",
//             ],
//             DataType: "STRING_VALUE",
//         },
//     },
//     MessageSystemAttributes: {
//         "<keys>": {
//             StringValue: "STRING_VALUE",
//             BinaryValue: "BLOB_VALUE",
//             StringListValues: [
//                 "STRING_VALUE",
//             ],
//             BinaryListValues: [
//                 "BLOB_VALUE",
//             ],
//             DataType: "STRING_VALUE",
//         },
//     },
//     MessageDeduplicationId: "STRING_VALUE",
//     MessageGroupId: "STRING_VALUE",
// };
// const command = new SendMessageCommand(input);
// const response = await client.send(command);

