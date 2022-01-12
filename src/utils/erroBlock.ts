const buildErrorResponse = (errorData) => {
  if (errorData && errorData.status){
    return errorData;
  }
  if(errorData.length==0){
    return  {
      "status": {
        "code": 404,
        "header": "Unable to proceed",
        "description": "Data not found",
        "moreInfo": null
    },
    "data": null
    }

  }
  return {
    "status": {
      "code": 400,
      "header": "Unable to proceed",
      "description": "Bad Request",
      "moreInfo": null
  },
  "data": null
  }
} 
export { buildErrorResponse }