# Express basic Folder Structure.

~~~~~~~~~~~~
├── app.js
├── bin
│   └── www
├── package.json
├── public
│   ├── images
│   ├── javascripts
│   └── stylesheets
│       └── style.css
├── routes
│   ├── index.js
│   └── users.js
└── views
    ├── error.jade
    ├── index.jade
    └── layout.jade
~~~~~~~~~~~~

The **app.js** file is the entry-point of your application.

The **package.json** file contains all of your dependencies and various details regarding the project.

The **bin** folder should contain the various configuration startup scripts for your application.

*For example, instead of applying all the Express middleware in the app.js file, you module.exports = {} them from their own configuration file and require them in app.js.*

The **views** folder contains all of your server-side views.

The **public** folder contains all of your front-end code.

The **routes** folder contains all the routes that you have created for your application.
