export interface user {
    userId : string;
    password : string;
    nickname : string;
    email : string;
}

export interface bookmark {
    userUuid : string;
    parkUuid : string;
}

export interface community {
    article : Text;
    userUuid : string;
    parkUuid : string;
}

export interface park {
    parkName : string;
    parkAddress : string;
    parkPhoneNum : string;
    parkInfo : string;
    latitude : number;
    longitude : number;
}