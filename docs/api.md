API
1. [短信验证码](#获取短信验证码)
    * [获取验证码](#获取短信验证码)
    * [校验验证码](#验证短信验证码)
2. [用户管理](#注册)
    * [注册](#注册)
    * [登录](#登录)
    * [重置密码](#重置密码)

## API

> 所有的接口都有以下返回格式：

```
{
    "status": "success" //success or failed
    "data": {           //所有的返回数据都放在data中，如果不需要返回数据，data为空

    }
}
```

---

## 获取短信验证码
**GET** `/v1/sms/code`

**Request**

属性 | 类型 | 是否必填 | 取值范围 | 默认值 | 备注
--- | --- | --- | --- | --- | ---
`phone`|`String`|`是`|||
`type`|`String`|`是`|`registration`, `reset`||短信验证码类型，注册、重置密码等

**Response**

属性 | 类型 | 备注
--- | --- | ---
`code`|`string`|短信验证码

```javascript
{
    "status": "success",
    "data": {
        "code": "123456"
    }
}
```

---

## 验证短信验证码
**POST** `/v1/sms/validate-code`

**Request**

属性 | 类型 | 是否必填 | 取值范围 | 默认值 | 备注
--- | --- | --- | --- | --- | ---
`phone`|`String`|`是`|||
`code`|`String`|`是`|||短信验证码
`type`|`String`|`是`|`registration`, `reset`||短信验证码类型，注册、重置密码等

**Response**

```javascript
{
    "status": "success"
}
```

---

## 注册
**POST** `/v1/user/signup`

**Request**

属性 | 类型 | 是否必填 | 取值范围 | 默认值 | 备注
--- | --- | --- | --- | --- | ---
`phone`|`String`|`是`|||
`password`|`String`|`是`|||

**Response**

```javascript
{
    "status": "success"
}
```

---

## 登录
**POST** `/v1/user/signin`

**Request**

属性 | 类型 | 是否必填 | 取值范围 | 默认值 | 备注
--- | --- | --- | --- | --- | ---
`phone`|`String`|`是`|||
`password`|`String`|`是`|||

**Response**

```javascript
{
    "status": "success"
}
```

---

## 重置密码
**POST** `/v1/user/reset-password`

**Request**

属性 | 类型 | 是否必填 | 取值范围 | 默认值 | 备注
--- | --- | --- | --- | --- | ---
`phone`|`String`|`是`|||
`password`|`String`|`是`|||

**Response**

```javascript
{
    "status": "success"
}
```
