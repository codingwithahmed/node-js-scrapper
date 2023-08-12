# Node.js Web Scraper

A simple Node.js web scraper that fetches data from a given URL and extracts specific information using the `cheerio` library for parsing HTML and `puppeteer` for headless browser automation.

## Table of Contents

- [Introduction](#introduction)
- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Dependencies](#dependencies)
- [License](#license)

## Introduction

This project provides a basic web scraper built with Node.js that allows you to scrape and extract data from web pages. It uses the `cheerio` library for parsing HTML and `puppeteer` for simulating a browser environment.

## Features

- Fetches HTML content from a specified URL.
- Utilizes `cheerio` for parsing and manipulating HTML.
- Uses `puppeteer` for headless browser automation.
- Example usage for extracting text, images, or other data from a webpage.

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/node-js-scraper.git

2. Navigate to the project directory:
   ```bash
   cd node-js-scraper
3. Install the dependencies:
   ```bash 
   yarn

## Usage
- Start the application in development:

   ```bash
   yarn dev
- Start the application in Production:

   ```bash
   yarn start
## Test Request
   Make a POST request to the /api/scrapper endpoint with a JSON object containing the url property:
   ```bash
   {
    "url": "https://example.com"
}
```
## Dependencies
- cheerio: ^1.0.0-rc.12
- express: ^4.18.2
- nodemon: ^3.0.1
- puppeteer: ^21.0.3
- request: ^2.88.2
- request-promise: ^4.2.6