function partial_application(func, ...args) {
    return (...moreArgs) => {
        return func(...args, ...moreArgs);
    }
}

//--Executes function pipeline in the following fashion
//--async_compose(A,B,C)
//--A(B(C()))
//--pipeline is executed from right to left
function async_compose(...function_pipeline) {
    return (input) => {
        return function_pipeline.reduceRight((accumulator, current_func) => accumulator.then(current_func), Promise.resolve(input));
    }
}

//--Executes function pipeline in the following fashion
//--async_pipe(A,B,C)
//--C(B(A()))
//--pipeline is executed from left to right
function async_pipe(...function_pipeline) {
    return (input) => {
        return function_pipeline.reduce((accumulator, current_func) => accumulator.then(current_func), Promise.resolve(input));
    }
}

exports.partial_application = partial_application;
exports.async_compose = async_compose;
exports.async_pipe = async_pipe;