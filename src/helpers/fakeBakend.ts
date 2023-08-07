
import { APIClient } from './apiHelper';
import {

    user,
    park,
    community,
    bookmark,
} from './apiInterface';
import * as url from './url';


const api = new APIClient();

// export const sendParkKeyword = async ()

export const login = async (userId: string, password: string) =>
    api.create(url.POST_LOGIN, { userId: userId, password: password });

export const logout = async () => api.delete(url.DELETE_LOGOUT);

// export const findIdEmail = async (email: string) =>
//     api.create(url.POST_FIND_ID_EMAIL, { email: email });

// export const resetPwPhone = async (phone: string, userId: string) =>
//     api.create(url.POST_RESET_PW_PHONE, { phone: phone, userId: userId });
// export const resetPwCodeCheck = async (resetPWCode: check) =>
//     api.create(url.POST_RESET_PW_CODE_CHECK, { ...resetPWCode });

// export const resetPw = async (
//     uuid: string,
//     userUuid: string,
//     phone: string,
//     pw: string,
// ) =>
//     api.create(url.POST_RESET_PW, {
//         uuid: uuid,
//         userUuid: userUuid,
//         phone: phone,
//         pw: pw,
//     });

// export const registerIdCheck = async (id: string) =>
//     api.create(url.POST_REGISTER_ID_CHECK, { id: id });
// export const registerEmail = async (email: string) =>
//     api.create(url.POST_REGISTER_EMAIL, { email: email });
// export const registerEmailCheck = async (emailCheck: check) =>
//     api.create(url.POST_REGISTER_EMAIL_CHECK, {
//         ...emailCheck,
//     });
// export const registerPhone = async (phone: string) =>
//     api.create(url.POST_REGISTER_PHONE, { phone: phone });
// export const registerPhoneCheck = async (phoneCheck: check) =>
//     api.create(url.POST_REGISTER_PHONE_CHECK, {
//         ...phoneCheck,
//     });
export const registerSubmit = async (userData: user) =>
    api.create(url.POST_REGISTER, userData);

// export const editProfile = async (editProfile: editUser) =>
//     api.create(url.POST_EDIT_PROFILE, { ...editProfile });
// export const editProfileAuth = async (typeCheck: check) =>
//     api.create(url.POST_EDIT_PROFILE_AUTH, { ...typeCheck });
// export const editProfileCHECK = async (typeCheck: check) =>
//     api.create(url.POST_EDIT_PROFILE_CHECK, { ...typeCheck });

// export const editPhoneAuth = async (phone: string) =>
//     api.create(url.POST_EDIT_PHONE_SEND, { phone: phone });
// export const editPhoneEdit = async (authData: editPhone) =>
//     api.put(url.POST_EDIT_PHONE_EDIT, { ...authData });

// export const editEmailAuth = async (email: string) =>
//     api.create(url.POST_EDIT_EMAIL_SEND, { email: email });
// export const editEmailEdit = async (authData: editEmail) =>
//     api.put(url.POST_EDIT_EMAIL_EDIT, { ...authData });

export const getUserProfile = async () => api.get(url.GET_USER_PROFILE);
// export const getUserDashboard = async () => api.get(url.GET_USER_DASHBOARD);

// export const getCadProjectList = async (limit: number, page: number) =>
//     api.get(url.GET_CAD_PROJECTS_LIST, { limit: limit, page: page });

// export const getCadProjectFiles = async (
//     project: string,
//     limit: number,
//     page: number,
// ) =>
//     api.get(`${url.GET_CAD_PROJECT_FILES}/${project}/files`, {
//         limit: limit,
//         page: page,
//     });
// export const getCadProjectFile = async (project: string, file: string) =>
//     api.get(`${url.GET_CAD_PROJECT_FILE}/${project}/file/${file}`);

// export const getUserGroupInfo = async (uuid: string, group: string) =>
//     api.get(`${url.GET_USER_GROUP_INFO}/${uuid}/group/${group}`);
// export const getUserGroupList = async (
//     uuid: string,
//     limit: number,
//     page: number,
// ) =>
//     api.get(`${url.GET_USER_GROUP_INFO}/${uuid}/group`, {
//         limit: limit,
//         page: page,
//     });
// export const getUserGroupAutoComplete = async (uuid: string, search: string) =>
//     api.get(
//         `${url.GET_USER_GROUP_AUTOCOMPLETE}/${uuid}/autoComplete/group/${search}`,
//     );

// export const createUserGroup = async (uuid: string, groupName: string) =>
//     api.create(`${url.POST_USER_GROUP}/${uuid}/group`, {
//         groupName: groupName,
//     });

