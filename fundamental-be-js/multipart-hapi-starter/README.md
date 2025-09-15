# Multipart Hapi Starter

This project is a simple Node.js backend built with the Hapi framework. Its main purpose is to demonstrate how to handle file uploads using multipart/form-data requests.

## Purpose

The project was created to help beginners understand how to:
- Receive files from clients via HTTP POST requests
- Save uploaded files to a local directory on the server
- Respond with success or error messages based on the upload result

## Features

- Uses Hapi for server setup and routing
- Handles file uploads with multipart/form-data
- Saves files to an `uploads` directory
- Provides clear feedback to the client after upload

## Getting Started

1. Install dependencies:
	```bash
	npm install
	```
2. Start the development server:
	```bash
	npm run start:dev
	```
3. Send a POST request to `http://localhost:3000/uploads` with a file in the `data` field using multipart/form-data.

## Key Methods and Functions Explained

### Route Options: Payload
The `options.payload` object configures how Hapi handles incoming file uploads:
- `allow: 'multipart/form-data'`: Accepts multipart form data, which is required for file uploads.
- `multipart: true`: Enables parsing of multipart payloads.
- `output: 'stream'`: Processes the uploaded file as a stream, allowing efficient handling of large files.
- `maxBytes: 500000`: Limits the maximum upload size to 500KB, you can expand or decrease the size.

### Writable Stream: fileStream
`fs.createWriteStream(location)` creates a writable stream to save the uploaded file to disk. The uploaded file data is piped into this stream, which writes the file to the specified location.

### Upload Process
1. The server receives the file in the `data` field of the request payload.
2. The file's name is extracted from `data.hapi.filename`.
3. The server checks if the `uploads` directory exists and creates it if necessary.
4. The file data is piped into a writable stream (`fileStream`) to save it to disk.
5. The server responds with a success message if the upload completes, or an error message if something goes wrong.

### Error Handling
Errors during the upload process (such as file system issues) are caught and handled, ensuring the client receives a clear message about the result.

## Author

Ahmad Naufal
