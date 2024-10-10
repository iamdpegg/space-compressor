# Space Compressor

Space Compressor is a browser extension that helps you clean up text by compressing multiple spaces into single spaces. It's a simple, easy-to-use tool that can save you time when working with text that has inconsistent spacing.

## Features

- Compress multiple spaces into single spaces
- Trim leading and trailing whitespace
- Easy-to-use interface
- Copy compressed text to clipboard with a single click

## Installation

1. Download the extension files
2. Open your browser's extension management page
3. Enable "Developer mode"
4. Click "Load unpacked" and select the folder containing the extension files

## Usage

1. Click on the Space Compressor icon in your browser toolbar
2. Paste your text into the input box
3. Click the "Compress" button
4. The compressed text will appear in the output box
5. Click the "Copy Result" button to copy the compressed text to your clipboard

## File Structure

- `manifest.json`: Extension manifest file
- `popup.html`: HTML structure for the extension popup
- `popup.js`: JavaScript file containing the extension's functionality

## Development

To modify or extend the functionality of Space Compressor:

1. Update the HTML in `popup.html` to change the user interface
2. Modify `popup.js` to alter the text processing or add new features
3. Adjust the `manifest.json` file if you need to change permissions or other extension metadata
