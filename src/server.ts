import NextDriveServer from 'nextdrive';
import { config } from 'dotenv';
import path from 'path';

config({ path: path.resolve(__dirname, '../.env') });

const server = new NextDriveServer(
    {
        port: parseInt(`${process.env.PORT??4005}`),
        apiKey: process.env.API_KEY!,
        options: {
            cors: true
        }
    });
server.start();