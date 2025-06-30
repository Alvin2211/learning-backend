class ApiError extends Error{
        constrcutor(
            statusCode,
            message="Something went wrong",
            error = [],
            statck="" // stack trace
             
        ){
            super(message),
            this.statusCode = statusCode,
            this .error = error
        }

        // if(statck){
        //     this.stack = statck;
        // } else{
        //     Error.captureStackTrace(this, this.constructor);
        // }
}
export{ ApiError};