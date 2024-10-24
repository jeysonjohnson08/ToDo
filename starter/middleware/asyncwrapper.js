/*
In Short:
Yes, asyncwrapper is just a helper function to handle repetitive try-catch logic.
But the function it returns behaves like an Express route handler or middleware, and route handlers in Express must accept req, res, and next. That’s why you still need to have req, res, and next in the returned function, even though the primary purpose of asyncwrapper is to simplify error handling.
Why req, res, and next Are There Twice:
First in asyncwrapper: When asyncwrapper is called, it returns a function that takes req, res, and next because it will be used in an Express route.
Second in fu(req, res, next): Inside the returned function, you pass these same parameters to the original controller so it can handle the request and response.


*/

// in here fu is a callback which has two parameters req and res
const asyncwrapper = (fu)=>{

    // in this return the req, res and next values comes from express and not from controller.
return async(req,res,next)=>{
    try{
        await fu(req,res,next)
    }catch(err){
        next(err)
    }
}
}

module.exports = asyncwrapper
    /*
Flow Breakdown:
User makes a request to / route.
Express looks at your route definition (router.get("/", getalltask);), sees getalltask (which is wrapped by asyncwrapper), and calls the function returned by asyncwrapper.
The function returned by asyncwrapper gets called by Express, which passes req, res, and next to it.
Inside this function:
It tries to call your actual controller logic (fu(req, res, next)), which is getalltask.
getalltask fetches tasks from the database (Task.find({})), and sends the result back to the client (res.status(201).json({ tasks })).
If any errors occur during the database operation or in the controller, the catch block will send the error to next(err), which lets Express handle the error appropriately.
    
    */