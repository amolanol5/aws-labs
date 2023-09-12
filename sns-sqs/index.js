import { SendMessageCommand } from "@aws-sdk/client-sqs";
import { PublishCommand } from "@aws-sdk/client-sns";
import { client_sqs  } from "./aws_sqs.js";
import { client_sns } from "./aws_sns.js";

import dotenv from 'dotenv';

dotenv.config();

// const QueueUrl = process.env.QUEUE_ONE_URL;
const Message = {
    nombre: 'Juan',
    edad: 30,
    ciudad: 'Ejemploville'
  };
  
const MessageBody = JSON.stringify(Message);

// const input = {
//     QueueUrl: QueueUrl,
//     MessageBody: MessageBody
// };


// const command = new SendMessageCommand(input);
// const response = await client_sqs.send(command);


const input = { 
    TopicArn: "arn:aws:sns:us-east-1:515411507312:sns-to-queues",
    Message: MessageBody,
  };
  const command = new PublishCommand(input);
  const response = await client_sns.send(command);


  console.log(response)
