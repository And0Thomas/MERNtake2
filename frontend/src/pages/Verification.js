import React from 'react';
import PageTitle from '../components/PageTitle';
import emailNode from '../components/emailNode';
import LoggedInName from '../components/LoggedInName';
const LoginPage = () =>
{
return(
<div>
<h1 id="title">Verification</h1>
<PageTitle />
<LoggedInName />
<emailNode />
</div>
);
};
export default LoginPage;