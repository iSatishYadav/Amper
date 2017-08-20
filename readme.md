# Amper
Amper is a REST-API which converts **Markdown** text to Google's AMP syntax.
## Usage
Send a POST request with:

1. URL: http://amper.azurewebsites.net/amp
2. Content-Type: ````application/x-www-form-urlencoded````
3. Parameter "md" with the _Markdown_ syntax.

Output will be amp html.

## Example

### HTTP

````HTTP
POST /amp HTTP/1.1
Host: amper.azurewebsites.net
Content-Type: application/x-www-form-urlencoded

md=%23+Hello+World%0AThis+was+written+in+**Markdown**
````

### cURL

```` cURL
curl -X POST \
  http://amper.azurewebsites.net/amp \
  -H 'content-type: application/x-www-form-urlencoded' \
  -d 'md=%23%20Hello%20World%0AThis%20was%20written%20in%20**Markdown**'
````

### C# (RestSharp)
```` C#
var client = new RestClient("http://amper.azurewebsites.net/amp");
var request = new RestRequest(Method.POST);
request.AddHeader("content-type", "application/x-www-form-urlencoded");
request.AddParameter("application/x-www-form-urlencoded", "md=%23%20Hello%20World%0AThis%20was%20written%20in%20**Markdown**", ParameterType.RequestBody);
IRestResponse response = client.Execute(request);
````

### JAVA (OK HTTP)

```JAVA
OkHttpClient client = new OkHttpClient();

MediaType mediaType = MediaType.parse("application/x-www-form-urlencoded");
RequestBody body = RequestBody.create(mediaType, "md=%23%20Hello%20World%0AThis%20was%20written%20in%20**Markdown**");
Request request = new Request.Builder()
  .url("http://amper.azurewebsites.net/amp")
  .post(body)
  .addHeader("content-type", "application/x-www-form-urlencoded")
  .build();

Response response = client.newCall(request).execute();
```

### JavaScript
```JavaScript

var data = "md=%23%20Hello%20World%0AThis%20was%20written%20in%20**Markdown**";
var xhr = new XMLHttpRequest();
xhr.withCredentials = true;
xhr.addEventListener("readystatechange", function () {
  if (this.readyState === 4) {
    console.log(this.responseText);
  }
});
xhr.open("POST", "http://amper.azurewebsites.net/amp");
xhr.setRequestHeader("content-type", "application/x-www-form-urlencoded");
xhr.send(data);

```

### jQuery

```JavaScript
var settings = {
  "async": true,
  "crossDomain": true,
  "url": "http://amper.azurewebsites.net/amp",
  "method": "POST",
  "headers": {
    "content-type": "application/x-www-form-urlencoded",
  },
  "data": {
    "md": "# Hello World\nThis was written in **Markdown**"
  }
}

$.ajax(settings).done(function (response) {
  console.log(response);
});

````

### Node.js (Native)

```node.js
var qs = require("querystring");
var http = require("http");

var options = {
  "method": "POST",
  "hostname": "amper.azurewebsites.net",
  "port": null,
  "path": "/amp",
  "headers": {
    "content-type": "application/x-www-form-urlencoded"
  }
};

var req = http.request(options, function (res) {
  var chunks = [];

  res.on("data", function (chunk) {
    chunks.push(chunk);
  });

  res.on("end", function () {
    var body = Buffer.concat(chunks);
    console.log(body.toString());
  });
});

req.write(qs.stringify({ md: '# Hello World\nThis was written in **Markdown**' }));
req.end();

````

### Node.js (request)

```` Node.js

var request = require("request");

var options = { method: 'POST',
  url: 'http://amper.azurewebsites.net/amp',
  headers:  { 'content-type': 'application/x-www-form-urlencoded' },
  form: { md: '# Hello World\nThis was written in **Markdown**' }
};

request(options, function (error, response, body) {
  if (error) throw new Error(error);

  console.log(body);
});


````
### PHP
````PHP
<?php

$request = new HttpRequest();
$request->setUrl('http://amper.azurewebsites.net/amp');
$request->setMethod(HTTP_METH_POST);

$request->setHeaders(array(
  'content-type' => 'application/x-www-form-urlencoded'
));

$request->setContentType('application/x-www-form-urlencoded');
$request->setPostFields(array(
  'md' => '# Hello World
This was written in **Markdown**'
));

try {
  $response = $request->send();

  echo $response->getBody();
} catch (HttpException $ex) {
  echo $ex;
}

````

### Python (3)

````python
import http.client

conn = http.client.HTTPConnection("amper.azurewebsites.net")

payload = "md=%23%20Hello%20World%0AThis%20was%20written%20in%20**Markdown**"

headers = { 'content-type': "application/x-www-form-urlencoded" }

conn.request("POST", "/amp", payload, headers)

res = conn.getresponse()
data = res.read()

print(data.decode("utf-8"))

````


## Credits

It uses [https://github.com/dwyl/ampl](https://github.com/dwyl/ampl) library to convert _Markdown_to amp.