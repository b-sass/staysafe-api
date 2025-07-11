import { Request, Response, Router } from "express";
const router = Router();

router.get("/", (req: Request, res: Response) => {
  res.send({
  "message": "List of available endpoints",
  "listOfEndpoints": [
    {
      "entity": "Activities",
      "sap": "/api/activities",
      "services": {
        "get": [
          {
            "endpoint": "/",
            "description": "Returns all activities",
            "examples": [
              "http://softwarehub.uk/unibase/staysafe/v1/api/activities",
              "http://softwarehub.uk/unibase/staysafe/v1/api/activities?orderby=ActivityLeave"
            ]
          },
          {
            "endpoint": "/{id}",
            "description": "Returns the specific activity identified by the id provided",
            "example": "http://softwarehub.uk/unibase/staysafe/v1/api/activities/1"
          },
          {
            "endpoint": "/users/{id}",
            "description": "Returns all the activities associated with a specific user identified by the id provided",
            "example": "http://softwarehub.uk/unibase/staysafe/v1/api/activities/users/1"
          }
        ],
        "post": {
          "endpoint": "/",
          "description": "Insert a new activity"
        },
        "put": {
          "endpoint": "/{id}",
          "description": "Update the specific activity identified by the id provided"
        },
        "delete": {
          "endpoint": "/{id}",
          "description": "Delete the specific activity identified by the id provided"
        }
      }
    },
    {
      "entity": "Contacts",
      "sap": "/api/contacts",
      "services": {
        "post": {
          "endpoint": "/",
          "description": "Insert a new contact"
        },
        "delete": {
          "endpoint": "/{id}",
          "description": "Delete the specific contact identified by the id provided"
        }
      }
    },
    {
      "entity": "Locations",
      "sap": "/api/locations",
      "services": {
        "get": [
          {
            "endpoint": "/",
            "description": "Returns all locations",
            "examples": [
              "http://softwarehub.uk/unibase/staysafe/v1/api/locations",
              "http://softwarehub.uk/unibase/staysafe/v1/api/locations?orderby=LocationName"
            ]
          },
          {
            "endpoint": "/{id}",
            "description": "Returns the specific location identified by the id provided",
            "example": "http://softwarehub.uk/unibase/staysafe/v1/api/locations/1"
          }
        ],
        "post": {
          "endpoint": "/",
          "description": "Insert a new location"
        },
        "put": {
          "endpoint": "/{id}",
          "description": "Update the specific location identified by the id provided"
        },
        "delete": {
          "endpoint": "/{id}",
          "description": "Delete the specific location identified by the id provided"
        }
      }
    },
    {
      "entity": "Positions",
      "sap": "/api/positions",
      "services": {
        "get": [
          {
            "endpoint": "/",
            "description": "Returns all positions",
            "examples": [
              "http://softwarehub.uk/unibase/staysafe/v1/api/positions"
            ]
          },
          {
            "endpoint": "/{id}",
            "description": "Returns the specific position identified by the id provided",
            "example": "http://softwarehub.uk/unibase/staysafe/v1/api/positions/1"
          },
          {
            "endpoint": "/activities/{id}",
            "description": "Returns all the positions associated with a specific activity identified by the id provided",
            "example": "http://softwarehub.uk/unibase/staysafe/v1/api/positions/activities/2"
          }
        ],
        "post": {
          "endpoint": "/",
          "description": "Insert a new position"
        },
        "put": {
          "endpoint": "/{id}",
          "description": "Update the specific position identified by the id provided"
        },
        "delete": {
          "endpoint": "/{id}",
          "description": "Delete the specific position identified by the id provided"
        }
      }
    },
    {
      "entity": "Status",
      "sap": "/api/status",
      "services": {
        "get": [
          {
            "endpoint": "/",
            "description": "Returns all status entries",
            "examples": [
              "http://softwarehub.uk/unibase/staysafe/v1/api/status",
              "http://softwarehub.uk/unibase/staysafe/v1/api/status?orderby=StatusName"
            ]
          },
          {
            "endpoint": "/{id}",
            "description": "Returns the specific status entry identified by the id provided",
            "example": "http://softwarehub.uk/unibase/staysafe/v1/api/locations/1"
          }
        ]
      }
    },
    {
      "entity": "Users",
      "sap": "/api/users",
      "services": {
        "get": [
          {
            "endpoint": "/",
            "description": "Returns all users",
            "example": "http://softwarehub.uk/unibase/staysafe/v1/api/users"
          },
          {
            "endpoint": "/{id}",
            "description": "Returns the specific user identified by the id provided",
            "example": "http://softwarehub.uk/unibase/staysafe/v1/api/users/1"
          },
          {
            "endpoint": "/contacts/{id}",
            "description": "Returns all users who are contacts of the specific user identified by the id provided",
            "example": "http://softwarehub.uk/unibase/staysafe/v1/api/users/contacts/1"
          }
        ],
        "post": {
          "endpoint": "/",
          "description": "Insert a new user"
        },
        "put": {
          "endpoint": "/{id}",
          "description": "Update the specific user identified by the id provided"
        },
        "delete": {
          "endpoint": "/{id}",
          "description": "Delete the specific user identified by the id provided"
        }
      }
    }
  ]
})
});

export default router;