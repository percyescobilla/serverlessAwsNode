endpoints:
  POST - https://h1in79m4yb.execute-api.us-east-1.amazonaws.com/users
  GET - https://h1in79m4yb.execute-api.us-east-1.amazonaws.com/users
  GET - https://h1in79m4yb.execute-api.us-east-1.amazonaws.com/users/{id}
  GET - https://h1in79m4yb.execute-api.us-east-1.amazonaws.com/swapi/vehicles
  GET - https://h1in79m4yb.execute-api.us-east-1.amazonaws.com/swapi/vehicles/{id}
functions:
  createUsers: serverless-reto-dev-createUsers
  getUsers: serverless-reto-dev-getUsers 
  getUser: serverless-reto-dev-getUser 
  getVehicles: serverless-reto-dev-getVehicles 
  getVehicle: serverless-reto-dev-getVehicle 

Stack Outputs:clea
  GetUsersLambdaFunctionQualifiedArn: arn:aws:lambda:us-east-1:143576648549:function:serverless-reto-dev-getUsers:10
  GetVehiclesLambdaFunctionQualifiedArn: arn:aws:lambda:us-east-1:143576648549:function:serverless-reto-dev-getVehicles:3
  GetVehicleLambdaFunctionQualifiedArn: arn:aws:lambda:us-east-1:143576648549:function:serverless-reto-dev-getVehicle:2
  GetUserLambdaFunctionQualifiedArn: arn:aws:lambda:us-east-1:143576648549:function:serverless-reto-dev-getUser:12
  HttpApiId: h1in79m4yb
  CreateUsersLambdaFunctionQualifiedArn: arn:aws:lambda:us-east-1:143576648549:function:serverless-reto-dev-createUsers:10
  ServerlessDeploymentBucketName: serverless-reto-dev-serverlessdeploymentbucket-1gmkmby4lkjxu
  HttpApiUrl: https://h1in79m4yb.execute-api.us-east-1.amazonaws.com