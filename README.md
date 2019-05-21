```
TODO:
* Check HTML for validity
* Optimize images
* Add the proper Favicon
* Add manifest
```

## Map Display Hack

Since Google Maps API requires adding a credit card and verifying it - a
workaround is being used.

### Method 1
1. Generate an `<iframe>` by using [https://www.embedgooglemap.net/](https://www.embedgooglemap.net/).
2. Copy the `src` attribute and set it to the `iframe` in code

### Method 2
1. Search for the wanted location on Google Maps
2. Click on the `share` button and get an `<iframe>` element
3. Copy the `src` attribute and set it to the `iframe` in code
