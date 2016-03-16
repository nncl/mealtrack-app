# Mealtrack App

## Getting Started

- `ionic setup sass`
- `bower install ngCordova `
- `bower install angular-moment `
- `bower install parse-angular-patch`
- `bower install angular-messages`

Add to your `./scss/ionic.app.scss`:

```
$royal: #73C8A9;
$positive: #73C8A9;
$dark: #373B44;
$stable: #DEE1B6;
$assertive: #BD5532;

@import url(http://fonts.googleapis.com/css?family=Domine:400,700);
$font-family-base: 'Domine', serif;
$ionicons-font-path: "../lib/ionic/fonts" !default;
@import "www/lib/ionic/scss/ionic";
@import "www/scss/form.scss";
@import "www/scss/styles.scss";
```