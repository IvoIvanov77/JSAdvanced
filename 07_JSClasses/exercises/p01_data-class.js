/**
 * Created by Ivaylo on 5/28/2018.
 */

class Request{
    constructor(method, uri, version, message){
        this.method = method;
        this.uri = uri;
        this.version = version;
        this.message = message;
        this.response = undefined;
        this.fulfilled = false;
    }
}

// The first four properties (method, uri, version, message) are set trough the constructor,
// in the listed order. The response property is initialized to undefined and the fulfilled
// property is initially set to false.