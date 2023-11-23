import React from 'react';
import PageTitle from '../components/PageTitle';
import LoggedInName from '../components/LoggedInName';
import CardUI from '../components/CardUI';
const CardPage = () =>
{
return(
<div>
<h1 id="title">Hi</h1>
<PageTitle />
<LoggedInName />
<CardUI />
</div>
);
}
export default CardPage;