package com.ciyou.edu.entity

/**
 * @Author C.
 * @Date 2018-02-02 15:42
 */
class Admin implements Serializable{
    private static final long serialVersionUID = 1L
    //管理员编号（自增长）
    private Integer adminId
    //管理员用户名
    private String adminName
    //真实姓名
    private String name
    //密码
    private String password
    //联系方式
    private String phone
    //状态 1：正常 2：冻结
    private Integer isAvailable
    //权限
    private List<Permission> permissionList

    Integer getAdminId() {
        return adminId
    }

    void setAdminId(Integer adminId) {
        this.adminId = adminId
    }

    String getAdminName() {
        return adminName
    }

    void setAdminName(String adminName) {
        this.adminName = adminName
    }

    String getPassword() {
        return password
    }

    void setPassword(String password) {
        this.password = password
    }

    Integer getisAvailable() {
        return isAvailable
    }

    void setisAvailable(Integer isAvailable) {
        this.isAvailable = isAvailable
    }

    List<Permission> getPermissionList() {
        return permissionList
    }

    void setPermissionList(List<Permission> permissionList) {
        this.permissionList = permissionList
    }

    String getName() {
        return name
    }

    void setName(String name) {
        this.name = name
    }

    String getPhone() {
        return phone
    }

    void setPhone(String phone) {
        this.phone = phone
    }


    @Override
    public String toString() {
        return "Admin{" +
                "adminId=" + adminId +
                ", adminName='" + adminName + '\'' +
                ", name='" + name + '\'' +
                ", password='" + password + '\'' +
                ", phone='" + phone + '\'' +
                ", isAvailable=" + isAvailable +
                ", permissionList=" + permissionList +
                '}';
    }
}
