// this file was generated by serverless-auto-swagger
            module.exports = {
  "swagger": "2.0",
  "info": {
    "title": "API Documentation Test",
    "version": "1"
  },
  "paths": {
    "/create-customer": {
      "post": {
        "summary": "createCustomer",
        "description": "",
        "operationId": "createCustomer.post.create-customer",
        "consumes": [
          "application/json"
        ],
        "produces": [
          "application/json"
        ],
        "parameters": [
          {
            "in": "body",
            "name": "body",
            "description": "Body required in the request",
            "required": true,
            "schema": {
              "$ref": "#/definitions/PostCreateCustomer"
            }
          }
        ],
        "responses": {
          "201": {
            "description": "Product created"
          },
          "422": {
            "description": "Validation Error"
          }
        }
      }
    },
    "/create-product": {
      "post": {
        "summary": "createProduct",
        "description": "",
        "operationId": "createProduct.post.create-product",
        "consumes": [
          "application/json"
        ],
        "produces": [
          "application/json"
        ],
        "parameters": [
          {
            "in": "body",
            "name": "body",
            "description": "Body required in the request",
            "required": true,
            "schema": {
              "$ref": "#/definitions/PostCreateProduct"
            }
          }
        ],
        "responses": {
          "201": {
            "description": "Product created"
          },
          "422": {
            "description": "Validation Error"
          }
        }
      }
    },
    "/sale-product": {
      "post": {
        "summary": "saleProduct",
        "description": "",
        "operationId": "saleProduct.post.sale-product",
        "consumes": [
          "application/json"
        ],
        "produces": [
          "application/json"
        ],
        "parameters": [
          {
            "in": "body",
            "name": "body",
            "description": "Body required in the request",
            "required": true,
            "schema": {
              "$ref": "#/definitions/PostSaleProduct"
            }
          }
        ],
        "responses": {
          "201": {
            "description": "Sale created"
          },
          "422": {
            "description": "Validation Error"
          }
        }
      }
    },
    "/find-product": {
      "get": {
        "summary": "findProduct",
        "description": "",
        "operationId": "findProduct.get.find-product",
        "consumes": [
          "application/json"
        ],
        "produces": [
          "application/json"
        ],
        "parameters": [],
        "responses": {
          "200": {
            "description": "200 response"
          },
          "422": {
            "description": "Validation Error"
          }
        }
      }
    }
  },
  "definitions": {
    "PostCreateCustomer": {
      "properties": {
        "firstName": {
          "title": "PostCreateCustomer.firstName",
          "type": "string"
        },
        "lastName": {
          "title": "PostCreateCustomer.lastName",
          "type": "string"
        },
        "email": {
          "title": "PostCreateCustomer.email",
          "type": "string"
        }
      },
      "required": [
        "firstName",
        "lastName",
        "email"
      ],
      "additionalProperties": false,
      "title": "PostCreateCustomer",
      "type": "object"
    },
    "PostCreateProduct": {
      "properties": {
        "title": {
          "title": "PostCreateProduct.title",
          "type": "string"
        },
        "type": {
          "title": "PostCreateProduct.type",
          "type": "string"
        },
        "salePrice": {
          "title": "PostCreateProduct.salePrice",
          "type": "number"
        },
        "rentPrice": {
          "title": "PostCreateProduct.rentPrice",
          "type": "number"
        },
        "daysForRent": {
          "title": "PostCreateProduct.daysForRent",
          "type": "number"
        },
        "typeOfSale": {
          "title": "PostCreateProduct.typeOfSale",
          "type": "string"
        }
      },
      "required": [
        "title",
        "type",
        "salePrice",
        "typeOfSale"
      ],
      "additionalProperties": false,
      "title": "PostCreateProduct",
      "type": "object"
    },
    "PostSaleProduct": {
      "properties": {
        "customerId": {
          "title": "PostSaleProduct.customerId",
          "type": "number"
        },
        "items": {
          "items": [],
          "additionalItems": false,
          "minItems": 0,
          "title": "PostSaleProduct.items",
          "type": "array"
        }
      },
      "required": [
        "customerId",
        "items"
      ],
      "additionalProperties": false,
      "title": "PostSaleProduct",
      "type": "object"
    }
  },
  "securityDefinitions": {},
  "basePath": "/dev",
  "schemes": [
    "http",
    "https"
  ]
};