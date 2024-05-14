import Cookies from "js-cookie";

class AuthUserHelper {
  getUser() {
    const user = localStorage.getItem("auth_user") ? JSON.parse(localStorage.getItem("auth_user")) : [];
    return user || {};
  }

  getUserId() {
    const user = localStorage.getItem("auth_user") ? JSON.parse(localStorage.getItem("auth_user")) : [];
    return user.id || null;
  }

  getUserName() {
    const user = localStorage.getItem("auth_user") ? JSON.parse(localStorage.getItem("auth_user")) : [];
    return user.username || null;
  }

  getUserFullName() {
    const user = localStorage.getItem("auth_user") ? JSON.parse(localStorage?.getItem("auth_user")) : [];
    // console.log('user', user)
    //return `${user.firstName} ${user.lastName}` || null;
    return `${user.firstName}` || null;
  }

  getDesignation() {
    const user = localStorage.getItem("auth_user") ? JSON.parse(localStorage?.getItem("auth_user")) : [];
    // console.log('user', user?.designation)
    //return `${user.firstName} ${user.lastName}` || null;
    return user?.designation || null;
  }



  getRoles() {
    const roles = localStorage.getItem("auth_roles") ? JSON.parse(localStorage.getItem("auth_roles")) : [];
    return roles || [];
  }

  getRolesID() {
    const rolesID = localStorage.getItem("auth_rolesID")
      ? JSON.parse(localStorage.getItem("auth_rolesID"))
      : [];
    return rolesID || [];
  }
  getRoleID() {
    const roleID = localStorage.getItem("auth_roleID")
      ? JSON.parse(localStorage.getItem("auth_roleID"))
      : null;
    return roleID || null;
  }

  getUserIndexNo() {
    const instituteResponse = JSON.parse(
      localStorage.getItem("auth_user_institute")
    );
    return instituteResponse.indexNumber || null;
  }

  getSearchIndexNo() {
    const searchIndex = localStorage.getItem("searchIndex");
    return searchIndex || null;
  }

  getTidorEid() {
    const tidOrEid = localStorage?.getItem("tid");
    return tidOrEid || null;
  }
  getNid() {
    const nid = localStorage?.getItem("nid");
    return nid || null;
  }
  getEiin() {
    const eiin = localStorage?.getItem("eiin");
    return eiin || null;
  }

  getEmployeeId() {
    const employeeId = localStorage?.getItem("employeeId");
    return employeeId || null;
  }

  getUserInstitute() {
    const instituteResponse = localStorage.getItem("auth_user_institute") ? JSON.parse(
      localStorage.getItem("auth_user_institute")
    ) : [];
    return instituteResponse || "";
  }

  getUserInstituteID() {
    const instituteResponse = localStorage.getItem("auth_user_institute") ? JSON.parse(
      localStorage.getItem("auth_user_institute")
    ) : [];
    return instituteResponse.instituteId || "";
  }
  getUserInstituteTypeID() {
    const instituteResponse = localStorage.getItem("auth_user_institute") ? JSON.parse(
      localStorage.getItem("auth_user_institute")
    ) : [];
    return instituteResponse?.instituteType || "";
  }

  getUserInstituteLevelID() {
    const instituteResponse = localStorage.getItem("auth_user_institute") ? JSON.parse(
      localStorage.getItem("auth_user_institute")
    ) : [];
    return instituteResponse?.instituteLevelId || "";
  }
  getUserInstituteThanaId() {
    const instituteResponse = localStorage.getItem("auth_user_institute") ? JSON.parse(
      localStorage.getItem("auth_user_institute")
    ) : [];
    return instituteResponse.thanaId || "";
  }

  getUserInstituteThanaCode() {
    const instituteResponse = localStorage.getItem("auth_user_institute") ? JSON.parse(
      localStorage.getItem("auth_user_institute")
    ) : [];
    return instituteResponse.thanaCode || "";
  }
  getUserInstituteDistrictId() {
    const instituteResponse = localStorage.getItem("auth_user_institute") ? JSON.parse(
      localStorage.getItem("auth_user_institute")
    ) : [];
    return instituteResponse.districtId || "";
  }

  getUserInstituteDistrictCode() {
    const instituteResponse = localStorage.getItem("auth_user_institute") ? JSON.parse(
      localStorage.getItem("auth_user_institute")
    ) : [];
    return instituteResponse.districtCode || "";
  }

  getZoneId() {
    const instituteResponse = localStorage.getItem("auth_user_institute") ? JSON.parse(
      localStorage.getItem("auth_user_institute")
    ) : [];
    return instituteResponse.zonalId || "";
  }

  isLoggedIn() {
    return Cookies.get("access_token");
  }

  // isLooggedIn() {
  //   return (
  //     Cookies.get("access_token") && Cookies.get("access_token").length > 0
  //   );
  // }

  isExpired() {
    return JSON.parse(localStorage.getItem("expiresIn"));
  }

  saveLoginData(authData) {
    // save token
    let token =
      JSON.parse(JSON.stringify(authData)).accessToken !== undefined
        ? JSON.parse(JSON.stringify(authData)).accessToken
        : "";
    Cookies.set("access_token", token, { expires: 15 });

    // save user
    localStorage.setItem("auth_user", JSON.stringify(authData.user));
    localStorage.setItem("expiresIn", JSON.stringify(authData.expiresIn));

    // save user institute
    localStorage.setItem(
      "auth_user_institute",
      JSON.stringify(authData.instituteResponse)
    );

    console.log(authData, 'auth')

    // save user roles
    let roles = [];
    authData.roles.forEach((item) => {
      roles.push(item.roleName);
    });
    localStorage.setItem("auth_roles", JSON.stringify(roles));

    let rolesID = [];
    authData.roles.forEach((item) => {
      rolesID.push(item.roleId);
    });
    localStorage.setItem("auth_rolesID", JSON.stringify(rolesID));

    let roleID = null;
    authData.roles.forEach((item) => {
      if (item.roleName !== "default-roles-banbeis") roleID = item.roleId;
    });
    localStorage.setItem("auth_roleID", JSON.stringify(roleID));
    localStorage.setItem("searchIndex", null);
    localStorage.setItem("tid", authData?.instituteResponse?.tid);
    localStorage.setItem("nid", authData?.user?.username);
    localStorage.setItem("eiin", authData?.instituteResponse?.eiinNo);
    localStorage.setItem("employeeId", authData?.instituteResponse?.employeeId);
    localStorage.setItem("applicationType", authData?.applicationType);
  }

  removeLoginData() {
    Cookies.set("access_token", "");
    localStorage.setItem("auth_user", "");
    localStorage.setItem("auth_roles", "");
    localStorage.setItem("auth_user_institute", "");
    localStorage.setItem("auth_rolesID", "");
    localStorage.setItem("auth_roleID", "");
    localStorage.setItem("expiresIn", "");
    localStorage.setItem("searchIndex", "");
    localStorage.setItem("tid", "");
    localStorage.setItem("nid", "");
    localStorage.setItem("eiin", "");
    localStorage.setItem("employeeId", "");
  }
}

export const AuthUser = new AuthUserHelper();
