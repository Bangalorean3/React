const clickUserAction = function (user){
    console.log("I am action and will receive user");
    console.log(user);
    console.log(user.firstName)
    return({
        type:"USERCLICKED",
        payLoad:user
    })
}

export default clickUserAction;