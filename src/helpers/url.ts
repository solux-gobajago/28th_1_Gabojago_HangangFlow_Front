const api = `/api/`;
const data = `/data/`;

// export const GET_KEYWORD = `${data}park_keywords`;

export const POST_LOGIN = `${api}login`;
// export const GET_TOKEN_CHECK = `${api}session`;
export const DELETE_LOGOUT = `${api}logout`;

// export const POST_FIND_ID_EMAIL = `${api}user/id/find/send`;

// export const POST_RESET_PW_PHONE = `${api}user/pw/reset/send`;
// export const POST_RESET_PW_CODE_CHECK = `${api}user/pw/reset/check`;
// export const POST_RESET_PW = `${api}user/pw/reset`;

// export const POST_REGISTER_ID_CHECK = `${api}register/id/check`;
// export const POST_REGISTER_EMAIL = `${api}register/email/send`;
// export const POST_REGISTER_EMAIL_CHECK = `${api}register/email/auth`;
// export const POST_REGISTER_PHONE = `${api}register/phone/send`;
// export const POST_REGISTER_PHONE_CHECK = `${api}register/phone/auth`;
export const POST_REGISTER = `${api}register`;

// export const POST_EDIT_PROFILE = `${api}user/profile/edit`;
// export const POST_EDIT_PROFILE_AUTH = `${api}user/profile/edit/auth`;
// export const POST_EDIT_PROFILE_CHECK = `${api}user/profile/edit/check`;

// export const POST_EDIT_EMAIL_SEND = `${api}user/email/send`;
// export const POST_EDIT_EMAIL_EDIT = `${api}user/email/edit`;

// export const POST_EDIT_PHONE_SEND = `${api}user/phone/send`;
// export const POST_EDIT_PHONE_EDIT = `${api}user/phone/edit`;

export const GET_USER_PROFILE = `${api}user/:userUuid`;
// export const GET_USER_DASHBOARD = `${api}user/profile/dashboard`;

// export const GET_CAD_PROJECTS_LIST = `${api}project/list`;
// export const GET_CAD_PROJECT_FILES = `${api}project`;
// export const GET_CAD_PROJECT_FILE = `${api}project`;
// export const POST_CAD_PROJECT = `${api}project/create`;
// export const POST_CAD_PROJECT_FILES = `${api}project/create`;


// export const GET_USER_GROUP_LIST = `${api}user`; //:uuid/group
// export const GET_USER_GROUP_AUTOCOMPLETE = `${api}user`; //:uuid/autoComplete/group/:search
// export const GET_USER_GROUP_INFO = `${api}user`; //:uuid/group/:group
// export const POST_USER_GROUP = `${api}user`; //:uuid/group
// export const PUT_USER_GROUP = `${api}user`; //:uuid/group/:group
// export const DELETE_USER_GROUP = `${api}user`; //:uuid/group

// export const GET_USER_MEMBER_LIST = `${api}user`; //:uuid/member/:search
// export const PUT_USER_MEMBER_MOVETO_GROUP = `${api}user`; //:uuid/member
// export const DELETE_USER_MEMBER = `${api}user`; //:uuid/member

// export const POST_USER_GROUP_INVITE = `${api}user/invite`;
// export const PUT_SENT_INVITE_CANCEL = `${api}user/invite/sent/cancel`;
// export const PUT_RECEPTION_INVITE_CANCEL = `${api}user/invite/reception/cancel`;
// export const GET_USER_INVITE_LIST = `${api}user/invite`;
// export const GET_USER_INVITE_INFO = `${api}user/invite`; //:invitation
// export const POST_INVITE_COMMIT = `${api}user/invite`; // /:invitation/commit/:aggrement

// export const GET_SUBSCRIBE_STATE = `${api}user/plan/status`;

// export const GET_ROOT_FILES = (uuid: string, limit: number, page: number) => `${api}project/${uuid}/files?limit=${limit}&page=${page}` //:uuid/files
// export const GET_CURRENT_FILES = (uuid: string, folder: string, limit: number, page: number) => `${api}project/${uuid}/files/${folder}?limit=${limit}&page=${page}` //:uuid/files:/folder

// export const GET_PROJECT_STORAGE = (uuid: string) => `${api}project/${uuid}/storage/status`
// export const GET_PROJECT_CALCULATE = (uuid: string) => `${api}project/${uuid}/storage/calculate`

// export const GET_CHILD_STORAGE = (uuid: string, folderOrFile: string) => `${api}project/${uuid}/storage/status/${folderOrFile}`
// export const GET_CHILD_CALCULATE = (uuid: string, folderOrFile: string) => `${api}project/${uuid}/storage/calculate/${folderOrFile}`

// export const GET_USER_STORAGE = `${api}user/storage/status`
// export const GET_USER_CALCULATE = `${api}user/storage/calculate`

// export const GET_FOLDER_ROOT = (uuid: string) => `${api}project/${uuid}/folders`
// export const GET_CURRENT_FOLDER = (uuid: string, folder: string) => `${api}project/${uuid}/folders/${folder}`

// export const POST_CREATE_FOLDER = (uuid: string) => `${api}project/${uuid}/add/folder`