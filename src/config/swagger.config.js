export default {
    swaggerDefinition: {
        openapi: '3.0.0',
        info: {
            title: 'Nodejs-Starter-Template API',
            version: '1.0.0',
            description: 'The API documentation of a boilerplate/starter project for quickly building RESTful APIs using Node.js, Express, and Mongoose.',
            license: {
                name: 'MIT',
                url: 'https://choosealicense.com/licenses/mit/',
            },
            contact: {
                name: 'Jagadish Sau',
                url: 'https://github.com/jay-neo',
                email: 'jsau5337@gmail.com',
            },
        },
        basePath: '/api/v1',
        servers: [
            {
                url: 'http://localhost:3000/api/v1/',
            },
        ],
    },
    tags: [
        {
            "name": "User",
            "description": "API for users"
        }
    ],
    apis: [
        // "src/models/*.js",
        // "src/utils/helpers/*.js",
        "src/api/v1/models/*.js",
        "src/api/v1/controllers/user/*.js",
        // "src/api/v1/controllers/user/edit/*.js",
        // "src/api/v1/controllers/user/auth/*.js"
    ]
};