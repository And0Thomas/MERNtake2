import React from 'react';
import PageTitle from '../components/PageTitle';
import Login from '../components/Login';
import emailNode from '../components/emailNode';
const LoginPage = () =>
{
return(
<div>
<h1 id="title">Verification</h1>
<PageTitle />
<Login />
<emailNode />
</div>
);
};
export default LoginPage;