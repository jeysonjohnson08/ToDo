class CustomAPIError extends Error{
constructor(message, status){
    super(message)
this.status = status
}
}

const createCustomError = (msg,statuscode)=>{
return new CustomAPIError(msg,statuscode)
}

module.exports = {CustomAPIError, createCustomError}