// export const editUserGroup = async (
//     uuid: string,
//     groupUuid: string,
//     groupName: string,
// ) =>
//     api.put(`${url.POST_USER_GROUP}/${uuid}/group/${groupUuid}`, {
//         groupName: groupName,
//     });

// export const deleteUserGroup = async (uuid: string, groupList: string[]) =>
//     api.delete(`${url.GET_USER_GROUP_INFO}/${uuid}/group`, {
//         data: {
//             groupUuid: groupList,
//         },
//     });

// export const getUserMemberList = async (
//     uuid: string,
//     limit: number,
//     page: number,
//     search?: string,
// ) =>
//     api.get(`${url.GET_USER_MEMBER_LIST}/${uuid}/member/${search}`, {
//         limit: limit,
//         page: page,
//     });

// export const putUserMemberMoveToGroup = async (
//     uuid: string,
//     targetGroup: string,
//     targetUsers: editGroup[],
// ) =>
//     api.put(`${url.PUT_USER_MEMBER_MOVETO_GROUP}/${uuid}/member`, {
//         targetGroup: targetGroup,
//         targetUsers: targetUsers,
//     });

// export const deleteGroupMember = async (
//     uuid: string,
//     targetGroup: string,
//     targetUsers: editGroup[],
// ) =>
//     api.delete(`${url.DELETE_USER_MEMBER}/${uuid}/member`, {
//         data: {
//             targetGroup: targetGroup,
//             targetUsers: targetUsers,
//         },
//     });

// export const postUserGroupInvite = async (inviteTargets: inviteUser[]) =>
//     api.create(`${url.POST_USER_GROUP_INVITE}`, {
//         inviteTargets: inviteTargets,
//     });
// export const editSentInviteCancel = async (inviteUuid: string[]) =>
//     api.put(`${url.PUT_SENT_INVITE_CANCEL}`, { invitations: inviteUuid });
// export const editReceptionInviteCancel = async (inviteUuid: string[]) =>
//     api.put(`${url.PUT_RECEPTION_INVITE_CANCEL}`, { invitations: inviteUuid });

// export const getUserInviteList = async (
//     limit: number,
//     page: number,
//     type: string,
// ) =>
//     api.get(`${url.GET_USER_INVITE_LIST}`, {
//         limit: limit,
//         page: page,
//         type: type,
//     });
// export const getUserInviteInfo = async (inviteUuid: string) =>
//     api.get(`${url.GET_USER_INVITE_INFO}/${inviteUuid}`);

// export const postInviteCommit = async (inviteUuid: string, action: string) =>
//     api.create(`${url.POST_INVITE_COMMIT}/${inviteUuid}/commit/${action}`);

// export const subscribeState = async () => api.get(`${url.GET_SUBSCRIBE_STATE}`);

// export const postCadProject = async (headers: any, files: any) => api.create(`${url.POST_CAD_PROJECT}`, files, headers)

// export const getRootFiles = async (uuid: string, limit: number, page: number) => api.get(`${url.GET_ROOT_FILES(uuid, limit, page)}`)
// export const getCurrentFiles = async (uuid: string, folder: string, limit: number, page: number) => api.get(`${url.GET_CURRENT_FILES(uuid, folder, limit, page)}`)
// export const getProjectStorage = async (uuid: string) => api.get(`${url.GET_PROJECT_STORAGE(uuid)}`)
// export const getProjectCalculate = async (uuid: string) => api.get(`${url.GET_PROJECT_CALCULATE(uuid)}`)
// export const getChildStorage = async (uuid: string, folderOrFile: string) => api.get(`${url.GET_CHILD_STORAGE(uuid, folderOrFile)}`)
// export const getChildCalculate = async (uuid: string, folderOrFile: string) => api.get(`${url.GET_CHILD_CALCULATE(uuid, folderOrFile)}`)
// export const getUserStorage = async () => api.get(`${url.GET_USER_STORAGE}`)
// export const getUserCalculate = async () => api.get(`${url.GET_USER_CALCULATE}`)
// export const getFolderRoot = async (uuid: string) => api.get(`${url.GET_FOLDER_ROOT(uuid)}`)
// export const getCurrentFolder = async (uuid: string, folder: string) => api.get(`${url.GET_CURRENT_FOLDER(uuid, folder)}`)
// export const createFolder = async (uuid: string, name: string, currentFolder: string | null) => api.create(`${url.POST_CREATE_FOLDER(uuid)}`, { currentDirUuid: currentFolder, folderName: name })