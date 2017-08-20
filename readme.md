# Amper
Amper is a REST-API which converts **Markdown** text to Google's AMP syntax.
## Usage
Send a POST request with:

1. URL: http://amper.azurewebsites.net/amp
2. Content-Type: ````application/x-www-form-urlencoded````
3. Parameter "md" with the _Markdown_ syntax.

Output will be amp html.