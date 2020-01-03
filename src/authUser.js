var LoggedUsers = [];

class User{
    constructor(token, user_id){
        this.Token =  token;
        this.UserId  = user_id;
    }
}

function gerateToken(){
    return (`${Math.random().toString(36).substr(2)}`+`${Math.random().toString(36).substr(2)}`);
}

function verificUserLogged(user_id, user_token){

    if(user_id){
        for(var i in LoggedUsers){
            if(LoggedUsers[i].UserId == user_id){
                return ({ exist: true, user_token: LoggedUsers[i].Token}) ;
            }
        }
        return ({exist: false});
    }else{
        if(user_token){
            for(var i in LoggedUsers){
                if(LoggedUsers[i].Token == user_token){
                    return ({ exist: true, user_token: LoggedUsers[i].UserId}) ;
                }
            }
            return ({exist: false});
        }
    }
}

const funtionBlock = {

    addUser(user_id){
        //function make a session for user
        var response = verificUserLogged(user_id, null);
        if( response.exist == true ){
            return response.user_token;
        }else{
            var token  =  gerateToken();
            LoggedUsers.push(new User( token, user_id ));
            return token;
        }    
    },

    removeUser(user_token){
        for(i in LoggedUsers){
            if(LoggedUsers[i].Token == user_token){
                var removed = LoggedUsers.splice(i, 1);
                //return LoggedUsers;
                return ({ status: "success" });
            }
        }
        return ({ status: "fail" });
    },

    seeAll(){
        return LoggedUsers;
    },

    verificLogged(user_token){
        for(i in LoggedUsers){
            if ( LoggedUsers[i].Token === user_token ) {
                return ({state: true, user_id: LoggedUsers[i].UserId });
            }
        }
        return ({state: false });
    }

}

module.exports = funtionBlock;